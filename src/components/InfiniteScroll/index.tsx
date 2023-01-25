import React, { useCallback, useRef, useState } from 'react';
import { AE_TESTIMONIALS } from '../../constants';
import { PROJECT_COLORS } from '../../constants/theme';
import ProjectPage from '../ProjectPage';
import QuestionDetails from '../QuestionDetails';
import CodeBlock from '../UI/CodeBlock';
import { sampleCode, sampleResponse } from './codeBlocks';
import Testimonial from './components/Testimonial';
import classes from './styles.module.scss';
import useFetchTestimonials from './useFetchTestimonials';

const InfiniteScroll: React.FC<Props> = () => {
  const [page, setPage] = useState<number>(0);

  const { testimonials, hasNext } = useFetchTestimonials(AE_TESTIMONIALS.LIMIT, page);

  const lastTestimonialObserver = useRef<IntersectionObserver>();

  const lastTestimonialRef = useCallback(
    (node: HTMLParagraphElement) => {
      if (lastTestimonialObserver.current) {
        lastTestimonialObserver.current.disconnect();
      }
      lastTestimonialObserver.current = new IntersectionObserver((entries) => {
        if (entries?.[0]?.isIntersecting && hasNext) {
          setPage((prevPage) => prevPage + 1);
        }
      });
      if (node) {
        lastTestimonialObserver.current.observe(node);
      }
    },
    [hasNext]
  );

  return (
    <ProjectPage background={PROJECT_COLORS.PROJECT29.background} containerClassName={classes.pageContainer}>
      <QuestionDetails
        title='Infinite Scroll'
        titleClassName={classes.questionTitle}
        containerClassName={classes.questionDetails}
        descriptionClassName={classes.questionDescription}>
        <p>
          You're given an API endpoint that returns a list of AlgoExpert testimonials (yes, our real testimonials!), and
          you have to fetch and display these testimonials on the page.
        </p>
        <p>The API expects GET requests at this URL:</p>
        <div className={classes.codeBlock}>https://api.frontendexpert.io/api/fe/testimonials</div>
        <p>
          Since there might be a lot of testimonials, you'll have to use the API endpoint's pagination functionality to
          repeatedly fetch a limited number of testimonials at a time. Specifically, the API accepts the following two
          query parameters:
        </p>
        <ul>
          <li>
            <span className={classes.questionDescriptionHighlight}>limit</span> (required): the maximum number of
            testimonials to request.
          </li>
          <li>
            <span className={classes.questionDescriptionHighlight}>after</span> (optional): a string ID used as a cursor
            for pagination. For instance, if the last testimonial you fetched had an ID of{' '}
            <span className={classes.questionDescriptionHighlight}>"55"</span>, adding{' '}
            <span className={classes.questionDescriptionHighlight}>after=55</span> to the URL would fetch testimonials
            starting after the testimonial with ID <span className={classes.questionDescriptionHighlight}>"55"</span>.
          </li>
        </ul>
        <p>For example, this would be a valid URL to request:</p>
        <div className={classes.codeBlock}>https://api.frontendexpert.io/api/fe/testimonials?limit=2&after=55</div>
        <p>
          The API responds with a JSON object containing two keys: a{' '}
          <span className={classes.questionDescriptionHighlight}>"hasNext"</span> boolean, which will be{' '}
          <span className={classes.questionDescriptionHighlight}>false</span> if the response includes the last
          testimonial in the database, and a{' '}
          <span className={classes.questionDescriptionHighlight}>"testimonials"</span> array, which contains testimonial
          objects, each with a string <span className={classes.questionDescriptionHighlight}>"message"</span> and a
          unique string <span className={classes.questionDescriptionHighlight}>"id"</span>, to be used as the{' '}
          <span className={classes.questionDescriptionHighlight}>after</span> query parameter.
        </p>
        <p>For example, the URL above might respond with:</p>
        <div className={classes.codeWrapper}>
          <CodeBlock codeString={sampleResponse} language='json' />
        </div>
        <p>
          This response would indicate that there are more testimonials to be fetched after the testimonial with ID{' '}
          <span className={classes.questionDescriptionHighlight}>"55"</span>, since{' '}
          <span className={classes.questionDescriptionHighlight}>"hasNext"</span> is{' '}
          <span className={classes.questionDescriptionHighlight}>true</span>.
        </p>
        <p>
          You've been given HTML and CSS files to help you display these testimonials on the page. Specifically, the
          HTML file contains an empty{' '}
          <span className={classes.questionDescriptionHighlight}>#testimonial-container</span> div, to which you should
          append the testimonials. Each testimonial should be placed inside a paragraph element with the{' '}
          <span className={classes.questionDescriptionHighlight}>testimonial</span> class, which is defined in the CSS
          file. Once testimonials have been displayed on the page, the HTML should look like this:
        </p>
        <div className={classes.codeWrapper}>
          <CodeBlock codeString={sampleCode} language='html' />
        </div>
        <p>
          Regarding exact functionality, you should fetch 5 testimonials and append them to the testimonial container as
          soon as the page loads. Then, whenever the user scrolls to the bottom of the testimonial container, you should
          fetch another 5 testimonials and append them.
        </p>
        <p>Note that:</p>
        <ul>
          <li>
            Only one API call should be issued at a time; when one call is pending, no other calls should be issued,
            even if the user is scrolling down.
          </li>
          <li>Once all testimonials have been fetched, you should no longer makes calls to the API.</li>
          <li>
            You should use the global <span className={classes.questionDescriptionHighlight}>fetch()</span> method to
            make requests to the API (call <span className={classes.questionDescriptionHighlight}>fetch()</span>{' '}
            directly; don't call <span className={classes.questionDescriptionHighlight}>window.fetch()</span>).
          </li>
          <li>
            You should listen to <span className={classes.questionDescriptionHighlight}>"scroll"</span> events (don't
            use <span className={classes.questionDescriptionHighlight}>IntersectionObserver</span>, because it isn't
            supported in our testing environment).
          </li>
        </ul>
        <p className={classes.note}>
          (Please note - There is a cross origin issue with the actual API. So, in order to implement the functionality, using a dummy
          API to fetch random data.)
        </p>
      </QuestionDetails>
      <section className={classes.solutionContainer}>
        <h2 className={classes.solutionHeader}>Testimonials</h2>
        <main className={classes.testimonialsContainer}>
          {testimonials?.map((testimonial, index) => (
            <Testimonial
              ref={index === testimonials.length - 1 ? lastTestimonialRef : null}
              key={`${testimonial.id}-${index}`}
              id={testimonial.id}
              name={testimonial.name}
            />
          ))}
        </main>
      </section>
    </ProjectPage>
  );
};

export default InfiniteScroll;