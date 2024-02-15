import React, { useEffect, useState } from 'react';
import { FinalCartsByEmail } from '../../handleAPI/handleFinal.ApI';
import { useSelector } from 'react-redux';
import { selectUser } from '../../redux/userSlice';

const FinalComponets = () => {
  const { email, token } = useSelector(selectUser);
  const [allfinalcarts, setAllFinalCarts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch final carts using the FinalCartsByEmail function
        const response = await FinalCartsByEmail({
          token: email, // Replace with your actual auth token
          email: token, // Replace with the user's email
        });
        setAllFinalCarts(response.data || []);
        console.log('Final Carts Data:', response.data);
      } catch (error) {
        console.error('Error fetching final carts data:', error.message);
      }
    };

    fetchData();
  }, [email,token]);

  return (
    <div className="w-full min-h-screen flex items-center justify-center">
      <div className="max-w-2xl p-6 bg-white rounded-md shadow-md">
        <h1 className="text-3xl font-bold mb-4 text-gray-800">All Carts Compositions to Semi-Finals</h1>
        <div>
          <button className="bg-blue-500 text-white px-4 py-2 rounded">
            Semi-qualifiers
          </button>
        </div>
        {allfinalcarts &&
          allfinalcarts.map((item, index) => (
            <div key={index} className="flex flex-col items-center my-4 border border-gray-300 p-4">
              <div className="abc flex">
                <h1 className="text-xl mb-2">{item.bullName1}</h1>
                <h1 className="text-xl mb-2">{item.bullName2}</h1>
              </div>
              <div className="abc flex">
                <h1 className="text-xl mb-2">{item.ownerName1}</h1>
                <h1 className="text-xl mb-2">{item.ownerName2}</h1>
              </div>
              <div>
                <button className="bg-green-500 text-white px-3 py-2 rounded mt-2">
                  Winner
                </button>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default FinalComponets;
