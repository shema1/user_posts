export const fetchUsers = () => {
    return fetch("https://jsonplaceholder.typicode.com/users").then(response =>
      response.json()
    );
  };

  export const fetchUserPosts = id => {
    return fetch(
      `https://jsonplaceholder.typicode.com/posts?userId=${id}`
    ).then(response =>
      response.json()
    );
  };

  export const fetchUserPost = id => {
    return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`).then(
      response =>
        response.json()
    );
  };

  export const createPost = newPost =>
    fetch("https://5e39d9d88d7e1300149cd70c.mockapi.io/api/v1/posts", {
      method: "POST",
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      },
      body: JSON.stringify(newPost)
    });

    export const deletePost = id => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      method: "DELETE"
    });
  };


  export const updatePost = (id, newTask) =>
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      method: "PUT",
      body: JSON.stringify(newTask),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    });