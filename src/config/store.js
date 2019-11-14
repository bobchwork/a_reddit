import { createStore, applyMiddleware } from 'redux';
import promise from 'redux-promise-middleware';
import thunk from 'redux-thunk';
import reducer from '../reducers';

const middlewares = [promise, thunk];

const store = createStore(reducer, applyMiddleware(...middlewares));

export default store;
