import "./Home.css";
import VideoUrl from "../../assets/HomeVideo.mp4";

function Home() {
  return (
    <body>
      <section className="show-case">
        <div className="video-container">
          <video
            src={VideoUrl}
            muted
            autoPlay
            preload="none"
            loading="lazy"
          ></video>
        </div>
        <div className="show-content">
          <h1 className="lineUp">Indulge in luxury at Topstar Perfumes</h1>
        </div>
      </section>

      <section className="product-show">
        <div className="img"></div>
        <div className="product-decs">
          <h1> Giorgio Armani Acqua Di Gio Profumo Eau de Parfum Spray </h1>
          
          <a href="#" className="cta-button">
            Special Price $101.36
          </a>
        </div>
      </section>

      <section className="show-content about-us">
        <h1>About Us</h1>
        <p>
          We at TopStar Perfumes are dedicated to providing you with the finest
          fragrances that captivate your senses. Our collection is crafted with
          precision and passion to ensure an unforgettable experience.
        </p>
      </section>

      <section className="show-content contact">
        <h1>Contact Us</h1>
        <p>
          Have questions or need assistance? Reach out to our customer support
          team.
        </p>
        <a href="#" className="cta-button">
          Contact Us
        </a>
      </section>

      <footer>
        <p>&copy; 2023 Topstar Perfumes. All rights reserved.</p>
      </footer>
    </body>
  );
}

export default Home;
