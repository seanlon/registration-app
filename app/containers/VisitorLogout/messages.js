/*
 * HomePage Messages
 *
 * This contains all the text for the HomePage component.
 */
import { defineMessages } from 'react-intl';

export default defineMessages({
  header: {
    id: 'app.components.HomePage.visitor.instruction',
    defaultMessage: 'If you are entering the premise, please sign-in. If you are leaving please sign out.',
  },
    login: {
    id: 'app.components.HomePage.login',
    defaultMessage: 'Check in',
  },
  
    logout: {
    id: 'app.components.HomePage.logout',
    defaultMessage: 'Sign Out',
  },
});
