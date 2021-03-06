/*
 
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. We prefix them with 'yourproject/YourComponent' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 *
 * Follow this format:
 * export const YOUR_ACTION_CONSTANT = 'project/YourContainer/YOUR_ACTION_CONSTANT';
 */

export const ADD_NEW_RECORD = 'registration-app/VisitorLogin/ADD_NEW_RECORD';
export const UPD_OLD_RECORD = 'registration-app/VisitorLogin/UPD_OLD_RECORD';
