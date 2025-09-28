import React from 'react';

const Navigation = ({ activeSection, onNavigate }) => {
  const navItems = [
    { id: 'home', label: 'Trang chủ' },
    { id: 'announcement', label: 'Thông báo' },
    { id: 'timeline', label: 'Lịch trình' },
    { id: 'faq', label: 'FAQ' },
    { id: 'contact', label: 'Liên hệ' }
  ];

  return (
    <nav className="main-nav">
      <div className="nav-container">
        {navItems.map(item => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
            onClick={(e) => {
              e.preventDefault();
              onNavigate(item.id);
            }}
          >
            {item.label}
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Navigation;
