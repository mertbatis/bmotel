import React, { Component,useState } from 'react'
import App from '../App'
import Body from './body';
import Search from './search';
import Travel from './travel';

export default function Srcinput() {
      
   
    const [city, setCity] = useState('');

    const handleChange = (event) => {
       
        setCity(event.target.value);
      };
  
      return (

        <div className="col-xxl-4  p-0 border-end border-3 border-dark pill-border pill-border-bottom "><i class="fas fa-bed fa-lg p-4 "></i> 
   
<input  onChange={handleChange}  className="border border-0 h-100 pill-input" type="text" placeholder="Gitmek istediğiniz yer ?"  />

  
             
            </div>
      )
    
}
