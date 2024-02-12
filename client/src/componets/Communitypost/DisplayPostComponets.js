import React from 'react';
import { useQuery } from 'react-query';
import fetchData from '../../handleAPI/handleallpostaAPI';



const DisplayPostComponents = () => {
  // eslint-disable-next-line no-unused-vars
  const { data, isLoading, isError } = useQuery('myData', fetchData);
  return (
    <div className="max-w-4xl mx-auto bg-white p-6 rounded-md shadow-md mt-8 min-h-300 border border-black">
      <h1 className="text-2xl font-bold mb-4">Community Post</h1>

      <div className="mb-4 border border-black rounded p-2">
        <div className="flex items-center">
          <h1 className="text-xl font-semibold mr-4">Aniket Kadam</h1>
          <button className="bg-blue-500 text-white px-4 py-2 rounded">Follow</button>
        </div>

        {/* Post content goes here */}
        <p className="text-gray-700">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
        </p>
      </div>


      <div className="mb-4 border border-black rounded p-2">
      <div className="flex items-center">
        <h1 className="text-xl font-semibold mr-4">Aniket Kadam</h1>
        <button className="bg-blue-500 text-white px-4 py-2 rounded">Follow</button>
      </div>

      {/* Post content goes here */}
      <p className="text-gray-700">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
      </p>
    </div>
    </div>
  );
};

export default DisplayPostComponents;
