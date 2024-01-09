import React from 'react';
import './styles/home.css';
import {images} from '../constants';
import ImageSlider from '../functions/ImageSlider';

export default function Home() {
  // let arr =[images.canopy1, images.canopy2, images.canopy3, images.canopy4, images.canopy5];

  // const homeSwap=()=>{
  //   setInterval(()=>{
  //     i++;
  //     if(i===5){
  //       i=0;
  //       return <img src={arr[i]} alt='canopy'/>
  //     }
  //     else{
  //       return <img src={arr[i]} alt='canopy'/>
  //     }
  //   },2000)
    
  // }


  return (
    <div id='homeMainDiv'>
      <div id='homeSwapImgsDiv'>
        {/* function that swap between images at the background */}
        {/* <img src={images.canopy1}/> */}
        <ImageSlider/>
      </div>
      <div id='homeHeader'>
        <h1 id='homeHeader_h1' dir='rtl'>מירב חן - ניהול והפקת אירועים</h1>
      </div>
      <div id='homeDesc' style={{backgroundImage:`url(${images.bird})`}}>
        <p className='homeDesc_p' dir='rtl'>חתונה היא אירוע מרגש, הגשמת כל המהווים, רצונות, החלומות שלכם</p>
        <p className='homeDesc_p' dir='rtl'>אך יחד עם זאת גם מלחיץ ומאוד יקר. </p>
        <h3 className='homeDesc_h3' dir='rtl'>בשביל זה אני כאן !</h3>
        <p className='homeDesc_p' dir='rtl'>ליווי אישי מהפגישה הראשונה ועד סוף האירוע.</p>
        <p className='homeDesc_p2' dir='rtl'>
          תפקידי להוריד מכם את הלחץ והדאגה
          להוזיל עבורכם את העלויות 
          לדאוג לרווחת האורחים שלכם
          להשרות רוגע וביטחון ביום האירוע
        </p>
        <p className='homeDesc_p' dir='rtl'>המטרה – השקט הנפשי שלכם.</p>
        <h3 className='homeDesc_h3' dir='rtl'>אתם באים על מנת לשמוח, להתרגש וליהנות ביום החשוב ביותר בחייכם.</h3>
        <img id='homeLogo' src={`${images.logo}`} alt='logo'></img>

          
      </div>
    </div>
  )
}
