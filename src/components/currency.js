import React, { Component } from 'react'
import Navbar from './navbar';

class Currency extends Component {

  
    state = { 
        isVisible  : false
    
    
    }

    onClickEvent = ()=>{

this.setState({
    isVisible : !this.state.isVisible
})

    }

    render() {

        const {isVisible} = this.state;

        return (
            <div>
             <h5 className=" itms-h ">   <a type="button" value="TL"  onClick = {this.onClickEvent}>TL</a></h5>


                {
    isVisible ?
<div className="background-blur">
   <div className="container p-0 currency-menu text-white">
   <span className='badge text-bg-danger f-right'>  <i type="button" className="fas fa-times f-right p-1 " onClick = {this.onClickEvent}></i></span>
       <div className="container p-4">

       <div className=" col-md-12 ">Para Birimini seçin</div>
       </div>
   </div>
   </div>
   
: null
} 

            </div>
        )
    }
}
export default Currency ;