import React, { Component,useState,useEffect } from 'react'
import Navbar from './navbar';
import axios from 'axios'





export default function Currency() {


    const [hide,setHide] = useState(false);
    function onClickEvent (){

        setHide(current => !current);
       
           }

           function swlogo(){
                setHide(current => !current);
           }
        
           const [ulke , setUlke] = useState();
           useEffect (() => {
       
       axios.get('https://restcountries.com/v3.1/all')
        .then (response => setUlke(response.data));
       
       
           }, [] )   
           useEffect (() => {
       
            axios.get('https://restcountries.com/v3.1/all')
             .then (response => console.log(response.data));
            
            
                }, [] )   

        return (
            <div>
             <h5 className=" itms-h ">   <a type="button" value="TL"  onClick = {onClickEvent}>TL</a></h5>


                
   { hide &&(
<div className="background-blur">
   <div className="container p-0 currency-menu currency-h text-white">
   <span className='badge text-bg-danger f-right'>  <i type="button" className="fas fa-times f-right p-1 " onClick = {onClickEvent}></i></span>
       <div className="container p-4 h-100">
        <div className='row h-100  overflow-auto '>
       {ulke.map(country=>{
        return (
            <div className='col-2'>
            <a role="button"  className='text-decoration-none currency-text-c'  onClick={swlogo} >{country.cca3}    </a>
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

