export const ADD_COMMENT = 'ADD_COMMENT';
export const SET_CATEGORIES = 'SET_CATEGORIES';
export const SET_POSTS = 'SET_POSTS';
export const ADD_POST = 'ADD_POST';
export const HANDLE_VOTE = 'HANDLE_VOTE';

export const addComment = (comment) => ({
  type: ADD_COMMENT,
  comment
})

export const setCategories = (categories) => ({
  type: SET_CATEGORIES,
  categories
})

export const setPosts = (posts) => ({
  type: SET_POSTS,
  posts
})

export const addPost = (post) => ({
  type: ADD_POST,
  post
})

export const upVote = (id) => ({
  type: HANDLE_VOTE,
  id,
  option: { option: "upVote"}
})

export const downVote = (id) => ({
  type: HANDLE_VOTE,
  id,
  option: { option: "downVote"}
})