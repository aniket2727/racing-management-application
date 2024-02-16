const baseurl = "http://localhost:8008"; // Assuming you missed the protocol (http/https)

const loginData = async (newData) => {
  try {
    const response = await fetch(`${baseurl}/login/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newData),
    });
     if (!response.ok) {
      return `Login failed:`
     }

    const data = await response.json();
    return data;
  } catch (error) {
     return `Login failed: ${error.message}`
  }
};

const registerData = async (newUserData) => {
  try {
    const response = await fetch(`${baseurl}/register/register`, {
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
