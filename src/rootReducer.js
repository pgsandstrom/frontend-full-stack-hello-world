import { combineReducers } from 'redux';

import globalReducer from './global/reducer';
import thingReducer from './thing/reducer';

const rootReducer = combineReducers({
  globalReducer,
  thingReducer,
});

export default rootReducer;
