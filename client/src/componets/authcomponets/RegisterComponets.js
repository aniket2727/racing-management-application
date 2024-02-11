import React, { useState } from 'react';

const RegisterComponents = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = () => {
    if (!email || !name || !password) {
      return console.log('Fill in all data');
    }
    // Add your registration logic here
  };

  return (
    <div className="custom-main-register flex justify-center items-center h-screen bg-gray-100">
      <div className="custom-register-element bg-white p-8 rounded shadow-md">
      <h1 className="text-4xl font-bold text-dark-brown mb-4">Welcome to Nandi.com</h1>
      <h1 className="text-2xl text-dark-brown mb-8">Register Here</h1>
        <label className="custom-label mb-4">
          Enter Name
          <input
            type="text"
            placeholder="Enter Name"
            onChange={(e) => setName(e.target.value)}
            className="custom-form-input mt-1 block w-full py-2 px-4 rounded-lg cursor-pointer"
          />
        </label>

        <label className="custom-label mb-4">
          Enter Email
          <input
            type="email"
            placeholder="Enter Email"
            onChange={(e) => setEmail(e.target.value)}
            className="custom-form-input mt-1 block w-full py-2 px-4 rounded-lg cursor-pointer"
          />
        </label>

        <label className="custom-label mb-4">
          Enter Password
          <input
            type="password"
            placeholder="Enter Password"
            onChange={(e) => setPassword(e.target.value)}
            className="custom-form-input mt-1 block w-full py-2 px-4 rounded-lg cursor-pointer"
          />
        </label>

        <button onClick={handleRegister} className="custom-button bg-blue-500 text-white px-4 py-2  rounded-lg cursor-pointer">
          Create Account
        </button>

        <button className="custom-link mt-2 text-blue-500 cursor-pointer" onClick={() => console.log('Navigate to login')}>
          Already have an account? Login
        </button>
      </div>
    </div>
  );
};

export default RegisterComponents;
