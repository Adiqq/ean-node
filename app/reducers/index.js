// @flow
import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';
import counter from './counter';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  counter,
  router,
  form: formReducer
});

export default rootReducer;
