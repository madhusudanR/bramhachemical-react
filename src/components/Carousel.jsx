import { useEffect, useState } from "react";
import "./Carousel.css";

export default function Carousel({
  slides = [],
  interval = 4000,
  showText = true,
}) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (!slides.length) return;

    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % slides.length);
    }, interval);

    return () => clearInterval(timer);
  }, [slides.length, interval]);

  if (!slides.length) return null;

  return (
    <section className="carousel">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`slides ${index === activeIndex ? "active" : ""}`}
          style={{ backgroundImage: `url(${slide.image})` }}
        >
          {showText && (slide.title || slide.subtitle) && (
            <div className="carousel-text">
              {slide.title && <h1>{slide.title}</h1>}
              {slide.subtitle && <p>{slide.subtitle}</p>}
            </div>
          )}
        </div>
      ))}
    </section>
  )
}
