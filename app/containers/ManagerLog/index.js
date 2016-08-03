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
 
import Img from 'components/Img'; 
import materials from 'components/General/materials.css'; 
import tables from 'components/General/responsivelist.css'; 


export default class ManagerDashboard extends React.Component { // eslint-disable-line react/prefer-stateless-function

 

  render() {
    return (
   
  <div >
     <h1 className={materials.middle}>
         <FormattedMessage {...messages.title} />
      </h1>
     <div className={materials.formgroup}>
      <input type="text" required="required"/>
      <label htmlFor="input" className={materials.controllabel}><FormattedMessage {...messages.name} /></label><i className={materials.bar}></i>
    </div>

     <div>

<div className={tables.tablecore}  aria-labelledby="contacts-caption-text">
    <span className={tables.caption} id="contacts-caption-text">Responsive contact list</span>
    <div className={tables.thead}>
        <span className={tables.th}  ><FormattedMessage {...messages.name}/> </span>
        <span className={tables.th}  ><FormattedMessage {...messages.purpose}/> </span>
        <span className={tables.th}  ><FormattedMessage {...messages.timein}/> </span>
        <span className={tables.th}  ><FormattedMessage {...messages.timeout}/> </span>
        <span className={tables.th}  ><FormattedMessage {...messages.duration}/> </span>
 
    </div>
    <ul className={tables.tbody}>
        <li className={tables.tr}    >
            <span className={tables.td}>
              <span className={tables.label}><FormattedMessage {...messages.name}/>  </span>
              <span className={tables.data}    >Ola Nordmann</span>
            </span> 
             <span className={tables.td}>
              <span className={tables.label}><FormattedMessage {...messages.purpose}/>  </span>
              <span className={tables.data}   >Interview</span>
            </span>
             <span className={tables.td}>
              <span className={tables.label}><FormattedMessage {...messages.timein}/>  </span>
              <span className={tables.data}   >12:23 9-May-2016 </span>
            </span>
            <span className={tables.td}>
              <span className={tables.label}><FormattedMessage {...messages.timeout}/>  </span>
              <span className={tables.data}   >13:23 9-May-2016 </span>
            </span>
            <span className={tables.td}>
              <span className={tables.label}><FormattedMessage {...messages.duration}/> </span>
             <span className={tables.data} >  8 hours </span>
            </span>
        </li>
        
    </ul>
</div>

     </div>
  </div>
    );
  }
}

 