import React,{useState} from 'react';
import './styles/contactUs.css';

export default function ContactUs() {
  const [name,setName] = useState('');
  const [phone,setPhone] = useState('');
  const [email,setEmail] = useState('');
  const [textArea,setTextarea] = useState('');
  const send =()=>{
    console.log(
      name,
      phone,
      email,
      textArea
    )
  }
  return (
    <div id='contactsMainComponent'>
      <h1 dir='rtl'>תרצה שנחזור אליך עם פרטים?</h1>
      <h3 dir='rtl'>השאר פרטי יצירת קשר</h3>
      <div id='contactsMainDiv'>
        <div id='contactInputsDiv'>
          <div id='contactsInpunts'>
            <input onChange={(e)=>{setName(e.target.value)}} dir='rtl' className='contactsInputs' type='text'/>
            <input onChange={(e)=>{setPhone(e.target.value)}} dir='rtl' className='contactsInputs' type='text'/>
            <input onChange={(e)=>{setEmail(e.target.value)}} dir='rtl' className='contactsInputs' type='email'/>
            <textarea onChange={(e)=>{setTextarea(e.target.value)}} dir='rtl' id='contactsTextarea' maxLength={250}/>
          </div>
          <div id='contactsLabels'>
            <label dir='rtl'>שם מלא: </label>
            <label dir='rtl'>מס' נייד:  </label>
            <label dir='rtl'>אימייל: </label>
            <label dir='rtl'>הערות: </label>
          </div>
        </div>
        <div id='contactsTextareaDiv'>
          <input type='submit' onClick={()=>{send()}}/>
        </div>

      </div>
    </div>
  )
}
