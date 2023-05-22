// THIS FILE IS NO LONGER NEEDED
// I am using it as reference for now for developing something like a template


import React from "react";
import "../styles/faq_template.css";


// argument props is the property of this component
    // props is an object -> js version of dict
    // in our props: [question key: question value, answer key: answer value]
function Template(props){
    return <div className="container">
        <div className="question">
        {props.question}
        </div>
        <div className="answer">
        {props.answer}
        </div>
    </div>
}

// in the higher-level js file you would just do:
//    <Template question = XYZ answer = XYZ>
//    </Template>

export default Template;