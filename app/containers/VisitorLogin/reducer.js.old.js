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
  UPD_OLD_RECORD,
} from './constants';
import Moment from 'moment';
import { fromJS } from 'immutable';
 
 
// export default  visibilityFilter = (
//  state = 'SHOW_ALL',
//    action
//  ) => {
//    switch (action.type){
//    case 'SET_VISIBILITY_FILTER':
//      return action.filter;
//     default:
//      return state;
//   }
// };

const initialLoginState = fromJS( [] );
function  todo  (state =initialLoginState, action)  {
  switch(action.type){
    case 'ADD_NEW_RECORD':
      return { 
        id :  Moment().unix(), 
        name: action.name,
        summary: action.summary, 
        completed: false
      };
    case 'UPD_OLD_RECORD':
      if (state.id !== action.id){
        return state;
      }
      return {
        ...state,
        completed: !state.completed
      };
    default:
      return state;
  }
};

const initialLoginsState = fromJS( [] );
function todos  (state = initialLoginsState, action)   {
  switch(action.type){
    case 'ADD_NEW_RECORD':
      return [
        ...state,
        todo(undefined, action)
      ];
    case 'UPD_OLD_RECORD':
      return state.map(t => todo(t, action));
    default:
      return state;
  }
};


export default todo;
export default todos;