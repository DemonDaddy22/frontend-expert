interface IQuizQuestion {
  type: string;
  difficulty: string;
  category: string;
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
}

interface IQuizQuestionProps {
  question: string;
  answers: string[];
  correctAnswer: string;
  difficulty: string;
  category: string;
  attempt?: string;
  onOptionSelect: (selectedOption: string) => void;
}
