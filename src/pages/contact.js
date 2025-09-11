import React, { useState, useRef } from 'react';
import { IoIosSend } from "react-icons/io";
import { FaRegHandshake } from "react-icons/fa";
import emailjs from '@emailjs/browser';
import "../component/style/contact.scss";


const public_url = process.env.REACT_APP_Public_key;
const template_key = process.env.REACT_APP_Template_key;
const service_key = process.env.REACT_APP_Service_key;

export default function Contact() {
    const [contact, setContact] = useState({
        name : "",
        email : "",
        msg : ""
    });

    const [loading, setLoading] = useState(false)
    
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
      setLoading(true)
      emailjs
        .sendForm(`${service_key}`, `${template_key}`, form.current, {
          publicKey: `${public_url}`,
        })
        .then(
          () => {
            console.log('SUCCESS!');
          },
          (error) => {
            console.log('FAILED ', error.text);
          },
        ).finally(()=> setLoading(false));
        setContact({ name : "", email : "", msg : "" });
    };
    const contactFtn = (e)=>{
        setContact({...contact, [e.target.name] : e.target.value})
    }
  return (
    <div className='contact'>
        <div className='contactContainer'>
            <div className='hello'>
                <h1>Hello!!! </h1>
                <h4><span>Let's Discuss</span><FaRegHandshake color='blue' size={30}/></h4>
            </div>
            <form className='mainContact' ref={form} onSubmit={(e)=>sendEmail(e)}>
                <div className='contactElement'>
                    <label>Name</label>
                    <input type='text' placeholder='e.g Mr Peter' 
                           value={contact.name} 
                           onChange={(e)=>contactFtn(e)}
                           name='name'
                    />
                </div>
                <div className='contactElement'>
                    <label>Email</label>
                    <input type='email' placeholder='e.g peter@...' 
                           value={contact.email} 
                           onChange={(e)=>contactFtn(e)}
                           name='email'
                    />
                </div>
                <div className='contactElement'>
                    <label>Message</label>
                    <textarea type='text' placeholder='e.g I have a project that i would like to...' 
                           value={contact.msg} 
                           onChange={(e)=>contactFtn(e)}
                           name='msg'
                    />
                </div>
                <button>
                    {
                        loading ? "sending" : <> <span>Send</span><IoIosSend/></>
                    }
                </button>
            </form>
        </div>
    </div>
  );
}
