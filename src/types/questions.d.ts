interface IQuizQuestion {
  type: string;
  difficulty: string;
  category: string;
  question: string;
  correct_answer: string;
  incorrect_answers: Array<string>;
}

interface IQuizQuestionProps {
  question: string;
  answers: Array<string>;
  correctAnswer: string;
  difficulty: string;
  category: string;
  attempt?: string;
  onOptionSelect: (selectedOption: string) => void;
}
