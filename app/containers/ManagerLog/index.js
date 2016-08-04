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
import { FormattedMessage } from 'react-intl';
import messages from './messages'; 
import Button from 'components/Button';
import logins from '../../dummy.json';
import Moment from 'moment';
 
import Img from 'components/Img'; 
import materials from 'components/General/materials.css'; 
import tables from 'components/General/responsivelist.css'; 


export default class ManagerDashboard extends React.Component { // eslint-disable-line react/prefer-stateless-function
   constructor(props) {
      super(props)
 
      this.state ={ 
          login:null, 
          logins: logins,
          filter:null
      }
  };
 
 

   handleChange = ( evt ) => { 
    this.state.filter =     evt.target.value    ;   
    this.state.logins = logins;
    this.state.logins =  this.state.logins.filter(login => login.name.toUpperCase().indexOf(this.state.filter.toUpperCase())>-1  
    || login.purpose.toUpperCase().indexOf(this.state.filter.toUpperCase())>-1   || login.identification.toUpperCase().indexOf(this.state.filter.toUpperCase())>-1  || login.summary.toUpperCase().indexOf(this.state.filter.toUpperCase())>-1     );
     
    this.setState(this.state); 
  };

  render() {
 

    return (
   
  <div >
     <h3 className={materials.middle}>
         <FormattedMessage {...messages.title} />
      </h3>
     <div className={materials.formgroup}>
      <input type="text" required="required" onChange={this.handleChange}/>
      <label htmlFor="input" className={materials.controllabel}><FormattedMessage {...messages.search} /></label><i className={materials.bar}></i>
    </div>

     <div>


<div className={tables.tablecore}  aria-labelledby="contacts-caption-text" >
    <span className={tables.caption} id="contacts-caption-text">    </span>
    <div className={tables.thead}>
        <span className={tables.th}  ><FormattedMessage {...messages.name}/> </span>
        <span className={tables.th}  ><FormattedMessage {...messages.identification}/> </span>
        
        <span className={tables.th}  ><FormattedMessage {...messages.purpose}/> </span>
        <span className={tables.th}  ><FormattedMessage {...messages.timein}/> </span>
        <span className={tables.th}  ><FormattedMessage {...messages.timeout}/> </span>
        <span className={tables.th}  ><FormattedMessage {...messages.duration}/> </span>
 
    </div>

 


    <ul className={tables.tbody}>

     {this.state.logins.map(login =>
        <li className={tables.tr}   key = {login.id}  >
            <span className={tables.td}>
              <span className={tables.label}><FormattedMessage {...messages.name}/>  </span>
              <span className={tables.data}    >{login.name}</span>
            </span> 
             <span className={tables.td}>
              <span className={tables.label}><FormattedMessage {...messages.purpose}/>  </span>
              <span className={tables.data}   >{login.purpose}</span>
            </span>
             <span className={tables.td}>
              <span className={tables.label}><FormattedMessage {...messages.timein}/>  </span>
              <span className={tables.data}   >{login.timein} </span>
            </span>
            <span className={tables.td}>
              <span className={tables.label}><FormattedMessage {...messages.timeout}/>  </span>
              <span className={tables.data}   >{login.timeout} </span>
            </span>
            <span className={tables.td}>
              <span className={tables.label}><FormattedMessage {...messages.duration}/> </span>
             <span className={tables.data} >{login.duration} </span>
            </span>
        </li>
       )}
    </ul>

     { this.state.logins.length<1?  (<h3> <br/><br/> <FormattedMessage {...messages.fail} /> <br/> <br/><br/> </h3> ) : ''} 
   <br/> <br/><br/>
</div>

     </div>
  </div>
    );
  }
}

 