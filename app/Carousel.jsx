"use client"

import { useState, useEffect } from "react";
import Image from "next/image";

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div className="relative w-full max-w-xs h-96 flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 flex">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={image}
              alt={`Slide ${index}`}
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
        ))}
      </div>

      <button
        className="absolute left-0 px-4 py-2 bg-white bg-opacity-50 rounded-full z-20"
        onClick={prevSlide}
      >
        {"<"}
      </button>
      <button
        className="absolute right-0 px-4 py-2 bg-white bg-opacity-50 rounded-full z-20"
        onClick={nextSlide}
      >
        {">"}
      </button>
    </div>
  );
};

export default Carousel;
