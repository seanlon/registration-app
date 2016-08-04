/**
 *   selectors
 */

import { createSelector } from 'reselect';


const selectVisitorLogin = () => (state) => state.get('visitorlogin');

const selectRowInfo = () => createSelector(
  selectVisitorLogin(),
  (loginState) => loginState.get('rowInfo')
);

export {
  selectVisitorLogin,
  selectRowInfo,
};
