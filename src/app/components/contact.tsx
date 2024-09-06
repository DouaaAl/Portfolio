"use client"
import React, { useRef } from 'react'
import Styles from "../styles/contact.module.css"
import emailjs from "@emailjs/browser";

const Contact = () => {

    const form = useRef<any>();

    const sendEmail = (e: any) =>{
        e.preventDefault();
        emailjs.sendForm('service_5r1yaxk','template_9vsuv5i', form?.current || "", 'hF0P0NW5MNjUvI36F').then((result)=>{
            console.log(result.text)
            if (form && form.current){
                form.current.reset();
            }
        }, (error)=>{
            console.log(error.text)
        })
    }


  return (
    <section className={Styles.contact_us}>
        <h1>Contact <span>US</span></h1>
        <form ref={form} onSubmit={sendEmail}>
            <div>
                <label className={Styles.label}>
                    <input name='from_name' type="text" placeholder='FullName...' />
                </label>
                <label className={Styles.label}>
                    <input name='from_email' type="text" placeholder='Email...' />
                </label>
            </div>
            <label className={Styles.label}>
                <input name='from_number' type="text" placeholder='+212 12345678' />
            </label>
            <div  className={Styles.label + ' '+ Styles.textarea_label}>
                <textarea name="message" placeholder='Message...'  id=""></textarea>
            </div>
            <button>Send Message</button>
        </form>
    </section>
  )
}

export default Contact