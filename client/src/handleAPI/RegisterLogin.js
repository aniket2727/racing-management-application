const baseurl = "http://localhost"; // Assuming you missed the protocol (http/https)

const loginData = async (newData) => {
  console.log("this is login data", newData)
  try {
    const response = await fetch(`${baseurl}/api/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newData),
    });

    if (!response.ok) {
      throw new Error(`Login failed with status ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(`Login failed: ${error.message}`);
  }
};

const registerData = async (newUserData) => {
  console.log("this is register data", newUserData)
  try {
    const response = await fetch(`${baseurl}/api/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newUserData),
    });

    if (!response.ok) {
      throw new Error(`Registration failed with status ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(`Registration failed: ${error.message}`);
  }
};

export { loginData, registerData };
