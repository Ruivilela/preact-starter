import createStore from "redux-zero";
import { applyMiddleware } from 'redux-zero/middleware';
import { connect } from 'redux-zero/devtools';

import counterState from './counter/state';

const state = {
    counter: counterState
}

const middlewares = connect ? applyMiddleware(connect(state)): [];
const store = createStore(state, middlewares);

export default store;
