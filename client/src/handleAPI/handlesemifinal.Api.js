// SemiFinalEvents.js

const baseurl = "http://localhost:8008";

const addSemiFinalEvent = async ({ token, email, firstName1, firstName2, cartName, ownerName1, ownerName2 }) => {
  try {
    const response = await fetch(`${baseurl}/semi/semi`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify({ email, firstName1, firstName2, cartName, ownerName1, ownerName2 }),
    });

    if (!response.ok) {
      throw new Error(`Failed to add semifinal event: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(`Semifinal event creation failed: ${error.message}`);
  }
};

const semiCartsByEmail = async ({ token, email }) => {
  console.log("in c api",email,token)
  try {
    const response = await fetch(`${baseurl}/semi/get/${email}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to get carts by email: ${response.status}`);
    }

    const data = await response.json();
    console.log('in c api data',data)
    return data;
  } catch (error) {
    throw new Error(`Fetching carts by email failed: ${error.message}`);
  }
};

export { addSemiFinalEvent, semiCartsByEmail };
