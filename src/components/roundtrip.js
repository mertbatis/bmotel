import React, { Component } from 'react'
import Datepicker from './Datepicker'
class Roundtrip extends Component {
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
        
                
                <div className="col-xxl-4 p-0  m-auto  pill-border-bottom"><div className="row m-auto" >
                <div className="col-6 m-auto"><i class="fa fa-calendar p-2 responsive-padding" aria-hidden="true"></i>  
                <strong className="body-title-color h6 p-1 responsive-padding"   > Giriş - Çıkış Tarihi</strong> </div>

                <div className="col-6 m-auto responsive-padding">
                <Datepicker/>
                </div>
                </div>
         </div>
        )
    }
}
 export default Roundtrip;