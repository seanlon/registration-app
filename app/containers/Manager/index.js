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
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import messages from './messages'; 
import Button from 'components/Button';




export default  class Manager extends React.Component { // eslint-disable-line react/prefer-stateless-function

  openLogPage = ( ) => {
     this.props.changeRoute('/manager/log');
  };

  openDashboardPage = ( ) => {
     this.props.changeRoute('/manager/dashboard');
  };

  render() {
    return (
   
      <div>
        <Button {...messages.header} handleRoute={this.openDashboardPage }     >
             <FormattedMessage {...messages.dashboard} />
        </Button>
        <Button {...messages.header} isAlternate={true} handleRoute={this.openLogPage }   > 
             <FormattedMessage {...messages.log} />
        </Button>

         <FormattedMessage {...messages.header} />
      </div>
    );
  }
}

 


Manager.propTypes = {
  changeRoute: React.PropTypes.func,
};

// react-redux stuff
function mapDispatchToProps(dispatch) {
  return {
    changeRoute: (url) => dispatch(push(url)),
  };
}

// Wrap the component to inject dispatch and state into it
export default connect(null, mapDispatchToProps)(Manager);


 