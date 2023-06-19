import React, { Component, useState , ariaValueText } from 'react'
import App from '../App';
import Datepicker from './Datepicker';
import Roundtrip from './roundtrip';
import Travel from './travel';
import Search from './search';
import Srcinput from './srcinput';
class Body extends Component {
  
    render() {  
        
       
        return (
           
            <div className="container ">
                <br className="hidden-items"/><br/>
                 <div className="row"> <div className="col-xxl-12"><h2 className="body-title-color">Uygun ve Konforlu Otel Fiyatlarını Bul</h2></div></div>
                 <div className="row"> <div className="col-xxl-12"><span className="body-title-color">5 Otel ve daha Fazlası </span></div></div><br/>
                 <div className="row"> <div className="col-xxl-12">
             <div className="row border border-3 border-dark rounded-pill pill-comp p-0 bg-white m-auto">
               
<Srcinput/> 
               <Roundtrip/>
                <div className="col-xxl-4 p-0 position-relative border-start border-3 border-dark pill-border  ">
                   <Travel  /> 
               </div>
                 </div>
                </div>
             </div>
                     
                     

            </div>
        )
    }
}
export default Body ;
