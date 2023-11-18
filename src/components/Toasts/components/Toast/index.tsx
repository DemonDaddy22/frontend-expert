import React, { useMemo } from 'react';
import classes from './styles.module.scss';
import IconButton from '../../../UI/IconButton';
import Close from '../../../Icons/Close';

const Toast: React.FC<IToastProps> = ({ toast, onRemove }) => {

  const toastTypeClass = useMemo(() => {
    switch (toast.state) {
      case 'success':
        return classes.toastSuccess;
      case 'error':
        return classes.toastError;
      default:
        return '';
    }
  }, [toast.state]);

  return (
    <div className={`${classes.toast} ${toastTypeClass}`}>
      <p className={classes.message}>{toast.message}</p>
      {toast.isCancelable ? (
        <IconButton onClick={() => onRemove(toast.id)} className={classes.iconButton} size={24}>
          <Close />
        </IconButton>
      ) : null}
    </div>
  );
};

export default Toast;
