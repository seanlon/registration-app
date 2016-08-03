/**
 *
 * App.react.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a neccessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react'; 
import Helmet from 'react-helmet';
import styles from './styles.css';
  
import TreeImage from './tree.png';
// import Footer from 'components/Footer';
import Header from 'components/Header';
import LoadingIndicator from 'components/LoadingIndicator';
 
export default class App extends React.Component { // eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    children: React.PropTypes.node,
  };
 
  render() {
    return ( 
 
      <div className={styles.container} style={{background: 'center no-repeat fixed url(' +TreeImage +')'}}> 
       <Helmet
        titleTemplate="%s - Registration App ReactJs"
        defaultTitle="Registration App ReactJs"
        meta={[
          { name: 'description', content: ' Registration App ReactJs' },
        ]}
      />
 
        <Header/> 
        {this.props.children}
      </div>
    );
  }
}
