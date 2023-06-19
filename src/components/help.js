import React, { Component } from 'react'
import Nvbitems from './Nvbitems'
import App from '../App'

export default class Helpp extends Component {
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
        <a type="button" onClick={this.onClickEvent} value="Yardım"><h6>Yardım</h6></a>


    {isVisible ? 
    
    <div className="background-blur">
    <div className="container p-0 help-menu text-white">
    <span className='badge text-bg-danger f-right'>  <i type="button" className="fas fa-times f-right p-1 " onClick ={this.onClickEvent}></i></span>
        <div className="container p-4 text-center">
        
    
 <section class="mb-2 p-1">
 
   
     <h2 class="h1-responsive font-weight-bold text-center my-4 ">İletişim</h2>
    
     <p class="text-center w-responsive mx-auto mb-5 hidden-items">Bir sorunuz mu var ? Lütfen doğrudan bizimle iletişime geçmekten çekinmeyin
 . Ekibimiz Gün içerisinde size geri dönecektir.</p>
 
     <div class="row">
 
       
         <div class="col-md-9 mb-md-0 mb-5">
             <form id="contact-form" name="contact-form" action="mailto:support@bmotel.com" method="POST">
 
              <div class="row">
       <div class="col-md-6">
                         <div class="md-form mb-3">
                             <input type="text" id="name" name="name" class="form-control" placeholder='Adınız'/>
                            
                         </div>
                     </div>
                  <div class="col-md-6">
                         <div class="md-form mb-3">
                             <input type="text" id="email" name="email" placeholder='Mail Adresiniz' class="form-control"/>
                         </div>
                     </div>
                 </div>
               <div class="row">
                     <div class="col-md-12">
                         <div class="md-form mb-3">
                             <input type="text" id="subject" name="subject" placeholder='Konu' class="form-control"/>
                           
                         </div>
                     </div>
                 </div>
                  <div class="row">
      <div class="col-md-12">
         <div class="md-form mb-3">
     <textarea placeholder='Mesaj' type="text" id="message" name="message" rows="2" class="form-control md-textarea"></textarea>
  
           </div>
 
        </div>
                 </div>
             </form>
   <div class="text-center text-md-left">
                 <a class="btn btn-danger" onclick={document.getElementById('contact-form')}>Gönder</a>
             </div>
             <div class="status"></div>
         </div>
      
         <div class="col-md-3 text-center">
             <ul class="list-unstyled mb-0">
                 <li><i class="fas fa-map-marker-alt fa-2x "></i><span className='itms-h p-1'>istanbul / Türkiye</span>
                     <p className='hidden-items'>istanbul / Türkiye</p>
                 </li>
 
                 <li><i class="fas fa-phone mt-4 fa-2x "></i><span  className='itms-h p-1'> +90 511 111 11 11</span>
                     <p className='hidden-items'>+90 511 111 11 11</p>
                 </li>
 
                 <li><i class="fas fa-envelope mt-4 fa-2x "></i><span  className='itms-h p-1'> contact@bmotel.com</span>
                     <p className='hidden-items'>contact@bmotel.com</p>
                 </li>
             </ul>
         </div>
        </div>
 </section>
   <div className=" col-md-12 ">
         </div>
        </div>
    </div>
    </div>    
    
    :null
    }

      </div>
        
    )
  }
}
