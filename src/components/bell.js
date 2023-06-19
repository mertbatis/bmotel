import React, { Component } from 'react'
import App from '../App'
 class Bell extends Component {
      
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

<i role="button" class="far fa-bell fa-lg navbar-text-white itms-h" onClick = {this.onClickEvent}></i>
{
isVisible ?

<div className="background-bl">
   <div className="container p-0 bell-menu text-white ">
       <div className="container p-4">

       <div className=" col-md-12 ">Bildirim</div>
       </div>
   </div>
   </div>
   
: null
}               
            </div>
        )
    }
}

export default Bell ;