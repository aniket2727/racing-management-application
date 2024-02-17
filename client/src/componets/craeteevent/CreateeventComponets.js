import React, { useEffect, useState } from 'react';
import { useMutation } from 'react-query';
import { useSelector } from 'react-redux';
import { addevent } from '../../handleAPI/HandleEvent.API';
import { selectUser } from '../../redux/userSlice';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import './Style.css';
import 'react-toastify/dist/ReactToastify.css';
import { getEventsByEmail, deleteEventsByEmail } from '../../handleAPI/HandleEvent.API';
import { deleteCartsByEmail } from '../../handleAPI/Handlecart';
import { deleteCartsByEmailSemi } from '../../handleAPI/Handlecart';
import { deleteCartsByEmailFinal } from '../../handleAPI/Handlecart';


const CreateEventComponents = () => {
  const [eventName, setEventName] = useState('');
  const [organizerName, setOrganizerName] = useState('');
  const [location, setLocation] = useState('');
  const [eventDate, setEventDate] = useState('');
  const [flag,setflag]=useState(false)

  const [eventstatus, setEventstatus] = useState(true);
  const { email, token } = useSelector(selectUser);
  const navigate = useNavigate();

  const fetchData = async () => {
    try {
      const result = await getEventsByEmail(email, token);
      if (result === 0) {
        setEventstatus(false);
      } else {
        setEventstatus(result.length > 0);
      }
    } catch (error) {
      console.error('Error fetching events:', error.message);
    }
  };
  useEffect(() => {
    fetchData(); // Call the async function
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [email, token]); // Include email and token in the dependency array
  
  const deleteall=async()=>{
    console.log("Deleting all data for email:", email,token);
    setTimeout(() => {
      setflag(false);
    }, 2000);
    try {
      console.log("Deleting events...");
      await deleteEventsByEmail(email, token);
      
      console.log("Deleting carts...");
      await deleteCartsByEmail(email, token);
      
      console.log("Deleting semi carts...");
      await deleteCartsByEmailSemi(email, token);
      
      console.log("Deleting final carts...");
      await deleteCartsByEmailFinal(email, token);
      
      console.log('Events and carts deleted successfully!');
      toast.success('Events and carts deleted successfully!');
      
      setEventstatus(false);
     
    } catch (error) {
      console.error('Error deleting data:', error);
      toast.error('Error deleting data. Please check your authentication token and try again.');
    }
  }
  const handleDeleteEvent = async () => {
    // debugger
    console.log("handle delete callde ")
    setflag(true)
    console.log(flag);

    try {
      // const fetchDataAfterDeletion = async () => {
      //   try {
      //     const result = await getEventsByEmail(email, token);
      //     if (result === 0) {
      //       setEventstatus(false);
      //     } else {
      //       setEventstatus(result.length > 0);
      //     }
      //   } catch (error) {
      //     console.error('Error fetching events:', error.message);
      //   }
      // };

      // fetchDataAfterDeletion(); // Call the async function

      // Reset component state for event creation
      if(!eventstatus){
        setEventName('');
        setOrganizerName('');
        setLocation('');
        setEventDate('');
      }    
    } catch (error) {
      console.error('Deletion failed:', error);
      toast.error('No event for delete.');
    }

  };

  const { mutate: createEvent, isLoading } = useMutation(
    (newData) => addevent({ ...newData, email, token }),
    {
      onSuccess: (data) => {
        setEventName('');
        setOrganizerName('');
        setLocation('');
        setEventDate('');

        toast.success('Event created successfully!');
        navigate('/addcart');
      },
      onError: (error) => {
        toast.error('Error creating event: Maybe an event with the same details already exists.');
      },
    }
  );

  const handleCreateEvent = async () => {
    try {
      await createEvent({
        token,
        email,
        eventName,
        organizerName,
        location,
        eventDate,
      });
    } catch (error) {
      console.error('Error creating event:', error.message);
    }
  };



  // eslint-disable-next-line no-lone-blocks
  

  if(flag){
       return(
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
        <div className="bg-white p-8 max-w-md">
          <h1 className="text-2xl font-bold mb-4">Do you want to delete the event?</h1>
          <p className="mb-4">You cannot access any data related to this event after deletion.</p>
          <button className="bg-red-500 text-white px-4 py-2 mr-4" onClick={deleteall}>
            Confirm Delete
          </button>
          <button className="bg-blue-500 text-white px-4 py-2" onClick={() => setflag(false)}>
            Go Back
          </button>
        </div>
      </div>
       )
  }
  
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl font-bold mb-4">Create new racing events</h1>

      {eventstatus && (
        <>
          <h1 className="text-2xl font-bold mb-4">Already event is running</h1>

          <button
            className="p-2 w-1/2 bg-green-500 text-white rounded border ml-4 border-green-600"
            onClick={handleDeleteEvent}
            disabled={isLoading}
          >
            {isLoading ? ' Deleting...' : 'Delete'}
          </button>

          <button
            className="p-2 w-1/2 bg-green-500 text-white rounded border ml-4 border-green-600 mb-4 mt-4"
            onClick={() => {
              navigate('/addcart');
            }}
            disabled={isLoading}
          >
            {isLoading ? ' Go to Event...' : 'Go to Event'}
          </button>
        </>
      )}

      <input
        placeholder="Enter Event Name"
        type="text"
        className="p-2 w-1/2 rounded border border-gray-300 mb-4 mt-4"
        value={eventName}
        onChange={(e) => setEventName(e.target.value)}
      />

      <input
        placeholder="Enter Event Organizer name"
        type="text"
        className="p-2 w-1/2 rounded border border-gray-300 mb-4"
        value={organizerName}
        onChange={(e) => setOrganizerName(e.target.value)}
      />

      <input
        placeholder="Enter Place /Location"
        type="text"
        className="p-2 w-1/2 rounded border border-gray-300 mb-4"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />

      <input
        placeholder="Enter Event Date"
        type="date"
        className="p-2 w-1/2 rounded border border-gray-300 mb-4"
        value={eventDate}
        onChange={(e) => setEventDate(e.target.value)}
      />

      <button
        className="p-2 w-1/2 bg-green-500 text-white rounded border border-green-600"
        onClick={handleCreateEvent}
        disabled={isLoading}
      >
        {isLoading ? 'Creating Event...' : 'Create Event'}
      </button>

      {Error && <div>Error creating event</div>}
    </div>
  );
};

export default CreateEventComponents;
