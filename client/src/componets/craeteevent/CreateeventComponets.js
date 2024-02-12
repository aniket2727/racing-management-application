import React from 'react';

const CreateEventComponents = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl font-bold mb-4">Create new racing events</h1>

      <input
        placeholder="Enter Event Name"
        type="text"
        className="p-2 w-1/2 rounded border border-gray-300 mb-4"
      />

      <input
        placeholder="Enter Event Organizer name"
        type="text"
        className="p-2 w-1/2 rounded border border-gray-300 mb-4"
      />

      <input
        placeholder="Enter Place /Location"
        type="text"
        className="p-2 w-1/2 rounded border border-gray-300 mb-4"
      />

      <input
        placeholder="Enter Event Date"
        type="date"
        className="p-2 w-1/2 rounded border border-gray-300 mb-4"
      />

      <button className="p-2 w-1/2 bg-green-500 text-white rounded border border-green-600">
        Create Event
      </button>
    </div>
  );
};

export default CreateEventComponents;
