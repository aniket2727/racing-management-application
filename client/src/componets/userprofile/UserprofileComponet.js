import React, { useState } from 'react';

const UserprofileComponet = () => {
  const [postContent, setPostContent] = useState('');
  const [previousPosts, setPreviousPosts] = useState([]);

  const handleAddPost = () => {
    if (postContent.trim() !== '') {
      setPreviousPosts((prevPosts) => [...prevPosts, postContent]);
      setPostContent('');
    }
  };

  return (
    <div className="w-full max-w-screen-xl mx-auto flex items-center justify-center mt-8">
      <div className="w-70%">
        <div>
          <h1 className="text-2xl font-bold mb-4">User Name</h1>
        </div>
        <div>
          <label>Write post</label>
          <textarea
            rows="6"  // Adjust the number of rows as needed
            value={postContent}
            onChange={(e) => setPostContent(e.target.value)}
            className="border border-black rounded p-2 w-full"
          ></textarea>
        </div>
        <div>
          <button onClick={handleAddPost} className="bg-blue-500 text-white px-4 py-2 rounded mt-2">
            Add Post
          </button>
        </div>

        <div style={{ maxWidth: '400px' }}>
          {previousPosts.map((post, index) => (
            <div
              key={index}
              className="border border-black rounded p-2 my-2 break-words"
            >
              {post}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserprofileComponet;
