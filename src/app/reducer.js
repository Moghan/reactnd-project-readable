import {
  ADD_COMMENT,
  SET_CATEGORIES,
  SET_POSTS,
  ADD_POST,
  HANDLE_VOTE,
  SET_SORT_BY,
  SET_FILTER_BY,
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

const posts = (state = { sortBy: "timestamp", filterBy: ""}, action) => {
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
    default: return state;
  }
}

export default combineReducers({
  comments,
  categories,
  posts,
});