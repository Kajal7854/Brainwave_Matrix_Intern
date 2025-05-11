import React from 'react';

function Footer() {
  return (
    <footer className="footer">
      <p>
        &copy; {new Date().getFullYear()} E-Bike. All rights reserved. | <a href="/privacy">Privacy Policy</a>
      </p>
    </footer>
  );
}

export default Footer;