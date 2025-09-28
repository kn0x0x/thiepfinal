import React, { useState, useEffect } from 'react';

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    // Đặt thời gian đám cưới: 28-12-2025 08:00 (giờ Việt Nam)
    const weddingDate = new Date('2025-12-28T08:00:00+07:00');
    
    const updateCountdown = () => {
      const now = new Date();
      const difference = weddingDate.getTime() - now.getTime();

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    // Cập nhật ngay lập tức
    updateCountdown();
    
    // Cập nhật mỗi giây
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="countdown-timer">
      <div className="countdown-title">Đếm ngược đến ngày cưới</div>
      <div className="countdown-grid">
        <div className="countdown-item">
          <div className="countdown-number">{timeLeft.days}</div>
          <div className="countdown-label">Ngày</div>
        </div>
        <div className="countdown-separator">:</div>
        <div className="countdown-item">
          <div className="countdown-number">{timeLeft.hours}</div>
          <div className="countdown-label">Giờ</div>
        </div>
        <div className="countdown-separator">:</div>
        <div className="countdown-item">
          <div className="countdown-number">{timeLeft.minutes}</div>
          <div className="countdown-label">Phút</div>
        </div>
        <div className="countdown-separator">:</div>
        <div className="countdown-item">
          <div className="countdown-number">{timeLeft.seconds}</div>
          <div className="countdown-label">Giây</div>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;
