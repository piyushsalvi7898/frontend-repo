<div className="home-container">
{/* Company Info Box */}

<div className="video-container">
  <video className="home-video" autoPlay loop muted>
    <source src={mainVideo} type="video/mp4" />
    Your browser does not support the video tag.
  </video>
</div>



{/* Product Stats Section */}
<div className="threeeboxcontainer">
  <div className="product-grid">
    <div className="product">
      <div className="product-info">
        <div className="views">
          <div>
            <p className="viewsp1">{counter}</p>
            <p className="viewsp2"> Daily views</p>
          </div>
          <div>
            <FontAwesomeIcon icon={faEye} style={{ color: "#34A853" }} />
          </div>
        </div>
      </div>
    </div>

    <div className="product">
      <div className="product-info">
        <div className="views">
          <div>
            <p className="viewsp1">2000+</p>
            <p className="viewsp2">candidates</p>
          </div>
          <div>
            <FontAwesomeIcon
              icon={faShoppingCart}
              style={{ color: "#FFC107" }}
            />
          </div>
        </div>
      </div>
    </div>

    <div className="product">
      <div className="product-info">
        <div className="views">
          <div>
            <p className="viewsp1">{commentCount}</p>
            <p className="viewsp2">comments</p>
          </div>
          <div>
            <FontAwesomeIcon
              icon={faComment}
              style={{ color: "#2196F3" }}
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

{/* -------------------- */}



{/* ----------------- */}

<section className="bpo-consultant-section">
  <div className="bpo-consultant-box">
    <img src={bpo1} alt="Description of image" className="logo-image" />
    <p className="bigheadinginmaincontent">Salesforce Solutions</p>
    <p className="logo-content">
      Yunify offers expert Salesforce outsourcing services, providing
      businesses with trained professionals who drive sales, nurture
      client relationships, and boost revenue. With a focus on efficiency
      and results, Yunify helps companies expand their reach and
      streamline their sales processes, all while reducing
      operational costs.
    </p>
  </div>
  <div className="bpo-consultant-box">
    <img src={bpo2} alt="Description of image" className="logo-image" />
    <p className="bigheadinginmaincontent">Recruitment Agency</p>
    <p className="logo-content">
      Yunify offers comprehensive recruitment services, helping businesses
      find the right talent for their needs. From sourcing and screening
      candidates to handling the entire hiring process, Yunify ensures you
      build a skilled and dedicated team that aligns with your company's
      goals and culture.
    </p>
  </div>

  <div className="bpo-consultant-box">
    <img src={bpo3} alt="Description of image" className="logo-image" />
    <p className="bigheadinginmaincontent">Digital Marketing Solutions</p>
    <p className="logo-content">
      Yunify is a cutting-edge digital marketing agency specializing in
      creating customized strategies that drive growth and elevate brand
      presence. With expertise in SEO, social media management, paid
      advertising, and content marketing, Yunify helps businesses reach
      their target audience and achieve measurable success in the
      digital landscape.
    </p>
  </div>
  <div className="bpo-consultant-box">
    <img src={bpo4} alt="Description of image" className="logo-image" />
    <p className="bigheadinginmaincontent"> Website Solutions </p>
    <p className="logo-content">

      Yunify offers innovative website solutions that combine design,
      functionality, and performance to deliver seamless user experiences.
      From custom-built websites to eCommerce platforms, Yunify ensures
      your online presence is engaging, mobile-friendly, and optimized for
      success, helping your business stand out in the digital world
    </p>
  </div>
</section>




{/* Image Scrolling Section */}
<div className="image-scrolling-container" ref={scrollRef}>
  <div className="image-scroll">
    {images.map((image, index) => (
      <img
        key={index}
        src={image}
        alt={`Image ${index + 1}`}
        className="scroll-image"
      />
    ))}
  </div>

  {/* Floating Bubbles */}
  <div className="bubble">Yunify</div>
  <div className="bubble"></div>
  <div className="bubble"></div>
  <div className="bubble"></div>
  <div className="bubble"></div>
</div>






{/* ------------------------- */}

<div className="bigsection">
  <div className="left-box">
    <h2>Comprehensive Business Solutions</h2>
    <p>
      Our company offers a range of comprehensive solutions tailored to
      meet your business needs. From Salesforce solutions that streamline
      operations to recruitment services that connect you with top talent,
      we ensure your organization thrives. Our digital marketing
      strategies enhance your online presence, driving engagement and
      growth. Additionally, we provide custom website development to
      create a strong digital identity. Trust us to deliver innovative
      solutions that empower your business and foster success in a
      competitive landscape.
    </p>
  </div>
  <div className="right-box">
    <img src={bigimage3} alt="Description of image" />
  </div>
</div>

{/* ------------------------------ */}
<footer className="footer">
  <div className="footer-container">
    {/* Left Side - Quick Links */}
    <div className="footer-content">
      <div className="footer-column">
        <h3>Quick Links</h3>
        <ul className="footer-links-column">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About Us</a>
          </li>
          <li>
            <a href="/services">Services</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
          <li>
            <a href="/our-clients">Our Clients</a>
          </li>
        </ul>
      </div>
    </div>

    {/* Right Side - Contact Info */}
    <div className="footer-column">
      <h5>Address:</h5>
      <p className="ptagsmallsize">
        3/9 2nd Floor Mahakal Traders In front of Subhash Nagar,  <br></br>{" "}
        Water Tank Near By Pardeshipura Gendeshwar Dham temple Indore,
        India
      </p>
      <h5>Phone:</h5>
      <p className="ptagsmallsize"> +91 94248-06680</p>
      <h5>Email:</h5>
      <p className="ptagsmallsize">
        <a href="mailto:contact@yunify.in">contact@yunify.in</a>
      </p>
    </div>
  </div>

  <hr />

  {/* Footer Bottom */}
  <div className="footer-bottom">
    <div className="footer-column">
      <p>Follow Us:</p>
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
        <li clasocial-iconssName="mx-2">
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
            href="https://www.youtube.com/results?search_query=yunify+hr+nd+it+solutions"
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
          <a href="mailto:contact@yunify.in" className="ptagg">
            <FontAwesomeIcon
              icon={faEnvelope}
              className="social-icon"
              style={{ color: "#DB4437", fontSize: "30px" }}
            />
          </a>
        </li>
      </ul>
    </div>

    <p>© 2024 Yunify. All Rights Reserved.</p>
  </div>


  
</footer>
</div>