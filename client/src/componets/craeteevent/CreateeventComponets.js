import React, { useEffect, useState } from 'react';
import { useMutation } from 'react-query';
import { useSelector } from 'react-redux';
import { addevent } from '../../handleAPI/HandleEvent.API';
import { selectUser } from '../../redux/userSlice';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Style.css';
import { getEventsByEmail, deleteEventsByEmail } from '../../handleAPI/HandleEvent.API';
import { deleteCartsByEmail } from '../../handleAPI/Handlecart';
const CreateEventComponents = () => {
  const [eventName, setEventName] = useState('');
  const [organizerName, setOrganizerName] = useState('');
  const [location, setLocation] = useState('');
  const [eventDate, setEventDate] = useState('');

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

  const handleDeleteEvent = async () => {
    try {
      await deleteEventsByEmail(email, token);
      await deleteCartsByEmail(email,token)
      toast.success('Events deleted successfully!');

      const fetchDataAfterDeletion = async () => {
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

      fetchDataAfterDeletion(); // Call the async function

      // Reset component state for event creation
      setEventName('');
      setOrganizerName('');
      setLocation('');
      setEventDate('');
      
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
