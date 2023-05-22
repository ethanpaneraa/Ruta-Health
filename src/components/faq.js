import React from "react";
import Header from "./header";
import Footer from "./footer";
import "../styles/faq.css";

function FAQ(){
    return <div>
        <Header></Header>
    <div className="faq-main">

        {/*Title*/}
        <h1 className="faq_title">
            Frequently Asked Questions
        </h1>
        {/*Questions*/}
        <ul className="faq-list">
            <li className="faq-container">
                <h3 className="question">What is Ruta Health?</h3>
                <div className="answer">
                    <p className="faq-p">
                        Ruta Health is the trusted digital health platform connecting individuals seeking a more efficient 
                        and personal approach to health information, who are tired of sifting through unreliable sources, 
                        directly with licensed doctors for personalized health information. 
                        Unlike scattered internet searches and AI symptom checkers, our async expert-led process ensures accurate, 
                        one-on-one answers to all your health questions. 
                        We aim to make health information accessible and understandable for everyone to be your trusted "doctor friend".

                    </p>
                    <p className="faq-p"> 
                        Ruta Health does not provide medical diagnoses or treatments. 
                        It is not a substitute for professional medical advice, diagnosis, or treatment. 
                        Ruta Health does not have the ability to prescribe medications or provide physical exams. 
                        It does not offer emergency services and should not be used for medical emergencies. 
                        It also does not have the ability to perform laboratory or imaging tests. 
                        The platform is for informational purposes only and does not replace the advice of your healthcare provider.
                    </p>
                </div> 
            </li>

            <li className="faq-container">
                <h3 className="question">Is this private and who can see my posts?</h3>
                <div className="answer">
                    <p className="faq-p">
                    This is a private forum between you and the doctors. 
                    No other user will be able to view your posts or information. 
                    Only licensed doctors in the United States can view your concern and medical history. 
                    </p>
                    <p className="faq-p">
                    We will continue to improve our process and remove as much information that can identify you 
                    without affecting the quality of information you receive.
                    </p>
                </div> 
            </li>

            <li className="faq-container">
                <h3 className="question">Do I need to fill out the medical profile?</h3>
                <div className="answer">
                    <p className="faq-p"> 
                    It is highly highly highly encouraged.
                    </p>
                    <p className="faq-p">
                    Throughout our extensive testing with users and doctors, the medical profile is one of the biggest value add for you. 
                    It is extremely important that this information is available for the doctor's view because it contextualizes 
                    the question and may provide helpful clues to answering your questions. 
                    </p>
                    <p className="faq-p">
                    Having this completed also prevents back and forths that most doctors would want to know 
                    in most scenarios and helps you establish a profile for the 2nd post and any following that.
                    </p>
                </div>
            </li>

            <li className="faq-container">
                <h3 className="question">Can I use Ruta Health for a child, parent, family member, or someone else?</h3>
                <div className="answer">
                    <p className="faq-p">
                        Yes and no.
                    </p>
                    <p className="faq-p">
                    Currently we only support one user profile which establishes your personal medical profile that doctors 
                    refer to when addressing your questions. It is extremely important that this information is available 
                    for the doctor's view because it contextualizes the question and may provide helpful clues to answering 
                    your questions.
                    </p>
                    <p className="faq-p">
                    However, if you wish to use this on behalf of another member, it is best to help them make an account 
                    and create a post. Another way is to create a post and clearly say it is for another person and include 
                    as much information as possible in the post about their question and state of health.
                    </p>
                </div>
            </li>

            <li className="faq-container">
                <h3 className="question">How do I deactivate or delete my Ruta account?</h3>
                <div className="answer">
                    <p className="faq-p">
                    If you'd like to delete your Ruta account, get in touch with us and we'll be happy to assist! 
                    You may also email privacy@Rutahealth.com. 
                    </p>
                    <p className="faq-p">
                    In your request, please provide the following information:
                    </p>
                    <ol>
                        <li className="faq-bullets">
                        Your full name
                        </li>
                        <li className="faq-bullets">
                        Username
                        </li>
                        <li className="faq-bullets">
                        Your email address
                        </li >
                        <li className="faq-bullets">
                        The reason you are contacting us
                        </li>
                    </ol>
                    <p className="faq-p">
                    Once we process your request, we will remove your information from our database. We aim to 
                    process these types of requests within 45 days of receiving a verifiable request, if not sooner. 
                    If we require more than 45 days, we will inform you of the reason and extension period.
                    </p>
                    <p className="faq-p">
                    In some cases, we will not be able to deactivate your account, such as if there is an issue with 
                    your account related to trust, safety, or fraud.
                    </p>
                    <p className="faq-p">
                    When we deactivate your account, we may retain certain information for legitimate business purposes 
                    or to comply with legal or regulatory obligations. For example, we may be obligated to retain your 
                    information as part of an open legal claim. When we retain such information, we do so in ways designed 
                    to prevent its use for other purposes and in compliance with applicable law.
                    </p>
                </div>
            </li>

            <li className="faq-container">
                <h3 className="question">Can I call or do a video call with the doctor if I need to?</h3>
                <div className="answer">
                    <p className="faq-p">
                    Right now, we're all message-based. That's our superpower for providing quick, easy, white-glove experience. 
                    If something needs to be escalated, our provider will give you additional instructions specifying how and 
                    where you can receive in-person care.
                    </p>
                </div>
            </li>

            <li className="faq-container">
                <h3 className="question">What is Ruta Health's refund and cancellation policy?</h3>
                <div className="answer">
                    <p className="faq-p">
                    You may cancel any time by logging in and selecting "Billing." Your cancellation will be granted as of the 
                    date of request, and you will still be able to use your Summer Health account until the end of the period.
                    </p>
                    <p className="faq-p">
                    For refunds, we will review your request and get back to you within 48 hours. If you qualify for a refund, 
                    we will honor your cancellation based on your date of request. Refunds of payment delivered within the billing month.
                    </p>
                </div>
            </li>

            <li className="faq-container">
                <div className="answer">
                    <p className="faq-p">
                    —-
                    </p>
                    <p className="faq-p">
                    The Ruta Services do not replace your relationship with any doctor or other qualified healthcare provider 
                    and may not be appropriate for all medical conditions or concerns. If you think you may be having a medical 
                    emergency, call your doctor or 911 immediately.
                    </p>
                </div>
            </li>


        </ul>
    </div>
    <Footer></Footer>
    </div>
}

export default FAQ;