/* 
 * The reducer takes care of our data. Using actions, we can change our
 * application state.
 * To add a new action, add it to the switch statement in the reducer function
 *
 * Example:
 * case YOUR_ACTION_CONSTANT:
 *   return state.set('yourStateVariable', true);
 */

import {
  ADD_NEW_RECORD,
} from './constants';
import { fromJS } from 'immutable';

// The initial state of the App
// const initialState = fromJS({
//   rowInfo: {purpose:'',name:'',identification:'',summary:''},
// });
const initialState = fromJS(  {purpose:'',name:'',identification:'',summary:''} );
function loginReducer(state = initialState, action) {
 
  switch (action.type) {
    case ADD_NEW_RECORD:
      console.log(action  )
      return state.set('rowInfo', action.rowInfo);
    default:
      return state;
  }
}

export default loginReducer;

 