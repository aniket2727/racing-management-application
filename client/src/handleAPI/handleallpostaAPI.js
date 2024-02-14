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
  try {
    const response = await fetch(`${baseurl}/post/posts`);

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(`Failed to get all posts: ${errorData.message}`);
    }

    const data = await response.json();
    return { data };
  } catch (error) {
    return { error: error.message };
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
