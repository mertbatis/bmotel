import React, { Component,useState,useRef,useEffect } from 'react'
import App from '../App'
import Body from './body';
import Search from './search';
import Travel from './travel';
import scriptLoader from 'react-async-script-loader';
import PlacesAutocomplete from 'react-places-autocomplete';
import Roundtrip from './roundtrip';

export default function Comproll( ) {
 
    const [city, setCity] = useState('');

     
        const autoCompleteRef = useRef();
        const inputRef = useRef();
        const options = {
         componentRestrictions: { country: "tr" },
         fields: ["geometry", "name","address_components","formatted_address"],
         types: ["geocode"]
        };
        useEffect(() => {
         autoCompleteRef.current = new window.google.maps.places.Autocomplete(
          inputRef.current,
          options,
         );

         autoCompleteRef.current.addListener('place_changed', () => {
          const selectedPlace = autoCompleteRef.current.getPlace();
          if (selectedPlace && selectedPlace.formatted_address) {
            setCity(selectedPlace.formatted_address);
          }
        });


        }, []);



      return (
        <div className="row border border-5 border-dark rounded-pill pill-comp p-0 bg-white m-auto h-100">
        <div className="col-xxl-4  ">
        
         <div className='row m-auto pt-3 pb-3  border-end border-3 border-dark pill-border pill-border-bottom h-100'>
    
      <div className='col-2 p-0 m-auto'>    <i class="fas fa-bed fa-lg  "></i> </div>
      <div className='col-10'>  
<input  ref={inputRef}   onChange={(e) => setCity(e.target.value)} id='adres'  autocomplete="on" className="border border-0 h-100 pill-input w-100" type="text" placeholder="Gitmek istediğiniz yer ?"  />

</div>

</div>  
</div>
<Roundtrip city= {city}/>

</div>
      )   
}
