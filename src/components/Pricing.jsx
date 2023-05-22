import React from "react";
import PricingBackground from "../images/pricingBackground.svg"; 
import "../styles/Pricing.css"; 

const Pricing = () => {


    return(
        <div id="Pricing2">
            <div className="background-imgs23">
                <img id="pricing-background" src={PricingBackground} />
            </div>
            <div className="pricing-label"><h1>How much Ruta costs</h1></div>
            <div className="card-container">
                <div className="card-header">
                    <h2>Your personal account and using Ruta is FREE</h2>
                </div>
                <div className="card-header-desc"> 
                    <p className="pricing-desc">Be the first to access doctor led 
                        responses to your health questions 
                        with direct and personable information</p>
                </div>
                <div className="card-body">
                    <div className="card-lst-container">
                        <ul className="card-container-lst">
                            <li>1 account for you</li>
                            <li>Anonymous</li>
                            <li>1:1 communications</li>
                            <li>Unlimited questions</li>
                            <li>Unlimited follow-ups</li>
                            <li>Control over your information</li>
                            <li>Support from the Ruta Team</li>
                        </ul>
                    </div>
                    <div className="card-body-right">
                        <h2>Free!</h2>
                        <a className="pricing-btn" href=""><button>Ask now</button></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Pricing; 