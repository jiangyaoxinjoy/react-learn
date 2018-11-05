import React from 'react'
import ReactDOM from 'react-dom'
import TodoList from './TodoList'
import {Provider} from 'react-redux'
import store from './store'

//App用jsx语法 。Provider是一个组件，是react-reudx通过的一个核心api
const App = (
    //Provider连接了store，Provider组件的所有内部组件都可以使用store
    <Provider store={store}>
        <TodoList/>
    </Provider>
);

ReactDOM.render(App, document.getElementById('root'));