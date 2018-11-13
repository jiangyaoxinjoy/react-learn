import React, {Component} from 'react';
import Dom from './components/Dom';
import List from './components/List'
import TodoList from './components/TodoList'
import ReactForm from './components/ReactForm'

class App extends Component {
    render() {
        return (
            <div>
                <Dom/>
                <List/>
                <TodoList/>
                <ReactForm/>
            </div>
        )
    }
}

export default App;