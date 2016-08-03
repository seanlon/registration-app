 

import React from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import messages from './messages';
import Button from 'components/Button'; 
import materials from 'components/General/materials.css'; 
 
export default class VisitorLogout extends React.Component { 
  openHomePage = ( ) => {
     this.props.changeRoute('/');
  };
 
  render() {
    return (
   
    
      <div>
         <form>  
         <div className={materials.formgroup}>
          <input type="text" required="required"/>
          <label htmlFor="input" className={materials.controllabel}><FormattedMessage {...messages.searchrow} /></label><i className={materials.bar}></i>
        </div>
      </form>
      <h1>  <FormattedMessage {...messages.resultpass} /> </h1>
      <h1>  <FormattedMessage {...messages.resultfail} /> </h1>

         <Button  handleRoute={this.openHomePage }  >
             <FormattedMessage {...messages.ok} />
        </Button>
      </div>
    );
  }
}

 
VisitorLogout.propTypes = {
  changeRoute: React.PropTypes.func,
}; 

// react-redux stuff
function mapDispatchToProps(dispatch) {
  return {
    changeRoute: (url) => dispatch(push(url)),
  };
}

// Wrap the component to inject dispatch and state into it
export default connect(null, mapDispatchToProps)(VisitorLogout);


 