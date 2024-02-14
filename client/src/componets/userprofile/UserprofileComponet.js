import React, { useState } from 'react';
import { useMutation } from 'react-query';
import { useSelector } from 'react-redux';
import { addpost } from '../../handleAPI/handleallpostaAPI';
import { selectUser } from '../../redux/userSlice';

const UserprofileComponent = () => {
  const [postContent, setPostContent] = useState('');
  const { email, token } = useSelector(selectUser);
  const [name, setName] = useState('aniket'); // You may set a default name or fetch it from somewhere

  const { mutate: createEvent, isLoading, isError } = useMutation(
    () => addpost({ email, name, postContent, token }),
    {
      onSuccess: () => {
        setPostContent('');
      },
    }
  );

  const handleCreateEvent = async () => {
    try {
      await createEvent();
    } catch (error) {
      console.error('Error creating event:', error.message);
    }
  };

  return (
    <div className="w-full max-w-screen-xl mx-auto flex items-center justify-center mt-8">
      <div style={{ width: '70%' }}>
        <div>
          <h1 className="text-2xl font-bold mb-4">User Name</h1>
        </div>
        <div>
          <label>Write post</label>
          <textarea
            rows="6"
            value={postContent}
            onChange={(e) => setPostContent(e.target.value)}
            className="border border-black rounded p-2 w-full"
          ></textarea>
        </div>
        <div>
          <button
            onClick={handleCreateEvent}
            className="bg-blue-500 text-white px-4 py-2 rounded mt-2"
          >
            Add Post
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserprofileComponent;
