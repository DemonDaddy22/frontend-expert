import React, { useCallback, useState } from 'react';
import { debounce } from 'lodash';
import classes from './styles.module.scss';
import ProjectPage from '../ProjectPage';
import QuestionDetails from '../QuestionDetails';
import CodeBlock from '../UI/CodeBlock';
import { sampleCode, sampleResponse } from './codeBlocks';
import { RAPID_MOVIESDB_HOST } from '../../constants';
import { isEmptyObject, isEmptyString } from '../../utils';
import Menu from '../UI/Menu';
import Input from '../UI/Input';
import Divider from '../UI/Divider';

const TypeAhead: React.FC<Props> = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [keyword, setKeyword] = useState('');
  const [results, setResults] = useState<IMenuItem[]>([]);
  const [error, setError] = useState<string | null>(null);

  const fetchTypeAheadData = useCallback(debounce(async (keyword: string) => {
    if (isEmptyString(keyword)) {
      setResults([]);
      return;
    }
    try {
      const response = await fetch(`https://${RAPID_MOVIESDB_HOST}/titles/search/title/${keyword}`, {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY ?? '',
          'X-RapidAPI-Host': RAPID_MOVIESDB_HOST,
        },
      });
      const data = await response.json();
      const results: TypeAheadResponse[] = data?.results ?? [];
      const typeaheadResults = results?.map((item) => ({
        id: item?.id,
        title: item?.titleText?.text,
        data: {
          title: item?.titleText?.text,
          type: item?.titleType?.text,
          releaseDate: item?.releaseDate,
          image: item?.primaryImage?.url,
        },
      })) ?? [];

      setIsMenuOpen(true);
      setResults(typeaheadResults);
      setError(null);
    } catch (err: any) {
      setResults([]);
      setError(err?.message ?? 'Something went wrong!');
    }
  }, 500), []);

  const handleKeywordChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.currentTarget.value;
    setKeyword(value);
    fetchTypeAheadData(value);
  }, [fetchTypeAheadData]);

  const handleItemClick = useCallback((item: IMenuItem) => {
    if (!isEmptyObject(item)) {
      setKeyword(item.title ?? item.data?.title);
    }
  }, []);

  return (
    <ProjectPage>
      <QuestionDetails
        title='Type Ahead'
        titleClassName={classes.questionTitle}
        containerClassName={classes.questionDetails}
        descriptionClassName={classes.questionDescription}>
        <p>
          You're given an API endpoint that returns a list of FrontendExpert glossary terms that start with a given
          string, and you have to use this API to implement a search typeahead. Due to CORS, we cannot access the
          FrontendExpert API here so instead using a free movies API, which can be found{' '}
          <a href='https://rapidapi.com/SAdrian/api/moviesdatabase' target='_blank'>
            here
          </a>
          .
        </p>
        <p>
          For this question, the search typeahead is a special input field (with{' '}
          <span className={classes.questionDescriptionHighlight}>typeahead</span> as its id) that issues API requests
          with the text that a user types into it. More specifically, it issues an API request after the user has
          stopped typing for some time—not while the user is typing—and it displays the results of the API request as
          suggestions for the user.
        </p>
        <p>The provided API expects GET requests at this URL:</p>
        <div className={classes.codeBlock}>
          <p className={classes.output}>https://api.frontendexpert.io/api/fe/glossary-suggestions</p>
        </div>
        <p>
          Each API request should include a <span className={classes.questionDescriptionHighlight}>text</span> query
          parameter. For example, this would be a valid URL to request:
        </p>
        <div className={classes.codeBlock}>
          <p className={classes.output}>https://api.frontendexpert.io/api/fe/glossary-suggestions?text=acc</p>
        </div>
        <p>
          The API responds with a JSON array of strings, each of which is a glossary-term name that starts with the
          passed <span className={classes.questionDescriptionHighlight}>text</span>.
        </p>
        <p>For example, the URL above might respond with:</p>
        <div className={classes.codeWrapper}>
          <CodeBlock codeString={sampleResponse} language='json' />
        </div>
        <p>
          When the user stops typing into the typeahead for 500ms, a request should be made to the API to get
          suggestions for the text that's currently typed into the typeahead input field.
        </p>
        <p>
          Once an API request resolves, the suggestions returned by the API should be displayed on the page, replacing
          any previously displayed suggestions. Each suggestion should be an HTML list item appended to the provided{' '}
          <span className={classes.questionDescriptionHighlight}>#suggestions-list</span>{' '}
          <span className={classes.questionDescriptionHighlight}>ul</span>, and each suggestion should have the relevant
          API-responded glossary-term name as its text content.
        </p>
        <p>For example, if the API request above were to resolve, the suggestions HTML would look like this:</p>
        <div className={classes.codeWrapper}>
          <CodeBlock codeString={sampleCode} language='xml' />
        </div>
        <p>
          If the user clicks on one of the suggestions, its value should be filled into the typeahead, and the displayed
          suggestions should be cleared.
        </p>
        <p>
          If the user clears the typeahead (e.g., backspaces all of the typed text), the displayed suggestions should be
          cleared, and no API request should be made.
        </p>
        <p>
          You should use the global <span className={classes.questionDescriptionHighlight}>fetch()</span> method to make
          requests to the API.
        </p>
      </QuestionDetails>
      <Divider />
      <section className={classes.solutionContainer}>
        <Input
          type='text'
          placeholder='Search for a movie or TV series...'
          className={classes.searchInput}
          value={keyword}
          onChange={handleKeywordChange}
        />
        <Menu
          isOpen={isMenuOpen}
          onClose={() => setIsMenuOpen(false)}
          onItemClick={handleItemClick}
          items={results}
          className={classes.menuContainer}
          defaultTitle={error ?? 'Try searching for something else...'}
        />
      </section>
    </ProjectPage>
  );
};

export default TypeAhead;
