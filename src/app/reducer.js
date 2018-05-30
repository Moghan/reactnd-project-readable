import {
  ADD_COMMENT,
  SET_CATEGORIES,
  SET_POSTS,
  ADD_POST,
  HANDLE_VOTE,
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
        posts: [...restOfPosts, modifyPost]
      }
    default: return state;
  }
}

export default combineReducers({
  comments,
  categories,
  posts,
});