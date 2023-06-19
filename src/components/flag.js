import React, { Component } from 'react'
import Currency from './currency'
import flagimage from '../images/turkey-flag-icon.png'
 class Flag extends Component {

    state = { 
        isVisible  : false
    
    
    }

    onClickEvent = (e)=>{

this.setState({
    isVisible : !this.state.isVisible
})

    }

    render() {
        const {isVisible} = this.state;

        return (

            <div>
<img className="navbar-icon-size  pb-1 " role="button" src={flagimage} onClick = {this.onClickEvent}></img>

                {
    isVisible ?
<div className="background-blur">
   <div className="container p-0 currency-menu text-white">
   <span className='badge text-bg-danger f-right'>   <i type="button" className="fas fa-times f-right p-1" onClick = {this.onClickEvent}></i> </span> 
       <div className="container p-4">

       <div className=" col-md-12 ">Dil Seçin</div>
       </div>
   </div>
   </div>
   
: null
} 

            </div>
        )
    }
}

export default Flag ;