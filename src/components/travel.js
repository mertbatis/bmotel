import React, { useState } from 'react';
import App from '../App'
import '../App.css';
import { ReactDOM } from 'react-dom/client';
import CounterInput from 'react-bootstrap-counter';
import Search from './search';
import Body from './body';




export default function Travel() {
   
    
   
   

    function change()
{

    if(personid>0){
  
        document.getElementById("cstmrbadge").style.visibility="visible";
        document.getElementById("oda").style.visibility="hidden";
      document.getElementById("syc1").style.pointerEvents="none";
      document.getElementById("syc2").style.pointerEvents="none";
      document.getElementById("syc3").style.pointerEvents="none";
      document.getElementById("syc4").style.pointerEvents="none";
      document.getElementById("srch").style.backgroundColor="rgb(0, 101, 20)";
      document.getElementById("srch").style.pointerEvents="all";
     
    } 
    else if(personid==0 & childid>0){ alert("Lütfen en az 1 yetişkin seçin !");}
    else {
        document.getElementById("syc1").style.pointerEvents="all";
        document.getElementById("syc2").style.pointerEvents="all";
        document.getElementById("syc3").style.pointerEvents="all";
        document.getElementById("syc4").style.pointerEvents="all";
        document.getElementById("cstmrbadge").style.visibility="hidden";
        document.getElementById("oda").style.visibility="visible";
        document.getElementById("srch").style.pointerEvents="none";
        document.getElementById("srch").style.backgroundColor="#351b1d";
    }
}


       var [personid,setPersonid] =useState(0);
        var [childid,setChildid] =useState(0);
        if (personid>5){
            personid = 5  
             }
        else if ( personid<0){
            personid = 0
        }
        if (childid>5){
            childid = 5  
             }
        else if ( childid<0){
            childid = 0
        }



       
    
          
        return (
        <div>
            <div className="position-absolute travel-comp container">
 
     <div className="row p-2 responsive-padding">
    <div className="col-md-12 p-3 responsive-padding">  <i class="far fa-user p-2 responsive-padding rs-img-hidden"></i> <span className="rs-img-hidden"> 1 Oda, {personid} Yetişkin, {childid} Çocuk </span>  </div>
    <div className="col-md-1 p-2 responsive-padding rs-img-hidden "></div><div className="col-md-11 p-2 responsive-padding rs-img-hidden "><strong>1 oda için kişi sayısı :</strong></div>
    <div className="col p-3 responsive-padding"> <div className="row">
    <div className="col-md-4 m-auto text-center"><span>Yetişkin</span></div>
    <div className="col-md-8 m-auto text-center input-mouse-event  ">
      
      <div className='container'>
       
        <button id='syc1'  onClick={()=>{setPersonid(personid-1)}} className='col-3 bg-white downbutton sayac '>-</button>
        <input  className='col-6  text-center' type='text' value={personid}></input>
        <button  id='syc2' onClick={()=>{setPersonid(personid+1)}} className='col-3 bg-white upbutton sayac ' >+</button>
        </div>
      
        </div> 
   
    </div> 
    
    
    </div>
    <div className="col-md-12 hidden-items"></div>
    <div className="col p-3 responsive-padding "> <div className="row">
    <div className="col-md-4 m-auto text-center"><span>Çocuk</span></div>
    <div className="col-md-8 m-auto text-center input-mouse-event ">
   
    <div className='container'>
       <button  id='syc3'   onClick={()=>{setChildid(childid-1)}} className='col-3 bg-white downbutton'  name='-'>-</button>
        <input  className='col-6  text-center' type='text' value={childid} ></input>
        <button  id='syc4' onClick={()=>{setChildid(childid+1)}} className='col-3 bg-white upbutton '  name='+'>+</button>
        </div>
   
   </div>
    </div> 
    </div>
    <div className="col-md-12 p-3  text-center "> 
    <a href='#' id='oda' className="text-decoration-none  " onClick={()=>{ change();}} ><span className="badge rounded-pill text-bg-dark">Oda Ekle </span></a> </div>

    <div id='cstmrbadge'className="col-md-12 p-3 visibler text-center badge rounded-pill pbar-color fs-6">
         {personid} Yetişkin ve {childid} Çocuklu oda  <a href='#' onClick={()=>{setPersonid(personid=0) ;setChildid(childid= 0); change()}}><span className='badge rounded-pill text-bg-danger'>Sil</span></a> </div>
    
    </div>

    </div>
    <span><Search personid={personid} childid={childid}  /></span>
            </div>
            
        )
        
    }

 
