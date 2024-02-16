




// SemiFinalEvents.js

const baseurl = "http://localhost:8008";

const AddFinalcarts= async ({ token, email, firstName1, firstName2, cartName, ownerName1, ownerName2 }) => {
  console.log("emails",email,firstName1,firstName2,cartName,ownerName1,ownerName2);
  try {
    const response = await fetch(`${baseurl}/final/final`, {
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

const FinalCartsByEmail = async ({ token, email }) => {
  console.log("email is A ",email);
  console.log("token is A ",token)
  try {
    const response = await fetch(`${baseurl}/final/get/${email}`, {
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
    console.log('data c final ',data)
    return data;

  } catch (error) {
    throw new Error(`Fetching carts by email failed: ${error.message}`);
  }
};

export { AddFinalcarts, FinalCartsByEmail};
