import React, { useState } from "react";
import { FiSearch, FiShoppingCart, FiHome, FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="border-b border-gray-200">
      <div className="container mx-auto flex justify-between items-center py-4">
        <div className="flex items-center">
          {/* <img src="./assets/icons/logo.jpg" alt="Logo" className="h-10 mr-4" /> */}
          <span className="text-xl font-bold">Bikes Shop</span>
        </div>
        <div className="hidden md:flex items-center space-x-6">
          <a href="#" className="nav-link">
            Home
          </a>
          <a href="#" className="nav-link">
            About
          </a>
          <a href="#" className="nav-link">
            Our Cycle
          </a>
          <a href="#" className="nav-link">
            Shop
          </a>
          <a href="#" className="nav-link">
            News
          </a>
          <a href="#" className="nav-link">
            Contact Us
          </a>
          <a href="#" className="nav-link">
            Login
          </a>
          <a href="#" className="nav-link">
            <FiShoppingCart />
          </a>
          <a href="#" className="nav-link">
            <FiMenu />
          </a>
        </div>
        <div className="md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="focus:outline-none"
          >
            {isMobileMenuOpen ? <MdClose size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>
      {isMobileMenuOpen && (
        <div className="md:hidden pb-4 border-t border-gray-200">
          <a href="#" className="block nav-link">
            Home
          </a>
          <a href="#" className="block nav-link">
            About
          </a>
          <a href="#" className="block nav-link">
            Our Cycle
          </a>
          <a href="#" className="block nav-link">
            Shop
          </a>
          <a href="#" className="block nav-link">
            News
          </a>
          <a href="#" className="block nav-link">
            Contact Us
          </a>
          <a href="#" className="block nav-link">
            Login
          </a>
          <div className="flex justify-center mt-4">
            <a href="#" className="nav-link">
              <FiShoppingCart />
            </a>
            <a href="#" className="nav-link">
              <FiHome />
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

// import React, { useState } from "react";
// import { FiSearch, FiShoppingCart, FiHome, FiMenu } from "react-icons/fi";
// import { MdClose } from "react-icons/md";

// const Navbar = () => {
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   return (
//     <nav className=" #274d5a p-4">
//       <div className="container mx-auto flex justify-between items-center">
//         <div className="text-xl font-bold">
//           <img src="./assets/icons/logo.jpg" alt="logo" />
//         </div>
//         <div className="hidden md:flex space-x-6 items-center">
//           <a href="#" className="hover:text-gray-300">
//             Home
//           </a>
//           <a href="#" className="hover:text-gray-300">
//             About
//           </a>
//           <a href="#" className="hover:text-gray-300">
//             Our Cycle
//           </a>
//           <a href="#" className="hover:text-gray-300">
//             Shop
//           </a>
//           <a href="#" className="hover:text-gray-300">
//             News
//           </a>
//           <a href="#" className="hover:text-gray-300">
//             Contact Us
//           </a>
//           <a href="#" className="hover:text-gray-300">
//             Login
//           </a>
//           <a href="#" className="hover:text-gray-300">
//             <FiShoppingCart />
//           </a>
//           <a href="#" className="hover:text-gray-300">
//             <FiHome />
//           </a>
//         </div>
//         <div className="flex items-center md:hidden">
//           <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
//             {isMobileMenuOpen ? <MdClose size={24} /> : <FiMenu size={24} />}
//           </button>
//         </div>
//       </div>
//       {isMobileMenuOpen && (
//         <div className="md:hidden flex flex-col space-y-2 mt-4">
//           <a href="#" className="hover:text-gray-300">
//             Home
//           </a>
//           <a href="#" className="hover:text-gray-300">
//             About
//           </a>
//           <a href="#" className="hover:text-gray-300">
//             Our Cycle
//           </a>
//           <a href="#" className="hover:text-gray-300">
//             Shop
//           </a>
//           <a href="#" className="hover:text-gray-300">
//             News
//           </a>
//           <a href="#" className="hover:text-gray-300">
//             Contact Us
//           </a>
//           <a href="#" className="hover:text-gray-300">
//             Login
//           </a>
//           <a href="#" className="hover:text-gray-300">
//             <FiShoppingCart />
//           </a>
//           <a href="#" className="hover:text-gray-300">
//             <FiHome />
//           </a>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;
