import { useState } from "react";
import "./contact.scss"
import emailjs from '@emailjs/browser';

export default function Contact() {

    const[message,setMessage] = useState(false)

    function sendMail(params){
        var templateParams={
            from_name:document.getElementById("email").value,
            message: document.getElementById("message").value,
        };

        emailjs.send('service_moyhqyv', 'template_1cmmfzn', templateParams, 'user_bobgMBehrKeO0tKgt7CPn')
           .then(function(res){
            console.log("Success", res.status);
        })


    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        setMessage(true)
    }
    return (
        <div  className="contact" id="contact">
            <div className="left">
                <img src="images/contacttype.jpg"></img>
            </div>
            <div className="right">
                <h2>Contact</h2>
                <form onSubmit={handleSubmit}>
                    <input id="email" type="text" placeholder="Email"/>
                    <textarea id="message" placeholder="Message"></textarea> 
                    <button onClick={sendMail} type="Submit">Send</button>
                    {message && <span>It's already gone ! I will answer you, thanks.</span>}
                </form>
            </div>

        </div> 
    )
}