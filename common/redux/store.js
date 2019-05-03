import {createStore, compose} from 'redux';
import rootReducer from './rootReducer';
import middleware from './middleware.js';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore (rootReducer, composeEnhancers (middleware));

export default store;