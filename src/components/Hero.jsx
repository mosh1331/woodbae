"use client"
import { useState, useEffect } from 'react';


const slides = [
  { id: 1, imageUrl: '/living1.jpeg', caption: 'Luxury Living Room' },
  { id: 2, imageUrl: '/kitchen1.jpeg', caption: 'Modern Kitchen' },
  { id: 3, imageUrl: '/bedroom3.jpeg', caption: 'Cozy Bedroom' },
];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);




  return (
    <div className="relative w-full h-screen overflow-hidden" id="hero">
      <div className="absolute top-0 left-0 w-full h-full">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}
          >
            <img src={slide.imageUrl} alt={slide.caption} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold">{slide.caption}</h1>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hero;
