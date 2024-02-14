import React, { useState } from 'react';
import SearchBarComponents from '../searchbar/SearchBarComponets';
import { useMutation } from 'react-query';
import { useSelector } from 'react-redux';
import { addevent } from '../../handleAPI/HandleEvent.API';
import { selectUser } from '../../redux/userSlice';
import { useNavigate } from 'react-router-dom';

const AddCartsComponent = () => {
    const [firstName1, setFirstName1] = useState('');
    const [firstName2, setFirstName2] = useState('');
    const [ownerName1, setOwnerName1] = useState('');
    const [ownerName2, setOwnerName2] = useState('');
    const [contactNumber, setContactNumber] = useState('');
    const [cartName, setCartName] = useState('');

    const navigate = useNavigate(); // Initialize useNavigate hook

    const { email, token } = useSelector(selectUser);
    // eslint-disable-next-line no-unused-vars
    const { mutate: createEvent, isLoading, isError } = useMutation(
        (newData) => addevent({ ...newData, email, token }),
        {
            onSuccess: () => {
                // Handle success, e.g., reset form fields
                setFirstName1('');
                setFirstName2('');
                setOwnerName1('');
                setOwnerName2('');
                setContactNumber('');
                setCartName('');

                // Navigate to the /addcart page after successful event creation
                navigate('/addcart');
            },
        }
    );

    const handleAddCart = async () => {
        try {
            await createEvent({
                token,
                email,
                firstName1,
                firstName2,
                ownerName1,
                ownerName2,
                contactNumber,
                cartName,
            });
        } catch (error) {
            console.error('Error creating event:', error.message);
        }
    };

    return (
        <>
            <SearchBarComponents />

            <div
                className="max-w-md mx-auto bg-white p-6 rounded-md shadow-md mt-8"
                style={{ width: '100%' }}
            >
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

                    {/* Added input for cart name */}
                    <input
                        type="text"
                        placeholder="Add Cart Name"
                        value={cartName}
                        onChange={(e) => setCartName(e.target.value)}
                        className="border border-black rounded p-2"
                    />

                    <button
                        onClick={handleAddCart}
                        className="bg-green-500 text-white px-4 py-2 rounded"
                    >
                        Add to Event
                    </button>
                    <button
                        onClick={handleAddCart} // Adjusted function name
                        className="bg-green-500 text-white px-4 py-2 rounded"
                    >
                        Start Race
                    </button>
                </div>
            </div>
        </>
    );
};

export default AddCartsComponent;
