import React from "react";
import "../styles/footer.css";
import flogo from "../images/footer_logo.svg";
import ycom from "../images/footer_ycom.svg";
import linkedin from "../images/footer_linkedin.svg";
import facebook from "../images/footer_facebook.svg";
import instagram from "../images/footer_instagram.svg"
import twitter from "../images/footer_twitter.svg"


function Footer(){
    return (
        <nav className="footer">
                <ul className="nav-footer-ul">
                    <li className="nav-footer-logo">
                        <a href="/main">
                            <img src={flogo} className="footer-logo"></img>
                        </a>
                    </li>
                    <li className="nav-ycom-btn" id="nav-ycom">
                        <a href="/">
                        <img src={ycom} className="ycom"></img>
                        </a>
                    </li>
                    <li className="nav-footer-btn" id="nav-faq">
                        <a className="nav-footer-txt" id="faq-text" href="/faq">FAQs</a>
                    </li>
                    <li className="nav-footer-btn" id="nav-privacy">
                        <a className="nav-footer-txt" id="faq-text" href="/privacy">Privacy Policy</a>
                    </li>
                    <li className="nav-footer-btn" id="nav-terms">
                        <a className="nav-footer-txt" id="terms-text" href="/terms">Terms of Use</a>
                    </li>
                    <li className="nav-footer-btn" id="nav-contact">
                    <a className="nav-footer-txt" id="terms-text" href="/contact">Contact Us</a>
                    </li>
                    <li>
                        <div className="social-div">
                            <ul className="socials-nav-ul">
                                <li className="socials" id="nav-linkedin">
                                    <a href="https://www.linkedin.com/company/rutahealth/" target="_blank">
                                        <img src={linkedin} id="linkedin"></img>
                                    </a>
                                </li>
                                <li className="socials" id="nav-facebook">
                                    <a href="https://www.facebook.com/people/Ruta-Health/100090567214123/" target="_blank">
                                        <img src={facebook} id="facebook"></img>
                                    </a>
                                </li>
                                <li className="socials" id="nav-instagram">
                                    <a href="https://www.instagram.com/rutahealth/" target="_blank">
                                        <img src={instagram} id="instagram"></img>
                                    </a>
                                </li>
                                <li className="socials" id="nav-twitter">
                                    <a href="https://twitter.com/RutaHealth" target="_blank">
                                        <img src={twitter} id="twitter"></img>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </li>
                </ul>
                <ul className="footer-bottom-text-ul">
                    <li className="bottom-txt" id="copyright">
                        <p>© Ruta Health, Inc. 2023</p>
                    </li>
                    <li className="bottom-txt" id="disclaimer">
                        <p>The content available on rutahealth.com is not a substitute for professional medical advice, diagnosis, or treatment.</p>
                    </li>
                    
                </ul>
        </nav>
    );
}

export default Footer;