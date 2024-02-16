// eventAPI.js
const baseurl = "http://localhost:8008";

const addevent = async ({ token, email, eventName, organizerName, location, eventDate }) => {
  try {
    const response = await fetch(`${baseurl}/event/events`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify({ email, eventName, organizerName, location, eventDate }),
    });

    if (!response.ok) {
      throw new Error(`Failed to add data: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(`Event creation failed: ${error.message}`);
  }
};

const getEventsByEmail = async (email, token) => {
  console.log("called ......")
  try {
    const response = await fetch(`${baseurl}/event/events/${email}`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch events: ${response.status}`);
    }

    const data = await response.json();

    if (data.length === 0) {
      // No events found for the given email
      return 0;
    }

    return data;
  } catch (error) {
    throw new Error(`Failed to get events by email: ${error.message}`);
  }
};


const deleteEventsByEmail = async (email, token) => {
  try {
    // Input validation
    if (!email || !token) {
      throw new Error('Email and token are required');
    }

    const response = await fetch(`${baseurl}/event/events/${email}`, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      const errorText = await response.text(); // Get the actual error message from the response
      throw new Error(`Failed to delete events: ${response.status} - ${errorText}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(`Failed to delete events by email: ${error.message}`);
  }
};


export { addevent, getEventsByEmail, deleteEventsByEmail };
