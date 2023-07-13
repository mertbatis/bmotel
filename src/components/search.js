import React, { Component,useState } from 'react'
import { ReactDOM } from 'react-dom/client';
import App from '../App'
import Body from './body'
import '../App.css';
import CounterInput from 'react-bootstrap-counter';
import Travel from './travel.js';
import { ReactDatePickerProps } from 'react-datepicker';


export default function Search(props) {
      


    const [hide,setHide] = useState(false);
    function onClickEvent (){

        setHide(current => !current);
       
           }


           const city = props.city;
           const personid = props.personid;
           const childid = props.childid;
           const returnDate = props.returnDate;
           const departureDate = props.departureDate;



        

        return (
            <div className='h-100 '>

<span type='button' id="srch" className=' text-center  mt-1 rs-img-hidden rounded-pill srch-button ' onClick = {onClickEvent}><p className='mt-4'>Ara</p></span>
{/*biri mobil için*/}<div id="srchh" className="col-md-12 p-3 d-none rs-img-block"> <a className="btn btn-danger w-100" onClick = {onClickEvent}>Ara</a></div>
{
hide &&(

<div className="background-blur">
   <div className="container p-0 search-menu text-white ">
   <span className='badge text-bg-danger f-right'>   <i type="button" className="fas fa-times f-right p-1" onClick = {onClickEvent}></i> </span>
       <div className="container p-4">
 
       <div className=" col-md-12 text-dark">
        <h5><span className='badge bg-danger'>{city} </span>  Bölgesinde<br/>
        <span className='badge bg-danger'>    {departureDate ? departureDate.toLocaleDateString('tr-TR') : ''} / {returnDate ? returnDate.toLocaleDateString('tr-TR') : ''} </span>Tarihleri Arasında 
        <br/>
        <span className='badge bg-danger'>     1 oda {personid} Yetişkin {childid} Çocuk  </span> <br/> İçin En Uygun Oteller :</h5> 
        
        </div>
    <div className='col-md-12 text-center'>

    <iframe src="https://giphy.com/embed/XGU4CyI27f5xBWGJlY" width="60%" height="354" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
        </div>
      
       </div>
   </div>
   </div>
   
)
}               
            </div>
        )
    }
