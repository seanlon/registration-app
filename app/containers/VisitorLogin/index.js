 
import React from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import messages from './messages';
import Button from 'components/Button';
  
import { createStructuredSelector } from 'reselect';
import {
  selectRowInfo,
} from './selectors'; 
import { addNewRecord } from './actions'; 
 
 
import Img from 'components/Img';
import AgentImgSrc from './dasha.jpg';
import materials from 'components/General/materials.css'; 

export default class VisitorLogin extends React.Component { // eslint-disable-line react/prefer-stateless-function
  
constructor(props) {
    super(props)
    this.state ={ 
        rowInfo:{},
        step:1
    }
}
  openHomePage = ( ) => {
     this.props.changeRoute('/');
  }; 
   
 
    
 handleChange = ( evt ) => {
  
     const keyDesc =  evt.target.name;
     this.state.rowInfo[keyDesc] = evt.target.value    ; 
     this.props.addNewRecord( this.state.rowInfo ) ; 


    // this.props.onChange(Object.assign({}, oldContact, {name: evt.target.value})); 
    // console.log( this.state);
    //  this.state.rowInfo.push({ 
    //        name: evt.value
    //    });
    //    this.setState({ todos: this.state.todos });
  };

  render() {
    return (
   
     <div>
    <form onSubmit={this.props.onSubmitForm}>
        <div className={materials.formgroup}>
            <select name="purpose" onChange={this.handleChange}>
                <option value="INTERVIEW">Interview</option>
                <option value="VISIT">Visitation</option>
                <option value="LOGISTIC">Deliver / Receive Item</option>
                <option value="MAINTENANCE">Maintenance Service </option>
            </select>
            <label htmlFor={"select"} className={materials.controllabel}>
                <FormattedMessage {...messages.purpose} />
            </label><i className={materials.bar}></i>
        </div>
        <div className={materials.formgroup}>
            <input type="text" required="required"  name="name"  onChange={this.handleChange}/>
            <label htmlFor={"input"} className={materials.controllabel} value={name}>
                <FormattedMessage {...messages.name} />
            </label><i className={materials.bar}></i>
        </div>
        <div className={materials.formgroup}>
            <input type="text" required="required" name="identification"  onChange={this.handleChange}/>
            <label htmlFor={"input"} className={materials.controllabel}>
                <FormattedMessage {...messages.userno} />
            </label><i className={materials.bar}></i>
        </div>
        <div className={materials.formgroup}>
            <textarea required="required"  name="summary"  onChange={this.handleChange}></textarea>
            <label htmlFor={"textarea"} className={materials.controllabel}>
                <FormattedMessage {...messages.summary} />
            </label><i className={materials.bar}></i>
        </div>
        <div className={materials.checkbox}>
            <label htmlFor={"checkbox"}>
                <input type="checkbox"   name="tnc"  onChange={this.handleChange}/><i className={materials.helper}></i>
                <FormattedMessage {...messages.tnc} />
            </label>
        </div>
    <Button {...messages.header}  onClick={this.props.onSubmitForm}>
        <FormattedMessage {...messages.submit} />
    </Button>
    </form>
    <div className={materials.middle}>
        <h1>  <FormattedMessage {...messages.agent} /> </h1>
        <Img className={materials.logo} src={AgentImgSrc} alt="agent face" />
        <h3>  <FormattedMessage {...messages.agentcontent} /> </h3>
        <Button handleRoute={this.openHomePage }>
            <FormattedMessage {...messages.ok} />
        </Button>
    </div>
</div>

    );
  }
}
 
 

VisitorLogin.propTypes = {
  changeRoute: React.PropTypes.func,
  onSubmitForm: React.PropTypes.func,
  onChangeField: React.PropTypes.func,
  rowInfo: React.PropTypes.object, 
}; 

 

// react-redux stuff
function mapDispatchToProps(dispatch) {
  return {
    changeRoute: (url) => dispatch(push(url)),
    onSubmitForm: (evt) => {
      if (evt !== undefined && evt.preventDefault) evt.preventDefault(); 

    },
    addNewRecord: (rowInfo) => {   
      dispatch(addNewRecord( ));
    } ,
  };
}
const mapStateToProps = createStructuredSelector({ 
  rowInfo: selectRowInfo() 
});
// Wrap the component to inject dispatch and state into it  

export default connect(null, mapDispatchToProps)(VisitorLogin);

 