import React, { useState } from 'react';
import RSVPModal from './RSVPModal';

const ContactSection = () => {
  const [isRSVPModalOpen, setIsRSVPModalOpen] = useState(false);

  const handleRSVPClick = () => {
    setIsRSVPModalOpen(true);
  };

  const handleRSVPClose = () => {
    setIsRSVPModalOpen(false);
  };

  const handleRSVPSubmit = (formData) => {
    console.log('RSVP Data:', formData);
    // Logic xử lý RSVP sẽ được thêm vào đây
  };

  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        <div className="contact-header">
          <h2>GET IN TOUCH</h2>
        </div>
        
        <div className="contact-info">
          <div className="contact-person">
            <h3>THANH PHỤC</h3>
            <p>📞 0123 456 789</p>
            <p>✉️ thanhphuc@email.com</p>
          </div>
          
          <div className="contact-person">
            <h3>KHÁNH HẠ</h3>
            <p>📞 0987 654 321</p>
            <p>✉️ khanhha@email.com</p>
          </div>
        </div>
        
        <div className="rsvp-button">
          <button onClick={handleRSVPClick}>RSVP NOW</button>
        </div>
      </div>

      <RSVPModal 
        isOpen={isRSVPModalOpen}
        onClose={handleRSVPClose}
        onSubmit={handleRSVPSubmit}
      />
    </section>
  );
};

export default ContactSection;
