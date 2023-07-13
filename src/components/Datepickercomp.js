import React, { useState, useRef } from 'react';
import { Fragment } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Travel from './travel';
function DatePickercomp(props) {

     const city = props.city
  const today = new Date();
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const maxday = new Date();
  maxday.setDate(maxday.getDate() + 30);
  const [departureDate, setDepartureDate] = useState(null);
  const [returnDate, setReturnDate] = useState(null);
  const returnDateRef = useRef(null);

  const handleDepartureDateChange = (date) => {
    setDepartureDate(date);
    setReturnDate(null); 
    returnDateRef.current.setFocus(); 
  };

  const handleReturnDateChange = (date) => {
    setReturnDate(date);
  };

  return (
<Fragment>
  <div className="col-xxl-4   m-auto responsive-tb-border pill-border-bottom pt-2 pb-2">
    <div className="row m-auto" >
 <div className="col-5 m-auto p-0"><i class="fa fa-calendar  h4 responsive-padding" aria-hidden="true"/> 
   <strong className="body-title-text h6 p-1 responsive-padding "   > Giriş - Çıkış Tarihi</strong> </div>

                <div className="col-7 m-auto responsive-padding">

      <DatePicker
        selected={departureDate}
        onChange={handleDepartureDateChange}
        placeholderText="Gidiş Tarihi"
        minDate={today}
        maxDate={maxday} 
        className='datepickercustom-go'
        
      />
          
      <DatePicker
        selected={returnDate}
        onChange={handleReturnDateChange}
        placeholderText="Dönüş Tarihi"
        minDate={departureDate || tomorrow} 
        maxDate={maxday}
        ref={returnDateRef}
        className='datepickercustom-rtrn'
      />
      {/*   Gidiş Tarihi valuesunu almak için {departureDate ? departureDate.toLocaleDateString('tr-TR') : ''}</p>
      <p>Dönüş Tarihi valuesunu almak için  {returnDate ? returnDate.toLocaleDateString('tr-TR') : ''}</p>    */}
    
       </div>
                </div>
         </div>



         <div className="col-xxl-4 p-0 position-relative border-start border-3 border-dark pill-border  ">

            
<Travel city={city} departureDate={departureDate} returnDate={returnDate} /> 
</div>

         </Fragment>


  );
}

export default DatePickercomp;