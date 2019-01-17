import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import { DATA_AVAILABLE } from '../actions/actions'; //Import the actions types constant we defined in our actions

let dataState = { data: [], loading: true };

const dataReducer = (state = dataState, action) => {
  switch (action.type) {
    case DATA_AVAILABLE:
      state = Object.assign({}, state, { data: action.data, loading: false });
      return state;
    default:
      return state;
  }
};

// Combine all the reducers
const rootReducer = combineReducers({
  dataReducer,
  form: formReducer,
  // ,[ANOTHER REDUCER], [ANOTHER REDUCER] ....
});

export default rootReducer;
