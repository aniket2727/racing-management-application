import React, { useState } from 'react';

const FirstRoundComponet = () => {
    const [flag,setflag]=useState(false)
  // eslint-disable-next-line no-unused-vars
  const [allcartsdata, setallcartsdata] = useState([
    { id: 1, bullName1: "Bull1", bullName2: "Bull2", ownerName1: "Owner1", ownerName2: "Owner2" },
    { id: 2, bullName1: "Bull2", bullName2: "Bull4", ownerName1: "Owner3", ownerName2: "Owner4" },
    { id: 1, bullName1: "Bull3", bullName2: "Bull2", ownerName1: "Owner1", ownerName2: "Owner2" },
    { id: 2, bullName1: "Bull4", bullName2: "Bull4", ownerName1: "Owner3", ownerName2: "Owner4" },
    { id: 1, bullName1: "Bull5", bullName2: "Bull2", ownerName1: "Owner1", ownerName2: "Owner2" },
    { id: 2, bullName1: "Bull6", bullName2: "Bull4", ownerName1: "Owner3", ownerName2: "Owner4" },
    { id: 1, bullName1: "Bull7", bullName2: "Bull2", ownerName1: "Owner1", ownerName2: "Owner2" },
    { id: 2, bullName1: "Bull8", bullName2: "Bull4", ownerName1: "Owner3", ownerName2: "Owner4" },
    { id: 1, bullName1: "Bull9", bullName2: "Bull2", ownerName1: "Owner1", ownerName2: "Owner2" },
    { id: 2, bullName1: "Bull10", bullName2: "Bull4", ownerName1: "Owner3", ownerName2: "Owner4" },
    { id: 1, bullName1: "Bull11", bullName2: "Bull2", ownerName1: "Owner1", ownerName2: "Owner2" },
    { id: 2, bullName1: "Bull12", bullName2: "Bull4", ownerName1: "Owner3", ownerName2: "Owner4" },
    { id: 1, bullName1: "Bull13", bullName2: "Bull2", ownerName1: "Owner1", ownerName2: "Owner2" },
    { id: 2, bullName1: "Bull14", bullName2: "Bull4", ownerName1: "Owner3", ownerName2: "Owner4" },
    { id: 1, bullName1: "Bull15", bullName2: "Bull2", ownerName1: "Owner1", ownerName2: "Owner2" },
    { id: 2, bullName1: "Bull16", bullName2: "Bull4", ownerName1: "Owner3", ownerName2: "Owner4" },
    { id: 1, bullName1: "Bull17", bullName2: "Bull2", ownerName1: "Owner1", ownerName2: "Owner2" },
    { id: 2, bullName1: "Bull18", bullName2: "Bull4", ownerName1: "Owner3", ownerName2: "Owner4" },
    
    // ... repeat data as needed
  ]);

  const [startIndex, setStartIndex] = useState(0);
  const cartsPerPage = 9;
  const handleConfirm=()=>{
    setflag(false)
  }

  const handleWinnerClick = () => {
    if (startIndex + cartsPerPage < allcartsdata.length) {
        setflag(true)   
        setStartIndex(startIndex + cartsPerPage);
        
    } else {
      setStartIndex(0);
    }
  };

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
        <h1 className="text-3xl font-bold mb-4 text-gray-800">All Carts Componetions to Semi-Finals</h1>
        <div>
          <button onClick={handleWinnerClick} className="bg-blue-500 text-white px-4 py-2 rounded">
            Semi-qualifiers
          </button>
        </div>
        {allcartsdata
          .slice(startIndex, startIndex + cartsPerPage)
          .map((item, index) => (
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
                <button className="bg-green-500 text-white px-3 py-2 rounded mt-2" onClick={handleWinnerClick}>Winner</button>
              </div>
            </div>
          ))}
      </div>
    </div>
  );}

export default FirstRoundComponet;
