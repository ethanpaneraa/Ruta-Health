import React from "react";
import Header from "./header";
import Footer from "./footer";
import { useState, useEffect } from 'react';
import "../styles/contact_us.css";
import "../styles/header.css";

function Contact(){
    return <div className="contact-main">
            <Header></Header>

        {/*Title*/}
        <div className = "contact-us-content">
            <h1 className="contact-title">
                Contact Us
            </h1>

            {/* Subtitle */}
            <div className = 'subtitle'>
                <p>
                    We would love to hear from you! If you have any questions, comments, and/or would like to share feedback 
                    with us, please fill out the form below and we will get back to you ASAP!
                </p>
            </div>

            <div className = "form-container">
                <form>
                    <fieldset className = 'form-group'>
                        <legend align = "left" className = 'form-title'>Name</legend>
                        <input type = "text" className="form-input" />  
                    </fieldset>

                    <fieldset className = 'form-group'>
                        <legend align = "left" className = 'form-title'>Email</legend> 
                            <input 
                                type = "text" className="form-input" />
                    </fieldset>
                    <fieldset className = 'form-group'>
                        <legend align = "left" className = 'form-title'>Subject</legend> 
                            <input 
                                type = "text" className="form-input" />
                    </fieldset>
                    <fieldset className = 'form-group'>
                        <legend align = "left" className = 'form-title'>Message</legend> 
                        <textarea className="form-input"/>
                    </fieldset>
                </form>
                
                <div>
                    <button className = 'submit-btn'>
                        <a className="purple-oval-submit" href = "/">
                                <div id="submit-text">Submit</div>
                        </a>
                    </button>
                </div>
            </div>
            <Footer />
        </div>
        
        </div>

}

export default Contact;