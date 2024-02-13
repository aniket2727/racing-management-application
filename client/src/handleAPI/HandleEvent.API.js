const baseurl = "http://localhost:8008"; // Assuming you missed the protocol (http/https)

const addevent = async ({ email, eventName, organizerName, location, eventDate }, token) => {
  console.log("this is event data", { email, eventName, organizerName, location, eventDate });

  try {
    const response = await fetch(`${baseurl}/event/events`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`, // Include the token in the Authorization header
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

export { addevent };
