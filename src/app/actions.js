export const ADD_COMMENT = 'ADD_COMMENT';
export const SET_CATEGORIES = 'SET_CATEGORIES';
export const SET_POSTS = 'SET_POSTS';
export const ADD_POST = 'ADD_POST';
export const HANDLE_VOTE = 'HANDLE_VOTE';
export const GET_ALL_POSTS = 'GET_ALL_POSTS';
export const SET_SORT_BY = 'SET_SORT_BY';
export const SET_FILTER_BY = 'SET_FILTER_BY';
export const INCREASE_COMMENT_COUNT = 'INCREASE_COMMENT_COUNT';
export const DELETE_POST = 'DELETE_POST';

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

export const setSortBy = (sortBy) => ({
  type: SET_SORT_BY,
  sortBy
})

export const setFilterBy = (filterBy) => ({
  type: SET_FILTER_BY,
  filterBy
})

export const increaseCommentCount = (postId) => ({
  type: INCREASE_COMMENT_COUNT,
  postId
})

export const deletePost = id => ({
  type: DELETE_POST,
  id
})