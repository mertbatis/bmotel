import React, { Component } from 'react'
import App from '../App';
import Currency from './currency';
import Flag from './flag';
import Nvbitems from './Nvbitems'
import nlogo from '../images/navbar-logo.png'
import nlogors from '../images/navbar-logo-rs.png'
class Navbar extends Component {
    render() {
        return (

            <div>
            <div className="container-fluid navbar-color p-2">
                <div className="container ">
                <div className="row">
             <div className="col-2 m-auto p-0">
                 
             <a href="index.html"><img className="navbar-logo-rs d-none " src={nlogors} /></a>
                 <a href="index.html"><img className="navbar-logo rs-img-hidden" src={nlogo } /></a></div>
            <div className="col"></div>

         <Nvbitems/>

              </div>
              </div>

 </div>

 <div className="container-fluid  navbar-color">
     <div className="container ">
     <div className="row"><div className="col-md-8">
     <div className="row "> 

     <div className="col-2 text-center m-auto "><div role="button" className="navbar-text-white navbar-kinds m-auto navbar-padding"><h6 className="rs-font-sizes">Oteller</h6></div></div>
     <div className="col-3 text-center m-auto "><div role="button" className="navbar-text-white navbar-kinds  m-auto navbar-padding"><h6 className="rs-font-sizes">Daireler</h6></div></div>
     <div className="col-2 text-center m-auto "><div role="button" className="navbar-text-white navbar-kinds  m-auto navbar-padding"><h6 className="rs-font-sizes">Haftalık Odalar</h6></div></div>
     <div className="col-2 text-center m-auto "><div role="button" className="navbar-text-white navbar-kinds m-auto navbar-padding"><h6 className="rs-font-sizes">Ofis Odalar</h6></div></div>
     <div className="col-3 text-center m-auto "><div role="button" className="navbar-text-white navbar-kinds  m-auto navbar-padding"><h6 className="rs-font-sizes">Günlük Odalar 
</h6></div></div>

     </div>

     </div><div className="col-4 hidden-items"></div></div>
     </div>
     </div>

 </div>
        )
    }
}

export default Navbar ;