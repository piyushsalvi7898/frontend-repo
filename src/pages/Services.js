import React, { useEffect, useState } from "react";
import "../css/Services.css"; // Import the CSS file

// import React, { useEffect, useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

import { faFacebookF, faTwitter, faInstagram, faLinkedinIn, faYoutube } from '@fortawesome/free-brands-svg-icons';





const Services = () => {
  const [words, setWords] = useState([]);

  useEffect(() => {
    const text = ""; /* Discription BOX*/
    setWords(text.split(" "));
  }, []);

  return (
    <>
      {/* Our Services Section */}
      <section className="our-services-section">
        <h2 className="our-services-heading">Our Services</h2>
        <div className="our-services-description">
          {words.map((word, index) => (
            <span
              key={index}
              className="falling-word"
              style={{ animationDelay: `${index * 0.5}s` }} // Adjusted delay for smoother animation
            >
              {word}
            </span>
          ))}
        </div>
      </section>

      {/* --------- */}

      {/* Service Consultant Section */}
      <section className="service-consultant-section">
        <div className="service-consultant-box">
          <p className="bigheadinginmaincontent">Retail hiring</p>
          <p className="logo-content">
            Yunify provides innovative retail hiring solutions, helping
            businesses streamline their recruitment process with tailored,
            data-driven approaches. By leveraging advanced technology and
            industry expertise, Yunify connects retailers with top talent,
            ensuring a seamless hiring experience and the right fit for every
            role
          </p>
        </div>
        <div className="service-consultant-box">
          <p className="bigheadinginmaincontent">Marketing</p>
          <p className="logo-content">
            Yunify offers comprehensive recruitment services, helping businesses
            find the right talent for their needs.
          </p>
        </div>
        <div className="service-consultant-box">
          <p className="bigheadinginmaincontent">Recruitment</p>
          Yunify offers end-to-end recruitment services, helping businesses find
          and hire top talent efficiently. From sourcing candidates to managing
          interviews and onboarding, Yunify streamlines the hiring process,
          ensuring the best fit for both employers and job seekers
          <p className="logo-content"></p>
        </div>
        <div className="service-consultant-box">
          <p className="bigheadinginmaincontent">Website Solutions</p>
          <p className="logo-content">
            Yunify offers innovative website solutions that combine design,
            functionality, and performance.
          </p>
        </div>
        <div className="service-consultant-box">
          <p className="bigheadinginmaincontent">Background Verification</p>
          <p className="logo-content">
            Yunify Manage Candidate Background Verification Status is a feature
            that allows organizations to track and manage the progress of
            background checks for job candidates. It provides a centralized view
            of verification status, enabling HR teams to monitor whether a
            candidate's background check is in progress, completed, or pending,
            ensuring a smooth and timely hiring process.
          </p>
        </div>
        <div className="service-consultant-box">
          <p className="bigheadinginmaincontent">BFSI Hiring</p>
          <p className="logo-content">
            Yunify provides specialized recruitment solutions for the BFSI
            (Banking, Financial Services, and Insurance) sector. They offer a
            comprehensive hiring process that caters to the unique demands of
            this industry, helping businesses find top talent in roles ranging
            from finance and banking professionals to insurance specialists.
            With a focus on quality, efficiency, and industry-specific
            expertise, Yunify ensures that the right candidates are matched with
            the right organizations in the BFSI space.{" "}
          </p>
        </div>
        <div className="service-consultant-box">
          <p className="bigheadinginmaincontent">NBFC Hirinng</p>
          <p className="logo-content">
            Yunify is an emerging platform that partners with Non-Banking
            Financial Companies (NBFCs) to offer dynamic hiring solutions. With
            a focus on delivering talent across various roles in the financial
            services industry, Yunify ensures that NBFCs can quickly fill
            positions with skilled professionals.{" "}
          </p>
        </div>
        <div className="service-consultant-box">
          <p className="bigheadinginmaincontent">Warehouse</p>
          <p className="logo-content">
            Yunify offers cybersecurity solutions to protect your business from
            threats.
          </p>
        </div>
        <div className="service-consultant-box">
          <p className="bigheadinginmaincontent">BPO</p>
          <p className="logo-content">
            Yunify Deliver is a solution designed to streamline and enhance
            delivery services for BPO (Business Process Outsourcing) staff. It
            simplifies logistics, ensuring efficient and timely distribution of
            materials, documents, or packages within the workplace. This system
            boosts productivity by improving communication, tracking, and
            coordination for a smooth operational flow.
          </p>
        </div>
        <div className="service-consultant-box">
          <p className="bigheadinginmaincontent">Retail Loyalty programme</p>
          <p className="logo-content">
            Yunify Deliver for Retail Loyalty Programs is a service designed to
            enhance the delivery experience for customers involved in retail
            loyalty schemes. It seamlessly integrates delivery logistics with
            loyalty program features, ensuring that rewards, promotions, or
            special offers are delivered to customers quickly and efficiently.
            This helps retailers build stronger customer relationships by
            providing timely, personalized service while boosting customer
            satisfaction and engagement with the loyalty program
          </p>
        </div>
        <div className="service-consultant-box">
          <p className="bigheadinginmaincontent">labour Contract</p>
          <p className="logo-content">
            Yunify Manage Labour Contract is a comprehensive solution designed
            to streamline the management of labor contracts. It helps
            organizations efficiently create, track, and manage contracts with
            employees or contractors, ensuring compliance, timely renewals, and
            clear communication of terms
          </p>
        </div>
        <div className="service-consultant-box">
          <p className="bigheadinginmaincontent">Visual Merchandising</p>
          <p className="logo-content">
            Yunify Deliver for Visual Merchandising Programs is a delivery
            solution tailored to streamline the distribution of visual
            merchandising materials, such as displays, signage, and promotional
            items. It ensures that these materials reach retail locations on
            time and in perfect condition, supporting cohesive and impactful
            store presentations. This service helps retailers maintain
            consistent branding, enhance the customer shopping experience, and
            execute effective visual merchandising strategies across multiple
            locations
          </p>
        </div>
        <div className="service-consultant-box">
          <p className="bigheadinginmaincontent">Telecommunication</p>
          <p className="logo-content">
            Yunify Provide for Telecommunications is a solution designed to
            streamline the delivery and management of telecom services. It
            offers businesses seamless connectivity, ensuring reliable
            communication infrastructure and support for voice, data, and
            internet services. This solution helps optimize telecom operations,
            improve service delivery, and enhance overall performance for both
            employees and customers
          </p>
        </div>
        <div className="service-consultant-box">
          <p className="bigheadinginmaincontent">Security Provider</p>
          <p className="logo-content">
            Yunify Security Services Provider offers comprehensive security
            solutions to protect businesses from physical and digital threats.
            This service includes risk assessments, surveillance, access
            control, and cybersecurity measures, ensuring robust protection for
            both company assets and data. Yunify Security Services helps
            businesses maintain a secure environment, prevent security breaches,
            and ensure compliance with industry standards.
          </p>
        </div>
        <div className="service-consultant-box">
          <p className="bigheadinginmaincontent">Software Solutions</p>
          <p className="logo-content">
            Yunify Deliver offers comprehensive software solutions designed to
            address a wide range of business needs. From custom development to
            integration and support, it delivers scalable, efficient software
            that enhances operational efficiency, improves workflow, and drives
            innovation. This all-in-one solution is tailored to meet the unique
            requirements of various industries, ensuring businesses can achieve
            their goals with ease and precision.
          </p>
        </div>
        <div className="service-consultant-box">
          <p className="bigheadinginmaincontent">Content creating</p>
          <p className="logo-content">
            Yunify Deliver offers comprehensive content creation services
            designed to produce high-quality, engaging content for businesses.
            From articles and blogs to videos and social media posts, it
            provides a full range of content solutions tailored to meet
            marketing and communication goals. This service helps businesses
            effectively connect with their audience, enhance brand presence, and
            drive engagement across multiple platforms.
          </p>
        </div>
      </section>
      {/* ---------- */}


      <footer className="footer">

        <div className="footer-bottom">
          <p> Yunify HR & IT Solutions &copy; {new Date().getFullYear()} original. </p>
          <p>Follow Us:</p>

        </div>

        {/* New Column for Social Media Icons */}
        <div className="link-column">
          <ul className="list-unstyled d-flex justify-content-center">
            <li className="mx-2">
              <a href="https://www.facebook.com/p/Yunify-61569461881722/" className="ptagg" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faFacebookF} className="social-icon" style={{ color: '#3b5998', fontSize: '30px' }} />
              </a>
            </li>
            <li className="mx-2">
              <a href="https://twitter.com/YOUR_COMPANY_HANDLE" className="ptagg" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faTwitter} className="social-icon" style={{ color: '#1da1f2', fontSize: '30px' }} />
              </a>
            </li>
            <li className="mx-2">
              <a href="https://www.instagram.com/yunify_2024/p/DDb3ji2vmAv/" className="ptagg" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faInstagram} className="social-icon" style={{ color: '#e1306c', fontSize: '30px' }} />
              </a>
            </li>
            <li className="mx-2">
              <a href="https://in.linkedin.com/in/yunify-hr-and-it-solution-20b704341" className="ptagg" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faLinkedinIn} className="social-icon" style={{ color: '#0072b1', fontSize: '30px' }} />
              </a>
            </li>
            <li className="mx-2">
              <a href="https://www.youtube.com/c/YOUR_COMPANY_CHANNEL" className="ptagg" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faYoutube} className="social-icon" style={{ color: '#FF0000', fontSize: '30px' }} />
              </a>
            </li>
            <li className="mx-2">
              <a href="contact@yunify.in" className="ptagg" target="_blank" rel="noopener noreferrer" >
                <FontAwesomeIcon icon={faEnvelope} className="social-icon" style={{ color: "#DB4437", fontSize: "30px" }} />
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
};

export default Services;
