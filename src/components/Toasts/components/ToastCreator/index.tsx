import React, { useCallback, useState } from 'react';
import classes from './styles.module.scss';
import Input from '../../../UI/Input';
import FormGroup from '../../../UI/FormGroup';
import Label from '../../../UI/Label';
import { ButtonBlue, ButtonRed } from '../../../UI/Button';
import { isEmptyString, isValidNumber } from '../../../../utils';

const ToastCreator: React.FC<IToastCreatorProps> = ({ addToast, clearToasts }) => {
  const [message, setMessage] = useState<string>('');
  const [duration, setDuration] = useState<number>(3000);
  const [isCancelable, setIsCancelable] = useState<boolean>(false);
  const [type, setType] = useState<ToastStateType>('success');

  const handleAddToast = useCallback(() => {
    let toastMessage = message;
    if (isEmptyString(toastMessage)) {
      switch (type) {
      case 'success':
        toastMessage = 'Success!';
        break;
      case 'error':
        toastMessage = 'Error.';
        break;
      default:
        break;
      }
    }
    addToast({
      id: Date.now(),
      message: toastMessage,
      duration: !isValidNumber(duration) || duration < 500 ? 500 : duration,
      isCancelable,
      state: type,
    });
  }, [addToast, message, duration, isCancelable, type]);

  return (
    <section className={classes.container}>
      <FormGroup>
        <Label htmlFor='message'>Message</Label>
        <Input
          id='message'
          value={message}
          placeholder='Enter toast message...'
          onChange={(e) => {
            setMessage(e.currentTarget.value);
          }}
          type='text'
        />
      </FormGroup>
      <FormGroup>
        <Label htmlFor='duration'>Duration</Label>
        <Input
          id='duration'
          type='number'
          value={duration}
          onChange={(e) => {
            setDuration(Number(e.currentTarget.value));
          }}
        />
      </FormGroup>
      <div className={classes.typeContainer}>
        <FormGroup className={classes.options}>
          <Label htmlFor='success'>Success</Label>
          <Input
            id='success'
            type='radio'
            onChange={(e) => {
              setType('success');
            }}
            checked={type === 'success'}
            fullWidth={false}
          />
        </FormGroup>
        <FormGroup className={classes.options}>
          <Label htmlFor='error'>Error</Label>
          <Input
            id='error'
            type='radio'
            onChange={(e) => {
              setType('error');
            }}
            checked={type === 'error'}
            fullWidth={false}
          />
        </FormGroup>
      </div>
      <FormGroup className={classes.options}>
        <Label htmlFor='cancelable'>Cancelable</Label>
        <Input
          id='cancelable'
          type='checkbox'
          onChange={(e) => {
            setIsCancelable(e.currentTarget.checked);
          }}
          fullWidth={false}
        />
      </FormGroup>
      <div className={classes.buttonsContainer}>
        <ButtonBlue onClick={handleAddToast}>Add Toast</ButtonBlue>
        <ButtonRed onClick={clearToasts}>Clear Toasts</ButtonRed>
      </div>
    </section>
  );
};

export default ToastCreator;
