import React, { useState, useEffect } from "react";
import { Link } from "gatsby";

import "./ConsentBanner.scss";

const ConsentBanner = () => {
  const [isAccepted, setIsAccpted] = useState(false);

  const accept = () => {
    setIsAccpted(true);
    localStorage.setItem("consent", true);
  };
  const dismiss = () => setIsAccpted(true);

  useEffect(() => {
    const consent = localStorage.getItem("consent");
  
    consent && setIsAccpted(consent);
  }, [setIsAccpted]);

  return (
    <div
      className="consent-banner"
      style={{ display: isAccepted ? "none" : "block" }}
    >
      <div className="container-fluid">
        <div className="row">
          <div  className=" consent-left">
            <h5 className="text-dark">This website uses cookies</h5>
            <p>
              By using our site, you acknowledge that you have read and
              understand our {" "}
              <Link to="/privacy/">Privacy Policy</Link>, and our{" "}
              <Link to="/terms/">Terms of Service</Link>.
            </p>
          </div>
          <div  className="   consent-right">
            <button style={{'backgroundColor':'#FF4C3B'}} className="btn btn-primary active btn-sm mt-1" aria-pressed="true"  aria-label="accept button" onClick={accept}>
              Accept
            </button>
            <button
            aria-label="dismiss button"
              className="btn btn-outline-secondary btn-sm"
              onClick={dismiss}
            >
              Dismiss
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConsentBanner;
