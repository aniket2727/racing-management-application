import React, { useEffect, useState } from 'react';
import { useMutation } from 'react-query';
import { useSelector } from 'react-redux';
import { getallpost } from '../../handleAPI/handleallpostaAPI';
import { selectUser } from '../../redux/userSlice';

const DisplayPostComponents = () => {
  const [isFollowed, setIsFollowed] = useState(false);
  const [posts, setPosts] = useState([]); // Initialize with an empty array
  const { email, token } = useSelector(selectUser);

  console.log('email is ', email, 'token is ', token);

  const { mutate: fetchPosts, isLoading, isError } = useMutation(
    () => getallpost({ token }),
    {
      onSuccess: (data) => {
        if (data.error) {
          console.error('Failed to get all posts:', data.error);
        } else {
          setPosts(data.data); // Update the state with fetched posts
        }
      },
      onError: (error) => {
        console.error('Error fetching posts:', error);
      },
    }
  );

  const handleFollowToggle = () => {
    setIsFollowed((prevIsFollowed) => !prevIsFollowed);
    // TODO: Add logic to actually follow/unfollow the user
  };

  useEffect(() => {
    fetchPosts();
  }, [email, token, fetchPosts]);

  return (
    <div className="max-w-4xl mx-auto bg-white p-6 rounded-md shadow-md mt-8 min-h-300 border border-black">
      <h1 className="text-2xl font-bold mb-4">Community Post</h1>

      {isError && <p>Error fetching posts</p>}
      {isLoading && <p>Loading...</p>}

       { posts && posts.map((post) => (
        <div key={post._id} className="mb-4 border border-black rounded p-2">
          <div className="flex items-center">
            <h1 className="text-xl font-semibold mr-4">{post.name}</h1>
            <button
              className={`bg-blue-500 text-white px-4 py-2 rounded`}
              onClick={handleFollowToggle}
            >
              {isFollowed ? 'Unfollow' : 'Follow'}
            </button>
          </div>
          <p className="text-gray-700">{post.postContent}</p>
        </div>
      ))}
    </div>
  );
};

export default DisplayPostComponents;
