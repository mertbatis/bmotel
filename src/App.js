import logo from './logo.svg';
import React,{useState} from 'react';
import './App.css';
import './components/responsive.css';
import Navbar from './components/navbar';
import Datepicker from './components/Datepicker';
import Body from './components/body';
function App() {

 

  return (
    <div className="App ">

      <Navbar />
   <Body/>
    </div>
  );
}

export default App;
