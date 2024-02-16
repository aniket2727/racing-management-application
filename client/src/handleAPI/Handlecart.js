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

// Assume you have a function to retrieve carts by email
const getcartsdatabyEmail = async (email, token) => {
    try {
        const response = await fetch(`${baseurl}/cart/getByEmail/${email}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            },
        });

        if (!response.ok) {
            throw new Error(`Failed to get carts: ${response.status}`);
        }

        const data = await response.json();
        return data;
    } catch (error) {
        throw new Error(`Error getting carts: ${error.message}`);
    }
};

export {  addCartsData, getcartsdatabyEmail};