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
import brand16 from "../assets/brands/brand16.jpg"
import brand17 from "../assets/brands/brand17.jpg"


const clients = [

  { image: brand1, name: "Insta Connect" },
  { image: brand2, name: "L&T Finance" },
  { image: brand16, name: "NEW" },
  { image: brand17, name: "Turtle" },
  { image: brand3, name: "ICICI Bank" },
  { image: brand4, name: "Elasticrum" },
  { image: brand5, name: "Tea Delight" },
  { image: brand6, name: "Rasoi Queen" },
  { image: brand7, name: "D Mart" },
  { image: brand8, name: "Anaxee" },
  { image: brand9, name: "Imast" },
  { image: brand10, name: "Eureka Forbes" },
  { image: brand11, name: "Tejas" },
  { image: brand12, name: "Navimuki" },
  { image: brand13, name: "Club Mahindra" },
  { image: brand14, name: "Altruist" },
  { image: brand15, name: "Meesho" },


];

const OurClients = () => {
  const scrollRef = useRef(null);
  const autoScrollRef = useRef(null);
  const manualScrollRef = useRef(false); // Track manual interaction

  // Function to scroll left manually
  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
      manualScrollRef.current = true; // Mark as manual interaction
      restartAutoScroll();
    }
  };

  // Function to scroll right manually
  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
      manualScrollRef.current = true; // Mark as manual interaction
      restartAutoScroll();
    }
  };

  // Function to start auto-scrolling
  const startAutoScroll = () => {
    autoScrollRef.current = setInterval(() => {
      if (scrollRef.current) {
        // Auto-scroll forward
        scrollRef.current.scrollBy({ left: 10, behavior: "smooth" });

        // If we reach the end, reset to the beginning
        if (scrollRef.current.scrollLeft >= scrollRef.current.scrollWidth - scrollRef.current.clientWidth) {
          setTimeout(() => {
            scrollRef.current.scrollLeft = 0;
          }, 500); // Short delay to avoid abrupt jump
        }
      }
    }, 30); // Adjust speed
  };

  // Restart auto-scroll after manual interaction
  const restartAutoScroll = () => {
    clearInterval(autoScrollRef.current);
    setTimeout(() => {
      manualScrollRef.current = false; // Reset manual interaction flag
      startAutoScroll();
    }, 1000); // Restart auto-scroll after 3 seconds
  };

  // Detect manual scrolling
  useEffect(() => {
    const handleScroll = () => {
      if (scrollRef.current) {
        if (scrollRef.current.scrollLeft >= scrollRef.current.scrollWidth - scrollRef.current.clientWidth) {
          // If manual scroll reaches the end, restart from the beginning
          setTimeout(() => {
            scrollRef.current.scrollLeft = 0;
          }, 100);
        }
      }
    };

    scrollRef.current?.addEventListener("scroll", handleScroll);
    return () => scrollRef.current?.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    startAutoScroll(); // Start auto-scroll on mount
    return () => clearInterval(autoScrollRef.current); // Cleanup on unmount
  }, []);

  return (
    <>
      <div className="clients-container">
        <h2>Our Clients</h2>
        <div className="clients-box">
          {/* Scrollable Client Logos */}
          <div className="clients-scroll" ref={scrollRef}>
            {clients.map((client, index) => (
              <div key={index}>
                <div className="image-container">
                  <img src={client.image} alt={client.name} />
                </div>
              </div>
            ))}
          </div>

          {/* Scroll Buttons */}
          <button className="scroll-btn left btncolor" onClick={scrollLeft}>❮</button>
          <button className="scroll-btn right btncolor" onClick={scrollRight}>❯</button>
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
              role.
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
            <p className="bigheadinginmaincontent">NBFC Hiring</p>
            <p className="logo-content">
              Yunify is an emerging platform that partners with Non-Banking
              Financial Companies (NBFCs) to offer dynamic hiring solutions. With
              a focus on delivering talent across various roles in the financial
              services industry, Yunify ensures that NBFCs can quickly fill
              positions with skilled professionals.
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
