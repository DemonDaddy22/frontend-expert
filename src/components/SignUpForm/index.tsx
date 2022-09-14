import React from 'react';
import Button from '../UI/Button';
import FormGroup from '../UI/FormGroup';
import Input from '../UI/Input';
import Label from '../UI/Label';
import classes from './styles.module.scss';

const SignUpForm: React.FC<Props> = () => {
  return (
    <main className={classes.container}>
      <section className={classes.questionContainer}>
        <h2 className={classes.questionTitle}>Sign-Up Form</h2>
        <p className={classes.questionDescription}>
          Implement a sign-up form in HTML with the following six input fields,
          each with an appropriate label:
        </p>
        <ol className={classes.questionPoints}>
          <li className={classes.questionPoint}>
            <strong>Username</strong>, a required text input field
          </li>
          <li className={classes.questionPoint}>
            <strong>Password</strong>, a required password input field
          </li>
          <li className={classes.questionPoint}>
            <strong>Email</strong>, a required email input field
          </li>
          <li className={classes.questionPoint}>
            <strong>Phone Number</strong>, an optional telephone input field
          </li>
          <li className={classes.questionPoint}>
            <strong>Date of Birth</strong>, an optional date-picker input field
          </li>
          <li className={classes.questionPoint}>
            <strong>I agree to the TOS</strong>, a required checkbox input field
          </li>
        </ol>
        <p className={classes.questionDescription}>
          There should also be a <strong>Sign Up</strong> button at the bottom
          of the form. When clicked on (and if required fields have been
          filled), the button should submit the form using default browser
          behaviour.
        </p>
      </section>
      <form className={classes.formContainer}>
        <FormGroup>
          <Label htmlFor="username">Username</Label>
          <Input id="username" type="text" required />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="password">Password</Label>
          <Input id="password" type="password" required />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" required />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="telephone">Phone Number</Label>
          <Input id="telephone" type="tel" />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="dob">Date of Birth</Label>
          <Input id="dob" type="date" />
        </FormGroup>
        <FormGroup className={classes.tosFormGroup}>
          <Label htmlFor="tos">I agree to the TOS</Label>
          <Input id="tos" type="checkbox" name="tos" fullWidth={false} />
        </FormGroup>
        <Button>Sign Up</Button>
      </form>
    </main>
  );
};

export default SignUpForm;
