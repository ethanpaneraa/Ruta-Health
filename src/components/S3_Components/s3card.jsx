import React from "react";
import "../../styles/s3card.css";
import S3profile from './s3profile';
import pfp1 from "../../images/step3/pfp1.svg"
import pfp2 from "../../images/step3/pfp2.svg"
import pfp3 from "../../images/step3/pfp3.svg"

export default function S3card() {
    return (
        <div className="s3card">
            <S3profile 
                pfp={pfp1}
                name={"Joet S. Bagga, MD"}
                job={"Internal Medicine"}
                date={"2022-07-12"}
                spec={"General"}
            />
            <div className="divide"></div>
            <S3profile 
                pfp={pfp2}
                name={"Ann Pongsakul, MD"}
                job={"Family Medicine"}
                date={"2022-08-12"}
                spec={"Derm"}
            />
            <div className="divide"></div>
            <S3profile 
                pfp={pfp3}
                name={"Bharani Pusukur, DO"}
                job={"Internal Medicine"}
                date={"2022-08-24"}
                spec={"Mental Health"}
            />
        </div>
    )
}