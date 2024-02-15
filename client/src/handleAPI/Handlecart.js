const baseurl = "http://localhost:8008"; // Assuming you missed the protocol (http/https)

const addCartsData = async ({ token, email, name, firstName1, firstName2, ownerName1, ownerName2, contactNumber, cartName }) => {
  try {
    const response = await fetch(`${baseurl}/cart/add`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify({
        email,
        name,
        firstName1,
        firstName2,
        ownerName1,
        ownerName2,
        contactNumber,
        cartName
      }),
    });

    if (!response.ok) {
      throw new Error(`Failed to add cart data: ${response.status}`);
    }

    const data = await response.json();
    
    return data;
  } catch (error) {
    throw new Error(`Cart data creation failed: ${error.message}`);
  }
};

export { addCartsData };
