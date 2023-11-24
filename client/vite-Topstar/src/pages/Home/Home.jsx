import React from 'react';
import './Home.css';

function Home() {
  return (
    <div>
    
      <header className="hero">
        <div className="hero-content">
          <h1>Welcome to Topstar Perfumes</h1>
          <p>Discover the essence of luxury with our exquisite collection of perfumes.</p>
         
        </div>
      </header>

    
        <h2>About Us</h2>
        <p>We at Topstar Perfumes are dedicated to providing you with the finest fragrances that captivate your senses. Our collection is crafted with precision and passion to ensure an unforgettable experience.</p>
   

      
      <section className="contact">
        <h2>Contact Us</h2>
        <p>Have questions or need assistance? Reach out to our customer support team.</p>
        <a href="#" className="cta-button">Contact Us</a>
      </section>

     
      <footer>
        <p>&copy; 2023 Topstar Perfumes. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Home;
