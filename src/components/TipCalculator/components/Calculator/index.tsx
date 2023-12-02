import React, { useReducer } from 'react';
import classes from './styles.module.scss';
import FormGroup from '../../../UI/FormGroup';
import Label from '../../../UI/Label';
import Input from '../../../UI/Input';
import Divider from '../../../UI/Divider';

const ACTION_TYPE = Object.freeze({
  UPDATE_BILL: 'UPDATE_BILL',
  UPDATE_TIP: 'UPDATE_TIP',
  UPDATE_PEOPLE: 'UPDATE_PEOPLE',
});

interface IState {
  bill: number;
  tip: number;
  people: number;
}

interface IAction {
  type: string;
  value: number;
}

const reducer = (state: IState, action: IAction) => {
  const { type, value } = action;

  switch (type) {
    case ACTION_TYPE.UPDATE_BILL:
      return {
        ...state,
        bill: value,
      };
    case ACTION_TYPE.UPDATE_TIP:
      return {
        ...state,
        tip: value,
      };
    case ACTION_TYPE.UPDATE_PEOPLE:
      return {
        ...state,
        people: value,
      };
    default:
      return state;
  }
};

const Calculator: React.FC<Props> = () => {
  const [state, dispatch] = useReducer(reducer, {
    bill: 50,
    tip: 18,
    people: 1,
  });

  return (
    <section className={classes.container}>
      <FormGroup>
        <Label htmlFor='bill'>Bill</Label>
        <Input
          id='bill'
          type='number'
          value={state.bill}
          min={0}
          onChange={(e) => dispatch({ type: ACTION_TYPE.UPDATE_BILL, value: Number(e.currentTarget.value || 0) })}
        />
      </FormGroup>
      <FormGroup>
        <Label htmlFor='tip'>Tip Percentage</Label>
        <Input
          id='tip'
          type='number'
          value={state.tip}
          min={0}
          onChange={(e) => dispatch({ type: ACTION_TYPE.UPDATE_TIP, value: Number(e.currentTarget.value || 0) })}
        />
      </FormGroup>
      <FormGroup>
        <Label htmlFor='people'>Number of People</Label>
        <Input
          id='people'
          type='number'
          value={state.people}
          min={1}
          onChange={(e) => dispatch({ type: ACTION_TYPE.UPDATE_PEOPLE, value: Number(e.currentTarget.value || 1) })}
        />
      </FormGroup>
      <Divider className={classes.divider} />
      <div className={classes.totalContainer}>
        <p className={classes.total}>
          Total tip: <strong>${(state.bill * state.tip * 0.01).toFixed(2)}</strong>
        </p>
        <p className={classes.total}>
          Tip per person: <strong>${((state.bill * state.tip * 0.01) / state.people).toFixed(2)}</strong>
        </p>
      </div>
    </section>
  );
};

export default Calculator;
