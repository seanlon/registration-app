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
import { LineChart } from 'react-d3';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import messages from './messages'; 
import Button from 'components/Button';
import materials from 'components/General/materials.css'; 
 
export default class ManagerLog extends React.Component { // eslint-disable-line react/prefer-stateless-function

  

  render() {
      let  lineData = [
      {
        name: "series1",
        values: [ { x: 0, y: 20 },   { x: 24, y: 10 } ]
      }, 
        {
          name: "series2",
          values: [ { x: 70, y: 82 },   { x: 76, y: 82 } ]
        }
     
      ];
    return (
   
      <div className={materials.middle}>

            <LineChart
            legend={true}
            data={lineData}
            width={500}
            height={300}
            title="Line Chart"
            />
  
      </div>
    );
  }
}

 