"use client";

import { useState, useRef } from "react";
import Image from "next/image";

const Slider = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef(null);

  const itemsPerPage = 4; // Número de itens a serem exibidos por vez

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      Math.max(prevIndex - itemsPerPage, 0)
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      Math.min(prevIndex + itemsPerPage, items.length - itemsPerPage)
    );
  };

  const visibleItems = items.slice(currentIndex, currentIndex + itemsPerPage);

  return (
    <div className="relative">
      <div className="overflow-hidden">
        <div
          ref={sliderRef}
          className="flex"
          style={{ scrollBehavior: 'smooth', whiteSpace: 'nowrap' }}
        >
          {visibleItems.map((item, index) => (
            <div key={index} className="inline-block w-1/4 p-1">
              <Image
                src={item}
                alt={`Item ${index}`}
                width={300} // Ajuste o tamanho conforme necessário
                height={300} // Ajuste o tamanho conforme necessário
                className="rounded-lg"
              />
            </div>
          ))}
        </div>
      </div>
      <button
        className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md z-10"
        onClick={handlePrev}
        disabled={currentIndex === 0}
      >
        {"<"}
      </button>
      <button
        className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md z-10"
        onClick={handleNext}
        disabled={currentIndex >= items.length - itemsPerPage}
      >
        {">"}
      </button>
    </div>
  );
};

export default Slider;
