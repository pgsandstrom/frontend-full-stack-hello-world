import { INCREASE, DECREASE } from './constants';

const initialState = {
  myCounter: 0,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case INCREASE:
      return { ...state, myCounter: state.myCounter + action.payload.amount };
    case DECREASE:
      return { ...state, myCounter: state.myCounter - action.payload.amount };
    default:
      return state;
  }
};
