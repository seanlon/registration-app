import React from 'react';

import messages from './messages';
import A from 'components/A';
import styles from './styles.css';
import { FormattedMessage } from 'react-intl';
import LocaleToggle from 'containers/LocaleToggle';
// import H1 from 'components/H1';
 
function Header() {
  return (
    <header className={styles.header}> 
      <section> 
          <a   className={styles.headerText}  href='/'> 
              <span >  <FormattedMessage {...messages.titleMessage}  /> </span>  <br/> 
              <span  className={styles.headerSubText}>  <FormattedMessage {...messages.subtitleMessage}  /> </span>  
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

export default Header;
