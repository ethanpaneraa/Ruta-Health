import React from "react";
import Header from '../components/header';
import Footer from "./footer";
import Step3 from '../components/step3';
import Step1 from '../components/Step1';
import Pricing from '../components/Pricing';
import Carousel from '../components/carousel';
import Step0 from '../components/step0';
import Step2 from "./step2";
import Subscribe from '../components/subscribe';
import "../styles/main_landing.css";


export default function main_landing() {
    return (
        <div className="main">
            <Header></Header>
            <Step0></Step0>
            <div id = "step1">
                <Step1></Step1>
            </div>
            <Step2 />
            <Step3></Step3>
            <div id = "pricing">
                <Pricing ></Pricing>
            </div>
            <Carousel></Carousel>
            <Subscribe></Subscribe>
            <Footer></Footer>
        </div>
    );
}