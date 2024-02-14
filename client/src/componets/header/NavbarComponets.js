import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser, clearUser } from '../../redux/userSlice';

const NavbarComponents = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { email } = useSelector(selectUser);

  const handleLogout = () => {
    setTimeout(() => {
      dispatch(clearUser());
    }, 1000);
  };

  return (
    <div className="flex justify-between items-center p-4 bg-gray-800 text-white">
      <div>
        <h1 className="text-2xl font-bold">Logo here</h1>
      </div>

      <div className="flex space-x-4">
        <button className="cursor-pointer px-4 py-2 bg-blue-500 text-white rounded">
          Account
        </button>

        {email ? (
          <>
            <button
              className="cursor-pointer px-4 py-2 bg-blue-500 text-white rounded"
              onClick={handleLogout}
            >
              Logout
            </button>
            <button
              className="cursor-pointer px-4 py-2 bg-blue-500 text-white rounded"
              onClick={() => setTimeout(() => navigate('/profile'), 1000)}
            >
              Create Post
            </button>
          </>
        ) : (
          <button
            className="cursor-pointer px-4 py-2 bg-blue-500 text-white rounded"
            onClick={() => setTimeout(() => navigate('/login'), 1000)}
          >
            Login
          </button>
        )}
      </div>
    </div>
  );
};

export default NavbarComponents;
