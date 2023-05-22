import React from "react";
import image from "../images/Group_1650.svg";
import "../styles/step2.css";

const Step2 = () => {

    return (
            <div className="step2">
                <img  className="step2img" src={image}></img>
                <div className="s2_details">
                    <p>STEP 2</p>
                    <h2 className="create-txt">ASK</h2>
                    <h3 className="test">Start by filling out provided prompts and submit your 
                        query any time any day, whether it's between meetings 
                        or waiting for the Uber</h3>
                </div>
            </div>
    )
}

export default Step2;