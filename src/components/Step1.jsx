import React from "react";
import "../styles/step1.css"; 
import rutaWorksImages from "../images/rutaWorksImages.svg"; 

export default function step1() {
    return(
        <div className="step1">
            <div className="head">
                <p className="ruta-works">How Ruta Works</p>
            </div>
            <div className="container">
                <div className="details">
                    <p>STEP 1</p>
                    <h2 className="create-txt">Create</h2>
                    <h3>Create your profile and include as much information as you 
                        want to help doctors get the best sense of your specific 
                        needs and context</h3>
                </div>
                <img  className="lightpurple2"  src={rutaWorksImages}></img>
            </div>
        </div>
    )

}