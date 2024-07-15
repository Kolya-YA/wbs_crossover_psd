import React from "react";
import "../index.css";

const HeroSection = () => {
  return (
    <div className="hero-section">
      <div className="container mx-auto h-full flex justify-end items-center text-white">
        <div className="hero-content text-right">
          <div className="mt-24">
            {" "}
            {/* Adjust margin-top to move text higher */}
            <h1 className="hero-title text-4xl font-bold mb-4 text-center md:text-right">
              New Model Cycle
            </h1>
            <p className="hero-subtitle text-lg max-w-2xl mb-6 text-center md:text-right">
              It is a long established fact that a reader will be distracted by
              the readable content.
            </p>
            <button className="shop-now-button bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-full transition duration-300">
              Shop Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
