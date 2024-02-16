import React, { useState } from 'react';
import SearchBarComponents from '../searchbar/SearchBarComponets';
import { useMutation } from 'react-query'; // Remove useQuery and queryClient imports
import { useSelector } from 'react-redux';
import { addCartsData, getcartsdatabyEmail } from '../../handleAPI/Handlecart';
import { selectUser } from '../../redux/userSlice';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddCartsComponent = () => {
    const [firstName1, setFirstName1] = useState('');
    const [firstName2, setFirstName2] = useState('');
    const [ownerName1, setOwnerName1] = useState('');
    const [ownerName2, setOwnerName2] = useState('');
    const [contactNumber, setContactNumber] = useState('');
    const [cartName, setCartName] = useState('');
    const [flag,setFlag]=useState(true)

    // eslint-disable-next-line no-unused-vars
    const [getcartdata, setGetcartdata] = useState([]);
    const navigate = useNavigate(); // Initialize useNavigate hook
    const { email, token ,name} = useSelector(selectUser);
    const { mutate: createEvent } = useMutation(
        (newData) => addCartsData({ ...newData, email, token }),
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

                // Show success toast
                toast.success('Cart added successfully!');
            },
            onError: (error) => {
                // Show error toast
                toast.error(`Error adding cart: ${error.message}`);
            },
        }
    );

    const handleAddCart = async () => {
        try {
            await createEvent({
                token,
                email,
                name,
                firstName1,
                firstName2,
                ownerName1,
                ownerName2,
                contactNumber,
                cartName,
            });

            const cartsData = await getcartsdatabyEmail(email, token);
            setGetcartdata(cartsData.data); // Corrected to set data property

            console.log('Carts Data:', cartsData);
            console.log(getcartdata);
        } catch (error) {
            console.error('Error creating event:', error.message);
        }

    };
    
    const handleGoToFirstRound=async()=>{
        setFlag(false);
     }


     if (!flag) {
        return (
          <div className="flex flex-col items-center justify-center h-screen">
            <h1>You want to start the race</h1>
            <h1>You cannot add a cart again</h1>
            <button
              onClick={() => navigate('/first-round')}
              className="bg-green-500 text-white px-4 py-2 rounded mt-4"
            >
              I agree to the condition and start the race
            </button>
            <button
              onClick={() => setFlag(true)}
              className="bg-red-500 text-white px-4 py-2 rounded mt-4"
            >
              Take back and add elements
            </button>
          </div>
        );
      }
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
                        onClick={handleGoToFirstRound} // Adjusted function name
                        className="bg-green-500 text-white px-4 py-2 rounded"
                    >
                        Start Race
                    </button>
                </div>
            </div>

            <div className="cart-list mt-8 mx-auto max-w-md">
                {getcartdata && getcartdata.length > 0 ? (
                    getcartdata.map((cart, index) => (
                        <div key={index} className="cart-item bg-white p-4 my-4 rounded-md shadow-md">
                            <h2 className="text-xl font-bold">Cart Name: {cart.cartName}</h2>
                            <p>Owner Name: {cart.ownerName1} {cart.ownerName2}</p>
                            <p>Contact Number: {cart.contactNumber}</p>
                            <p>nandi name1: {cart.firstName1} {cart.ownerName2}</p>
                            <p>nandi  name2: {cart.firstName2}</p>
                        </div>
                    ))
                ) : (
                    <div className="empty-cart-list text-center">
                        <h1 className="text-xl font-bold">No carts added yet</h1>
                    </div>
                )}
            </div>

        </>
    );
};

export default AddCartsComponent;
