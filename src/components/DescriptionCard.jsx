import React from "react";

//  Project description and overview
const DescriptionCard = () => {
  return (
    <>
      <div className="description-card">
        <h2>Project Description</h2>
        {/* Project summary - model type, tech stack, and accuracy */}
        <p>
          Developed a deep learning–based system to classify news articles as
          real or fake using DistilBERT transformer architecture. Implemented
          data preprocessing, model training with PyTorch, and deployed an
          interactive Streamlit web application for real-time news verification,
          achieving 94% accuracy.
        </p>
      </div>
      
    </>
  );
};

export default DescriptionCard;