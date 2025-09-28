import React from 'react';

const InvitationSection = () => {
  return (
    <section className="invitation-section">
      <div className="invitation-container">
        <div className="building-illustration">
          <img src="/icon/bd.png" alt="Building Illustration" className="building-icon" />
        </div>
        
        <img src="/pre.png" alt="Decorative Ribbon" className="decorative-ribbon-image" />
        
        <div className="invitation-header">
          <h2>TRÂN TRỌNG KÍNH MỜI BẠN ĐẾN DỰ<br/>TIỆC CƯỚI CHUNG VUI CÙNG CHÚNG TÔI</h2>
          <h3>WE JOYFULLY INVITE YOU TO CELEBRATE THE LOVE OF STORY</h3>
        </div>
        
        <div className="event-details">
          <div className="time-info">
            <p>VÀO LÚC | CHỦ NHẬT | SUNDAY| 10H00</p>
          </div>
          <div className="date-main">28.12.2025</div>
          <div className="lunar-date">(NHẰM NGÀY 09 THÁNG 11 NĂM ẤT TỴ)</div>
        </div>
        
        <div className="location-details">
          <h3>SẢNH TAM KỲ</h3>
          <p>KHÁCH SẠN MƯỜNG THANH GRAND QUẢNG NAM</p>
          <p>SỐ 351A HÙNG VƯƠNG, PHƯỜNG TAM KỲ, TP. ĐÀ NẴNG</p>
        </div>

        {/* Google Maps - Directions */}
        <div className="map-embed">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4929.584311856586!2d108.48425117602957!3d15.560931752843143!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3169dcdb5292c3f9%3A0xa8ced55d195f20b7!2sMuong%20Thanh%20Grand%20Quang%20Nam%20Hotel!5e1!3m2!1sen!2s!4v1758639664640!5m2!1sen!2s" width="600" height="450" style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          <div className="map-actions">
            <a className="map-directions-btn" href="https://www.google.com/maps/dir/?api=1&destination=15.560931752843143,108.48425117602957" target="_blank" rel="noopener">Mở chỉ đường</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InvitationSection;
