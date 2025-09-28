import React from 'react';

const FAQSection = () => {
  return (
    <section className="faq-section" id="faq">
      <div className="faq-container">
        <div className="faq-left">
          <h2 className="faq-title">FREQUENTLY ASKED QUESTIONS</h2>
        </div>
        
        <div className="faq-right">
          <div className="faq-item">
            <div className="faq-question">
              <span className="faq-number">01</span>
              <h3 className="faq-text">Thời gian bắt đầu lễ cưới?</h3>
            </div>
            <div className="faq-answer">
              <p>Lễ cưới sẽ bắt đầu lúc 08:00 sáng ngày 29/12/2025. Vui lòng có mặt trước 15 phút để chuẩn bị.</p>
            </div>
          </div>
          
          <div className="faq-item">
            <div className="faq-question">
              <span className="faq-number">02</span>
              <h3 className="faq-text">Có bãi đỗ xe không?</h3>
            </div>
            <div className="faq-answer">
              <p>Có, chúng tôi có bãi đỗ xe miễn phí cho tất cả khách mời. Nhân viên sẽ hướng dẫn bạn khi đến nơi.</p>
            </div>
          </div>
          
          <div className="faq-item">
            <div className="faq-question">
              <span className="faq-number">03</span>
              <h3 className="faq-text">Có thể mang trẻ em không?</h3>
            </div>
            <div className="faq-answer">
              <p>Tất nhiên! Chúng tôi rất vui được chào đón các em nhỏ. Chúng tôi sẽ có khu vực riêng cho trẻ em.</p>
            </div>
          </div>
          
          <div className="faq-item">
            <div className="faq-question">
              <span className="faq-number">04</span>
              <h3 className="faq-text">Có cần mang quà không?</h3>
            </div>
            <div className="faq-answer">
              <p>Sự có mặt của bạn đã là món quà tuyệt vời nhất rồi! Nếu muốn, bạn có thể tham khảo danh sách quà cưới của chúng tôi.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
