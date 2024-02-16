import React, { useState } from 'react';
import { useMutation } from 'react-query';
import { useSelector } from 'react-redux';
import { addevent } from '../../handleAPI/HandleEvent.API';
import { selectUser } from '../../redux/userSlice';
import { useNavigate } from 'react-router-dom';
import './Style.css'
const CreateEventComponents = () => {
  const [eventName, setEventName] = useState('');
  const [organizerName, setOrganizerName] = useState('');
  const [location, setLocation] = useState('');
  const [eventDate, setEventDate] = useState('');
  // eslint-disable-next-line no-unused-vars
  const [flag,setflag]=useState(true);
  setTimeout(() => {
    setflag(false)
  }, 1000);

  const navigate = useNavigate(); // Initialize useNavigate hook

  const { email, token } = useSelector(selectUser);
  const { mutate: createEvent, isLoading, isError } = useMutation(
    (newData) => addevent({ ...newData, email, token }),
    {
      onSuccess: () => {
        // Handle success, e.g., reset form fields
        setEventName('');
        setOrganizerName('');
        setLocation('');
        setEventDate('');

        // Navigate to the /addcarts page after successful event creation
        navigate('/addcart');
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

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl font-bold mb-4">Create new racing events</h1>

      <input
        placeholder="Enter Event Name"
        type="text"
        className="p-2 w-1/2 rounded border border-gray-300 mb-4"
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

      {isError && <div>Error creating event</div>}
    </div>
  );
};

export default CreateEventComponents;
