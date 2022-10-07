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