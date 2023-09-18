import React from 'react';
import './styles/main.css';
import Home from './Home';
import About from './About';
import Packs from './Packs';
import Services from './Services';
import CustomersTells from './CustomersTells';
import Venues from './Venues';
import ContactUs from './ContactUs';

export default function Main(props) {
  const showPage=()=>{
    var page = props.page;
    if(page===0){
      return <Home/>
    }
    if(page===1){
      return <About/>
    }
    if(page===2){
      return <Packs/>
    }
    if(page===3){
      return <Services/>
    }
    if(page===4){
      return <CustomersTells/>
    }
    if(page===5){
      return <Venues/>
    }
    if(page===6){
      return <ContactUs/>
    }
  }
  return (
    <div
    // style={{height:'900px'}}
    >
      {showPage()}
    </div>
  )
}
