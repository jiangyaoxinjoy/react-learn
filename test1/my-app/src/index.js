import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import TodoList from './TodoList';

//PWA progresslive web application
//https协议的服务器上
//serviceWorker将之前访问过的网页存储到浏览器内，断网可浏览。
// import * as serviceWorker from './serviceWorker';

//<App />是JSX语法，如果在项目使用了JSX语法就要引用React
ReactDOM.render(<TodoList name="todolist"/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
// serviceWorker.unregister();
