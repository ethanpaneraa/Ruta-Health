import React from "react";
import "../../styles/slide.css";

export default function Slide({c1, c2, c3}) {
    return (
        <div className="slide">
            <img src={c1} className="card" />
            <img src={c2} className="card" />
            <img src={c3} className="card" />
        </div>
    )
}