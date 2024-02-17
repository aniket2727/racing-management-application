// FirstRoundComponent.jsx

import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { getcartsdatabyEmail } from '../../handleAPI/Handlecart';
import { selectUser } from '../../redux/userSlice';
import { useNavigate } from 'react-router-dom';
import { addSemiFinalEvent } from '../../handleAPI/handlesemifinal.Api';

const FirstRoundComponent = () => {
  const { email, token } = useSelector(selectUser);
  const [flag, setFlag] = useState(false);
  const [allCartsData, setAllCartsData] = useState([]);
  const [selectedCarts, setSelectedCarts] = useState([]);
  const cartsPerPage = 10;
  const navigate = useNavigate();
  const[f,sf]=useState(true)

  const handleConfirm = () => {
    setFlag(false);
  };

  const handleWinnerClick = async (selectedCart) => {
    try {
      await addSemiFinalEvent({
        token,
        email,
        firstName1: selectedCart.firstName1,
        firstName2: selectedCart.firstName2,
        cartName: selectedCart.cartName,
        ownerName1: selectedCart.ownerName1,
        ownerName2: selectedCart.ownerName2,
      });
      setFlag(true)
      // Remove all 10 carts, including the winner, from the current round
      setAllCartsData((prevCarts) => prevCarts.slice(cartsPerPage));

      // If there are more carts to process, select the next 10
      if (allCartsData.length > 0) {
        const nextCarts = allCartsData.slice(0, cartsPerPage);
        setAllCartsData((prevCarts) => prevCarts.slice(cartsPerPage));
        setSelectedCarts(nextCarts);
      }
      else{
        sf(false)
        setSelectedCarts(allCartsData);
      }
    } catch (error) {
      console.error('Error adding semifinal event:', error.message);
    }
  };

  useEffect(() => {
    console.log('Selected Carts:', selectedCarts);
  }, [selectedCarts]);

  useEffect(() => {
    const fetchCartsData = async () => {
      try {
        const response = await getcartsdatabyEmail(email, token);
        setAllCartsData(response.data || []);

        // Select the first 10 carts initially
        if (allCartsData.length >= cartsPerPage) {
          const initialCarts = allCartsData.slice(0, cartsPerPage);
          setAllCartsData((prevCarts) => prevCarts.slice(cartsPerPage));
          setSelectedCarts(initialCarts);
        } else {
          setSelectedCarts(allCartsData);
        }

        console.log('All Carts Data:', response.data);
      } catch (error) {
        console.error('Error fetching cart data:', error.message);
      }
    };

    fetchCartsData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [email, token,f]);

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
        <h1 className="text-3xl font-bold mb-4 text-gray-800">First Round</h1>
        <h1 className="text-3xl font-bold mb-4 text-gray-800">All Carts Compositions to Semi-Finals</h1>
        <div>
          <button onClick={() => navigate('/semi-finals')} className="bg-blue-500 text-white px-4 py-2 rounded">
            Semi-Finalists
          </button>
        </div>
        {selectedCarts &&
          selectedCarts.map((item, index) => (
            <div key={index} className="flex flex-col items-center my-4 border border-gray-300 p-4">
              <h1 className="text-xl mb-2">Cart Name: {item.cartName}</h1>
              <p className="text-xl mb-2">Owner Name: {item.ownerName1} {item.ownerName2}</p>
              <p className="text-xl mb-2">Contact Number: {item.contactNumber}</p>
              <p className="text-xl mb-2">First Name 1: {item.firstName1}</p>
              <p className="text-xl mb-2">First Name 2: {item.firstName2}</p>
              <button className="bg-green-500 text-white px-3 py-2 rounded mt-2" onClick={() => handleWinnerClick(item)}>
                Winner
              </button>
            </div>
          ))}
      </div>
    </div>
  );
};

export default FirstRoundComponent;
