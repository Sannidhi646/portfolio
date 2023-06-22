import "./Formstyle.css"
import React from 'react';
import {useRef} from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, Toastify } from 'react-toastify';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Form = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_6eyptpo', 'template_s4n9jwj', form.current, 'i43WM6pc6wSiCp6Xq')
      .then((result) => {
          // console.log(result.text);
          // alert("working")
          toast.success("Thank you for responding we will get back to you soon"
          ,{position:"top-center"});
          document.getElementById("myForm").reset();
      }, (error) => {
        alert("not working")
          console.log(error.text);
      });
  };
  return (
    <div className="form">
      {/*   */}
        <form  ref={form} onSubmit={sendEmail} id='myForm'>
            <label>Your Name</label>
            <input type="text" name="user_name"></input>
            <label>Email</label>
            <input type="email" name="user_email"></input>
            <label>Subject</label>
            <input type="text" name="subject"></input>
            <label>Message</label>
            <textarea rows="6" placeholder="Type your message" name="message"/>
            <button className="btn" type="submit" value="Send">Submit</button>
            <ToastContainer />
        </form>
      
    </div>
  )
}

export default Form
