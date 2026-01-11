import React from 'react'
import Banner from '../components/Banner'
import bannerImg from '/images/banner.jpg'
import './Facilities.css'
import infraImg from '/images/facilities/infra.jpg'
import qualityImg from '/images/facilities/QualityAndSafety.jpg'
import futureImg from '/images/facilities/futureExpansion.jpg'

const Facilities = () => {
  return (
    <>
      <Banner title="Our Manufacturing Facilities" backgroundImage={bannerImg} />
      <section className="section facility-section">
        <div className="container">
          <p className="lead">
            Our manufacturing facility located at{" "}
            <strong>Chincholi MIDC, Solapur</strong> is equipped with modern
            infrastructure for the production of agrochemical active ingredients
            and formulations. The plant operates with a strong focus on quality,
            safety, and environmental compliance, supported by well-planned
            utilities, quality control systems, and trained technical manpower.
            Designed for efficiency and future expansion, our facility enables
            reliable and sustainable manufacturing operations.
          </p>

          <div className="facility-grid">
            {/* Card 1 */}
            <div className="facility-card">
              <img src={infraImg} alt="Advanced Infrastructure" />
              <h3>Advanced Infrastructure</h3>
              <p>
                State-of-the-art production units with focus on quality,
                consistency, and scalability.
              </p>
            </div>

            {/* Card 2 */}
            <div className="facility-card">
              <img src={qualityImg} alt="Quality and Safety" />
              <h3>Quality & Safety</h3>
              <p>
                Strict adherence to safety, environmental compliance, and quality
                control systems.
              </p>
            </div>

            {/* Card 3 */}
            <div className="facility-card">
              <img src={futureImg} alt="Future Expansion" />
              <h3>Future Ready</h3>
              <p>
                Designed for expansion to support future growth and evolving
                market demands.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Facilities
