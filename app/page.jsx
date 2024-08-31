"use client"

import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Carousel from "./Carousel";

export default function Home() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      const response = await fetch("/api/images");
      const data = await response.json();
      setImages(data);
    };

    fetchImages();
  }, []);

  return (
    <>
      <Navbar />
      <main className="flex flex-col items-center justify-center min-h-screen">
        {images.length > 0 ? <Carousel images={images} /> : <p>Loading...</p>}
      </main>
      <Footer />
    </>
  );
}
