import React from "react";
import './App.css';
import Footer from './Footer';

export default function App() {
  return (
    <div className="app">
      {/* Header Section */}
      <header className="header">
        <div className="logo">
          <img src="/icons8-electric-bike-48 1.png" alt="EV-Bike Logo" />
        </div>
        <nav className="nav">
          <a href="#" className="nav-link">Home</a>
          <a href="#" className="nav-link active">Products</a>
          <a href="#" className="nav-link">Gallery</a>
          <a href="#" className="nav-link">Contact</a>
          <button className="login">Login</button>
        </nav>
      </header>

      {/* Hero Section */}
      <main>
        <section
          className="hero"
          style={{
            backgroundImage: "url('/Big-Sur-Sport_Bridge_03-1024x576.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="text">
            <h2 className="subtitle">LET’S RIDE THE</h2>
            <h1 className="title">FUTURE</h1>
            <p className="description">Experience the simplicity and sleek design tailored for modern riders.</p>
            <button className="preorder">PRE-ORDER NOW</button>
          </div>
          <div className="bike">
            {/* Removed specifications from the first slide */}
          </div>
        </section>

        {/* Hero Slider */}
        <div className="hero-slider">
          <div className="hero-slide" style={{
            backgroundImage: "url('/Big-Sur-Sport_Bridge_03-1024x576.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}></div>
          <div className="hero-slide" style={{
            backgroundImage: "url('/vecteezy_green-electric-scooter_55331661.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}></div>
          <div className="hero-slide" style={{
            backgroundImage: "url('/icons8-electric-bike-48 1.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}></div>
        </div>

        {/* Navigation Dots */}
        <div className="navigation">
          <div className="dots">
            <span className="dot active"></span>
            <span className="dot"></span>
            <span className="dot"></span>
          </div>
        </div>

        {/* New Scooter Section */}
        <section className="scooter-section">
          <h2>Explore Our Electric Scooter</h2>
          <img
            src="/vecteezy_green-electric-scooter_55331661.png"
            alt="Electric Scooter"
            className="scooter-image"
          />
          <div className="scooter-specs">
            <div className="scooter-spec">
              <span className="scooter-spec-value">50 km/hr</span>
              <span className="scooter-spec-label">Speed</span>
            </div>
            <div className="scooter-spec">
              <span className="scooter-spec-value">80 km</span>
              <span className="scooter-spec-label">Battery Range</span>
            </div>
            <div className="scooter-spec">
              <span className="scooter-spec-value">3.5 hr</span>
              <span className="scooter-spec-label">Charging Time</span>
            </div>
          </div>
        </section>
      </main>

      {/* Sidebar Footer */}
      <footer>
        <div className="sidebar">
          <p className="sidebar-text">THE CONCEPT</p>
          <p className="sidebar-text">ELECTRIC-B</p>
        </div>
      </footer>
      <Footer />
    </div>
  );
}
