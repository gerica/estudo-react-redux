import { combineReducers } from 'redux';
import { fromJS } from 'immutable';

import { DATA_AVAILABLE } from '../actions/actions'; //Import the actions types constant we defined in our actions

// const initialState = fromJS({
//   loading: false,
//   data: null,
// });

// const dataReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case DATA_AVAILABLE:
//       console.log('está no reducer');
//       console.log(state);
//       return state.set('data', action.data);
//     default:
//       return state;
//   }
// };

const dataState = { data: null, loading: true };

const dataReducer = (state = dataState, action) => {
  switch (action.type) {
    case DATA_AVAILABLE:
      console.log('está no reducer');
      state = Object.assign({}, state, { data: action.data, loading: false });
      return state;
    default:
      return state;
  }
};

export default dataReducer;
