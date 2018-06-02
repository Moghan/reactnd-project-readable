import {
  ADD_COMMENT,
  SET_CATEGORIES,
  SET_POSTS,
  ADD_POST,
  HANDLE_VOTE,
  SET_SORT_BY,
  SET_FILTER_BY,
  INCREASE_COMMENT_COUNT,
  DELETE_POST,
  SET_COMMENTS,
  EDIT_COMMENT,
  DELETE_COMMENT,
} from './actions'

import * as BlogAPI from '../BlogAPI';

import { combineReducers } from 'redux';

const initialState = {};

const comments = (state = initialState, action) => {
  switch(action.type) {
    case SET_COMMENTS: {
      const { id, comments } = action;
      return {
        ...state,
        [id]: comments
      }
    }
    case ADD_COMMENT: {
      const { post_id, comment } = action;
      BlogAPI.addComment(comment);
      return {
        ...state,
        [post_id]: [...state[post_id], comment]
      }
    }
    case EDIT_COMMENT: {
      const {post_id, comment_id, comment } = action;
      const restOfComments = state[post_id].filter((comment) => comment.id !== comment_id);
      BlogAPI.editComment(comment_id, comment);
      return {
        ...state,
        [post_id]: [...restOfComments, comment]
      }
    }
    case DELETE_COMMENT: {
      const { comment_id, post_id } = action;
      BlogAPI.deleteComment(comment_id);
      return {
        ...state,
        [post_id]: state[post_id].filter((comment) => comment.id !== comment_id)
      }
    }
    default: return state;
  }
}

const categories = (state = {}, action) => {
  switch(action.type) {
    case SET_CATEGORIES:
      const { categories } = action;
      return {
        ...state,
        categories
      }
    default: return state;
  }
}

const posts = (state = { sortBy: "timestamp", filterBy: "", pokeReload: false }, action) => {
  switch(action.type) {
    case SET_POSTS:
      const { posts } = action;
      return {
        ...state,
        posts,
      }
    case ADD_POST:
      const { post } = action;
      BlogAPI.addPost(post);
      return {
        ...state,
        posts: [...state.posts, post]
      }
    case HANDLE_VOTE:
      const { id, option } = action;
      BlogAPI.handleVote(id, option);
      const changeValue = option.option === "upVote" ? 1 : -1;
      let modifyPost = state.posts.filter(post => post.id === id);
      modifyPost =  {
        ...modifyPost[0],
        voteScore: modifyPost[0].voteScore + changeValue
      }
      const restOfPosts = state.posts.filter(post => post.id !== id);
      return {
        ...state,
        posts: [...restOfPosts, modifyPost]
      }
    case SET_SORT_BY:
      const { sortBy } = action;
      return {
        ...state,
        sortBy
      }
    case SET_FILTER_BY:
      const { filterBy } = action;
      return {
        ...state,
        filterBy
      }
    case INCREASE_COMMENT_COUNT: {
      const { postId } = action;
      let modifyPost = state.posts.filter(post => post.id === postId);
      modifyPost =  {
        ...modifyPost[0],
        commentCount: modifyPost[0].commentCount + 1
      }
      const restOfPosts = state.posts.filter(post => post.id !== postId);
      return {
        ...state,
        posts: [ ...restOfPosts, modifyPost]
      }
    }
    case DELETE_POST:{
      const { id } = action;
      return {
        ...state,
        posts: state.posts.filter((post) => post.id !== id)
      }
    }
    default: return state;
  }
}

export default combineReducers({
  comments,
  categories,
  posts,
});