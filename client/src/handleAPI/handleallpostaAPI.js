const baseurl = "http://localhost:8008";

const addpost = async ({ email, name, postContent, token }) => {
  try {
    const response = await fetch(`${baseurl}/post/posts`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify({ email, name, postContent }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(`Failed to add post: ${errorData.message}`);
    }

    const data = await response.json();
    return { data };
  } catch (error) {
    return { error: error.message };
  }
};

const getallpost = async ({ token }) => {
    console.log("Token in get all post data ", token);
    try {
        const response = await fetch(`${baseurl}/post/posts`, {
            headers: {
                'Authorization': `Bearer ${token}`,
            },
        });

        if (!response.ok) {
            const errorData = await response.json();
            console.error(`Failed to get all posts: ${errorData.message}`);
            throw new Error(`Failed to get all posts: ${errorData.message}`);
        }

        const data = await response.json();

        // Check if the received data is an array
        if (!Array.isArray(data)) {
            console.error('Received data is not an array:', data);
            throw new Error('Received data is not an array');
        }
        return { data };
    } catch (error) {
        console.error('Error fetching posts:', error.message);
        return { error: 'Failed to fetch posts' };
    }
};

const getpostEmail = async ({ email, token }) => {
  try {
    const response = await fetch(`${baseurl}/post/posts/${email}`);

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(`Failed to get posts by email: ${errorData.message}`);
    }

    const data = await response.json();
    return { data };
  } catch (error) {
    return { error: error.message };
  }
};

export { addpost, getallpost, getpostEmail };
