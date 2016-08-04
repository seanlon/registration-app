 

import React from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import logins from '../../dummy.json';
import Moment from 'moment';
import messages from './messages';
import Button from 'components/Button'; 
import materials from 'components/General/materials.css'; 
 
export default class VisitorLogout extends React.Component { 
   constructor(props) {
      super(props)
 
      this.state ={ 
          login:null, 
          logins: logins,
          filter:null
      }
  };
  openHomePage = ( ) => {
       this.state ={ 
          login:null, 
          logins: logins,
          filter:null
      }
     this.setState(this.state); 
     this.props.changeRoute('/');
  };

  submitForm = (evt ) => { 
      if (evt !== undefined && evt.preventDefault) evt.preventDefault();  
      return false;
  }; 
   


   handleChange = ( evt ) => { 
    this.state.filter =     evt.target.value    ;   
    this.state.login = null;
    this.state.login =  this.state.logins.filter(login => login.name.toUpperCase()  ==  this.state.filter.toUpperCase()  || login.identification.toUpperCase()  ==  this.state.filter.toUpperCase() );
    this.state.login =this.state.login ?this.state.login[0] :null;

    this.setState(this.state); 
  };


  render() {

    let  searchPass = ( <h3>  <FormattedMessage {...messages.resultpass} /> </h3> )
    let  searchFail = (<h3>  <FormattedMessage {...messages.resultfail} /> </h3>) 
    let printMessageHtml="";

    let buttonHtml =  this.state.login? (<Button  handleRoute={this.openHomePage }   >
             <FormattedMessage {...messages.ok} />
        </Button>) : '';

    if(this.state.login && this.state.login.id){printMessageHtml = searchPass;}     
    else if(this.state.filter  && !this.state.login   ){printMessageHtml = searchFail;}   

    return ( 
    
      <div>
  

         <form  onSubmit={this.submitForm}>  
         <div className={materials.formgroup}>
          <input type="text" required="required" onChange={this.handleChange}/>
          <label htmlFor="input" className={materials.controllabel}><FormattedMessage {...messages.searchrow} /></label><i className={materials.bar}></i>
        </div>
      </form>

       { printMessageHtml  }  
 
         <h4>   { this.state.login?this.state.login.name  :'' }   </h4>
         <h4>   {this.state.login? this.state.login.summary  :'' }   </h4>
         <h4>   {this.state.login? this.state.login.timein  :'' }   </h4>
         <h4>   {this.state.login? (Moment().format('DD/MM/YYYY HH:mm:ss')) :''  }   </h4>
      
       { buttonHtml  }  
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


 