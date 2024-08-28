import Navbar from "./Navbar";
import Footer from "./Footer";
import Carousel from "./Carousel";

const images = [
  "/image1.jpg",
  "/image2.jpg",
  "/image3.jpg",
];

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col items-center justify-center min-h-screen">
        <Carousel images={images} /> 
      </main>
      <Footer />
    </>
  );
}