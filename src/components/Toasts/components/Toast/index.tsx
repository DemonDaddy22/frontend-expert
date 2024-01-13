import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import classes from './styles.module.scss';
import IconButton from '../../../UI/IconButton';
import Close from '../../../Icons/Close';
import { CONTENT_VARIANTS } from '../../../../constants';

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
    <motion.div variants={CONTENT_VARIANTS} className={`${classes.toast} ${toastTypeClass}`}>
      <p className={classes.message}>{toast.message}</p>
      {toast.isCancelable ? (
        <IconButton
          onClick={() => {
            onRemove(toast.id);
          }}
          className={classes.iconButton}
          size={24}
        >
          <Close />
        </IconButton>
      ) : null}
    </motion.div>
  );
};

export default Toast;
