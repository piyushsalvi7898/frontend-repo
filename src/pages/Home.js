import React from 'react';
import "../css/FakeCompanyWarning.css"; 
// import React, { useEffect, useRef, useState } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faEye,
//   faShoppingCart,
//   faComment,
// } from "@fortawesome/free-solid-svg-icons";
// // import { faFacebook, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';
// // import { Link } from 'react-router-dom';
// import {
//   faFacebookF,
//   faTwitter,
//   faInstagram,
//   faLinkedinIn,
//   faYoutube,
// } from "@fortawesome/free-brands-svg-icons";
// import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
// import mainVideo from "../assets/videos/main3.mp4";

import "../css/Home.css"; // Import the CSS file

// import myImage from '../assets/images/myImage.jpg';
// import bpo1 from "../assets/images/bpo1.jpg";
// import bpo2 from "../assets/images/bpo2.jpg";
// import bpo3 from "../assets/images/bpo3.jpg";
// import bpo4 from "../assets/images/bpo4.jpg";

// import bigimage3 from "../assets/images/bigimage3.jpg"; // This is correct if you are in src/pages

const Home = () => {
//   const scrollRef = useRef(null);
//   const [counter, setCounter] = useState(998); // Initial counter value

//   // Effect for scroll animation
//   useEffect(() => {
//     const scrollContainer = scrollRef.current;
//     let scrollAmount = 0;

//     const scrollImages = () => {
//       if (scrollContainer) {
//         scrollAmount += 1; // Adjust the speed of scrolling
//         scrollContainer.scrollLeft = scrollAmount;

//         // Reset scroll position to create a continuous effect
//         if (
//           scrollAmount >=
//           scrollContainer.scrollWidth - scrollContainer.clientWidth
//         ) {
//           scrollAmount = 0; // Reset to the start
//         }
//       }

//       requestAnimationFrame(scrollImages);
//     };

//     scrollImages(); // Start the scrolling effect

//     return () => {
//       // Cleanup function (if needed)
//     };
//   }, []);

//   // Start from 998 and increase by 1 every 4 seconds
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCounter((prevCounter) => prevCounter + 1); // Increase by 1
//     }, 4000); // Every 4 seconds

//     return () => clearInterval(interval); // Cleanup on component unmount
//   }, []);

//   const [commentCount, setCommentCount] = useState(254); // Start from 254

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCommentCount((prevCount) => prevCount + 1); // Increase by 1
//     }, 5000); // Every 5 seconds

//     return () => clearInterval(interval); // Cleanup on component unmount
//   }, []);

//   // Array of different image paths
//   const images = [
//     require("../assets/images/scroll1.jpg"),
//     require("../assets/images/scroll2.jpg"),
//     require("../assets/images/scroll3.jpg"),
//     require("../assets/images/scroll4.jpg"),
//     require("../assets/images/scroll5.jpg"),
//     require("../assets/images/scroll6.jpg"),
//     require("../assets/images/scroll7.jpg"),
//     require("../assets/images/scroll8.jpg"),
//     require("../assets/images/scroll9.jpg"),
//     require("../assets/images/scroll10.jpg"),
//   ];

  return (
<div className="d-flex justify-content-center align-items-center min-vh-100 bg-dark text-white p-4">
  <div className="warning-box shadow-lg p-4 rounded text-center">
    <h2 className="mb-4 text-warning display-4">⚠️ <strong>FAKE COMPANY</strong></h2>
    
    <p className="fs-5">
      This is a <strong className="text-danger" style={{ fontSize: '2rem' }}>FAKE COMPANY</strong> that does not pay its employees.
      It suddenly disappeared from its previous location without informing anyone.
    </p>

    <p className="mt-4 text-light fs-5">
      Please be cautious and avoid any business dealings with this company.
    </p>

    <p className="mt-3 text-info fs-6">
      This information is being shared in the public interest.
    </p>
  </div>
</div>


);
};

export default Home;
