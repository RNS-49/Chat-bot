import React from 'react';
import '../styles/features.css';


function Features() {
  return (
    <div className='container-fluid'>
      <div className='features-sec text-center'>
        <h2 className='features-head'>Features</h2>
      </div>

      <div className='row justify-content-center'>
        <div className='features-cards  col-md-4 col-6 text-center'>
          <i className="fa-solid fa-comments fa-fade"></i>
          <h6>Smart AI Conversation</h6>
        </div>

        <div className='features-cards  col-md-4 col-6 text-center'>
          <i className="fa-solid fa-bolt fa-fade"></i>
          <h6>Instant & Accurate</h6>
        </div>

        <div className='features-cards  col-md-4 col-6 text-center'>
          <i className="fa-solid fa-shield-alt fa-fade"></i>
          <h6>Secure & Private</h6>
        </div>

        <div className='features-cards  col-md-4 col-6 text-center'>
          <i className="fa-solid fa-globe fa-fade"></i>
          <h6>Multi-Language Support</h6>
        </div>

        <div className='features-cards  col-md-4 col-6 text-center'>
          <i className="fa-solid fa-cogs fa-fade"></i>
          <h6>Customizable & Scalable</h6>
        </div>

        <div className='features-cards  col-md-4 col-6 text-center'>
          <i className="fa-solid fa-brain fa-fade"></i>
          <h6>Continuous Learning & Improvement</h6>
        </div>
      </div>
    </div>
  );
}

export default Features;