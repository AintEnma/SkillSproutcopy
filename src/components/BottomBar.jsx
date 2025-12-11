import React from 'react';
import LogoLoop from './LogoLoop.jsx'; // Explicit extension often helps in some Vite setups, though usually auto-resolved
import { 
  FaPalette, 
  FaGuitar, 
  FaFutbol, 
  FaCut, 
  FaLanguage, 
  FaSpa 
} from 'react-icons/fa';

const BottomBar = () => {
  // Define data
  const serviceItems = [
    { id: 1, label: 'Arts', icon: <FaPalette /> },
    { id: 2, label: 'Music', icon: <FaGuitar /> },
    { id: 3, label: 'Sports', icon: <FaFutbol /> },
    { id: 4, label: 'Crafts', icon: <FaCut /> },
    { id: 5, label: 'Languages', icon: <FaLanguage /> },
    { id: 6, label: 'Wellness', icon: <FaSpa /> },
  ];

  return (
    <section className="bottom-bar">
      <LogoLoop 
        logos={serviceItems} 
        speed={100} 
        direction="left"
        gap={60} 
        pauseOnHover={true}
        logoHeight={60}
        
        // Render Function
        renderItem={(item) => (
          <div className="service-item">
            {/* These classes will pick up your existing styles from index.css or App.css */}
            <span className="service-icon">
              {item.icon}
            </span>
            <span>{item.label}</span>
          </div>
        )}
      />
    </section>
  );
};

export default BottomBar;