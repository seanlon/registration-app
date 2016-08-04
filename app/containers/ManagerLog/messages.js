/*
 * Visitor Messages
 *
 * This contains all the text for the Visitor component.
 */
import { defineMessages } from 'react-intl';

 
export default defineMessages({
 
    search: {
    id: 'app.components.dashboard.search',
    defaultMessage: 'Search Anything here...',
  },
  
    fail: {
    id: 'app.components.dashboard.fail',
    defaultMessage: 'No record found', 
  } ,
    title: {
    id: 'app.components.dashboard.title',
    defaultMessage: 'Visitor Log Record',
  },
   purpose: {
    id: 'app.components.dashboard.purpose',
    defaultMessage: 'Purpose',
  },
    name: {
    id: 'app.components.dashboard.name',
    defaultMessage: 'Name', 
  },
    timein: {
    id: 'app.components.dashboard.timein',
    defaultMessage: 'Time Enter',  
  },
    timeout: {
    id: 'app.components.dashboard.timeout',
    defaultMessage: 'Time Leave', 
  },
    duration: {
    id: 'app.components.dashboard.duration',
    defaultMessage: 'Duration', 
  },
    userno: {
    id: 'app.components.dashboard.userno',
    defaultMessage: 'Passport / ID No', 
  },
    summary: {
    id: 'app.components.dashboard.summary',
    defaultMessage: 'Summary', 
  } 
});
