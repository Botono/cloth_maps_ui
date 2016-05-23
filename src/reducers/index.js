// Set up your root reducer here...
import { combineReducers } from 'redux';
import initialState from './initialState';

const defaultReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const rootReducer = combineReducers({
 defaultReducer
});

export default rootReducer;
