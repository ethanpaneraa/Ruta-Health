import React from "react";
import "../../styles/s3profile.css";

export default function S3profile({pfp, name, job, date, spec}) {
    return (
        <div className="s3profile">
            <div className="s3-left">
                <img className="pfp" src={pfp} alt="pfp" />
                <p className="name">{name}</p>
                <p className="job">{job}</p>
            </div>
            <div className="right">
                <p className="start">Started on</p>
                <p className="date">{date}</p>
                <div className="spec-btn">
                    <p className="spec-txt">{spec}</p>
                </div>
                <div className="open-btn">
                    <p className="open-txt">Open Post</p>
                </div>
            </div>
        </div>
    );
}