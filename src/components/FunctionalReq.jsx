import React from "react";

//  functional requirements 
const FunctionalReq = () => {
  return (
    <>
      <div className="requirements">
        <h3 className="h3">Functional Requirements</h3>

        {/* Req 1 - Data Processing */}
        <div className="requirement">
          <div className="item">
            <h4>1. Data Processing</h4>
            {/* Priority level badge */}
            <button> Medium</button>
          </div>
          <div className="descip">
            <p>Perform data augmentation and preprocessing, normalization, and splitting of datasets.</p>
          </div>
        </div>

        {/* Req 2 - Model Training */}
        <div className="requirement">
          <div className="item">
            <h4>2. Model Training</h4>
            {/* Priority level badge */}
            <button> High</button>
          </div>
          <div className="descip">
            <p>Train machine learning models using the processed datasets.</p>
          </div>
        </div>

      </div>
    </>
  );
};

export default FunctionalReq;