import React, { Component } from 'react'
import Navbar from './navbar';
import Flag from './flag';
import Currency from './currency';
import Bell from './bell';
import Help from './help';
import proflpht from '../images/ornek-foto.jpg'
class Nvbitems extends Component {
    
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
            

                     <div className="col m-auto">
                <div className="row">
                  <div className=" col-2 m-auto text-center hidden-items text-white hidden-items"><Currency/></div>
              <div className="col-1 m-auto text-center hidden-items "><Flag/></div>
              <div className="col-2 m-auto text-center"><Bell/> </div>
              <div className="col-2 m-auto navbar-text-white hidden-items itms-h" >    <Help/></div>
              <div className="col m-auto">
                <div className="row m-auto">
                 <div className="col m-auto ">
                 <img className="img-fluid border border-primary navbar-profile-size rounded-circle" role="button" src={proflpht}></img>
                  </div>
<div className="col d-none rs-img-block">
<i role="button" class="fas fa-grip-lines"  onClick = {this.onClickEvent} ></i>


{
    isVisible ?
    <div className="background-blur text-center  ">
    <div className="container p-0 currency-menu bg-white text-black">
        <i type="button" className="fas fa-times f-right p-1"  onClick = {this.onClickEvent} > </i>
        <div className="container p-4">
 
        <div className=" col-md-12 ">
            
            <Currency/>
            <hr/>
            <Flag/>
            <hr/>
            <Help/>
        
        </div>

        
        </div>
    </div>
    </div>

    :null }


</div>

                   <div className="col-7 p-0 hidden-items  m-auto">
             <span className="navbar-text-white  navbar-font-size hidden-items">Burak Mert Batiş</span>
              <br/>
             <span className="navbar-font-size text-primary hidden-items ">normal üye</span>
             </div>
              </div>
               </div>
                </div>
                 </div>
           
        )
    }
}

export default Nvbitems;
