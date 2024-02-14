





const baseurl = "http://localhost:8008";

const addpost = async ({email,name, postContent,token}) => { 
      console.log("this is  email",email)
      console.log("this is name",name)
      console.log("this is content",postContent)
      console.log("this is token",token)
  try {
    const response = await fetch(`${baseurl}/post/posts`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify({ email, name, postContent}),
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

export { addpost };
