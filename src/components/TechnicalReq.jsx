import React from "react";

// Technical stack and requirements for the project
const TechnicalReq = () => {
  return (
    <>
      <div className="technical-requirement">
        <h3 className="h3">Technical Requirements</h3>

        <div className="tech-stack">

          {/* Tech stack */}
          <div className="tech">
            <p className="technology">
              <i className="fa-brands fa-python"></i> Python,{" "}
              <img src="https://huggingface.co/front/assets/huggingface_logo-noborder.svg" alt="" />{" "}
              Hugging Face Transformers
            </p>
            {/* Add new technology button */}
            <button>
              <i className="fa-solid fa-plus"></i>
            </button>
          </div>

          {/* framework badge */}
          <div>
            <span className="Framework">
              <i className="fa-brands fa-node-js"></i> Node.js, Express.js
            </span>
          </div>

        </div>
      </div>
    </>
  );
};

export default TechnicalReq;