type ToastStateType = 'success' | 'error';

interface IToast {
  id: number;
  message: string;
  duration: number;
  isCancelable: boolean;
  state: ToastStateType;
  timeoutId?: NodeJS.Timeout;
}

interface IToastProps {
  toast: IToast;
  onRemove: (id: number) => void;
}

interface IToastCreatorProps {
  addToast: (toast: IToast) => void;
  clearToasts: () => void;
}
