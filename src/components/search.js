import React, { Component,useState } from 'react'
import { ReactDOM } from 'react-dom/client';
import App from '../App'
import Body from './body'
import '../App.css';
import CounterInput from 'react-bootstrap-counter';
import Travel from './travel.js';

class Search extends Component {
      
    state = { 
        isVisible  : false,
    

    }

    onClickEvent = (e)=>{

        

this.setState({
    isVisible : !this.state.isVisible
})
   }
  

    render() {
        const {personid, childid } = this.props;
        const {isVisible } = this.state;
    
        return (
            <div className='h-100 '>

<span type='button' id="srch" className=' text-center  mt-1 rs-img-hidden rounded-pill ' onClick = {this.onClickEvent}><p className='mt-4'>Ara</p></span>
<div className="col-md-12 p-3 d-none rs-img-block"> <a className="btn btn-danger w-100" onClick = {this.onClickEvent}>Ara</a></div>
{
isVisible ?

<div className="background-blur">
   <div className="container p-0 search-menu text-white ">
   <span className='badge text-bg-danger f-right'>   <i type="button" className="fas fa-times f-right p-1" onClick = {this.onClickEvent}></i> </span>
       <div className="container p-4">
 
       <div className=" col-md-12 text-dark"><span><h5> Aramanız Şu Şekilde : <br/>{} 1 oda {personid} Yetişkin {childid}  Çocuk </h5> </span></div>
    <div className='col-md-12 text-center'>

    <iframe src="https://giphy.com/embed/XGU4CyI27f5xBWGJlY" width="60%" height="354" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
        </div>
      
       </div>
   </div>
   </div>
   
: null
}               
            </div>
        )
    }
}

export default Search ;