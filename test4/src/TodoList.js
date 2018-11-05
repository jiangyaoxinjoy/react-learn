import React, {Component} from 'react';
import 'antd/dist/antd.css'
import store from './store2';
import * as Actions from './store2/actionCreators';
import TodoListUi from './TodoListUi';

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = store.getState();
        this.handleStoreChange = this.handleStoreChange.bind(this);
        this.hadleInputChange = this.hadleInputChange.bind(this);
        this.handleBtnClick = this.handleBtnClick.bind(this);
        this.delectItem = this.delectItem.bind(this);
        store.subscribe(this.handleStoreChange)
    }

    render() {
        return <TodoListUi
            inputValue={this.state.inputValue}
            hadleInputChange={this.hadleInputChange}
            handleBtnClick={this.handleBtnClick}
            delectItem={this.delectItem}
            list={this.state.list}
        />
    }

    hadleInputChange(e) {
        const action = Actions.getInputChangeAction(e.target.value);
        store.dispatch(action);
    }

    handleStoreChange() {
        this.setState(store.getState())
    }

    handleBtnClick() {
        const action = Actions.getAddItemAction();
        store.dispatch(action);
    }

    delectItem(item) {
        console.log(item);
        const action = Actions.getDelectItemAction(item);
        store.dispatch(action);
    }

    componentDidMount() {
        /*
        //redux-thunk
        const action = Actions.getTodoList()
        store.dispatch(action);
        */

        const action = Actions.getInitList();
        //因为使用了saga这个中间件，不仅redux可以接收派发的action，saga也可以接收。
        store.dispatch(action);
    }
}

export default TodoList