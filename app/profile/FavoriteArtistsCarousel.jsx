"use client";

import React from "react";
import Carousel from "../Carousel";

const FavoriteArtistsCarousel = ({ artists }) => {
  return (
    <div>
      <h3 className="text-xl font-semibold mb-2">Favorite Artists</h3>
      <Carousel images={artists} />
    </div>
  );
};

export default FavoriteArtistsCarousel;
