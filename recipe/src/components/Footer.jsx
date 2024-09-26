import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto text-center">
        <div className="flex justify-center space-x-6 mb-4">
          <a href="https://facebook.com" className="text-white hover:text-gray-400 transition">
            <FontAwesomeIcon icon={faFacebook} size="2x" />
          </a>
          <a href="https://twitter.com" className="text-white hover:text-gray-400 transition">
            <FontAwesomeIcon icon={faTwitter} size="2x" />
          </a>
          <a href="https://instagram.com" className="text-white hover:text-gray-400 transition">
            <FontAwesomeIcon icon={faInstagram} size="2x" />
          </a>
        </div>
        <p className="text-gray-400">© 2024 Recipe Finder. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
