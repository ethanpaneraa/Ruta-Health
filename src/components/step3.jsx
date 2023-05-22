import React from "react";
import "../styles/step3.css";
import S3text from './S3_Components/s3text';
import S3card from './S3_Components/s3card';
import gold from "../images/step3/s3_gold.svg"
import blob from "../images/step3/s3_blob.svg"

export default function Step3() {
    return (
        <div className="step3">
            <div className="background_imgs">
                <img src={gold} id="gold_img"/>
                <img src={blob} id="blob_img"/>
            </div>
            <div className="content">
                <S3text />
                <div className="s3-spacer"></div>
                <S3card />
            </div>
        </div>
    );
}