import {
  ADD_COMMENT,
  SET_CATEGORIES,
  SET_POSTS,
  ADD_POST,
} from './actions'

import * as BlogAPI from '../BlogAPI';

import { combineReducers } from 'redux';

const initialState = {};

const comments = (state = initialState, action) => {
  switch(action.type) {
    case ADD_COMMENT:
      const { comment } = action;
      return {
        ...state,
        [comment.timestamp]: comment,
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

const posts = (state = {}, action) => {
  switch(action.type) {
    case SET_POSTS:
      const { posts } = action;
      return {
        posts,
      }
    case ADD_POST:
      const { post } = action;
      console.log("TODO: add_post , ", post);
      BlogAPI.addPost(post);
      return {
        posts: [...state.posts, post]
      }
    default: return state;
  }
}

export default combineReducers({
  comments,
  categories,
  posts,
});