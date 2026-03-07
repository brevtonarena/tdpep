import React from "react";

// Project heading 
const SubmitHeadingCard = () => {
  return (
    <>
      <div className="submit-heading">
        <div className="submit-heading-info">
          <h3 className="h3">
            <i className="fa-solid fa-bolt"></i> AI Model Training{" "}
            <i className="fa-solid fa-bars"></i>
          </h3>
          <p className="submit-heading-meta">
            <span className="tag-yellow"><i className="fa-solid fa-circle"></i> Machine Learning</span>{" "}
            <span><i className="fa-regular fa-circle-check"></i> Advanced</span>{" "}
            <span><i className="fa-solid fa-snowflake"></i> 4 weeks</span>{" "}
            <span><i className="fa-solid fa-suitcase"></i> <strong>$ 2,000</strong> USD</span>
          </p>
        </div>
      </div>
    </>
  );
};

export default SubmitHeadingCard;
