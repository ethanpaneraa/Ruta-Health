import React from "react";
import "../styles/header.css";
import logo from "../images/header_logo.svg";
import linkedin from "../images/linkedin.svg";
import facebook from "../images/fb.svg";
import instagram from "../images/IG-White-Subtract.svg";
import twitter from "../images/Twitter.svg";
import {HashLink} from 'react-router-hash-link';


function Header(){
    const [width, setWidth] = React.useState(window.innerWidth);
    const breakpoint = 514;
    React.useEffect(() => {
        window.addEventListener("resize", () => setWidth(window.innerWidth));
    }, []);

    if (width > breakpoint) {
        return (
            <nav className="header">
                <ul className="nav-ul">
                    <li className="nav-header-logo">
                        <HashLink smooth className="nav-txt" id="pricing-text" to="/main#">
                            <img src={logo} className="logo"></img>
                        </HashLink>
                    </li>
                    <li className="nav-btn" id="nav-how">
                        <HashLink smooth className="nav-txt" id="ruta-works" to="/main#step1">How Ruta Works</HashLink>
                    </li>
                    <li className="nav-btn" id="nav-pricing">
                        <HashLink smooth className="nav-txt" id="pricing-text" to="/main#pricing">Pricing</HashLink>
                    </li>
                    <li className="nav-btn" id="nav-signin">
                        <a className="clear-oval" href="/main">
                            <div className="btn-txt" id="signin-text" >Sign in</div>
                        </a>
                    </li>
                    <li className="nav-btn" id="nav-join">
                        <a className="purple-oval" href="/main">
                            <div className="btn-txt" id="join-text" >Join FREE Early-Access</div>
                        </a>
                    </li>
                </ul>
            </nav>
        );
    } else {
        return (
            <div className="header">
                <HashLink smooth className="nav-txt" id="pricing-text" to="/main#">
                    <img src={logo} className="logo"></img>
                </HashLink>
                <div className="nav">
                    <input type="checkbox" id="active" />
                    <label for="active" class="menu-btn"><span></span></label>
                    <label for="active" class="close"></label> 
                    <div class="wrapper">
                        <div className="left"></div>
                        <div className="right">
                            <ul className="top-ul">
                                <li className="top-li">
                                    <HashLink smooth className="top-a" to="/main#step1">How Ruta Works</HashLink>
                                </li>
                                <li className="top-li">
                                    <HashLink smooth className="top-a" to="/main#pricing">Pricing</HashLink>
                                </li>
                                <li className="top-li">
                                    <a href="/main" className="mob-clear-oval">
                                        <div className="mob-btn-txt">Sign in</div>
                                    </a>
                                </li>
                                <li className="top-li">
                                    <a href="/main" className="mob-prp-oval">
                                        <div className="mob-prp-btn-txt">Join FREE</div>
                                    </a>
                                </li>
                                <li className="top-li" id="faq">
                                    <a href="/faq" className="top-a" >FAQs</a>
                                </li>
                                <li className="top-li">
                                    <a href="/privacy" className="top-a">Privacy Policy</a>
                                </li>
                                <li className="top-li">
                                    <a href="/terms" className="top-a">Terms of Use</a>
                                </li>
                                <li className="top-li">
                                    <a href="/contact" className="top-a">Contact Us</a>
                                </li>
                                <li className="top-li img">
                                    <a href="https://www.linkedin.com/company/rutahealth/" className="top-a">
                                        <img src={linkedin}/>
                                    </a>
                                </li>
                                <li className="top-li img">
                                    <a href="https://www.facebook.com/people/Ruta-Health/100090567214123/" className="top-a">
                                        <img src={facebook}/>
                                    </a>
                                </li>
                                <li className="top-li img">
                                    <a href="https://www.instagram.com/rutahealth/" className="top-a">
                                        <img src={instagram}/>
                                    </a>
                                </li>
                                <li className="top-li img">
                                    <a href="https://twitter.com/RutaHealth" className="top-a">
                                        <img src={twitter}/>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;