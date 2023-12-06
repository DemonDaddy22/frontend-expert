interface IQuestion {
  name: string;
  id: string;
  status: string | null;
}

interface ISection {
  correctCount: number;
  questions: Array<IQuestion>;
}

interface ISections {
  [key: string]: ISection;
}
