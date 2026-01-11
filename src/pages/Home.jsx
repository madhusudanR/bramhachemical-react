 import React from 'react'
 import Carousel from "../components/Carousel";
import ExpertiseSection from '../components/ExpetiseSection';
import AboutPreview from '../components/AboutPreview';
 
 const heroSlides = [
    {
        image: "/images/hero1.jpg",
    },
    {
        image: "/images/hero2.jpg",
        title: "Quality & Compliance",
        subtitle: "Driven by Science and Sustainability",
    },
    {
        image: "/images/hero3.jpg",
        title: "Trusted Manufacturing Partner",
        subtitle: "Serving Domestic & International Markets",
    },
];

 const Home = () => {
   return (
     <div>
       <Carousel slides={heroSlides} interval={4000} />
       <AboutPreview />
       <ExpertiseSection />
     </div>
   )
 }
 
 export default Home
 