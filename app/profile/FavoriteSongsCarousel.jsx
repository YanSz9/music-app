"use client"; 

import React from "react";
import Carousel from "../Carousel";

const FavoriteSongsCarousel = ({ songs }) => {
  return (
    <div>
      <h3 className="text-xl font-semibold mb-2">Favorite Songs</h3>
      <Carousel images={songs} /> {/* Passa o array de imagens das músicas */}
    </div>
  );
};

export default FavoriteSongsCarousel;
