interface IQuestion {
  name: string;
  id: string;
  status: string | null;
}

interface ISection {
  correctCount: number;
  questions: IQuestion[];
}

type ISections = Record<string, ISection>;
