 
import React from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import messages from './messages';
import Button from 'components/Button';
 
import Img from 'components/Img';
import AgentImgSrc from './dasha.jpg';
import materials from 'components/General/materials.css'; 

export default class VisitorLogin extends React.Component { // eslint-disable-line react/prefer-stateless-function
  openHomePage = ( ) => {
     this.props.changeRoute('/');
  };
 

  render() {
    return (
   
     <div>
    <form>
        <div className={materials.formgroup}>
            <select>
                <option>Interview</option>
                <option>Visitation</option>
                <option>Deliver / Receive Item</option>
                <option>Maintenance Service </option>
            </select>
            <label htmlFor={"select"} className={materials.controllabel}>
                <FormattedMessage {...messages.purpose} />
            </label><i className={materials.bar}></i>
        </div>
        <div className={materials.formgroup}>
            <input type="text" required="required" />
            <label htmlFor={"input"} className={materials.controllabel}>
                <FormattedMessage {...messages.name} />
            </label><i className={materials.bar}></i>
        </div>
        <div className={materials.formgroup}>
            <input type="text" required="required" />
            <label htmlFor={"input"} className={materials.controllabel}>
                <FormattedMessage {...messages.userno} />
            </label><i className={materials.bar}></i>
        </div>
        <div className={materials.formgroup}>
            <textarea required="required"></textarea>
            <label htmlFor={"textarea"} className={materials.controllabel}>
                <FormattedMessage {...messages.summary} />
            </label><i className={materials.bar}></i>
        </div>
        <div className={materials.checkbox}>
            <label htmlFor={"checkbox"}>
                <input type="checkbox" /><i className={materials.helper}></i>
                <FormattedMessage {...messages.tnc} />
            </label>
        </div>
    </form>
    <Button {...messages.header} handleRoute={this.openHomePage }>
        <FormattedMessage {...messages.submit} />
    </Button>
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
}; 

// react-redux stuff
function mapDispatchToProps(dispatch) {
  return {
    changeRoute: (url) => dispatch(push(url)),
  };
}

// Wrap the component to inject dispatch and state into it
export default connect(null, mapDispatchToProps)(VisitorLogin);


 