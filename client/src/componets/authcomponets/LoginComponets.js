import React, { useState } from 'react';

const LoginComponents = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (!email || !password) {
      return console.log('Fill in all data');
    }
    // Add your login logic here
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-4 text-dark-brown">Welcome, Login here</h1>
      <div className="bg-white p-8 rounded shadow-md">
        <label className="mb-4 block">
          Enter email
          <input
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="form-input mt-1 block w-full py-2 px-4 rounded-lg border border-gray-300 cursor-pointer"
          />
        </label>

        <label className="mb-4 block">
          Enter password
          <input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="form-input mt-1 block w-full py-2 px-4 rounded-lg border border-gray-300 cursor-pointer"
          />
        </label>

        <button onClick={handleLogin} className="bg-blue-500 text-white px-4 py-2 rounded">
          Login
        </button>

        <button className="mt-2 text-blue-500" onClick={() => console.log('Navigate to register')}>
          Not Account, Register
        </button>
      </div>
    </div>
  );
}

export default LoginComponents;
