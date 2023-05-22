import React from "react";
import Header from '../components/header';
import Footer from '../components/footer';
import "../styles/terms_of_use.css";

function Terms_of_Use(){
    return <div>
        <Header></Header>
        <div className="terms-main">
        {/*Header*/}
        

        {/*Title*/}
        <h1 className="terms-title">
            Terms
        </h1>
        {/*Terms of Use*/}
        <ul className="terms-list">
            <li className="terms-container">
                <div className="terms-body">
                    <p>
                    Effective Date: January 25, 2023
                    </p>
                </div>
                <div className="terms-body">
                    <p>
                        At Ruta Health, Inc. (“We,” “us,” or “Ruta”), we are committed to educating and empowering our users. 
                        To do that, we want to make clear any legal obligations and terms and conditions of use that may govern
                        your use of our Services (as defined below). These Terms of Use (or the “Terms”) are an agreement
                        between you and Ruta related to your use of our Services. If you use our Services through your employer, 
                        health plan, health care provider, or another entity or platform that participates in one of Ruta’s 
                        enterprise programs (“Enterprise Programs”), your use of these Services may be subject to additional 
                        terms and conditions set forth between Ruta and that entity or platform.
                    </p>
                </div>
            </li>
            <li className="terms-container">
                <h3 className="terms-numbered-list">1. SCOPE</h3>
                <div className="terms-body">
                    <p className="terms-p">
                    Ruta’s Terms of Use apply to all Ruta platforms and services, including our websites, scheduling services, 
                    applications, mobile applications, product features, and other services enabled by such platforms 
                    (the “Ruta Services” or “Services”). Your use of the Ruta Services is also subject to our Privacy Notice, 
                    as well as all applicable laws and regulations. In these Terms, the term “you” refers to the consumer 
                    using the Ruta Services.
                    </p>
                    <p className="terms-p">
                    Before we dive deeper into these Terms, please be aware of the following:
                    </p>
                    <p className="terms-indent">
                    By using any of our Services, including browsing any Ruta website, you represent that (a) you have read, 
                    understand and agree to be bound by these Terms, (b) that you are of a legal age to form a binding 
                    contract with Ruta, (c) that you reside in the United States, (d) you will answer any questions posed 
                    to you within the Services honestly and to the best of your knowledge, and (e) your use of the Services 
                    is entirely voluntary. If you do not agree to these Terms, please do not use the Ruta Services. Ruta 
                    is not a substitute for and does not provide professional medical advice, diagnosis, or treatment. The 
                    Ruta Services do not replace your relationship with any doctor or other qualified health care provider 
                    and may not be appropriate for all medical conditions or concerns. If you think you may be having a medical
                     emergency, call your doctor or 911 immediately.
                    </p>
                    <p className="terms-indent">
                    If you use the Ruta Services through your employer, health plan, health care provider, or another entity or 
                    platform that participates in one of Ruta’s Enterprise Programs, your use of the Ruta Services may be subject 
                    to additional terms and conditions. For more information, see the “Using the Ruta Services” section of these Terms.
                    </p>
                    <p className="terms-indent">
                    The section entitled “Dispute Resolution” contains an arbitration agreement which will, with limited exceptions, 
                    require disputes between you and Ruta to be submitted to binding and final arbitration. Unless you opt out 
                    of the arbitration agreement, (x) you will only be permitted to pursue claims and seek relief against us 
                    on an individual basis, not as a plaintiff or class member in any class or representative action of proceeding; 
                    and (y) you are waiving your right to seek relief in a court of law and to have a jury trial on your claims.
                    </p>
                    <p className="terms-indent">
                    Any dispute or claim relating in any way to your use of our Services will be governed and interpreted by and 
                    under the laws of the Commonwealth of Massachusetts, consistent with the Federal Arbitration Act, without 
                    giving effect to any principles that provide for the application of the law of any other jurisdiction.
                    </p>
                </div> 
            </li>
            <li className="terms-container">
                <h3 className="terms-numbered-list">2. Ruta DOES NOT PROVIDE MEDICAL ADVICE, DIAGNOSIS, OR TREATMENT</h3>
                <div className="terms-body">
                    <p className="terms-p">
                    Our Services are not a substitute for professional medical advice, diagnosis, or treatment. Please read this section carefully.
                    </p>
                    <p className="terms-p">
                    The contents of the Ruta Services, such as text, information, data, graphics, images, and other material 
                    contained in the Ruta Services (“Content”), including general self-care or medication information, provider 
                    information, and insurance information, is for informational and scheduling purposes only and provided 
                    solely for your convenience. The Content is not intended to be a substitute for professional medical 
                    advice, diagnosis, or treatment. While Ruta endeavors to keep the Content current, health care information 
                    changes rapidly and, thus, the Content should neither be relied upon to be fully comprehensive nor 
                    interpreted nor construed in any way as a replacement or substitute for medical advice, diagnosis or 
                    treatment provided by your doctor or other qualified health care provider.
                    </p>
                    <p className="terms-p">
                    While we make reasonable efforts to provide you with accurate content, we make no guarantees, representation 
                    or warranties, whether express or implied, with respect to any Content (including but not limited to 
                    descriptions of professional qualifications, expertise, quality of work, price or cost information, 
                    insurance coverage or benefit information).  In no event shall we be liable to you or anyone else for 
                    any decision made or action taken by you in reliance on such Content.
                    </p>
                    <p className="terms-p">
                    Always seek the advice of your doctor or other qualified health care provider with any questions you 
                    may have regarding a medical condition. It is important for you to discuss your treatment options, and 
                    any other questions that you may have, with your doctor or other qualified health care provider. 
                    Never disregard professional medical advice or delay in seeking it because of something you have read 
                    in the Ruta Services.
                    </p>
                    <p className="terms-p">
                    If you think you may be having a medical emergency, call your doctor or 911 immediately.
                    </p>
                    <p className="terms-p">
                    We do not advocate that you attempt to treat yourself, your family or someone you know without proper 
                    medical supervision. We encourage you to seek the guidance of your doctor or qualified health care 
                    provider if you feel that you, your family, or someone that you know suffers from any conditions 
                    described on the Services. If you require urgent care, call your doctor or 911 immediately.
                    </p>
                    <p className="terms-p">
                    Ruta does not recommend or endorse any specific tests, doctors, physicians, health care providers, 
                    products, procedures, treatments, opinions, or other information that may be mentioned in our 
                    Services. Ruta provides these resources and information to you for your convenience only. 
                    Reliance on any information provided by Ruta, Ruta employees, others appearing on the Ruta Services 
                    at the invitation of Ruta, or other users of the Ruta Services is solely at your own risk. 
                    For more information, see the “Third-Party Services” section of these Terms.
                    </p>
                    <p className="terms-p">
                    Infants. Symptoms experienced by children under age 2 (“infants”) may be unique for that specific 
                    age group. At this time, our Services do not support, nor are they intended to support, symptoms 
                    that may be experienced by infants. Please do not use our Services for infants.
                    </p>
                    <p className="terms-p">
                    Sexually Explicit Material. 
                    </p>
                    <p className="terms-p">
                    Our Services may contain health or medical-related materials that are sexually explicit. If you 
                    find these materials offensive, you may not want to use the Services.
                    </p>
                </div> 
            </li>
            <li className="terms-container">
                <h3 className="terms-numbered-list">3. USING THE Ruta SERVICES</h3>
                <div className="terms-body">
                    <p className="terms-p">
                    This Section discusses information regarding using our Services, including the registration of a user account. Please read the below terms carefully.
                    </p>
                    <p className="terms-p">
                    By using the Ruta Services you acknowledge and agree that no doctor-patient relationship exists between you and Ruta. As such, you waive any assumption, presumption, expression, interpretation, association, or other understanding related to the existence of a doctor-patient relationship between you and Ruta. As stated elsewhere in these Terms, Ruta is not a substitute for, and does not provide, medical advice, diagnosis, or treatment.
                    </p>
                    <p className="terms-p">
                    Accounts.
                    </p>
                    <p className="terms-p">
                    When you create an Account, you agree that your use of our Services is entirely voluntary. When you use our Services, you may be required to provide us with Personal Information (as defined in Ruta’s Privacy Notice). We agree to collect and share your information in accordance with our Privacy Notice).
                    </p>
                    <p className="terms-p">
                    If you think you may be having a medical emergency, call your doctor or 911 immediately.
                    </p>
                    <p className="terms-p">
                    In order to access certain features of the Ruta Services, you must have an Account. To create an Account, you will be required to register a unique username and password and provide additional information as requested, including but not limited to Account Information (as defined by our Privacy Notice). By creating an Account, you agree to (a) provide true, accurate, current Account Information; and (b) maintain and promptly update the Account Information to keep it true, accurate, current, and complete. You are responsible for protecting your username and password from unauthorized use, and you are responsible for all activity that occurs on your Account. Ruta is not responsible for loss or damage caused by your failure to safeguard your username and password. If you believe that your Account has been or may be used without your permission, please contact us immediately in accordance with the “Contact Us” section of these Terms.
                    </p>
                    <p className="terms-p">
                    If you create an Account, we also may ask you to provide specific information to enhance your user experience. You may be required to update this information from time to time.
                    </p>
                    <p className="terms-p">
                    License to Our Services. 
                    </p>
                    <p className="terms-p">
                    Subject to these Terms, Ruta grants you a non-exclusive, non-transferable, non-sublicensable, revocable and limited license to access our Services for your own internal, non-commercial purposes in accordance with these Terms. Except as expressly set forth in the previous sentence, you are granted no licenses or rights, whether by implication, estoppel, or otherwise, in or to the Services or any intellectual property rights related thereto without Ruta’s express prior written permission. 
                    </p>
                    <p className="terms-p">
                    You are responsible for your access to our Services, including but not limited to any equipment, software, and fees incurred, such as Internet or mobile fees.
                    </p>
                    <p className="terms-p">
                    In using our Services, you agree that:
                    </p>
                    <p className="terms-indent">
                    You will not license, sublicense, sell, rent, lease, transfer, assign, reproduce, distribute, host, or otherwise commercially exploit any of our Services;
                    </p>
                    <p className="terms-indent">
                    You will not license, sublicense, sell, rent, lease, transfer, assign, reproduce, distribute, host, or otherwise commercially exploit any of our Services;
                    </p>
                    <p className="terms-indent">
                    You will not frame or utilize framing techniques to enclose any trademark, logo, or other portion of our Services (including images, text, page layouts, or forms);
                    </p>
                    <p className="terms-indent">
                    You will not use any metatags or other "hidden text" using our name or trademarks;
                    </p>
                    <p className="terms-indent">
                    You will not modify, translate, adapt, merge, make derivative works of, disassemble, decompile, reverse compile, or reverse engineer any part of our Services except to the extent the foregoing restrictions are expressly prohibited by applicable law;
                    </p>
                    <p className="terms-indent">
                    You will not use any manual or automated software, devices, or other processes (including but not limited to spiders, robots, scrapers, crawlers, avatars, data mining tools or the like) to "scrape" or download data from any web pages contained in our Services (except to the extent that Ruta grants public search engine operators revocable permission to use spiders to copy materials from our Services for the sole purpose of and solely to the extent necessary for creating publicly available searchable indices of the materials, but not caches or archives of such materials);
                    </p>
                    <p className="terms-indent">
                    You will not access our Services to build a similar or competitive website, application, or service;
                    </p>
                    <p className="terms-indent">
                    Except as expressly stated herein, no part of our Services may be copied, reproduced, distributed, republished, downloaded, displayed, posted, or transmitted in any form or by any means; and
                    </p>
                    <p className="terms-indent">
                    You will not remove or destroy any copyright notices or other proprietary markings contained within our Services.
                    </p>
                    <p className="terms-p">
                    If we have reason to believe that you are using our Services in breach of any of these Terms, we have the right to suspend or terminate your use of the Services, including your Account, and refuse permission for you to use our Services now or in the future. Unless we have expressly agreed to otherwise, we are not obligated to provide you with the reason for suspending or terminating your access to our Services. Once you have been temporarily or permanently banned from the Services, and unless we have communicated to you otherwise, you agree not to use the Services further or use the Services under an alias.
                    </p>
                    <p className="terms-p">
                    Additional Terms. 
                    </p>
                    <p className="terms-p">
                    In addition to these Terms, certain additional terms and conditions may apply to specific features or in specific circumstances when you use the Ruta Services. These additional terms are below:
                    </p>
                    <p className="terms-indent">
                    On Behalf of Someone Else. 
                    </p>
                    <p className="terms-indent">
                    If you use our Services on behalf of someone else, such as a friend or family member, you represent and warrant that you have the authority to use our Services on behalf of that someone else.
                    </p>
                    <p className="terms-indent">
                    Children under Age 13. 
                    </p>
                    <p className="terms-indent">
                    Our Services are not directed to children, and we do not knowingly collect personal information from children under age 13. If you are a child who is under age 13, please stop using our Services immediately. If you believe that a child under age 13 has given us personal information, please contact us in accordance with the “Contact Us” section of these Terms.
                    </p>
                    <p className="terms-indent">
                    Third-Party Services. 
                    </p>
                    <p className="terms-indent">
                    In some instances, you may be able to access, schedule, or otherwise use services provided by a third party, such as telehealth services, testing services, or other services related to your health (the Third-Party Services, as defined herein) via the Ruta Services. These Third-Party Services are not provided by Ruta. These Third-Party Services are provided by third parties and may be subject to additional terms and conditions. See the “Third-Party Services” section of these Terms for more information. Ruta does not, explicitly or implicitly, recommend or endorse or refer you to any Third-Party Service. Instead, Ruta provides links to these Third-Party Services as a convenience to you. Ruta may ask you to provide information in association with your use of these Third-Party Services, subject to our Privacy Notice. For some Third-Party Services, Ruta may have a financial relationship with the third-party service provider. Ruta may be compensated from when you click on the link to the Third-Party Service.
                    </p>
                    <p className="terms-indent">
                    Enterprise Programs. 
                    </p>
                    <p className="terms-indent">
                    If you use our Services through one of Ruta’s Enterprise Programs, you acknowledge and agree that your use of these Services may be subject to additional terms and conditions set forth between Ruta and the entity that sponsors the Enterprise Program entity (the “Sponsoring Entity”) (such terms, the “Supplemental Terms”). The  Supplemental Terms are hereby incorporated by reference as they may apply. The Sponsoring Entity may make the Supplemental Terms available to you as part of the Enterprise Program. For more information about the Supplemental Terms that may govern your use of our Services through an Enterprise Program, please contact the Sponsoring Entity. If you use the Ruta Services as part of the Enterprise Program sponsored by Humana Inc., the terms and conditions in these Terms regarding dispute resolution and arbitration, limitation of liability, and indemnification do not apply to you.
                    </p>
                    <p className="terms-indent">
                    Text Messaging. 
                    </p>
                    <p className="terms-indent">
                    We may communicate to you via text message (“Text Messaging”). Text messages may be sent to your mobile number using an automatic dialing system. Text messaging may not be available from all carriers To use Ruta’s Text Messaging service on behalf of yourself or someone else, you must be age 13 or older, reside in the United States, and be authorized to communicate with Ruta. By submitting your telephone number to Ruta for this service, you (a) represent and warrant that you are age 13 or older, and (b) reside in the United States. You also agree to receive communications from Ruta from time to time. When you choose to send PHI through unencrypted text messages, you do so at your own risk. We are not liable for your use or reliance on the content of any text message. You will always have the ability to stop/opt out, in accordance with our Privacy Notice. Message and data rates may apply. If you are experiencing any issues with Ruta text message communications, please contact us in accordance with the “Contact Us” section of these Terms.
                    </p>
                    <p className="terms-indent">
                    Text messaging may include one-time or recurring texts related to the following topics:                    </p>
                    <p className="terms-indent">
                    Benefit and plan information. Messages may include information about services covered under your plan, cost sharing, finding a network provider, alerts when a provider you have an appointment with is not in the network.
                    </p>
                    <p className="terms-indent">
                    Appointment scheduling and reminders. Messages may include confirmations, reminders or cancellations.
                    </p>
                    <p className="terms-indent">
                    We do not guarantee the successful delivery of text messages by your wireless provider. Messages sent by text may not be delivered if the mobile device is not in range of a transmission site, or if the network is down. Factors beyond the power of wireless carriers may get in the way of message delivery. This may include the terrain, how close you are to buildings, foliage, weather, and your equipment. We and your wireless provider will not be liable for losses or damages that come from:
                    </p>
                    <p className="terms-indent">
                    a message not delivered, a message delivered late, or
                    </p>
                    <p className="terms-indent">
                    a message that goes to the wrong number; or
                    </p>
                    <p className="terms-indent">
                    inaccurate or incomplete content in a text message.
                    </p>
                    <p className="terms-indent">
                    General Medication Information. 
                    </p>
                    <p className="terms-indent">
                    Some portions of the Ruta Services may include general information related to medication associated with certain symptoms (“General Medication Information”). This information is provided to you for self-education purposes only and is not intended to be a substitute for medical advice, diagnosis, or treatment. You are in no way required to take any action based on the appearance of General Medication Information within the Ruta Services. If you take any action in reliance upon this information provided, you understand and agree that you are doing so at your own risk.
                    </p>
                    <p className="terms-indent">
                    General Self-Care Information. 
                    </p>
                    <p className="terms-indent">
                    Some portions of the Ruta Services may include general instructions related to care that can help relieve certain symptoms (“General Self-Care Information”). This information is provided to you for self-education purposes only and is not intended to be a substitute for medical advice, diagnosis, or treatment. You are in no way required to take any action based on the appearance of General Medication Information within the Ruta Services. If you take any action in reliance upon this Self-Care Information, you understand and agree that you are doing so at your own risk.
                    </p>
                    <p className="terms-indent">
                    User Stories. 
                    </p>
                    <p className="terms-indent">
                    You may choose to share information with us related to a recent personal illness, treatment experience, or experience with a medication (each, a “User Story”). We collect and store the information you provide us related to your User Story in accordance with our Privacy Notice. We are not obligated to publish nor are we required to respond to any User Story we receive. We reserve the right, in our sole discretion, to edit, condense, or otherwise modify any User Story. Ruta cannot and does not guarantee that it will post each User Story or that each User Story will not be offensive, defamatory, or objectionable. Ruta has no obligation to delete content within a User Story that you personally may find objectionable or offensive. Ruta does not guarantee the accuracy, integrity, or quality of each User Story. Ruta does not endorse or make any representations or warranties with regard to the accuracy, completeness, or timeliness of any content included within a User Story. By submitting your User Story to us, you acknowledge and agree that any information or content that you provide may be viewed by the general public and will not be treated as private or confidential and that we may publish your User Story without payment to you. Please do not submit any sensitive information to us in your User Story.
                    </p>
                    <p className="terms-indent">
                    Ratings and Feedback. When you rate or submit feedback to Ruta, you agree to do so at your own risk and that Ruta has no obligations, including obligations of confidentiality, for such ratings or feedback. By submitting your ratings or feedback to Ruta, you grant to Ruta a perpetual, irrevocable, worldwide, non-exclusive, royalty-free, fully paid and fully sublicensable right and license to perform, distribute, modify, reproduce, create derivative works of, and otherwise commercially or non-commercially use all that information in any manner determined solely by Ruta and in accordance with our Privacy Notice. We may use or otherwise incorporate your ratings or feedback into our Services without payment or condition to you. 
                    </p>
                </div> 
            </li>
            <li className="terms-container">
                <h3 className="terms-numbered-list">4. JURISDICTION</h3>
                <div className="terms-body">
                    <p className="terms-p">
                    This section explains information about where we operate the Ruta Services.
                    </p>
                    <p className="terms-p">
                    Ruta is controlled and offered by us from the United States; accordingly, these Terms and your use of the Ruta Services are governed by U.S. law, and not by the laws of any country, territory or jurisdiction other than the United States. Any or all of our Services may be accessed from countries around the world and may contain references to features and content not available in locations other than the United States. These references do not imply that Ruta intends to announce such services or content in these locations. Ruta makes no representations that the Services are appropriate or available for use in other locations. Access to or use of the Services from other locations are not permitted.
                    </p>
                    <p className="terms-p">
                    We do not represent or warrant that the Ruta Services or any functionality or feature thereof is appropriate or available for use in any particular jurisdiction. If you choose to access or use the Ruta Services, you do so on your own initiative and at your own risk, and you are responsible for complying with all applicable laws, rules, and regulations.
                    </p>
                </div> 
            </li>
            <li className="terms-container">
                <h3 className="terms-numbered-list">5. THIRD-PARTY SERVICES</h3>
                <div className="terms-body">
                    <p className="terms-p">
                    This section explains how we provide third-party content for your convenience. Ruta does not endorse,  recommend, or refer you to any third-party services available to you via our Services.
                    </p>
                    <p className="terms-p">
                    With your consent, we may connect you to certain third parties whose services may be relevant to you, based on the information you have provided us. When we do so, we may share with those third parties certain information, in accordance with our Privacy Notice.
                    </p>
                    <p className="terms-p">
                    Third-Party Health and Wellness Services.The Ruta Services may contain third-party content, materials, information, or links to services or websites related to health or wellness (collectively, the “Third-Party Services” or, individually, the “Third-Party Service”). Ruta has conducted a clinical review of those Third-Party Services providers based on criteria established by Ruta related to patient safety and clinical quality (collectively, the “Criteria”) prior to including those providers on its site.  However, Ruta is not responsible for any Third-Party Services. The inclusion of a link or other reference within our Services to any Third-Party Services is not, explicitly or implicitly, an endorsement, recommendation, or referral by Ruta or our affiliates of the third party or any Third-Party Services. We do not make any representations, warranties, or guarantees related to the Third-Party Services, their accuracy or effectiveness, or the information included within the Ruta Services with respect to the Third-Party Service, including, for example, information about pricing or availability. A Third-Party Service may have additional availability beyond what’s listed through the Services if you contact them directly. Ruta is not responsible for the pricing or availability of the Third-Party Services. Ruta is not responsible for making sure that Third-Party Services are actually provided or are up to a certain standard of quality, Any information included within the Ruta Services with respect to the Third-Party Service is subject to change. Please verify such information before engaging with the Third-Party Service. You are responsible for verifying your insurance with your insurance provider. For some Third-Party Services, Ruta may have a financial relationship with the third-party service provider. When you click on the link to or subscribe to the Third-Party Service or book an appointment with a third-party service provider through the Services, Ruta may receive a commission. Ruta may ask you to provide information in association with your use of these Third-Party Services, subject to our Privacy Notice.In connection with using our Services to locate and schedule appointments with healthcare providers, you understand that: YOU ARE ULTIMATELY RESPONSIBLE FOR CHOOSING YOUR OWN HEALTHCARE PROVIDER AND DETERMINING WHETHER THE HEALTHCARE PROVIDER IS SUITABLE FOR YOUR HEALTHCARE NEEDS.  Ruta IS NOT RESPONSIBLE FOR YOUR INSURANCE COMPANY’S FAILURE TO PAY YOUR CLAIM OR YOUR AND ANY THIRD-PARTY SERVICE PROVIDER’S FAILURE TO AGREE TO PRICING FOR PROVIDER’S SERVICES.
                    </p>
                    <p className="terms-p">
                    Your use of any Third-Party Service is at your own risk and subject to the terms and conditions set forth by the third party (the “Third-Party Terms”). The Third-Party Terms may be available on a website related to the Third-Party Services or in the Supplemental Terms associated with the Enterprise Program through which you access the Ruta Services. Ruta may, but is under no obligation to, provide you with access to the Third-Party Terms. For example, Ruta uses the Crunchbase 2013 Snapshot © 2013, in accordance with the CC BY 4.0 license. You are solely responsible for obtaining, understanding and complying with all Third-Party Terms. Please carefully review any Third-Party Terms before engaging with any Third-Party Service. If you have questions about a Third-Party Service, please contact us by following the instructions included in the “Contact Us” section.
                    </p>
                    <p className="terms-p">
                    If there is a dispute between you and a Third-Party Service provider, you agree that Ruta is under no obligation to become involved and you release Ruta, its directors, officers, employees, agents, and successors from claims, demands, and damages of every kind or nature, known or unknown, suspected or unsuspected, disclosed or undisclosed, arising out of or in any way related to such disputes and/or our Services.  Ruta is independent of the Third-Party Service providers, and does not employ or otherwise exercise any control over the services provided by such providers. Therefore, Ruta is not responsible for a Third-Party Service provider’s acts or omissions, or for any content of your communications with them.
                    </p>
                    <p className="terms-p">
                    Third-Party Payment Processing. 
                    </p>
                    <p className="terms-p">
                    In some cases, Ruta may use a third-party payment processor to collect and process any payments submitted to Ruta online. Like the Third-Party Services, your use of this payment processing service is subject to the terms and conditions of that third-party payment processor, and you are solely responsible for obtaining, understanding and complying with such terms and conditions.
                    </p>
                </div> 
            </li>
            <li className="terms-container">
                <h3 className="terms-numbered-list">6. COPYRIGHT & TRADEMARK INFORMATION</h3>
                <div className="terms-body">
                    <p className="terms-p">
                    This section provides information about the intellectual property rights in connection with the Services. It also explains what to do if you believe the Services infringe your copyright.
                    </p>
                    <p className="terms-p">
                    Our Services, and the information contained therein, including but not limited to all software and algorithms underlying the operation of the Services, and all copyrights and trademarks, are the property of Ruta and its licensors, and are protected from unauthorized copying and dissemination by U.S. copyright law, trademark law, international conventions, and other intellectual property laws. “Ruta” and the related graphics, logos, service marks, and trade names used in connection with the Ruta Services are the intellectual property of Ruta Health, Inc. under the applicable laws of the United States and/or other countries. All other product names and their related graphics, logos, service marks, and trade names are the intellectual property of their respective owners.
                    </p>
                    <p className="terms-p">
                    Ruta respects the intellectual property rights of others, and we ask that you do the same. Ruta may suspend access or terminate access by any user (whether or not the user has created an Account) that we have reason to believe has violated or may have violated another’s intellectual property rights.
                    </p>
                    <p className="terms-p">
                    DMCA Notice. If you believe that your work has been copied within the Ruta Services in a way that constitutes infringement, you may request removal of that material from the Services by contacting Ruta’s copyright agent (identified below). In so doing, please provide the following information:
                    </p>
                    <p className="terms-indent">
                    The copyrighted work that you believe to be infringed. Please describe the work and, where possible, include a copy of the location (for example, the URL) of an authorized version of the work;
                    </p>
                    <p className="terms-indent">
                    The material that you believe to be infringing and its location. Please describe the material, the URL, and any other pertinent information that will allow Ruta to locate the material;
                    </p>
                    <p className="terms-indent">
                    Your name, address, telephone number, and (if available) email address;
                    </p>
                    <p className="terms-indent">
                    A statement that you have a good-faith belief that the complained of misuse of the materials is not authorized by the copyright owner, its agent, or the law;
                    </p>
                    <p className="terms-indent">
                    A statement that the information that you have supplied is accurate, and indication that “under penalty of perjury,” you are the copyright owner or are authorized to act on the copyright owner’s behalf; and
                    </p>
                    <p className="terms-indent">
                    A signature or the electronic equivalent from the copyright holder or authorized representative.
                    </p>
                    <p className="terms-p">
                    Ruta’s agent for copyright issues related to the Services is: Legal Team, 580 Harrison Ave., Suite 1W, Boston, MA 02118, legal@Rutahealth.com.
                    </p>
                </div> 
            </li>
            <li className="terms-container">
                <h3 className="terms-numbered-list">7. YOUR INFORMATION</h3>
                <div className="terms-body">
                    <p className="terms-p">
                    This section explains our commitment to you, and your commitment to us, related to the information you provide us when you use the Services.
                    </p>
                    <p className="terms-p">
                    We take your personal information very seriously. Please see our Privacy Notice for a description of how we may collect and use your personal information.
                    </p>
                    <p className="terms-p">
                    Your Responsibilities. 
                    </p>
                    <p className="terms-p">
                    By using our Services, you agree that you are solely responsible for any and all of the information that you upload, post, email, transmit, provide, or otherwise share with Ruta on behalf of yourself or someone else, such as a friend or family member (in any instance, “Your Information”). You represent that (a) you have all rights necessary to submit Your Information to us, (b) Your Information is true, accurate, and current, and (c) Your Information does not violate these Terms.
                    </p>
                    <p className="terms-p">
                    Ruta has no obligation to pre-screen Your Information, but we reserve the right, in our sole discretion, to pre-screen, refuse, or remove any of Your Information with or without notice to you. Unless expressly provided in writing elsewhere or as required by law, Ruta has no obligation or responsibility for the accuracy of Your Information or the storage, deletion, transmission, failure to transmit, or receipt of the transmission of Your Information.
                    </p>
                    <p className="terms-p">
                    If you provide any information that is false, inaccurate, not current or incomplete, or we have reasonable grounds to suspect that Your Information is false, inaccurate, not current or incomplete, Ruta may suspend or terminate your use of the Services.
                    </p>
                    <p className="terms-p">
                    You are responsible for all use of our Services and your account. You may only use the Services for lawful, non-commercial purposes. You may not use the Services in any manner that could disable, overburden, or impair our servers or networks, or interfere with any other party's use and enjoyment of our Services. You may not attempt to gain unauthorized access to any of our Services, user accounts, or computer systems or networks. You agree that you shall not (a) copy, modify, adapt, translate, or reverse engineer any portion of our Services, and/or its content or materials; (b) access, retrieve or index any portion of our website or Services for purposes of constructing or populating a searchable database of medical providers or information related to the healthcare industry; or (3) create user accounts by automated means or under false or fraudulent pretenses.
                    </p>
                    <p className="terms-p">
                    Your Rights. 
                    </p>
                    <p className="terms-p">
                    You have certain rights related to the information you provide to us, such as the right to access. You may access Your Information from your Account. If you have not registered an Account, it may not be possible for Ruta to provide you with access to Your Information. For more information about your rights to Your Information, please see our Privacy Notice.
                    </p>
                    <p className="terms-p">
                    Our License to Your Information. 
                    </p>
                    <p className="terms-p">
                    By using the Services, with the exception of any personally identifiable information you submit that may be governed by the Health Insurance Portability and Accountability Act of 1996 as amended (“HIPAA”) or related state-specific privacy laws and regulations (such information collectively, the “Excluded Content”), you grant to Ruta a perpetual, irrevocable, worldwide, non-exclusive, royalty-free, fully paid and fully sublicensable right, including any moral rights, and license to use, license, distribute, reproduce, modify, adapt, publicly perform, publicly display, create derivative works of, and otherwise commercially or non-commercially use Your Information in any manner determined solely by Ruta. Subject to our Privacy Notice and any applicable privacy laws and regulations, you grant to Ruta a worldwide, non-exclusive, royalty-free, fully paid and fully sublicensable right, including any moral rights, and license to use, license, distribute, reproduce, modify, adapt, publicly perform, and publicly display the Excluded Content, in whole or in part, for the purposes of operating and providing our Services to you. Our license to Your Information will survive any termination of: (a) these Terms, or (b) your use of the Services.
                    </p>
                    <p className="terms-p">
                    You will not, and will not permit any third party to, take any action or make available any of Your Information on or through our Services that:
                    </p>
                    <p className="terms-indent">
                    Infringes any intellectual property rights, moral rights, right of publicity, or other right of any person or entity;
                    </p>
                    <p className="terms-indent">
                    Is unlawful, threatening, abusive, harassing, defamatory, libelous, deceptive, fraudulent, invasive of another's privacy, tortious, obscene, offensive, or profane;
                    </p>
                    <p className="terms-indent">
                    Interferes with or attempt to interfere with the proper functioning of our Services or uses our Services in any way not expressly permitted by these Terms; or
                    </p>
                    <p className="terms-indent">
                    Engages in, or attempts to engage in, any potentially harmful acts that are directed against Ruta or our Services, including but not limited to violating or attempting to violate any security features of our Services using manual or automated software or other means to access, "scrape," "crawl," or "spider" any pages of our Services, introducing viruses, worms, or similar harmful code into our Services, or interfering or attempting to interfere with use of our Services by any other user, host or network, including by means of overloading, "flooding," "spamming," "mail bombing," or "crashing" our Services.
                    </p>
                </div> 
            </li>
            <li className="terms-container">
                <h3 className="terms-numbered-list">8. DISCLAIMERS, LIMITATIONS OF LIABILITY & INDEMNIFICATION</h3>
                <div className="terms-body">
                    <p className="terms-p">
                    This section includes information related to your use of the Services, particularly if something goes wrong.
                    </p>
                    <p className="terms-p">
                    Disclaimers. 
                    </p>
                    <p className="terms-p">
                    Your use of the Ruta Services is at your own risk. When using our Services, Your Information may be transmitted over a medium that is beyond Ruta’s control. We assume no liability relating to the delay, failure, interruption, or corruption of any of Your Information or other information transmitted in connection with your use of the Services.
                    </p>
                    <p className="terms-p">
                    You acknowledge and agree that, to the extent permitted by applicable law, our Services are provided on an "as is" and "as available" basis, with all faults. Ruta disclaims all warranties, representations, and conditions, whether express or implied, statutory or otherwise, including but not limited to the implied warranties of merchantability, non-infringement of third parties’ rights, and fitness for particular purpose, title, availability, security, operability, condition, quiet enjoyment, value, accuracy of data, freedom from viruses or malware, completeness, timeliness, functionality, reliability, sequencing or speed of delivery, or system integration.
                    </p>
                    <p className="terms-p">
                    Limitation of Liability. 
                    </p>
                    <p className="terms-p">
                    By using our Services, you understand and agree that in no event will a Ruta Party (as defined below) be liable for any loss of profits, revenue or data, indirect, incidental, special, or consequential damages resulting from the use of, or inability to use, the Services or the content of our Services, whether based on warranty, contract, tort, or any other legal theory, and whether or not the Ruta Party is advised of the possibility of such damages. Under no circumstances will any or all Ruta Parties be liable to you for more than USD $100.00. The foregoing limitations of liability will not apply to liability of the Ruta Parties for (a) death or personal injury caused by Ruta’s gross negligence, or (b) for any injury caused by Ruta’s fraud or fraudulent misrepresentation. The limitations of damages set forth above are fundamental elements of the basis of the bargain between you and Ruta.
                    </p>
                    <p className="terms-p">
                    A “Ruta Party” or the “Ruta Parties” includes Ruta Health, Inc., and those third parties who provided Ruta with operational or technical support to deliver the Ruta Services to you, and any of Ruta or such third parties’ officers, directors, employees, agents, licensors, and suppliers. The previous sentence shall not apply to any third parties, or Third-Party Services as described in the “Third-Party Services” section of these Terms.
                    </p>
                    <p className="terms-p">
                    To the extent that we may not, as a matter of applicable law, disclaim any implied warranty or limit liabilities, the scope and duration of such warranty and the extent of our liability will be the minimum permitted under such applicable law.
                    </p>
                    <p className="terms-p">
                    Indemnification. 
                    </p>
                    <p className="terms-p">
                    You agree to defend, indemnify, and hold the Ruta Parties harmless from and against any losses, costs, liabilities and expenses (including reasonable attorneys' fees) relating to or arising out of: (a) Your Information; (b) your misuse of the Services; (c) your violation of these Terms; (d) your violation of any rights of another party, including any other users; or (e) your violation of any applicable laws, rules or regulations. Ruta reserves the right to assume the exclusive defense and control of any matter otherwise subject to indemnification by you, in which event you will fully cooperate with us in asserting any available defenses. This provision does not require you to indemnify any of the Ruta Parties for any unconscionable commercial practice, such as fraud, deception, false promise, misrepresentation or concealment, suppression, or omission of any material fact in connection with our Services. You agree that this section will survive any termination of your access to the Services, your Account, or these Terms.
                    </p>
                </div> 
            </li>
            <li className="terms-container">
                <h3 className="terms-numbered-list">9. REMEDIES</h3>
                <div className="terms-body">
                    <p className="terms-p">
                    This Section provides information about Ruta’s rights if we determine that you have violated or may have violated any of these Terms.
                    </p>
                    <p className="terms-p">
                    Ruta respects our users, and we expect our users to respect us in return. If we believe that you violated, or may have violated, these Terms, or have otherwise demonstrated conduct inappropriate for the Ruta Services, we reserve the right to take any action that we deem appropriate, including but not limited to investigating such violations, suspending or terminating your Account or access to our Services, or pursuing appropriate legal action. If we believe that criminal activity has occurred, we reserve the right to refer the matter to, and to cooperate with, the appropriate legal and/or law enforcement authorities. Ruta will not be liable to you for any suspension or termination of your Account or access to our Services, including for the deletion of Your Information. Ruta will not be liable to you for any action we may take in response to your violation, or suspected violation, of these Terms.
                    </p>
                </div> 
            </li>
            <li className="terms-container">
                <h3 className="terms-numbered-list">10. TERM & TERMINATION</h3>
                <div className="terms-body">
                    <p className="terms-p">
                    This section explains when these Terms begin and end.
                    </p>
                    <p className="terms-p">
                    Term. 
                    </p>
                    <p className="terms-p">
                    These Terms commence on the date when you accept them and remain in full force and effect while you use our Services, unless terminated earlier in accordance with these Terms.
                    </p>
                    <p className="terms-p">
                    Termination. 
                    </p>
                    <p className="terms-p">
                    You may terminate your Account by following the instructions in the “Deleting Your Account” section in our Privacy Notice. You may terminate access to our Services by ceasing all use of our Services. Subject to applicable law, Ruta reserves the right to maintain, delete or destroy all Content, including Your Information and Excluded Content posted or uploaded to the Services pursuant to our record retention and/or content destruction policies. All provisions of these Terms that, by their nature should survive, will survive termination of your Account or access to the Services, including but not limited to licensing rights, warranty disclaimers, and limitations of liability.
                   </p>
                </div> 
            </li>
            <li className="terms-container">
                <h3 className="terms-numbered-list">11. DISPUTE RESOLUTION</h3>
                <div className="terms-body">
                    <p className="terms-p">
                    This Section explains that you must arbitrate disputes with Ruta rather than resolve any disputes with Ruta in a court proceeding. This Section also limits the manner in which you can seek relief from us.
                    </p>
                    <p className="terms-p">
                    You agree that any dispute or claim relating in any way to your access or use of the Services or to any aspect of your relationship with Ruta will be resolved by binding arbitration rather than in court (the “Arbitration Agreement”). However, you may assert claims in small claims court if your claims qualify. Also, you or Ruta may seek equitable relief in court for infringement or other misuse of intellectual property rights (such as trademarks, trade dress, domain names, trade secrets, copyrights, and patents). This Arbitration Agreement includes, but is not limited to, all claims that arose or were asserted before the effective date of these Terms or any prior version of these Terms. This Arbitration Agreement will survive the termination of your relationship with us. This Arbitration Agreement is subject to the Federal Arbitration Act.
                    </p>
                    <p className="terms-p">
                    Arbitration Rules and Forum. 
                    </p>
                    <p className="terms-p">
                    To begin an arbitration proceeding, you must send a letter requesting arbitration and describing your claim to our registered agent, Cogency Global Inc., 850 New Burton Road, Suite 201, Dover, DE 19904. The arbitration will be conducted by JAMS, an established alternative dispute resolution provider. Disputes involving claims and counterclaims under $250,000.00 USD, not inclusive of attorneys' fees and interest, will be subject to JAMS' most current version of the Streamlined Arbitration Rules and Procedures; all other claims will be subject to JAMS' most current version of the Comprehensive Arbitration Rules and Procedures. JAMS's rules are also available on the JAMS website or by calling JAMS at 800-352-5267.
                    </p>
                    <p className="terms-p">
                    If JAMS is not available to arbitrate, the parties will select an alternative arbitral forum. If the arbitrator finds that you cannot afford to pay JAMS's filing, administrative, hearing and/or other fees and cannot obtain a waiver from JAMS, Ruta will pay them for you. In addition, Ruta will reimburse all such JAMS's filing, administrative, hearing and/or other fees for claims totaling less than $10,000.00 USD unless the arbitrator determines the claims are frivolous.
                   </p>
                   <p className="terms-p">
                   Authority of Arbitrator. 
                    </p>
                    <p className="terms-p">
                    The arbitrator will have exclusive authority to (a) determine the scope and enforceability of this Arbitration Agreement and (b) resolve any dispute related to the interpretation, applicability, enforceability, or formation of this Arbitration Agreement including but not limited to any claim that all or any part of this Arbitration Agreement is void or voidable. The arbitrator will decide the rights and liabilities, if any, of you and Ruta. The arbitration proceeding will not be consolidated with any other matters or joined with any other cases or parties. The arbitrator will have the authority to grant motions dispositive of any claim, to award monetary damages, and to grant any non-monetary remedy or relief available under applicable law, the arbitral forum's rules, and these Terms (including the Arbitration Agreement). The arbitrator will issue a written award and statement of decision describing the essential findings and conclusions on which the award is based, including the calculation of any damages awarded.
                    </p>
                    <p className="terms-p">
                    The arbitrator has the same authority to award relief on an individual basis that a judge in a court of law would have. The award of the arbitrator is final and binding upon you and Ruta.
                    </p>
                    <p className="terms-p">
                    Waiver of Jury Trial. 
                    </p>
                    <p className="terms-p">
                    You and Ruta hereby waive any constitutional and statutory rights to sue in court and have a trial in front of a judge or jury. Instead, you and Ruta will resolve all claims and disputes by arbitration under this Arbitration Agreement, except as specified in the subsection entitled "Applicability of Arbitration Agreement" above. An arbitrator can award the same damages and relief as a court and must follow these Terms as a court would. However, there is no judge or jury in arbitration, and court review of an arbitration award is subject to very limited review.
                    </p>
                    <p className="terms-p">
                    Waiver of Class or Other Collective Relief. 
                    </p>
                    <p className="terms-p">
                    All claims and disputes within this Arbitration Agreement must be arbitrated on an individual basis, not on a class or collective basis. If a decision is issued stating that applicable law precludes enforcement of any of this subsection's limitations as to a given claim for relief, then the claim must be severed from the arbitration and brought into the state or federal courts in Suffolk County, Boston, Massachusetts, United States. All other claims will be arbitrated.
                    </p>
                    <p className="terms-p">
                    30-Day Right to Opt Out. 
                    </p>
                    <p className="terms-p">
                    You have the right to opt out of the provisions of this Arbitration Agreement by sending written notice of your decision to opt out to Ruta via email to legal@Rutahealth.com. You must opt out within 30 days after first becoming subject to this Arbitration Agreement. Your notice must include your name and address, the email address you used to set up your Account (if you have one), and the statement, “I want to opt out of the Arbitration Agreement.” If you opt out of this Arbitration Agreement, all other parts of these Terms will continue to apply to you. Opting out of this Arbitration Agreement has no effect on any other arbitration agreements that you may currently have, or may enter in the future, with Ruta.
                    </p>
                    <p className="terms-p">
                    If Ruta makes any future material change to this Arbitration Agreement, you can reject that change within 30 days of such change becoming effective by contacting Ruta via email to legal@Rutahealth.com or via mail to the following address: Ruta Health, Inc., 580 Harrison Ave., Suite 1W, Boston, MA 02118.
                    </p>
                    <p className="terms-p">
                    Severability of Arbitration Agreement. Except as provided in the subsection entitled "Waiver of Class or Other Collective Relief" above, if it turns out that a portion of this Arbitration Agreement is not enforceable, then that portion will be severed. The remainder of this Arbitration Agreement will remain in full force and effect.
                    </p>
                </div> 
            </li>
        
            <li className="terms-container">
                <h3 className="terms-numbered-list">12. MISCELLANEOUS</h3>
                <div className="terms-body">
                    <p className="terms-p">
                    This Section provides general terms related to how you and Ruta communicate and otherwise interact with each other.
                    </p>
                    <p className="terms-p">
                    Consent to Electronic Communications. 
                    </p>
                    <p className="terms-p">
                    The communications between you and Ruta use electronic means, whether you access the Services or communicate with us via email or whether we post notices on the Ruta website. You consent to receive electronic communications from Ruta, and you agree that all terms and conditions, agreements, notices, disclosures, and other communications that Ruta provides to you electronically satisfy any legal requirement that such communications would satisfy if it were to be in a physical writing. The foregoing does not affect your statutory rights.
                    </p>
                    <p className="terms-p">
                    Notice. 
                    </p>
                    <p className="terms-p">
                    Where Ruta requires that you provide an email address to us, you are responsible for providing Ruta with your most current email address. In the event that the last email address you provided to Ruta is not valid, inactive, or for any reason is not capable of delivering to you any notices required or permitted by these Terms, Ruta’s dispatch of the email containing such notice will nonetheless constitute effective notice. You may provide legal notice to us at Ruta Health, Inc., 580 Harrison Ave., Suite 1W, Boston, MA 02118, or, where permitted by law, via email at legal@Rutahealth.com. Such notice will be deemed given when received by Ruta by letter delivered by nationally recognized overnight delivery service or first-class postage prepaid mail at the preceding address.
                   </p>
                   <p className="terms-p">
                   Release
                    </p>
                    <p className="terms-p">
                    You hereby release Ruta and its successors from claims, demands, any and all losses, damages, rights, and actions of any kind, including personal injuries, death, and property damage, that is either directly or indirectly related to or arises from your use of the Services, including but not limited to, any interactions with or conduct of other users or third parties, including Third-Party Services, of any kind arising in connection with or as a result of these Terms or your use of the Services. If you are a California resident, you hereby waive California Civil Code Section 1542, which states, “A general release does not extend to claims which the creditor does not know or suspect to exist in his favor at the time of executing the release, which, if known by him must have materially affected his settlement with the debtor.” The foregoing release does not apply to any claims, demands, or any losses, damages, rights and actions of any kind, including personal injuries, death or property damage for any unconscionable commercial practice by Ruta or for Ruta’s fraud, deception, false promise, misrepresentation or concealment, or suppression or omission of any material fact in connection with our Services provided hereunder.
                    </p>
                    <p className="terms-p">
                    No Assignment or Transfer. 
                    </p>
                    <p className="terms-p">
                    You may not assign, subcontract, delegate, or otherwise transfer any of your rights or obligations set forth in these Terms. If you attempt to do so, such transfer will be null and void.
                    </p>
                    <p className="terms-p">
                    Force Majeure. 
                    </p>
                    <p className="terms-p">
                    We are not liable for any delay or failure relating to the Ruta Services that results from causes outside our reasonable control, including but not limited to acts of God, war, terrorism, riots, embargoes, acts of civil or military authorities, fire, floods, accidents, strikes, or shortages of transportation facilities, fuel, energy, labor, or materials.
                    </p>
                    <p className="terms-p">
                    Exclusive Venue. 
                    </p>
                    <p className="terms-p">
                    To the extent that you or Ruta are permitted under these Terms to initiate litigation in a court, both you and Ruta agree that all claims and disputes arising out of or relating to these Terms will be litigated exclusively in the state or federal courts located in Suffolk County, Boston, Massachusetts, USA. You and Ruta consent to personal jurisdiction in those courts.
                    </p>
                    <p className="terms-p">
                    Governing Law. 
                    </p>
                    <p className="terms-p">
                    These Terms and any action related to these Terms will be governed, interpreted by, and under the laws of the Commonwealth of Massachusetts, consistent with the Federal Arbitration Act, without giving effect to any principles that provide for the application of the law of another jurisdiction. The United Nations Convention on Contracts for the International Sale of Goods does not apply to these Terms.
                    </p>
                    <p className="terms-p">
                    No Waiver. 
                    </p>
                    <p className="terms-p">
                    Any waiver or failure to enforce any provision of these Terms on one occasion will not be a waiver of any other provision or of such provision on any other occasion.
                    </p>
                    <p className="terms-p">
                    Severability
                    </p>
                    <p className="terms-p">
                    If it turns out that a portion of these Terms is not enforceable, then that portion will be construed in a manner to reflect, as nearly as possible, the original intention of the parties. This will not affect any other terms.
                    </p>
                    <p className="terms-p">
                    Imports and Exports. 
                    </p>
                    <p className="terms-p">
                    You may not use, export, import, or transfer the Services or any portion thereof except as authorized by U.S. law, the laws of the jurisdiction in which you obtained the Services, and any other applicable laws.
                    </p>
                    <p className="terms-p">
                    Order of Precedence. 
                    </p>
                    <p className="terms-p">
                    In the event that you use the Ruta Services as part of an Enterprise Program, these Terms, in conjunction with Ruta’s Privacy Notice, will take precedence over any conflicting terms and conditions included in the Supplemental Terms unless expressly agreed to otherwise between Ruta and the entity that sponsors your access to the Ruta Services.
                    </p>
                    <p className="terms-p">
                    Consumer Complaints. 
                    </p>
                    <p className="terms-p">
                    In accordance with California Civil Code §1789.3, you may report complaints to the Complaint Assistance Unit of the Division of Consumer Services of the California Department of Consumer Affairs by contacting them in writing at 1625 North Market Blvd., Suite N 112, Sacramento, CA 95834, by telephone at 800-952-5210, or by email at dca@dca.ca.gov.
                    </p>
                    <p className="terms-p">
                    Complete Agreement. 
                    </p>
                    <p className="terms-p">
                    These Terms are the final, complete and exclusive agreement of the parties with respect to the subject matter hereof and supersedes and merges all prior discussions between the parties with respect to such subject matter.
                    </p>
                </div> 
            </li>
            <li className="terms-container">
                <h3 className="terms-numbered-list">13. CHANGES TO THESE TERMS</h3>
                <div className="terms-body">
                    <p className="terms-p">
                    This section describes what happens when we update these Terms.
                    </p>
                    <p className="terms-p">
                    We may change these Terms from time to time to accurately reflect our Services and policies. When changes are made, we will make the new Terms available on the Ruta website and update the date upon which the related terms and conditions are effective (the “Effective Date”). If we make material changes to these Terms, as determined in our sole discretion, we may notify you of these changes (for example, through our Services or via email if you have provided your email address to us). If you do not agree to the changes after receiving notice of such changes, you should stop using our Services. Otherwise, your continued usage of the Services will mean you accept those changes. Please regularly check the Ruta website to review the latest version of the Terms.
                    </p>
                </div> 
            </li>
            <li className="terms-container">
                <h3 className="terms-numbered-list">14. CONTACT US</h3>
                <div className="terms-body">
                    <p className="terms-p">
                    This section includes instructions on how to communicate with us.
                    </p>
                    <p className="terms-p">
                    If you have any questions about these Terms, please visit the FAQs. There you will find answers to frequently asked questions. When communicating with our user support team, please do not include health information or other sensitive information.
                    </p>
                </div> 
            </li>
            
        </ul>


    </div>
    <Footer></Footer>
    </div>
    
}

export default Terms_of_Use;