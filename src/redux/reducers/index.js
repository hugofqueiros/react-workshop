import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import app from './app';
import count from './count';

export default combineReducers({
    routing: routerReducer,
    app,
    count
})
