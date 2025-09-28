import React from 'react';

const TimelineSection = () => {
  return (
    <section className="timeline-section" id="timeline">
      <div className="timeline-container">
        <div className="timeline-left">
          <h2 className="timeline-title">OUR STORY</h2>
          <h3 className="timeline-title-vi">CÂU CHUYỆN CỦA CHÚNG TÔI</h3>
          
          <div className="timeline-content">
            <div className="timeline-date">
              <h3>LỊCH TRÌNH NGÀY CƯỚI | WEDDING DAY SCHEDULE</h3>
              <div className="timeline-events">
                <div className="event">
                  <div className="event-time">08:00</div>
                  <div className="event-desc">Đón dâu | Pick up the bride</div>
                </div>
                <div className="event">
                  <div className="event-time">09:00</div>
                  <div className="event-desc">Lễ cưới tại nhà gái | Wedding ceremony at bride's house</div>
                </div>
                <div className="event">
                  <div className="event-time">10:30</div>
                  <div className="event-desc">Lễ cưới tại nhà trai | Wedding ceremony at groom's house</div>
                </div>
                <div className="event">
                  <div className="event-time">12:00</div>
                  <div className="event-desc">Tiệc cưới | Wedding reception</div>
                </div>
                <div className="event">
                  <div className="event-time">14:00</div>
                  <div className="event-desc">Kết thúc | End</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="timeline-right">
          <img src="/Album.jpg" alt="Couple Photo" className="couple-photo" />
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
