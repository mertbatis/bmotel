import React, { useState,useEffect } from 'react'
import Currency from './currency'
import flagimage from '../images/turkey-flag-icon.png'
import axios from 'axios'

 export default function Flag() {


 const [gorunmez,setGorunmez] = useState(false);

var sycid= 0;
function swlogo(){
    
 

 setGorunmez(current => !current);
}

   function onClickEvent (){

 setGorunmez(current => !current);

    }

const [ulke , setUlke] = useState();
    useEffect (() => {

axios.get('https://restcountries.com/v3.1/all')
 .then (response => setUlke(response.data));


    }, [] )

        return (

            <div>
<img className="navbar-icon-size  pb-1 " role="button" src={flagimage} onClick = {onClickEvent}></img>

                { gorunmez &&(
<div className="background-blur">
   <div className="container p-0 currency-menu text-white currency-h ">
   <span className='badge text-bg-danger f-right'>   <i type="button" className="fas fa-times f-right p-1" onClick = {onClickEvent}></i> </span> 
       <div className="container p-4 h-100 ">

    <div className='row h-100  overflow-auto '>
       
       {ulke.map(country=>{
        return (

  <div className='col-3'>
   <img role="button"  className='p-1'  onClick={swlogo} src={country.flags.png} width={40}/>
    
     </div>

        );
            
            })}
       
       </div>
       </div>
   </div>
   </div>
   
   )

    }
            </div>
        )
    }
