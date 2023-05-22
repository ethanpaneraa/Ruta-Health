//import logo from './logo.svg';
import React from "react";
import '../styles/subscribe.css';
import { useState, useEffect } from 'react';

// function Subscribe(){
//   return (
//     <div className="Subscribe">
//       <body className = "App-body1">
//         <p class = "big">
//           Get Important Updates!
//         </p>
//         <p class = "small">
//             We promise no spam - just the good stuff.
//         </p>
//         <p class = "small2">
//           Subscribe for our product releases, health webinars, and quarterly white paper.
//         </p>
//         <div class = "subscribe">
//           <input className = "subscribe-box" placeholder="Enter your email"></input>
//           <button className = "subscribe-button">Subscribe</button>
//         </div>
//       </body>
//     </div>
//   );
// }

function Subscribe() {
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

    if (windowSize[0] < 520) {
      return (
        <div className="mobile-subscribe">
          <p className = "big-mobile">
            Get Important Updates!
          </p>
          <p className = "befr"></p>
          <p className = "small-mobile">
            We promise no spam - just the good stuff.
          </p>
          <p className = "small-mobile">
            Subscribe for our product releases, health 
          </p>
          <p className = "small-mobile">
            webinars, and quarterly white paper.
          </p>
          <p className = "befr2"></p>
          <div className = "mobile-subscribe-1">
            <input className = "mobile-subscribe-box-1" placeholder="Enter your email"></input>
            <button className = "mobile-subscribe-button-1">Subscribe</button>
          </div>
          <p className = "besofr"></p>
        </div>
      )
    } else {
      return (<div className="Subscribe">
        <body className = "App-body1">
          <p class = "big">
            Get Important Updates!
          </p>
          <p class = "small">
              We promise no spam - just the good stuff.
          </p>
          <p class = "small2">
            Subscribe for our product releases, health webinars, and quarterly white paper.
          </p>
          <div class = "subscribe-1">
            <input className = "subscribe-box-1" placeholder="Enter your email"></input>
            <button className = "subscribe-button-1">Subscribe</button>
          </div>
        </body>
      </div>     )
    }

}

export default Subscribe;
