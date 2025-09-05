import React, { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed top-0 w-full bg-white/90 backdrop-blur-sm z-50 shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <img 
              src="/images/logo.png" 
              alt="PortTan Logo" 
              className="h-10 w-auto mr-2"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'block';
              }}
            />
            <div className="text-2xl font-bold text-gray-800" style={{display: 'none'}}>
              <span className="text-blue-600">Folio</span>Tan.com
            </div>
          </div>
          
          {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="text-gray-700 hover:text-blue-600 transition-colors">Trang chủ</a>
            <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors">Giới thiệu</a>
            <a href="#skills" className="text-gray-700 hover:text-blue-600 transition-colors">Kỹ năng</a>
            <a href="#projects" className="text-gray-700 hover:text-blue-600 transition-colors">Dự án</a>
            <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors">Liên hệ</a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 space-y-2">
            <a href="#home" className="block py-2 text-gray-700 hover:text-blue-600">Trang chủ</a>
            <a href="#about" className="block py-2 text-gray-700 hover:text-blue-600">Giới thiệu</a>
            <a href="#skills" className="block py-2 text-gray-700 hover:text-blue-600">Kỹ năng</a>
            <a href="#projects" className="block py-2 text-gray-700 hover:text-blue-600">Dự án</a>
            <a href="#contact" className="block py-2 text-gray-700 hover:text-blue-600">Liên hệ</a>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
