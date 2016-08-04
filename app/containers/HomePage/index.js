/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a neccessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';

import { FormattedMessage } from 'react-intl';
import messages from './messages';
import Button from 'components/Button';  
 
export default class HomePage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  
  openVisitorPage = ( ) => {
     this.props.changeRoute('/visitor');
  };

  openManagerPage = ( ) => {
     this.props.changeRoute('/manager');
  };

  render() {
    return (   
  
      <div >
        <Button {...messages.header} handleRoute={this.openVisitorPage }    >
             <FormattedMessage {...messages.visitor} />
        </Button>   
        <Button {...messages.header} handleRoute={this.openManagerPage }   isAlternate={true} > 
             <FormattedMessage {...messages.manager} />
        </Button>

         <FormattedMessage {...messages.header} />
      </div>
 
    );
  }
}
 


HomePage.propTypes = {
  changeRoute: React.PropTypes.func,
};

// react-redux stuff
function mapDispatchToProps(dispatch) {
  return {
    changeRoute: (url) => dispatch(push(url)),
  };
}

// Wrap the component to inject dispatch and state into it
export default connect(null, mapDispatchToProps)(HomePage);


 