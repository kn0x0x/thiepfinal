import React from 'react';

const AnnouncementSection = () => {
  return (
    <section id="announcement" className="announcement-section">
      <div className="container">
        <div className="announcement-header">
          <h2 className="announcement-title">TRÂN TRỌNG THÔNG BÁO TIN LỄ THÀNH HÔN CỦA CHÚNG TÔI</h2>
          <h3 className="announcement-subtitle">SINCERELY ANNOUNCE OUR WEDDING CEREMONY</h3>
        </div>
        
        <div className="main-content">
          <div className="left-column">
            <div className="family-info">
              <p className="family-label">Nhà trai</p>
              <p className="parent-name">NGUYỄN XUÂN QUANG</p>
              <p className="parent-name">LÊ THỊ NGỌC LAN</p>
            </div>
            
            <div className="couple-names-main">
              <h1 className="groom-name">THANH PHỤC</h1>
              <div className="ampersand-main">&</div>
              <h1 className="bride-name">KHÁNH HẠ</h1>
            </div>
            
            <div className="family-info">
              <p className="family-label">Nhà gái</p>
              <p className="parent-name">DƯƠNG CÔNG KHANH</p>
              <p className="parent-name">TRƯƠNG THỊ THUÝ HƯƠNG</p>
            </div>
          </div>
          
          <div className="center-image">
            <img src="/Album.jpg" alt="Wedding Photo" className="wedding-photo" />
          </div>
          
          <div className="right-column">
            <div className="date-info">
              <div className="date-main">29.12.2025</div>
              <div className="date-english">DECEMBRE 29th 2025</div>
              <div className="lunar-date">(NHẰM NGÀY 10 THÁNG 11 NĂM ẤT TỴ)</div>
              <div className="day-time">THỨ HAI | MONDAY | 08H00</div>
              <div className="ceremony-label">HÔN LỄ ĐƯỢC CỬ HÀNH TẠI</div>
              <div className="ceremony-label-en">TEA CEREMONY HELD AT</div>
              <div className="location">TƯ GIA</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AnnouncementSection;
