import {createStore, applyMiddleware,compose } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducer';

//在redux-devtools的github里找到添加redux-devtools中间件的方法。
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;
const enhancer = composeEnhancers(
    applyMiddleware(thunk),
);
const store = createStore(
    reducer,
    enhancer
);

export default store;
