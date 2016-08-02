/*
 * visitor
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a neccessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';
import messages from './messages'; 
import Button from 'components/Button';
 
export default class ManagerLog extends React.Component { // eslint-disable-line react/prefer-stateless-function

  

  render() {
    return (
   
      <p>
        <Button {...messages.header} isAlternate={true}   href={'/manager/dashboard'} >
             <FormattedMessage {...messages.dashboard} />
        </Button>
        <Button {...messages.header} isAlternate={true}  href={'/manager/log'} > 
             <FormattedMessage {...messages.log} />
        </Button>

         <FormattedMessage {...messages.header} />
      </p>
    );
  }
}

 