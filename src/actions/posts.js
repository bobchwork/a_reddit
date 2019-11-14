import axios from 'axios';
import * as actionTypes from './actionTypes';
import { findPost } from '../helpers/helper';

export const getPosts = (userId = null) => {
  return {
    type: actionTypes.GET_POSTS,
    payload: axios.get('/api/challenge.json'),
  };
};

export const deleteComment = (commentId, postId) => {
  return (dispatch, getState) => {
    const { main: { posts } } = getState();
    const post = findPost(postId, posts);
    if (!post) {
      return;
    }
    const comments = post.comments;
    const newComments = comments.filter((com) => (com.id !== commentId));
    const updatedPost = { ...post, comments: newComments };
  
    dispatch({
      type: actionTypes.DELETE_COMMENT,
      payload: updatedPost,
    });    
  }
};
