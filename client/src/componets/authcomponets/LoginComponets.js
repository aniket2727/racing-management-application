import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setUser, selectUser } from '../../redux/userSlice';
import { useNavigate } from 'react-router-dom';
import { useMutation } from 'react-query';
import { loginData } from '../../handleAPI/RegisterLogin';
import { toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Style.css'
const LoginComponents = () => {

  const [flag,setflag]=useState(true)
  const navigate = useNavigate();
  const mutation = useMutation(loginData);
  const dispatch = useDispatch();

  setTimeout(() => {
    setflag(false)
  }, 3000);
 
  // eslint-disable-next-line no-unused-vars
  const { email, token } = useSelector(selectUser);
  console.log(" login componets email is ",email)
  console.log(" login componets token is ",token)
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');

  const handleLogin = async () => {
    if (!userEmail || !userPassword) {
      return toast.error('Fill in all data');
    }

    const storedUserString = localStorage.getItem('user');
    if (storedUserString) {
      const storedUser = JSON.parse(storedUserString);
      const storedEmail = storedUser.email;    
      if (storedEmail && storedEmail === userEmail) {
        toast.success('Login successful');
        setTimeout(() => {
          navigate('/home');
        }, 2000);
        return;
      }
    }

    try {
      const response = await mutation.mutateAsync({
        email: userEmail,
        password: userPassword,
      });
       
      dispatch(setUser({ email: response.email, token: response.token ,name:response.name}));
      
      // Check if the response contains a success message
      if (response && response.success) {
        toast.success('Login successful');
        setTimeout(() => {
          navigate('/home');
        }, 2000);

      } else {
        toast.success('Login successful');
        setTimeout(() => {
          navigate('/home');
        }, 2000);
      }
    } catch (error) {
      // Handle error
       toast.error("login failed")
    }
  };

  if(flag){

    return (
      <div className="flex items-center justify-center h-screen">
        <div className="spinner"></div>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-4 text-dark-brown">Welcome, Login here</h1>
      <div className="bg-white p-8 rounded shadow-md">
        <label className="mb-4 block">
          Enter email
          <input
            type="email"
            placeholder="Enter email"
            value={userEmail}
            onChange={(e) => setUserEmail(e.target.value)}
            className="form-input mt-1 block w-full py-2 px-4 rounded-lg border border-gray-300 cursor-pointer"
          />
        </label>

        <label className="mb-4 block">
          Enter password
          <input
            type="password"
            placeholder="Enter password"
            value={userPassword}
            onChange={(e) => setUserPassword(e.target.value)}
            className="form-input mt-1 block w-full py-2 px-4 rounded-lg border border-gray-300 cursor-pointer"
          />
        </label>

        <button onClick={handleLogin} className="bg-blue-500 text-white px-4 py-2 rounded">
          Login
        </button>

        <button className="mt-2 text-blue-500" onClick={() => navigate('/register')}>
          Not Account, Register
        </button>
      </div>
    </div>
  );
};

export default LoginComponents;
