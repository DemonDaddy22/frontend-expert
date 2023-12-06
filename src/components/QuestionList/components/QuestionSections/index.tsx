import React, { useEffect, useState } from 'react';
import classes from './styles.module.scss';
import { questions, submissions } from '../../data';
import { isEmptyObject } from '../../../../utils';
import QuestionSection from '../QuestionSection';
import { QUESTION_LIST_SUBMISSION_STATUS } from '../../../../constants';

// Creating data modifier functions inside the component in order to mimic
// the actual behaviour of data coming from APIs
const QuestionSections: React.FC<Props> = () => {
  const [sections, setSections] = useState<ISections>({});

  useEffect(() => {
    const sectionData: ISections = {};
    questions.forEach(({ id, category, name }) => {
      const submission = submissions.find(({ questionId }) => questionId === id);
      if (submission) {
        const isSubmissionCorrect = submission.status === QUESTION_LIST_SUBMISSION_STATUS.CORRECT;
        const question = {
          id, name, status: submission.status,
        };
        if (category in sectionData) {
          sectionData[category].questions.push(question);
          sectionData[category].correctCount += isSubmissionCorrect ? 1 : 0;
        } else {
          sectionData[category] = {
            questions: [question],
            correctCount: isSubmissionCorrect ? 1 : 0,
          };
        }
      }
    });
    setSections(sectionData);
  }, []);

  return !isEmptyObject(sections) ? (
    <div className={classes.sections}>
      {Object.keys(sections).map((section) => (
        <QuestionSection
          key={section}
          title={section}
          correctCount={sections[section].correctCount}
          questions={sections[section].questions}
        />
      ))}
    </div>
  ) : null;
};

export default QuestionSections;
