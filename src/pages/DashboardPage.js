// src/DashboardPage.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

// import React, { useEffect, useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faFacebookF, faTwitter, faInstagram, faLinkedinIn, faYoutube } from '@fortawesome/free-brands-svg-icons';

import "../css/Dashboard.css";

const DashboardPage = ({ isOwner }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [passwordError, setPasswordError] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://backend-repo.onrender.com/api/contacts'); 

        setData(response.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    if (isAuthenticated) {
      fetchData();
    }
  }, [isAuthenticated]);

  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    const correctPassword = 'yunify@2025'; // Change this to your actual password logic

    if (password === correctPassword) {
      setIsAuthenticated(true);
      setPasswordError('');
    } else {
      setPasswordError('Incorrect password. Please try again.');
    }
  };

  if (!isOwner) {
    return <div>You do not have permission to view this page.</div>;
  }

  if (!isAuthenticated) {
    return (
      <>
        <div className="PasswordForm-container">
          <div className="PasswordForm-form-container">
            <h1 className="PasswordForm-title">Enter Password to Access Dashboard</h1>
            <p className="PasswordForm-description">
              This page is exclusively for authorized personnel. Please enter your password to proceed.
            </p>
            <form onSubmit={handlePasswordSubmit}>
              <input
                type="password"
                className="PasswordForm-input"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password"
                required
              />
              <button type="submit" className="PasswordForm-button">Submit</button>
            </form>
            {passwordError && (
              <div className="PasswordForm-error" style={{ color: 'red' }}>
                {passwordError}
              </div>


            )}
          </div>
        </div>


  {/* ================ */}
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
  }

  if (loading) return <div className="loading">Loading...</div>;
  if (error) return <div className="error">Error: {error}</div>; if (error) return <div>Error: {error}</div>;

  return (

    <div className="Dashboard-container">
      <h1 className="Dashboard-title">Dashboard</h1>
      <table className="Dashboard-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Company Name</th>
            <th>Contact No</th>
            <th>Email</th>
            <th>Service</th>
            <th>Message</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item._id}>
              <td>{item.name}</td>
              <td>{item.companyName}</td>
              <td>{item.contactNo}</td>
              <td>{item.email}</td>
              <td>{item.service}</td>
              <td>{item.message}</td>
            </tr>
          ))}
        </tbody>
      </table>


    </div>

  );
};

export default DashboardPage;


// C:\Users\Lenovo\Documents\GitHub