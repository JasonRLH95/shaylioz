import React from 'react';
import './styles/navbar.css';
import {images} from '../constants';

export default function Navbar(props) {
  const socialBtns = [
    {
      name:"instagram",
      image:images.instagram,
      link:"https://www.instagram.com/merav_chen02/",
    },
    {
      name:"whatsapp",
      image:images.whatsapp,
    },
    {
      name:"facebook",
      image:images.facebook,
      link:"https://www.facebook.com/"
    },
    {
      name:"mail",
      image:images.mail,
    }
  ]
  const navbarBtnsList = [
    "דף הבית",
    "אודות",
    "החבילות שלנו",
    "השירותים שלנו",
    "לקוחות מספרים",
    "אולמות אירועים",
    "צור קשר"
  ]
  return (
    <div id='navbarMainDiv'>
      <div id='socialMedia'>
        {socialBtns.map((val)=>{
          if(val.name==='instagram'){
            return (
              <a href={`${val.link}`} target='_blank' rel="noreferrer" className='socialBtns' key={val.name}>
                <img style={{width:'65px'}} id='socialBtnsImg' src={`${val.image}`} alt='social-logo'></img>
              </a>
            )
          }
          else{
            return (
              <a href={`${val.link}`} target='_blank' rel="noreferrer" className='socialBtns' key={val.name}>
                <img id='socialBtnsImg' src={`${val.image}`} alt='social-logo'></img>
              </a>
            )
          }
        })}
      </div>
      <div id='navBtnsDiv'>
        {navbarBtnsList.map((val,inx)=>{
          return(
            <button key={val} className='navBtn' onClick={()=>{
              props.setPage(inx)
            }}>{val}</button>
          )
        })}
      </div>
      <div id='navLogoDiv'><img id='navLogo' src={images.logo} alt='logo'></img></div>
    </div>
  )
}
