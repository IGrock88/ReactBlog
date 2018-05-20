import { createStore, combineReducers, applyMiddleware } from 'redux';

import logger from 'redux-logger';
import promise from 'redux-promise-middleware';

//Reducers
import { postsReducer } from '../reducers/postsReducer';
import {blogsReducer} from "../reducers/blogsReducer";
//import { userReducer } from '../reducers/userReducer';

const reducers = combineReducers({
    posts: postsReducer,
    blogs: blogsReducer
    //user: userReducer
});

const middleware = applyMiddleware(promise(), logger());

const store = createStore(reducers, middleware);
export default store;