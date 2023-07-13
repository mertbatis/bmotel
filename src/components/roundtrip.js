import React, { Component , useState} from 'react';
import DatePickercomp from './Datepickercomp';
import { Fragment } from 'react';
import Travel from './travel';



export default function Roundtrip(props) {
  
   const city =props.city;


        return (         
             <Fragment>
              
                <DatePickercomp city={city}/>
                
        
         
         </Fragment>
      
        )
    }
