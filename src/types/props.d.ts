interface Props {
  children?: React.ReactNode;
}

interface LabelProps
  extends React.DetailedHTMLProps<
    React.LabelHTMLAttributes<HTMLLabelElement>,
    HTMLLabelElement
  > {}

interface InputProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
    fullWidth?: boolean;
  }

interface ButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {}

interface FormGroupProps {
  style?: React.CSSProperties;
  className?: string;
  children: React.ReactNode;
}

interface ProjectPageProps extends Props {
  background?: string;
  pageStyle?: React.CSSProperties;
  pageClassName?: string;
  containerStyle?: React.CSSProperties;
  containerClassName?: string;
}

interface QuestionDetailsProps extends Props {
  title: string;
  containerStyle?: React.CSSProperties;
  containerClassName?: string;
  titleStyle?: React.CSSProperties;
  titleClassName?: string;
  descriptionStyle?: React.CSSProperties;
  descriptionClassName?: string;
}

interface ColourBlockProps {
  colour: string;
  className?: string;
  style?: React.CSSProperties;
}

interface NotificationCardProps {
  imgSrc: string;
  name: string;
  description: string;
  time: string;
}

interface DividerProps {
  isVertical?: boolean;
  className?: string;
  style?: React.CSSProperties;
}
