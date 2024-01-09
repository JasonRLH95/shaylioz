import React from 'react';
import '../functions/test.css'

export default function Test() {
    
    window.addEventListener('scroll', () => {
        const navbar = document.getElementById('navbar11');
        if(navbar!== null){
            if (window.scrollY > 100) {
                // console.log("+100");
                // console.log(navbar)
                navbar.removeAttribute("class","navbar");
                navbar.setAttribute("class","squeezed");
            } 
            else if(window.scrollY <= 100) {
                if(navbar.hasAttribute("class")){
                    // console.log("-100");
                    // console.log(navbar)
                    navbar.removeAttribute("class","squeezed");
                    navbar.setAttribute("class","navbar");
                }
            }
            // return console.log('not null')
        }
        // else if(navbar===null){return console.log('null')}
    });

  return (
    <div id='navbar11' className='navbar'>
        <div className="logo">Logo</div>
                    <div id='X'></div>
    </div>
  )
}
