import React, { useState } from "react";
import axios from "axios";
import "../css/Contact.css"; // Add CSS file
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram, faLinkedinIn, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";


const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        companyName: "",
        contactNo: "",
        email: "",
        service: "",
        message: "",
    });

    const [responseMessage, setResponseMessage] = useState(null);
    const [isError, setIsError] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await axios.post("http://localhost:8000/api/contacts", formData, {
                headers: { "Content-Type": "application/json" },
            });

            setResponseMessage("Form submitted successfully!");
            setIsError(false);

            // Reset form
            setFormData({
                name: "",
                companyName: "",
                contactNo: "",
                email: "",
                service: "",
                message: "",
            });
        } catch (error) {
            console.error("Error submitting form:", error.response ? error.response.data : error.message);
            setResponseMessage("Failed to submit the form. Please try again.");
            setIsError(true);
        }
    };

    return (
        <>
            <div className="contact-container">
                <h1>Contact Us</h1>
                <p>We would love to hear from you! Please reach out with any questions or comments.</p>

                {responseMessage && (
                    <p className={`response-message ${isError ? "error" : "success"}`}>
                        {responseMessage}
                    </p>
                )}

                <form onSubmit={handleSubmit} className="contact-form">
                    <div className="form-group">
                        <label htmlFor="name">Name:</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="companyName">Company Name:</label>
                        <input
                            type="text"
                            id="companyName"
                            name="companyName"
                            value={formData.companyName}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="contactNo">Contact No:</label>
                        <input
                            type="tel"
                            id="contactNo"
                            name="contactNo"
                            value={formData.contactNo}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="service">Services:</label>
                        <select id="service" name="service" value={formData.service} onChange={handleChange} required>

                            <option value="">Select a service</option>
                            <option value="retail_hiring">Retail Hiring</option>
                            <option value="marketing">Marketing</option>
                            <option value="recruitment">Recruitment</option>
                            <option value="background_verification">Background Verification</option>
                            <option value="bfsi_hiring">BFSI Hiring</option>
                            <option value="nbfc_hiring">NBFC Hiring</option>
                            <option value="blue_collar">Warehouse </option>
                            <option value="support_staff">BPO</option>
                            <option value="retail_loyalty_program">Retail Loyalty Program</option>
                            <option value="visual_merchandising">Visual Merchandising</option>
                            <option value="labour_contract">Labour Contract</option>
                            <option value="telecommunication">Telecommunication</option>
                            <option value="security_provider">Security Provider</option>
                        </select>

                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Message:</label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                        ></textarea>
                    </div>
                    <button type="submit" class="button">Submit</button>

                </form>

              

            </div>
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

export default Contact;
