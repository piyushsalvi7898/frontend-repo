import React from 'react';
import "../css/FakeCompanyWarning.css";
import "../css/Home.css";

import chorImage from '../assets/images/chor.jpg'; // Image of the person

const Home = () => {
  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100 bg-dark text-white p-4">
      <div className="warning-box shadow-lg p-4 rounded text-center">
        <h2 className="mb-3 text-warning display-5">⚠️ <strong>FAKE COMPANY | फेक कंपनी</strong></h2>

        <img
          src={chorImage}
          alt="Chor"
          className="img-fluid mb-2"
          style={{ maxWidth: '200px', border: '3px solid red', borderRadius: '8px' }}
        />
<div
  className="text-danger fs-4 mb-4"
  style={{ fontWeight: '900', letterSpacing: '2px' }}
>
  Yogesh  चोर
</div>



        <p className="fs-5">
          This is a <strong className="text-danger" style={{ fontSize: '2rem' }}>FAKE COMPANY</strong> that does not pay its employees.<br />
          यह एक <strong className="text-danger">फेक कंपनी</strong> है जो अपने कर्मचारियों को पैसा नहीं देती।
        </p>

        <p className="mt-4 text-light fs-5">
          It disappeared suddenly from its old location without informing anyone.<br />
          यह कंपनी बिना बताए अचानक अपनी पुरानी जगह से गायब हो गई।
        </p>

        <p className="mt-3 text-info fs-6">
          This information is being shared in public interest.<br />
          यह जानकारी जनहित में साझा की जा रही है।
        </p>
      </div>
    </div>
  );
};

export default Home;
