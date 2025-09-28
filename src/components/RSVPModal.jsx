import React, { useState } from 'react';

const RSVPModal = ({ isOpen, onClose, onSubmit }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    attendance: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.attendance) {
      alert('Vui lòng điền đầy đủ thông tin!');
      return;
    }

    setIsLoading(true);

    try {
      // Gửi dữ liệu đến Google Sheets
      const response = await fetch('https://script.google.com/macros/s/AKfycbzTJ5m6DVCpzo56J0h80o09jWfTPiuOHaptZX-gL-uG3jcaJbnhlTLfKBxU150PUp8c/exec', {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      setIsLoading(false);
      setShowSuccess(true);
      
      // Tự động đóng modal sau 3 giây
      setTimeout(() => {
        setFormData({ name: '', phone: '', attendance: '', message: '' });
        setShowSuccess(false);
        onClose();
      }, 3000);
      
    } catch (error) {
      console.error('Error submitting RSVP:', error);
      setIsLoading(false);
      alert('Có lỗi xảy ra, vui lòng thử lại sau!');
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  if (!isOpen) return null;

  return (
    <div className="rsvp-modal-overlay" onClick={onClose}>
      <div className="rsvp-modal" onClick={(e) => e.stopPropagation()}>
        <div className="rsvp-modal-header">
          <h2>Xác nhận tham gia</h2>
          <button className="rsvp-close-btn" onClick={onClose}>×</button>
        </div>
        
        <div className="rsvp-modal-content">
          {showSuccess ? (
            <div className="rsvp-success">
              <div className="rsvp-success-icon">✓</div>
              <h3>Cảm ơn bạn đã xác nhận!</h3>
              <p>Chúng tôi sẽ liên hệ lại sớm nhất.</p>
              <div className="rsvp-success-loading">
                <div className="rsvp-loading-spinner"></div>
                <span>Đang đóng...</span>
              </div>
            </div>
          ) : (
            <>
              <p className="rsvp-question">Bạn có thể tham gia lễ cưới của chúng tôi không?</p>
          
          <form onSubmit={handleSubmit} className="rsvp-form">
            <div className="rsvp-attendance">
              <label className="rsvp-radio-label">
                <input
                  type="radio"
                  name="attendance"
                  value="yes"
                  checked={formData.attendance === 'yes'}
                  onChange={handleChange}
                />
                <span className="rsvp-radio-text">Có, tôi sẽ tham gia</span>
              </label>
              
              <label className="rsvp-radio-label">
                <input
                  type="radio"
                  name="attendance"
                  value="no"
                  checked={formData.attendance === 'no'}
                  onChange={handleChange}
                />
                <span className="rsvp-radio-text">Không, tôi không thể tham gia</span>
              </label>
            </div>

            <div className="rsvp-form-group">
              <label htmlFor="name">Họ và tên *</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Nhập họ và tên của bạn"
              />
            </div>

            <div className="rsvp-form-group">
              <label htmlFor="phone">Số điện thoại *</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                placeholder="Nhập số điện thoại của bạn"
              />
            </div>

            <div className="rsvp-form-group">
              <label htmlFor="message">Lời nhắn (tùy chọn)</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Gửi lời chúc mừng đến cặp đôi..."
                rows="3"
              />
            </div>

            <div className="rsvp-form-actions">
              <button type="button" className="rsvp-cancel-btn" onClick={onClose} disabled={isLoading}>
                Hủy
              </button>
              <button type="submit" className="rsvp-submit-btn" disabled={isLoading}>
                {isLoading ? (
                  <>
                    <div className="rsvp-loading-spinner"></div>
                    Đang gửi...
                  </>
                ) : (
                  'Gửi xác nhận'
                )}
              </button>
            </div>
          </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default RSVPModal;
