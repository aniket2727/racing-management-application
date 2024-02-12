import React, { useState } from 'react';
import SearchBarComponents from '../searchbar/SearchBarComponets';

const AddCartsComponent = () => {
    const [firstName1, setFirstName1] = useState('');
    const [firstName2, setFirstName2] = useState('');
    const [ownerName1, setOwnerName1] = useState('');
    const [ownerName2, setOwnerName2] = useState('');
    const [contactNumber, setContactNumber] = useState('');
    const [Allcartsdata, setAllcartsdata] = useState([]);

    const handleAddToEvent = () => {
        console.log('Adding to event:', {
            firstName1,
            firstName2,
            ownerName1,
            ownerName2,
            contactNumber
        });

        setAllcartsdata((prev) => [
            ...prev,
            { firstName1, firstName2, ownerName1, ownerName2 }
        ]);
    };

    return (
        <>
            <SearchBarComponents />

            <div className="max-w-md mx-auto bg-white p-6 rounded-md shadow-md mt-8" style={{ width: '100%' }}>
                <h1 className="text-2xl font-bold mb-4">Event Name</h1>

                <div className="flex flex-col gap-4">
                    <input
                        type="text"
                        placeholder="Add First Nandi Name"
                        value={firstName1}
                        onChange={(e) => setFirstName1(e.target.value)}
                        className="border border-black rounded p-2"
                    />

                    <input
                        type="text"
                        placeholder="Add Second Nandi Name"
                        value={firstName2}
                        onChange={(e) => setFirstName2(e.target.value)}
                        className="border border-black rounded p-2"
                    />

                    <input
                        type="text"
                        placeholder="Add First Nandi Name Owner Name"
                        value={ownerName1}
                        onChange={(e) => setOwnerName1(e.target.value)}
                        className="border border-black rounded p-2"
                    />

                    <input
                        type="text"
                        placeholder="Add Second Nandi Name Owner Name"
                        value={ownerName2}
                        onChange={(e) => setOwnerName2(e.target.value)}
                        className="border border-black rounded p-2"
                    />

                    <input
                        type="text"
                        placeholder="Add Contact Number"
                        value={contactNumber}
                        onChange={(e) => setContactNumber(e.target.value)}
                        className="border border-black rounded p-2"
                    />

                    <button
                        onClick={handleAddToEvent}
                        className="bg-green-500 text-white px-4 py-2 rounded"
                    >
                        Add to Event
                    </button>
                    <button
                    onClick={handleAddToEvent}
                    className="bg-green-500 text-white px-4 py-2 rounded"
                >
                    Start Race
                </button>
                </div>
            </div>

            <div className="main mt-4 flex flex-col items-center justify-center h-full ">
                {Allcartsdata.map((item, index) => (
                    <div key={index} className="flex a  p-4 mb-4 w-full md:w-3/4 lg:w-1/2 xl:w-1/3 flex-col items-center shadow-md">
                        <button className="bg-blue-500 text-white px-3 py-2 rounded mb-2 w-full">{index}</button>
                        <div className="a-item flex flex-col w-full items-center">
                            <button className="w-full bg-green-500 text-white px-3 py-2 rounded my-2">{item.firstName1}</button>
                            <button className="w-full bg-green-500 text-white px-3 py-2 rounded my-2">{item.firstName2}</button>
                            <button className="w-full bg-green-500 text-white px-3 py-2 rounded my-2">{item.ownerName1}</button>
                            <button className="w-full bg-green-500 text-white px-3 py-2 rounded my-2">{item.ownerName2}</button>
                        </div>
                        <button className="bg-red-500 text-white px-3 py-2 rounded mt-2">Delete this carts</button>
                    </div>
                ))}
            </div>
        </>
    );
};

export default AddCartsComponent;
