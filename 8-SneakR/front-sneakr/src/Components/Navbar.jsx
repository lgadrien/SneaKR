import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-black p-4 fixed top-0 w-full z-10">
      <div className="container mx-auto flex items-center justify-between">
        <a href="/" className="text-white font-bold text-xl">SneaKR</a>
        <div className="space-x-4">
          <a href="/" className="text-white hover:text-gray-300">Home</a>
          <a href="/Cart" className="text-white hover:text-gray-300">Cart</a>
          <a href="/Login" className="text-white hover:text-gray-300">Connect</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;