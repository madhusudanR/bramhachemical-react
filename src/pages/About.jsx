import React from 'react'
import './About.css'
import mdImage from '/logo.png'
import Carousel from '../components/Carousel'

const heroSlides = [
  {
      image: "/images/about/factory1.jpg"
  },
  {
      image: "/images/about/factory2.jpg"
  },
  {
      image: "/images/about/factory3.jpg"
  },
  {
    image: "/images/about/factory4.jpg"
  },
  {
    image: "/images/about/factory5.jpg"
  }
];

const About = () => {
  return (
    <>
      <Carousel slides={heroSlides} interval={4000} />
      <section className="section about-company">
        <div className="container">
          <h2>About Bramha Chemicals Pvt. Ltd.</h2>
          <p className="intro-text">
            We are a professionally managed chemical manufacturing company engaged
            in the production of high-quality agrochemical active ingredients and
            formulations.
          </p>

          <h3>MD’s Mission Statement</h3>
          <p>
            To provide visionary leadership that drives excellence, accountability,
            and innovation across the organization. My mission is to build a
            high-performance team, uphold the highest standards of quality, safety,
            and ethics, and steer the company toward sustainable growth while
            creating long-term value for customers, employees, and partners.
          </p>

          <div className="md-section">
            <div className="md-image">
              <img src={mdImage} alt="Managing Director" />
            </div>

            <div className="md-content">
              <h3>Vision from the Managing Director</h3>
              <p>
                At Bramha Chemicals Pvt. Ltd., our vision is to contribute
                meaningfully to sustainable agriculture by delivering high-quality,
                reliable, and innovative agrochemical solutions that empower
                farmers and strengthen food security.
              </p>
              <p>
                I strongly believe that the future of agriculture lies in
                science-driven products, responsible manufacturing, and
                environmental stewardship. Our focus has always been on building a
                robust product portfolio that meets evolving agronomic needs while
                adhering to the highest standards of safety, quality, and
                regulatory compliance.
              </p>
              <p>
                We are committed to expanding our capabilities across herbicides,
                insecticides, and formulations through continuous investment in
                technology, infrastructure, and skilled talent.
              </p>
              <p>
                Integrity, transparency, and long-term partnerships guide every
                decision we make. Our vision is clear — to be a trusted
                agrochemical manufacturing partner delivering solutions that
                support productivity, sustainability, and progress in agriculture.
              </p>
              <p className="highlight">
                Together, we grow — responsibly and sustainably.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default About
