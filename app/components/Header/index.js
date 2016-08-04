import React from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';

import messages from './messages';
import A from 'components/A';
import styles from './styles.css';
import Button from 'components/Button';
import { FormattedMessage } from 'react-intl';
import LocaleToggle from 'containers/LocaleToggle';
import animation from 'components/General/animation.css'; 

// import H1 from 'components/H1';
 
function Header(props) {  

  return (
    <header className={styles.header}>   
      <section   onClick={function redirect() {    props.changeRoute('/');    }}  > 
          <a   className={styles.headerText}       >  
              <span >  <FormattedMessage {...messages.titleMessage}  /> </span>  <br/> 
  
              <label  >
                 <span  className={styles.headerSubText}>  <FormattedMessage {...messages.subtitleMessage}  /> </span>  
              </label>
          </a>    
 
      </section> 
      <section> 
          <div className={styles.headerLocale} >  
            <LocaleToggle />
          </div>    
      </section>
  
    </header>
  );
}


Header.propTypes = {
  changeRoute: React.PropTypes.func,
};

// react-redux stuff
function mapDispatchToProps(dispatch) {
  return {
    changeRoute: (url) => dispatch(push(url)),
  };
}

// Wrap the component to inject dispatch and state into it
export default connect(null, mapDispatchToProps)(Header);
 
