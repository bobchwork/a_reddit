import { combineReducers } from 'redux';
import * as actionTypes from '../actions/actionTypes';

const initialState = {
  user:
    {
      id: '123',
      firstname: 'Amogh',
      surname: 'Meshram',
      email: 'dummy@gmail.com',
      phone: '489900909',
      profilePicture: './assets/Images/Circular.png',
    },
  posts: [],
  isLoading: false,
};

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_POSTS:
      return {
        ...state,
        isLoading: true,
      }
    case actionTypes.GET_POSTS_FULFILLED:
      return {
        ...state,
        posts: action.payload.data,
        isLoading: false,
      }
    case actionTypes.DELETE_COMMENT:
      const updatedPost = action.payload;
      const { posts } = state;
      const newPosts = posts.map( (post) => {
        if (post.id === updatedPost.id) {
          return updatedPost;
        }
        return post;
      });
      return {
        ...state,
        posts: newPosts,
        isLoading: false,
      }
    case actionTypes.GET_POSTS_REJECTED:
    default:
      return state;
  }
};

const reducer = combineReducers({
  main: mainReducer,
});

export default reducer;
