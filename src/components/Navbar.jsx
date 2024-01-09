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
    "החבילות שלנו",
    "השירותים שלנו",
    "אולמות אירועים",
    "לקוחות מספרים",
    "אודות",
    "צור קשר"
  ]


  window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbarMainDiv');
    const btnsDiv = document.getElementById("navBtnsDiv");
    const btns = document.querySelectorAll("button");
    const logo = document.getElementById("navLogo");
    // let i =0;
    if(navbar!== null){
        if (window.scrollY > 300) {
            // navbar.removeAttribute("class","navbarMainDiv");
            // navbar.setAttribute("class","squeezed");
            logo.removeAttribute("class","navLogo");
            logo.setAttribute("class","navLogoSqueezed");
            btnsDiv.removeAttribute("class","navBtnsDiv");
            btnsDiv.setAttribute("class","navBtnsDivSqueezed");
            for(let i = 0;i<btns.length;i++){
              btns[i].removeAttribute("class","navBtn")
              btns[i].setAttribute("class","navBtnSqueezed")
            }
          } 
        else if(window.scrollY <= 300) {
            if(navbar.hasAttribute("class")){
              // navbar.removeAttribute("class","squeezed");
              // navbar.setAttribute("class","navbarMainDiv");
              logo.removeAttribute("class","navLogoSqueezed");
              logo.setAttribute("class","navLogo");
              btnsDiv.removeAttribute("class","navBtnsDivSqueezed");
              btnsDiv.setAttribute("class","navBtnsDiv");
                for(let i = 0;i<btns.length;i++){
                  btns[i].removeAttribute("class","navBtnSqueezed")
                  btns[i].setAttribute("class","navBtn")
                }
            }
        }
        // return console.log('not null')
    }
    // console.log(window.scrollY)
    // else if(navbar===null){return console.log('null')}
});
  
  return (
    <div id='navbarMainDiv' className='navbarMainDiv'>
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
      <div id='navBtnsDiv' className='navBtnsDiv'>
        {navbarBtnsList.map((val,inx)=>{
          return(
            <button key={val} className='navBtn' onClick={()=>{
              props.setPage(inx)
            }}>{val}</button>
          )
        })}
      </div>
      <div id='navLogoDiv'><img id='navLogo' className='navLogo' src={images.logo} alt='logo'></img></div>
    </div>
  )
}
