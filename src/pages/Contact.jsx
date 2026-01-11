import "./Contact.css";

export default function Contact() {
  return (
    <>
      {/* Page Banner */}
      <section className="page-banner">
        <h1>Contact Us</h1>
      </section>

      {/* Intro Section */}
      <section className="section">
        <div className="container contact-intro-grid">
          <div className="contact-intro-text">
            <h2>Have a question?</h2>
            <h3>Let's get in touch!</h3>
            <p>
              We’re here to assist you with all your chemical manufacturing and
              exporting needs. Whether you’re looking for more information on
              our products, have a specific project in mind, or require detailed
              guidance on our services, our team is ready to help.
            </p>
          </div>

          <div className="contact-intro-image">
            <img
              src="/images/contactus.png"
              alt="Contact Bramha Chemicals"
            />
          </div>
        </div>
      </section>

      {/* Contact Grid Section */}
      <section className="section contact-grid-section">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-box">
              <h3>Factory Address</h3>
              <p>
                <strong>Bramha Chemicals Pvt Ltd</strong>
                <br />
                Plot No. F3, Chincholi MIDC
                <br />
                Solapur, Maharashtra – 413255
              </p>
            </div>

            <div className="contact-box">
              <h3>Office Address</h3>
              <p>
                <strong>Bramha Chemicals Pvt Ltd</strong>
                <br />
                Madki Vasti, Near Rahul Hyundai Showroom
                <br />
                Near Ganesh Nagar, Solapur – 413007
              </p>
            </div>

            <div className="contact-box">
              <h3>Email</h3>
              <p>
                <a href="mailto:bramhachemicals545@gmail.com">
                  bramhachemicals545@gmail.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
