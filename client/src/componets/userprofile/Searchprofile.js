import React, { useState } from 'react';

const Searchprofile = () => {
  // eslint-disable-next-line no-unused-vars
  const [posts, setPosts] = useState([
    {
      post: "ajajjsjsjjsjjsj",
    },
    {
      post: "ajajjsjsjjsjjsj",
    },
  ]);

  return (
    <div className="w-full h-screen flex flex-col items-center ">
      <div className="w-3/5 p-6 bg-white rounded-md shadow-md">
        <div>
          <h1 className="text-3xl font-bold mb-4 text-gray-800">User Name</h1>
        </div>

        <div>
          {posts.map((item, index) => (
            <div key={index} className="my-4 border border-gray-300 p-4 w-full">
              <h1 className="text-xl mb-2 break-all">{item.post}</h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Searchprofile;
