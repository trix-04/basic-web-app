"use client";
import { useState } from 'react';
import Link from 'next/link';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link href="/" className="navbar-brand">MyReactApp</Link>
        <button onClick={() => setIsOpen(!isOpen)} className="navbar-toggle">
          {isOpen ? '✖' : '☰'} {/* implemented a terinary operator so that when screen is less than 900px a burger menu pops up */}
        </button>
        <div className={`navbar-links ${isOpen ? 'navbar-open' : ''}`}>
          <Link href="/" className="navbar-link">Home</Link>
          <Link href="/about" className="navbar-link">About</Link>
          <Link href="/contact" className="navbar-link">Contact</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
