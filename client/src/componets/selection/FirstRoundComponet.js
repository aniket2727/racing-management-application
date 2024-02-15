import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { getcartsdatabyEmail } from '../../handleAPI/Handlecart';
import { selectUser } from '../../redux/userSlice';

const FirstRoundComponet = () => {
  const { email, token } = useSelector(selectUser);
  const [flag, setFlag] = useState(false);
  const [allcartsdata, setAllcartsdata] = useState([]);
  const [startIndex, setStartIndex] = useState(0);
  const cartsPerPage = 9;

  const handleConfirm = () => {
    setFlag(false);
  };

  const handleWinnerClick = () => {
    if (startIndex + cartsPerPage < allcartsdata.length) {
      setFlag(true);
      setStartIndex(startIndex + cartsPerPage);
    } else {
      setStartIndex(0);
    }
  };

  useEffect(() => {
    const fetchCartsData = async () => {
      try {
        const response = await getcartsdatabyEmail(email, token);
        setAllcartsdata(response.data || []); // Set all cart data here
        console.log('All Carts Data:', response.data);
      } catch (error) {
        console.error('Error fetching cart data:', error.message);
      }
    };

    fetchCartsData();
  }, [email, token]);

  if (flag) {
    return (
      <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-opacity-50 bg-gray-500">
        <div className="bg-white p-4 rounded-md text-center">
          <h1 className="text-xl mb-4">You are confirming about the user</h1>
          <button className="bg-green-500 text-white px-4 py-2 rounded" onClick={handleConfirm}>
            Confirm
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen flex items-center justify-center">
      <div className="max-w-2xl p-6 bg-white rounded-md shadow-md">
        <h1 className="text-3xl font-bold mb-4 text-gray-800">All Carts Compositions to Semi-Finals</h1>
        <div>
          <button onClick={handleWinnerClick} className="bg-blue-500 text-white px-4 py-2 rounded">
            Semi-qualifiers
          </button>
        </div>
        {allcartsdata && allcartsdata
          .slice(startIndex, startIndex + cartsPerPage)
          .map((item, index) => (
            <div key={index} className="flex flex-col items-center my-4 border border-gray-300 p-4">
              <div className="abc flex">
                <h1 className="text-xl mb-2">Cart Name: {item.cartName}</h1>
              </div>
              <div className="abc flex">
                <p className="text-xl mb-2">Owner Name: {item.ownerName1} {item.ownerName2}</p>
              </div>
              <div>
                <p className="text-xl mb-2">Contact Number: {item.contactNumber}</p>
                <p className="text-xl mb-2">First Name 1: {item.firstName1}</p>
                <p className="text-xl mb-2">First Name 2: {item.firstName2}</p>
                <button className="bg-green-500 text-white px-3 py-2 rounded mt-2" onClick={handleWinnerClick}>
                  Winner
                </button>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default FirstRoundComponet;
