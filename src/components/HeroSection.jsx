import "../index.css";


const HeroSection = () => {
  return (
    <div className="hero-section relative">
      <div
        className="hero-background absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('./assets/hero-bike.png'), url('./assets/hero-bg.png')`,
        }}
      ></div>
      <div className="container mx-auto h-full flex justify-center items-center text-white relative z-10">
        <div className="hero-content text-center">
          <h1 className="hero-title text-4xl font-bold mb-4">
            New Model Cycle
          </h1>
          <p className="hero-subtitle text-lg max-w-2xl mb-6">
            It is a long established fact that a reader will be distracted by
            the readable content.
          </p>
          <button className="shop-now-button bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-full transition duration-300">
            Shop Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

// import React from "react";
// import "../index.css";

// const HeroSection = () => {
//   return (
//     <div className="hero-section">
//       <div className="container mx-auto h-full flex justify-center items-center text-white">
//         <div className="hero-content text-center">
//           <div className="mt-24">
//             <h1 className="hero-title text-4xl font-bold mb-4">
//               New Model Cycle
//             </h1>
//             <p className="hero-subtitle text-lg max-w-2xl mb-6">
//               It is a long established fact that a reader will be distracted by
//               the readable content.
//             </p>
//             <button className="shop-now-button bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-full transition duration-300">
//               Shop Now
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HeroSection;
