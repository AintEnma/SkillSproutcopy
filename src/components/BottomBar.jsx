import React from 'react';
// 1. Import the specific icons from the 'fa' (FontAwesome) pack
import { 
  FaPalette, 
  FaGuitar, 
  FaFutbol, 
  FaCut, 
  FaLanguage, 
  FaSpa 
} from 'react-icons/fa';

const BottomBar = () => {
  return (
    <section className="bottom-bar">
      <div className="services-grid">
        
        {/* Arts */}
        <div className="service-item">
          {/* 2. Replace emoji with the Icon Component */}
          <span className="service-icon">
            <FaPalette />
          </span>
          <span>Arts</span>
        </div>

        {/* Music */}
        <div className="service-item">
          <span className="service-icon">
            <FaGuitar />
          </span>
          <span>Music</span>
        </div>

        {/* Sports */}
        <div className="service-item">
          <span className="service-icon">
            <FaFutbol />
          </span>
          <span>Sports</span>
        </div>

        {/* Crafts (Using Scissors) */}
        <div className="service-item">
          <span className="service-icon">
            <FaCut />
          </span>
          <span>Crafts</span>
        </div>

        {/* Languages */}
        <div className="service-item">
          <span className="service-icon">
            <FaLanguage />
          </span>
          <span>Languages</span>
        </div>

        {/* Wellness (Using Spa/Lotus icon) */}
        <div className="service-item">
          <span className="service-icon">
            <FaSpa />
          </span>
          <span>Wellness</span>
        </div>

      </div>
    </section>
  );
};

export default BottomBar;
