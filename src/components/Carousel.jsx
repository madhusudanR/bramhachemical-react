import { useEffect, useState } from "react";
import "./Carousel.css";

export default function Carousel({ slides, interval = 4000 }) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % slides.length);
    }, interval);

    return () => clearInterval(timer);
  }, [slides.length, interval]);

  return (
    <section className="carousel">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`slides ${index === activeIndex ? "active" : ""}`}
          style={{ backgroundImage: `url(${slide.image})` }}
        >
          {slide.title && (
            <div className="carousel-text">
              <h1>{slide.title}</h1>
              <p>{slide.subtitle}</p>
            </div>
          )}
        </div>
      ))}
    </section>
  );
}
