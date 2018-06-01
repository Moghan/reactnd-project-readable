const api = "http://localhost:3001";

let token = localStorage.token;

if (!token)
  token = localStorage.token = Math.random().toString(36).substr(-8);

const headers = {
  'Accept': 'application/json',
  'Content-Type': 'application/json',
  'Authorization' : token
};

export const getAll = () =>
  fetch(`${api}/posts`, { headers })
    .then(res => res.json())
    .then(data => data)

export const getCategories = () =>
  fetch(`${api}/categories`, { headers })
    .then(res => res.json())
    .then(data => data.categories)

export const getCategoryPosts = (category)  =>
  fetch(`${api}/${category}/posts`, {headers})
    .then(res => res.json())

export const getPosts = (category)  =>
  fetch(`${api}/posts`, {headers})
    .then(res => res.json())

export const addPost = (post) =>
  fetch(`${api}/posts`, {headers, method: "POST", body: JSON.stringify(post)})
    .then(res => res.json())

export const handleVote = (id, option) => {
  fetch(`${api}/posts/${id}`, {headers, method: "POST", body: JSON.stringify(option)})
}

export const addComment = (comment) => {
  fetch(`${api}/comments`, {headers, method: "POST", body: JSON.stringify(comment)})
}

export const getPostComments = (id) =>
  fetch(`${api}/posts/${id}/comments`, {headers})
    .then(res => res.json())

export const deletePost = (id) => {
  fetch(`${api}/posts/${id}`, {headers, method: "DELETE"})
}

export const _getPost = (id) =>
  fetch(`${api}/posts/${id}`, {headers})

export const getPost = (id) => 
  fetch(
    `http://localhost:3001/posts/${id}`,{ headers: { 'Authorization': token }}
)
