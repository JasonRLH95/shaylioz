import React from 'react';
import './styles/main.css';
import Home from './Home';
import About from './About';
import Packs from './Packs';
import Services from './Services';
import CustomersTells from './CustomersTells';
import Venues from './Venues';
import ContactUs from './ContactUs';
// import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';

export default function Main(props) {
  // const nav = useNavigate()
  const showPage=()=>{
    var page = props.page;
    if(page===0){
      return <Home/>
    }
    if(page===1){
      return <Packs/>
    }
    if(page===2){
      return <Services/>
    }
    if(page===3){
      return <Venues/>
    }
    if(page===4){
      return <CustomersTells/>
    }
    if(page===5){
      return <About/>
    }
    if(page===6){
      return <ContactUs/>
    }
  }


  // const navi=()=>{
  //   var page =props.page;
  //     if(page = 0){
  //       return nav('/')
  //     }
  // }
  return (
    <div>
      {showPage()}
    </div>



    // <BrowserRouter>
    // ${navi()}
    //   <Routes>
    //     <Route path='/' element={<Home/>}/>
    //     <Route path='/b' element={<Packs/>}/>
    //     <Route path='/c' element={<Services/>}/>
    //     <Route path='/d' element={<Venues/>}/>
    //     <Route path='/e' element={<CustomersTells/>}/>
    //     <Route path='/f' element={<About/>}/>
    //     <Route path='/g' element={<ContactUs/>}/>
    //   </Routes>
    // </BrowserRouter>
  )
}
