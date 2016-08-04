/*
 *  Actions
 *
 * Actions change things in your application
 * Since this boilerplate uses a uni-directional data flow, specifically redux,
 * we have these actions which are the only way your application interacts with
 * your appliction state. This guarantees that your state is up to date and nobody
 * messes it up weirdly somewhere.
 *
 * To add a new Action:
 * 1) Import your constant
 * 2) Add a function like this:
 *    export function yourAction(var) {
 *        return { type: YOUR_ACTION_CONSTANT, var: var }
 *    }
 */

import {
  ADD_NEW_RECORD,UPD_OLD_RECORD
} from './constants';

/**
 * Changes the input field of the form
 *
 *
 * @param  {_obj} _obj The new record of the input field  {purpose,name,identification,summary}
 *
 * @return {object}    An action object with a type of ADD_NEW_RECORD
 */
export function addNewRecord(rowInfo) {
  return {
    type: ADD_NEW_RECORD,
    rowInfo,
  };
}

export function updOldRecord(rowInfo) {
  return {
    type: UPD_OLD_RECORD,
    rowInfo,
  };
}
