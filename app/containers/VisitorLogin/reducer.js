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

// The initial state of the App
// const initialState = fromJS({
//   rowInfo: {purpose:'',name:'',identification:'',summary:''},
// });
const initialLoginState = fromJS(  {purpose:'',name:'',identification:'',summary:''} );
function loginReducer(state = initialLoginState, action) {
 
  switch (action.type) {
    case ADD_NEW_RECORD:  
        action =action.rowInfo; 
        action.rowInfo=null;
        action.id =  Moment().unix();  
        action.completed =  false;  
      // return state.set('rowInfo', action); 
        return action;
       
     case UPD_OLD_RECORD:
      if (state.rowInfo.id !== action.rowInfo.id){
        return state;
      }
      return {
        ...state,
        completed: !state.rowInfo.completed
      };
    default:
      return state;
  }
} 
export default loginReducer;


const initialLoginsState = fromJS( [] );
function loginListReducer(state = initialLoginsState, action) {
 
	switch(action.type){
  	case ADD_NEW_RECORD:
    	return [
      	...state,
        loginReducer(state, action.rowInfo)
      ];
    case UPD_OLD_RECORD:
    	return state.map(t => loginReducer(t, action.rowInfo));
   	default:
      return state;
  }
} 
// export default loginListReducer;

 
const visibilityFilter = (
	state = 'SHOW_ALL',
  	action
 ) => {
 	switch (action.type){
  	case 'SET_VISIBILITY_FILTER':
    	return action.filter;
    default:
    	return state;
  }
};



// {this.props.loginListReducer.map(data.rowInfo =>
//             <p key = {loginReducer.id}
//               onClick={() => {
//                   dispatch({
//                   type: 'UPD_OLD_RECORD',
//                   id: data.rowInfo.id
//                 });
//               }} >
//               {data.rowInfo.text}
//             </p>
//   }