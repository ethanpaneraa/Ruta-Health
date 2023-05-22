import React from "react";
import "../styles/step0.css"; 
import step0_dialogue from "../images/step0_dialogue.svg";
import step0_humans from "../images/step0_humans.svg"
import step0image1 from "../images/step0image1.svg"
import step0image2 from "../images/step0image2.svg"
import step0image3 from "../images/step0image3.svg"
// import step0_asknow from "../images/step0_asknow.svg"
export default function step0() {
    return (
        <div className="Step-0">
            <div className="step-0container">
                <div className="step0details">
                    <h2 className="weconnect-txt">We connect you anonymously to our doctor friends who help answer your health questions.</h2>
                    <h3 className="body-text">Ask questions about health that you're concerned about and get answers from doctors to reduce anxiety, educate, and make better health decisions.</h3>
                    <li className="step0-btn">
                        <a className="step0-purple-oval" href="https://www.rutahealth.com/users/new">
                            <div className="step0-txt">Join Now</div>
                        </a>
                    </li>
                </div>
                {/* <img  className="dialogue"  src={step0_dialogue} /> */}
                <div className="spacer">
                    <div className="background-images">
                        <img  className="dialogue"  src={step0_dialogue} />
                    </div>
                </div>
            </div>
            <div className="image-row">
                    <div className="img-col">
                        <img className="img-img" src={step0image1} alt="step 0 image"/>
                        <div className="img-details">
                            <h2>Safe and Secure</h2>
                            <h3 className="body-text">All information is stored on secure servers and conversations kept private between you and the doctor for your peace of mind</h3>
                        </div>
                    </div>
                    <div className="img-col">
                        <img className="img-img" src={step0image2} alt="step 0 image"/>
                        <div className="img-details">
                            <h2>Accredited Doctors</h2>
                            <h3 className="body-text">All our doctors are our friends and hand-picked, and accredited by leading medical institutions</h3>
                        </div>
                    </div>
                    <div className="img-col">
                        <img className="img-img" src={step0image3} alt="step 0 image"/>
                        <div className="img-details">
                            <h2>High Quality Responses</h2>
                            <h3 className="body-text">Responses are evaluated and interactions are routinely audited by doctors to ensure credibility and satisfaction</h3>
                        </div>
                    </div>
                </div>
            {/* <div className="container">
                <div className="background-images">
                    <img  className="humans"  src={step0_humans}></img>
                </div>    
            </div> */}
            {/* <div className="information-card">
            </div> */}
        </div>
    )
}