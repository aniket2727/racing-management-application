import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useMutation } from 'react-query';
import { registerData } from '../../handleAPI/RegisterLogin';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const RegisterComponents = () => {
  const navigate = useNavigate();
  const mutation = useMutation(registerData);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;

  const handleRegister = async (e) => {
    e.preventDefault();

    if (!email || !name || !password) {
      return toast.error('Fill in all data');
    }

    if (!emailRegex.test(email)) {
      return toast.error('Invalid email format');
    }

    if (!passwordRegex.test(password)) {
      return toast.error(
        'Password must contain at least 8 characters, one lowercase letter, one uppercase letter, and one number'
      );
    }

    try {
      const response = await mutation.mutateAsync({
        email: email,
        name: name,
        password: password,
      });

      if (response && response.success) {
        toast.success('Registration successful');
        setEmail('');
        setName('');
        setPassword('');

        setTimeout(() => {
          navigate('/login')
        }, 2000);

      } else {
        toast.error('Registration Successfull');

        setTimeout(() => {
          navigate('/login')
        }, 2000);
      }
    } catch (error) {
      toast.error('Email is already register');
    }
  };

  return (
    <div className="custom-main-register flex justify-center items-center h-screen bg-gray-100">
      <div className="custom-register-element bg-white p-8 rounded shadow-md">
        <h1 className="text-4xl font-bold text-dark-brown mb-4">Welcome to Nandi.com</h1>
        <h1 className="text-2xl text-dark-brown mb-8">Register Here</h1>

        <form onSubmit={handleRegister}>
          <label className="custom-label mb-4">
            Enter Name
            <input
              type="text"
              placeholder="Enter Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="custom-form-input mt-1 block w-full py-2 px-4 rounded-lg cursor-pointer"
            />
          </label>

          <label className="custom-label mb-4">
            Enter Email
            <input
              type="email"
              placeholder="Enter Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="custom-form-input mt-1 block w-full py-2 px-4 rounded-lg cursor-pointer"
            />
          </label>

          <label className="custom-label mb-4">
            Enter Password
            <input
              type="password"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="custom-form-input mt-1 block w-full py-2 px-4 rounded-lg cursor-pointer"
            />
          </label>

          <button
            type="submit"
            className="custom-button bg-blue-500 text-white px-4 py-2 rounded-lg cursor-pointer"
          >
            Create Account
          </button>
        </form>

        <button
          className="custom-link mt-2 text-blue-500 cursor-pointer"
          onClick={() => navigate('/login')}
        >
          Already have an account? Login
        </button>

        <ToastContainer />
      </div>
    </div>
  );
};

export default RegisterComponents;
