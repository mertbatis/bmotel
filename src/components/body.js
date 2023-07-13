import React, { Component, useState , ariaValueText } from 'react'
import App from '../App';
import Roundtrip from './roundtrip';
import Travel from './travel';
import Search from './search';
import Comproll from './comproll';
class Body extends Component {
  
    render() {  
        
       
        return (
           
            <div className="container ">
                <br className="hidden-items"/><br/>
                 <div className="row"> <div className="col-xxl-12"><h2 className="body-title-color">Uygun ve Konforlu Otel Fiyatlarını Bul</h2></div></div>
                 <div className="row"> <div className="col-xxl-12"><span className="body-title-color">5 Otel ve daha Fazlası </span></div></div><br/>
                 <div className="row"> <div className="col-xxl-12">
         
               
<Comproll/> 
              
                
             
                </div>
             </div>
                     
                     

            </div>
        )
    }
}
export default Body ;
