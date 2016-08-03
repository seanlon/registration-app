/**
 * A link to a certain page, an anchor tag
 */

import React, { PropTypes } from 'react';

import styles from './styles.css';

function A(props) {

  let onClickName = props.handleRoute ?   props.handleRoute   : ';' ; 

  return (
    <a
      className={
        props.className || styles.link
      }  
      {...props} 
    />
  );
}

A.propTypes = {
  className: PropTypes.string,
  href: PropTypes.string.isRequired,
  handleRoute: PropTypes.func,  
  target: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default A;
