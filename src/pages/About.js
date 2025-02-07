import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFacebookF,
    faTwitter,
    faInstagram,
    faLinkedinIn,
    faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

import "../css/About.css";

const About = () => {
    return (
        <>


            <div className="about-container">
                <h1>About Us</h1>
                <p>
                    Welcome to our company! We are dedicated to providing the best services
                    to our clients.
                </p>
                <section className="mission">
                    <h2>Our Mission</h2>
                    <p>Our mission is to deliver high-quality products and services that exceed our customers' expectations. We strive to innovate and improve continuously.</p>
                </section>

                <section className="vision">
                    <h2>Our Vision</h2>
                    <p>We envision a world where our solutions empower individuals and businesses to achieve their goals. We aim to be a leader in our industry, known for our commitment to excellence.</p>
                </section>

                <section className="team">
                    <h2>Meet Our Team</h2>
                    <div className="team-container">
                        <div className="team-member">
                            <img src={require('../assets/images/CEO2.jpg')} alt="CEO" className="team-image" />
                            <h3 className="team-title">CEO</h3>
                            <p className="team-name">PIYUSH</p>
                        </div>
                        {/* <div className="team-member">
                        <img src={require('../assets/images/CEO.jpg')} alt="CTO" className="team-image" />
                        <h3 className="team-title">CTO</h3>
                        <p className="team-name">PIYUSH2</p>
                    </div> */}
                    </div>
                </section>

                <section className="values">
                    <h2>Our Values</h2>
                    <ul>
                        <li>Integrity: We uphold the highest standards of integrity in all our actions.</li>
                        <li>Customer Commitment: We develop relationships that make a positive difference in our customers' lives.</li>
                        <li>Quality: We provide outstanding products and unsurpassed service that, together, deliver premium value to our customers.</li>
                        <li>Teamwork: We work together, across boundaries, to meet the needs of our customers and to help the company win.</li>
                        <li>Respect for People: We value our people, encourage their development, and reward their performance.</li>
                    </ul>
                </section>

                <section className="history">
                    <h2>Our History</h2>
                    <p>Founded in 2010, our company has grown from a small startup to a leading provider in our industry. Our journey has been marked by innovation, dedication, and a commitment to our customers.</p>
                </section>



                {/* Footer */}


            </div>

            {/* ====== */}
            <footer className="footer">
                <div className="footer-bottom">
                    <p>
                        {" "}
                        Yunify HR & IT Solutions &copy; {new Date().getFullYear()} original.{" "}
                    </p>
                    <p>Follow Us:</p>
                </div>

                {/* New Column for Social Media Icons */}
                <div className="link-column">
                    <ul className="list-unstyled d-flex justify-content-center">
                        <li className="mx-2">
                            <a
                                href="https://www.facebook.com/p/Yunify-61569461881722/"
                                className="ptagg"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FontAwesomeIcon
                                    icon={faFacebookF}
                                    className="social-icon"
                                    style={{ color: "#3b5998", fontSize: "30px" }}
                                />
                            </a>
                        </li>
                        <li className="mx-2">
                            <a
                                href="https://twitter.com/YOUR_COMPANY_HANDLE"
                                className="ptagg"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FontAwesomeIcon
                                    icon={faTwitter}
                                    className="social-icon"
                                    style={{ color: "#1da1f2", fontSize: "30px" }}
                                />
                            </a>
                        </li>
                        <li className="mx-2">
                            <a
                                href="https://www.instagram.com/yunify_2024/p/DDb3ji2vmAv/"
                                className="ptagg"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FontAwesomeIcon
                                    icon={faInstagram}
                                    className="social-icon"
                                    style={{ color: "#e1306c", fontSize: "30px" }}
                                />
                            </a>
                        </li>
                        <li className="mx-2">
                            <a
                                href="https://in.linkedin.com/in/yunify-hr-and-it-solution-20b704341"
                                className="ptagg"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FontAwesomeIcon
                                    icon={faLinkedinIn}
                                    className="social-icon"
                                    style={{ color: "#0072b1", fontSize: "30px" }}
                                />
                            </a>
                        </li>
                        <li className="mx-2">
                            <a
                                href="https://www.youtube.com/c/YOUR_COMPANY_CHANNEL"
                                className="ptagg"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FontAwesomeIcon
                                    icon={faYoutube}
                                    className="social-icon"
                                    style={{ color: "#FF0000", fontSize: "30px" }}
                                />
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

export default About;
