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
import logins from '../../dummy.json';
 
export default class ManagerLog extends React.Component { // eslint-disable-line react/prefer-stateless-function
   constructor(props) {
      super(props)
 
      this.state ={  
          logins: logins,
          chartData: [],
          filter:null
      }

  
       // FORMAT   
      //  {
      //   name: "series1",
      //   values: [ { x: 0, y: 20 },   { x: 24, y: 10 } ]
      // }              
                 

    // series is purpose
    // x is which day
    // y is duration
 
    this.state.logins['INTERVIEW']  =this.state.logins.filter(login =>    login.purpose.toUpperCase().indexOf("INTERVIEW".toUpperCase())>-1  ); 
 
     this.state.logins['INTERVIEW'] =  this.state.logins['INTERVIEW'].map(function(obj){ 
       var rObj = {};
       rObj['y'] = obj.day;
       rObj['x'] = obj.hours ;
       return rObj;  
    });


    this.state.logins['VISIT'] = this.state.logins.filter(login =>    login.purpose.toUpperCase().indexOf("VISIT".toUpperCase())>-1  ); 
       this.state.logins['VISIT'] =  this.state.logins['VISIT'].map(function(obj){ 
       var rObj = {};
       rObj['y'] = obj.day;
       rObj['x'] = obj.hours ;
       return rObj;  
    });

    this.state.logins['LOGISTIC']  =this.state.logins.filter(login =>    login.purpose.toUpperCase().indexOf("LOGISTIC".toUpperCase())>-1  ); 
     this.state.logins['LOGISTIC'] =  this.state.logins['LOGISTIC'].map(function(obj){ 
       var rObj = {};
       rObj['y'] = obj.day;
       rObj['x'] = obj.hours ;
       return rObj;  
    });
    this.state.logins['MAINTENANCE'] = this.state.logins.filter(login =>    login.purpose.toUpperCase().indexOf("MAINTENANCE".toUpperCase())>-1  ); 
     this.state.logins['MAINTENANCE'] =  this.state.logins['MAINTENANCE'].map(function(obj){ 
       var rObj = {};
       rObj['y'] = obj.day;
       rObj['x'] = obj.hours ;
       return rObj;  
    });

    this.state.chartData.push({name: "INTERVIEW" , values:this.state.logins['INTERVIEW'] });
    this.state.chartData.push({name: "MAINTENANCE" , values:this.state.logins['MAINTENANCE'] });
    this.state.chartData.push({name: "LOGISTIC" , values:this.state.logins['LOGISTIC'] });
    this.state.chartData.push({name: "VISIT" , values:this.state.logins['VISIT'] }); 
 
  };
 

  render() {

    
      // let  lineData = [
      // {
      //   name: "series1",
      //   values: [ { x: 0, y: 20 },   { x: 24, y: 10 } ]
      // }, 
      //   {
      //     name: "series2",
      //     values: [ { x: 70, y: 82 },   { x: 76, y: 82 } ]
      //   }
     
      // ];
    return (
   <div>
     <h3 className={materials.middle}> 
             <FormattedMessage {...messages.title} />
      </h3>
      <div className={materials.middle}> 
            <LineChart
            data={this.state.chartData}
            width={700}
            height={500}
            title="   "
            />
      
      </div>
      </div>
    );
  }
}

 