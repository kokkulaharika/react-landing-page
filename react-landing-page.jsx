import React from "react";
import "./react-landing-page.css";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Features />
      <Footer />
    </div>
  );
}

function Navbar() {
  return (
    <nav className="navbar">
      <h2>MyWebsite</h2>
      <ul>
        <li>Home</li>
        <li>Features</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
}

function Hero() {
  return (
    <section className="hero">
      <h1>Build Your Future with Us</h1>
      <p>
        We create simple, fast, and responsive websites using modern
        technologies.
      </p>
      <button>Get Started</button>
    </section>
  );
}

function Features() {
  return (
    <section className="features">
      <h2>Our Features</h2>
      <div className="cards">
        <div className="card">
          <h3>Simple</h3>
          <p>Easy to understand and use for everyone.</p>
        </div>
        <div className="card">
          <h3>Responsive</h3>
          <p>Looks great on mobile, tablet, and desktop.</p>
        </div>
        <div className="card">
          <h3>Fast</h3>
          <p>Optimized for speed and performance.</p>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <p>© 2025 MyWebsite. All rights reserved.</p>
    </footer>
  );
}

export default App;