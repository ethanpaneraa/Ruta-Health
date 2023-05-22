import React from "react";
import { useState, useEffect } from 'react';
import "../styles/carousel.css";
import Slide from './Carousel_Components/slide';

import c1 from "../images/carousel/Testimonial-1.svg";
import c2 from "../images/carousel/Testimonial-2.svg";
import c3 from "../images/carousel/Testimonial-3.svg";
import c4 from "../images/carousel/Testimonial-4.svg";
import c5 from "../images/carousel/Testimonial-5.svg";
import c6 from "../images/carousel/Testimonial-6.svg";
import c7 from "../images/carousel/Testimonial-7.svg";
import c8 from "../images/carousel/Testimonial-8.svg";

const slideList = [
    <Slide 
        c1={c1}
        c2={c2}
        c3={c3}
    />,
    <Slide 
        c1={c2}
        c2={c3}
        c3={c4}
    />,
    <Slide 
        c1={c3}
        c2={c4}
        c3={c5}
    />,
    <Slide 
        c1={c4}
        c2={c5}
        c3={c6}
    />,
    <Slide 
        c1={c5}
        c2={c6}
        c3={c7}
    />,
    <Slide 
        c1={c7}
        c2={c8}
        c3={c1}
    />,
        <Slide 
        c1={c8}
        c2={c1}
        c3={c2}
    />
]

const mobileSlide = [
    <img src={c1} className="card" />,
    <img src={c2} className="card" />,
    <img src={c3} className="card" />,
    <img src={c4} className="card" />,
    <img src={c5} className="card" />,
    <img src={c6} className="card" />,
    <img src={c7} className="card" />,
    <img src={c8} className="card" />
]

export default function Carousel() {
    const [windowSize, setWindowSize] = useState([
        window.innerWidth,
        window.innerHeight,
    ]);

    useEffect(() => {
        const handleWindowResize = () => {
        setWindowSize([window.innerWidth, window.innerHeight]);
        };

        window.addEventListener('resize', handleWindowResize);

        return () => {
        window.removeEventListener('resize', handleWindowResize);
        };
    }, []);


    const [index, setIndex] = useState(0);

    let top = index == 6;
    let bot = index == 0;

    function handlePrevClick() {
        if (bot) {
            setIndex(6);
        } else {
            setIndex(index - 1);
        }
    }

    function handleNextClick() {
        if (top) {
            setIndex(0);
        } else {
            setIndex(index + 1);
        }
    }

    const [midx, setMidx] = useState(0);

    let mtop = midx == 8;
    let mbot = midx == 0;

    function mobPrevClick() {
        if (bot) {
            setMidx(8);
        }
        else {
            setMidx(midx - 1);
        }
    }

    function mobNextClick() {
        if (top) {
            setMidx(0);
        }
        else {
            setMidx(midx + 1);
        }
    }

    if (windowSize[0] < 514) {
        return (
            <div className="carousel">
                <button className="prev" onClick={handlePrevClick}>
                    &#8249;
                </button>
                {mobileSlide[index]}
                <button className="next" onClick={handleNextClick}>
                    &#8250;
                </button>
            </div>
        )
    } else {
        return (
            <div className="carousel">
                <button className="prev" onClick={handlePrevClick}>
                    &#8249;
                </button>
                {slideList[index]}
                <button className="next" onClick={handleNextClick}>
                    &#8250;
                </button>
            </div>
        )
    }
}