import React, { useEffect, useRef } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram, faLinkedinIn, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

import "../css/OurClients.css"; // Import CSS file

// Import images
import brand1 from "../assets/brands/brand1.jpg";
import brand2 from "../assets/brands/brand2.jpg";
import brand3 from "../assets/brands/brand3.jpg";
import brand4 from "../assets/brands/brand4.jpg";
import brand5 from "../assets/brands/brand5.jpg";
import brand6 from "../assets/brands/brand6.jpg";
import brand7 from "../assets/brands/brand7.jpg";
import brand8 from "../assets/brands/brand8.jpg";
import brand9 from "../assets/brands/brand9.jpg";
import brand10 from "../assets/brands/brand10.jpg";
import brand11 from "../assets/brands/brand11.jpg";
import brand12 from "../assets/brands/brand12.jpg";
import brand13 from "../assets/brands/brand13.jpg";
import brand14 from "../assets/brands/brand14.jpg";
import brand15 from "../assets/brands/brand15.jpg";

const clients = [
  { image: brand1, name: "Insta Connect", description: "A leading social media platform." },
  { image: brand2, name: "L&T Finance", description: "Financial services and solutions." },
  { image: brand3, name: "ICICI Bank", description: "One of the largest private banks in India." },
  { image: brand4, name: "Elasticrum", description: "Innovative solutions for businesses." },
  { image: brand5, name: "Tea Delight", description: "Premium tea products." },
  { image: brand6, name: "Rasoi Queen", description: "Quality kitchen products." },
  { image: brand7, name: "D Mart", description: "Popular retail chain." },
  { image: brand8, name: "Anaxee", description: "Digital marketing solutions." },
  { image: brand9, name: "Imast", description: "Creative design agency." },
  { image: brand10, name: "Eureka Forbes", description: "Home appliances and water purifiers." },
  { image: brand11, name: "Tejas", description: "Leading educational services." },
  { image: brand12, name: "Navimuki", description: "Innovative tech solutions." },
  { image: brand13, name: "Club Mahindra", description: "Vacation ownership company." },
  { image: brand14, name: "Altruist", description: "Socially responsible brand." },
  { image: brand15, name: "Meesho", description: "E-commerce platform for resellers." },
];

const OurClients = () => {
  const scrollRef = useRef(null);
  const scrollSpeed = 1; // Adjust the speed of scrolling

  // Effect for scroll animation
  useEffect(() => {
    const scrollContainer = scrollRef.current;

    const scrollImages = () => {
      if (scrollContainer) {
        scrollContainer.scrollLeft += scrollSpeed; // Scroll to the right
        // Reset scroll position to create a continuous effect
        if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
          scrollContainer.scrollLeft = 0; // Reset to the start
        }
      }

      requestAnimationFrame(scrollImages);
    };

    scrollImages(); // Start the scrolling effect

    return () => {
      // Cleanup function (if needed)
    };
  }, []);

  return (
    <>
      <div className="clients-container">
        <h2>Our Clients</h2>
        <div className="clients-box">
          <div className="clients-scroll" ref={scrollRef}>
            {clients.concat(clients).map((client, index) => ( // Duplicate for seamless scrolling
              <div key={index}>
                <div className="image-container">
                  <img src={client.image} alt={client.name} />
                </div>
              </div>
            ))}
          </div>
        </div>




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
        </section>


      </div>


      {/* ==================== */}
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

export default OurClients;










// ===============================================
// ===============================================



// .clients-container {
//     text-align: center;
//   }
  
//   .clients-box {
//     width: 100%;
//     overflow: hidden;
//     /* Hide overflow */
//     background: #f0f0f0;
//     border-radius: 10px;
//     box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
//     position: relative;
//     border: 5px #3331;
//   }
  
//   /* Horizontal scrolling */
//   .clients-scroll {
//     display: flex;
//     gap: 20px;
//     padding: 10px;
//     white-space: nowrap;
//     scroll-behavior: smooth;
//     overflow: hidden;
//   }
  

  
//   .image-container {
//     border: 1.5px solid rgba(51, 51, 51, 0.2);
//     /* Light shadow color */
//     box-shadow: 0px 0px 15px rgba(51, 51, 51, 0.4);
//     /* Darker shadow */
//     width: 120px;
//     height: 120px;
//     overflow: hidden;
//     border-radius: 10px;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     background-color: #ffffff;
//   }
  
//   .image-container img {
//     width: 100%;
//     height: 100%;
//     object-fit: contain;
//     /* Ensures uniform size */
//   }
  
//   .client-name {
//     margin-top: 5px;
//     font-size: 14px;
//     font-weight: bold;
//     color: #333;
//   }
  
//   /* --------------- */
  
//   .clients-wrapper {
//     text-align: center;
//     padding: 20px;
//   }
  
//   /* Title Box */
//   .clients-title-box {
//     background: #007bff;
//     color: white;
//     padding: 10px;
//     font-size: 24px;
//     font-weight: bold;
//     border-radius: 10px;
//     box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
//     display: inline-block;
//   }
  
//   /* Scrolling Container */
//   .clients-box {
//     width: 100%;
//     overflow: hidden;
//     background: #f0f0f0;
//     border-radius: 10px;
//     box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
//     position: relative;
//     padding: 10px;
//     margin-top: 20px;
//   }
  
//   /* Horizontal scrolling */
//   .clients-scroll {
//     display: flex;
//     gap: 20px;
//     white-space: nowrap;
//     overflow: hidden;
//   }
  
//   /* Individual Client Card */
//   .client-card {
//     width: 200px;
//     text-align: center;
//     background: white;
//     padding: 10px;
//     border-radius: 10px;
//     box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
//     flex-shrink: 0;
//   }
  
//   /* Image Container */
//   .image-container {
//     width: 180px;
//     height: 180px;
//     overflow: hidden;
//     border-radius: 10px;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     background-color: #ffffff;
//   }
  
//   .image-container img {
//     width: 100%;
//     height: 100%;
//     object-fit: contain;
//   }
  
//   /* Client Name */
//   .client-name {
//     margin-top: 5px;
//     font-size: 14px;
//     font-weight: bold;
//     color: #333;
//   }
  
//   /* ============================== */
  
//   .clients-container2 {
//     padding: 40px;
//     background-color: #f9f9f9;
//     /* Light background for contrast */
//     text-align: center;
//     /* Center the heading */
//   }
  
//   .clients-container2 h2 {
//     font-size: 2.5rem;
//     margin-bottom: 20px;
//     color: #333;
//     /* Darker color for the heading */
//   }
  
//   .client-images-grid {
//     display: flex;
//     flex-wrap: wrap;
//     /* Allow wrapping of items */
//     justify-content: flex-start;
//     /* Align items to the left */
//     gap: 20px;
//     /* Space between grid items */
//   }
  
//   .client-image-card {
//     display: flex;
//     align-items: center;
//     /* Center items vertically */
//     background-color: #fff;
//     /* White background for cards */
//     border-radius: 10px;
//     /* Rounded corners */
//     box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
//     /* Subtle shadow */
//     overflow: hidden;
//     /* Clip overflow */
//     transition: transform 0.3s ease;
//     /* Smooth hover effect */
//     width: calc(33.33% - 20px);
//     /* Responsive width for 3 items per row */
//     max-width: 300px;
//     /* Maximum width for each card */
//   }
  
//   .client-image-card:hover {
//     transform: scale(1.05);
//     /* Scale up on hover */
//   }
  
//   .image-container2 {
//     padding: 10px;
//     /* Padding inside the image container */
//   }
  
//   .image-container2 img {
//     width: 100%;
//     /* Full width */
//     height: 150px;
//     /* Fixed height for uniformity */
//     object-fit: cover;
//     /* Cover the area without distortion */
//     border-radius: 10px;
//     /* Rounded corners for images */
//     transition: transform 0.3s ease;
//     /* Smooth image hover effect */
//   }
  
//   .image-container2 img:hover {
//     transform: scale(1.1);
//     /* Scale up image on hover */
//   }
  
//   .client-description {
//     padding: 10px;
//     /* Padding for description */
//     text-align: left;
//     /* Align text to the left */
//   }
  
//   .client-description h3 {
//     font-size: 1.5rem;
//     /* Font size for client name */
//     margin: 0;
//     /* Remove default margin */
//     color: #333;
//     /* Dark color for the name */
//   }
  
//   .client-description p {
//     font-size: 1rem;
//     /* Font size for description */
//     color: #666;
//     /* Lighter color for the description */
//     margin: 5px 0 0;
//     /* Margin for spacing */
//   }
  
//   /* Responsive adjustments */
//   @media (max-width: 768px) {
//     .client-image-card {
//       width: calc(50% - 20px);
//       /* 2 items per row on smaller screens */
//     }
//   }
  
//   @media (max-width: 480px) {
//     .client-image-card {
//       width: 100%;
//       /* 1 item per row on very small screens */
//     }
//   }