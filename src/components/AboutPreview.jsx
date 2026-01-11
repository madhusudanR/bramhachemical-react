import { Link } from "react-router-dom";
import "./AboutPreview.css";

export default function AboutPreview() {
  return (
    <section className="section about-preview">
      <h2>About Us</h2>

      <p>
        We are a professionally managed chemical manufacturing company engaged
        in the production of high-quality agrochemical active ingredients and
        formulations, serving domestic and international markets.
      </p>

      <Link to="/about-us" className="btn">
        Read More
      </Link>
    </section>
  );
}
