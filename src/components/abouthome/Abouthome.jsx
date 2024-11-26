import React, { useState, useEffect } from "react";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import Homea1 from "../../assets/Homea1.jpg";
import Homea2 from "../../assets/Homea2.jpg";
import Homea3 from "../../assets/Homea3.jpg";
import Homea4 from "../../assets/Homea4.jpg";
import Homea5 from "../../assets/Homea5.jpg";

const Abouthome = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [Homea1, Homea2, Homea3, Homea4, Homea5];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <section className="py-16 bg-gray-50">
      {/* Section Header */}
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
          Meet Our Team
        </h1>
        <div className="mt-4 w-24 h-1 bg-amber-500 mx-auto rounded-full"></div>
        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto px-4">
          The passionate beekeepers behind Madhurum Honey Farm
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 rounded ">
        <div className="flex flex-col md:flex-row items-center gap-12 bg-honey-normal rounded py-3 px-3">
          {/* Carousel Column */}
          <div className="w-full md:w-1/2">
            <div className="relative group">
              {/* Main Image */}
              <div className="relative overflow-hidden rounded-lg shadow-xl aspect-[4/5]">
                {images.map((img, index) => (
                  <div
                    key={index}
                    className={`absolute w-full h-full transition-all duration-500 ease-in-out transform ${
                      index === currentIndex
                        ? "translate-x-0 opacity-100"
                        : index < currentIndex
                        ? "-translate-x-full opacity-0"
                        : "translate-x-full opacity-0"
                    }`}
                  >
                    <img
                      src={img}
                      alt={`Founder Image ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-blue-500 opacity-10"></div>
                  </div>
                ))}
              </div>

              {/* Navigation Buttons */}
              <button
                onClick={prevSlide}
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-6 h-6 text-gray-800" />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity"
                aria-label="Next image"
              >
                <ChevronRight className="w-6 h-6 text-gray-800" />
              </button>

              {/* Dots Indicator */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentIndex
                        ? "bg-white w-4"
                        : "bg-white/60 hover:bg-white/80"
                    }`}
                    aria-label={`Go to image ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Content Column */}
          <div className="w-full md:w-1/2 space-y-6">
            <h2 className="text-4xl font-bold text-gray-900">
              Want to know more about our founder and our story?
            </h2>

            <p className="text-lg text-white">
              Discover the journey that led to the creation of our company and
              the vision that drives us forward. Our founder's story is one of
              innovation, perseverance, and dedication to excellence.
            </p>

            <a
              href="/About"
              className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-lg text-amber-600 hover:text-amber-700 font-semibold group transition-colors"
            >
              Read Our Story
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Abouthome;
