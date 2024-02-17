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


// client/src/handleAPI/HandleCart.js
const deleteCartsByEmail = async (email, token) => {
  try {
    const response = await fetch(`${baseurl}/cart/carts/${email}`, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    });

    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(`Failed to delete carts by email: ${error.message}`);
  }
};


const deleteCartsByEmailSemi = async (email, token) => {
  try {
    const response = await fetch(`${baseurl}/semi/delete/${email}`, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    });

    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(`Failed to delete carts by email: ${error.message}`);
  }
};


const deleteCartsByEmailFinal = async (email, token) => {
  try {
    const response = await fetch(`${baseurl}/final/delete/${email}`, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    });

    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(`Failed to delete carts by email: ${error.message}`);
  }
};



const deleteCartsByObjects = async (carts, token) => {
  try {
    const response = await fetch(`${baseurl}/cart/deleteByObjects`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify({ carts }),
    });

    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(`Failed to delete carts by objects: ${error.message}`);
  }
};

export { addCartsData, getcartsdatabyEmail, deleteCartsByEmail, deleteCartsByEmailSemi, deleteCartsByEmailFinal, deleteCartsByObjects };
