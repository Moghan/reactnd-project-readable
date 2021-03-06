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
export const SET_COMMENTS = 'SET_COMMENTS';
export const EDIT_COMMENT = 'EDIT_COMMENT';
export const DELETE_COMMENT = 'DELETE_COMMENT';
export const EDIT_POST = 'EDIT_POST';
export const COMMENT_VOTE = 'COMMENT_VOTE';

export const addComment = (post_id, comment) => ({
  type: ADD_COMMENT,
  comment,
  post_id
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

export const setComments = (id, comments) => ({
  type: SET_COMMENTS,
  id,
  comments
})

export const editComment = (post_id, comment_id, comment) => ({
  type: EDIT_COMMENT,
  post_id,
  comment_id,
  comment
})

export const deleteComment = (comment_id, post_id) => ({
  type: DELETE_COMMENT,
  comment_id,
  post_id
})

export const editPost = (post_id, post) => ({
  type: EDIT_POST,
  post_id,
  post
})

export const voteComment = (comment_id, post_id, vote) => ({
  type: COMMENT_VOTE,
  comment_id,
  post_id,
  option: { option: vote}
})