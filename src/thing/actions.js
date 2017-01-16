import { INCREASE, DECREASE } from './constants';

export const makeIncrease = amount => ({
  type: INCREASE,
  payload: {
    amount,
  },
});

export const makeDecrease = amount => ({
  type: DECREASE,
  payload: {
    amount,
  },
});
