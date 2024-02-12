import React from 'react';

const SearchBarComponents = () => {
  return (
    <div className="flex items-center justify-center w-4/5 mx-auto mt-8 border-black rounded border p-4 ">
      <input
        placeholder="Go to profile"
        className="p-2 w-2/5 rounded-l border border-gray-300"
      />

      <button className="flex items-center justify-center p-2 mt-4 ml-2 w-1/5 bg-blue-500 text-white rounded-r border border-l-0 border-blue-500">
        Previous 
      </button>

      <button className="flex items-center justify-center p-2 mt-4 ml-2 w-1/5 bg-blue-500 text-white rounded border border-blue-500">
        Current 
      </button>

      <button className="flex items-center justify-center p-2 mt-4 ml-2 w-1/5 bg-blue-500 text-white rounded-r border border-blue-500">
        Upcoming 
      </button>
    </div>
  );
};

export default SearchBarComponents;
