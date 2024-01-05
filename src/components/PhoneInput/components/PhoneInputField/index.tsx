import React, { useCallback, useState } from 'react';
import classes from './styles.module.scss';
import Input from '../../../UI/Input';
import { ButtonBlue } from '../../../UI/Button';
import { isEmptyString } from '../../../../utils';

const PHONE_REGEX = Object.freeze({
  ONLY_DIGITS: /^\d+$/,
  NON_DIGIT_CHARS: /[()-\s]/g,
});

const PHONE_NUMBER_LENGTH = 10;

const PhoneInputField: React.FC<Props> = () => {
  const [phone, setPhone] = useState('');

  const handlePhoneInput = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    const value = `${event.currentTarget.value}`.replace(PHONE_REGEX.NON_DIGIT_CHARS, '');
    let phoneToSet = '';
    if (PHONE_REGEX.ONLY_DIGITS.test(value)) {
      switch (value.length) {
        case 1:
        case 2:
        case 3:
          phoneToSet = `(${value}`;
          break;
        case 4:
        case 5:
        case 6:
          phoneToSet = `(${value.slice(0, 3)}) ${value.slice(3)}`;
          break;
        case 7:
        case 8:
        case 9:
        case 10:
          phoneToSet = `(${value.slice(0, 3)}) ${value.slice(3, 6)}-${value.slice(6)}`;
          break;
        default:
          break;
      }
      if (!isEmptyString(phoneToSet)) {
        setPhone(phoneToSet);
      }
    } else {
      setPhone(phoneToSet);
    }
  }, []);

  return (
    <div className={classes.container}>
      <Input type='text' placeholder='(555) 555-5555' value={phone} onChange={handlePhoneInput} />
      <ButtonBlue
        disabled={phone.replace(PHONE_REGEX.NON_DIGIT_CHARS, '').length !== PHONE_NUMBER_LENGTH}
        onClick={() => setPhone('')}>
        Submit
      </ButtonBlue>
    </div>
  );
};

export default PhoneInputField;
