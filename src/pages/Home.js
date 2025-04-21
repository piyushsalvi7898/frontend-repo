// import React, { useEffect, useRef, useState } from "react";
import { Container, Row, Col, Button } from 'react-bootstrap';
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

// import bigimage3 from "../assets/images/bigimage3.jpg"; 

const Home = () => {
  // const scrollRef = useRef(null);
  // const [counter, setCounter] = useState(998); // Initial counter value

  // // Effect for scroll animation
  // useEffect(() => {
  //   const scrollContainer = scrollRef.current;
  //   let scrollAmount = 0;

  //   const scrollImages = () => {
  //     if (scrollContainer) {
  //       scrollAmount += 1; // Adjust the speed of scrolling
  //       scrollContainer.scrollLeft = scrollAmount;

  //       // Reset scroll position to create a continuous effect
  //       if (
  //         scrollAmount >=
  //         scrollContainer.scrollWidth - scrollContainer.clientWidth
  //       ) {
  //         scrollAmount = 0; // Reset to the start
  //       }
  //     }

  //     requestAnimationFrame(scrollImages);
  //   };

  //   scrollImages(); // Start the scrolling effect

  //   return () => {
  //     // Cleanup function (if needed)
  //   };
  // }, []);

  // // Start from 998 and increase by 1 every 4 seconds
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCounter((prevCounter) => prevCounter + 1); // Increase by 1
  //   }, 4000); // Every 4 seconds

  //   return () => clearInterval(interval); // Cleanup on component unmount
  // }, []);

  // const [commentCount, setCommentCount] = useState(254); // Start from 254

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCommentCount((prevCount) => prevCount + 1); // Increase by 1
  //   }, 5000); // Every 5 seconds

  //   return () => clearInterval(interval); // Cleanup on component unmount
  // }, []);

  // Array of different image paths
  // const images = [
  //   require("../assets/images/scroll1.jpg"),
  //   require("../assets/images/scroll2.jpg"),
  //   require("../assets/images/scroll3.jpg"),
  //   require("../assets/images/scroll4.jpg"),
  //   require("../assets/images/scroll5.jpg"),
  //   require("../assets/images/scroll6.jpg"),
  //   require("../assets/images/scroll7.jpg"),
  //   require("../assets/images/scroll8.jpg"),
  //   require("../assets/images/scroll9.jpg"),
  //   require("../assets/images/scroll10.jpg"),
  // ];
 
    const handleTryAgain = () => {
        // Page refresh or any other action can be added here
        window.location.reload();
    };


  return (
    <>
  <Container className="website-down-container">
            <Row className="justify-content-center">
                <Col md={8} className="text-center">
                    <h1 className="down-title">⚠️ Error: Website is Currently Down</h1>
                    <p className="down-message">
                        We are experiencing technical difficulties. Please try again later.
                    </p>
                    <div className="button-container">
                        <Button variant="primary" onClick={handleTryAgain}>
                            Try Again
                        </Button>
                        <Button variant="secondary" onClick={handleTryAgain}>
                            Refresh Page
                        </Button>
                    </div>
                </Col>
            </Row>
        </Container>

    </>
  );
};

export default Home;
