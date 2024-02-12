import React from 'react';

const NavbarComponents = () => {
  return (
    <div className="flex justify-between items-center p-4 bg-gray-800 text-white">
      <div>
        <h1 className="text-2xl font-bold">Logo here</h1>
      </div>

      <div className="flex space-x-4">
        <button className="cursor-pointer px-4 py-2 bg-blue-500 text-white rounded">
          Account
        </button>
        <button className="cursor-pointer px-4 py-2 bg-blue-500 text-white rounded">
          Login
        </button>
      </div>
    </div>
  );
};

export default NavbarComponents;
