import React from "react";
import "./HeadingCard.css";

const HeadingCard = () => {
  return (
    <>
      <div className="heading">
        <div className="heading-info">
          <h3 className="h3">AI Model Training</h3>
          <p>Machine Learning | Advanced | 6 weeks | $5000 USD</p>
        </div>
        <div className="heading-btn">
            <button className="submit"><i className="fa-solid fa-file-arrow-up"></i> Submit Work</button>
            <button className="cmt"><i className="fa-solid fa-comment"></i> Post Comment | ... </button>           
        </div>
      </div>
    </>
  );
};

export default HeadingCard;
