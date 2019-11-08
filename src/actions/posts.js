import axios from 'axios';
import * as actionTypes from './actionTypes';
import { findPost } from '../helpers/helper';
import store from '../config/store';

export const getPosts = (userId = null) => {
  return {
    type: actionTypes.GET_POSTS,
    payload: axios.get('/api/challenge.json'),
  };
};

export const deleteComment = (commentId, postId) => {
  const { main: { posts } } = store.getState();
  const post = findPost(postId, posts);
  if (!post) {
    return;
  }
  const comments = post.comments;
  const newComments = comments.filter((com) => (com.id !== commentId));
  const updatedPost = { ...post, comments: newComments };

  return {
    type: actionTypes.DELETE_COMMENT,
    payload: updatedPost,
  };
};


