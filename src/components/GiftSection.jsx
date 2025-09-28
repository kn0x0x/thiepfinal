import React from 'react';

const GiftSection = () => {
  return (
    <section className="gift-section" id="gift">
      <div className="gift-container">
        <h2 className="gift-title">Your presence is truly the best gift we could ask for</h2>
        <p className="gift-paragraph">
          If you would like to give us a gift, we would be grateful for a contribution towards our honeymoon fund. 
          Your generosity will help us create beautiful memories together.
        </p>
        <p className="gift-paragraph">
          Nếu bạn muốn tặng quà, chúng tôi sẽ rất biết ơn nếu bạn đóng góp vào quỹ tuần trăng mật của chúng tôi. 
          Sự hào phóng của bạn sẽ giúp chúng tôi tạo ra những kỷ niệm đẹp cùng nhau.
        </p>
        
        <div className="gift-qr">
          <img src="https://play-lh.googleusercontent.com/lomBq_jOClZ5skh0ELcMx4HMHAMW802kp9Z02_A84JevajkqD87P48--is1rEVPfzGVf" alt="QR Code" />
        </div>
      </div>
    </section>
  );
};

export default GiftSection;
