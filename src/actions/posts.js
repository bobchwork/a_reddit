import axios from 'axios';
import * as actionTypes from './actionTypes';
import { findPost } from '../helpers/helper';
import store from '../config/store';

//this is just an example, but in real life we will need at least the the userId
export const getPosts = (userId = null) => {
  store.dispatch({
    type: actionTypes.GET_POSTS,
    payload: axios.get('/challenge.json'),
  });
};

export const deleteComment = (commentId, postId) => {
  const { main: { posts } } = store.getState();
  const post = findPost(postId, posts);
  console.log(post);
  if (!post) {
    return;
  }
  const comments = post.comments;
  const newComments = comments.filter((com) => (com.id !== commentId));
  const updatedPost = { ...post, comments: newComments };

  store.dispatch({
    type: actionTypes.DELETE_COMMENT,
    payload: updatedPost,
  });
};


