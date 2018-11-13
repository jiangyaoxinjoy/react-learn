import React, {Component} from 'react';
import '../assets/css/todolist.css';
import storage from '../model/localStorage'

class TodoList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            list: [],
            inputValue: '',
        }
    }

    render() {
        return (
            <div>
                <h2>React TodoList案例演示</h2>
                <input
                    type="text"
                    value={this.state.inputValue}
                    placeholder='TodoList'
                    onChange={this.changeInput}
                    onKeyUp={this.keyAddList}
                />
                <button onClick={this.addList}>增加</button>
                <h2>待办事项</h2>
                <ul>
                    {
                        this.getList('1')
                    }
                </ul>
                <hr/>
                <h2>已完成事项</h2>
                <ul>
                    {
                        this.getList('2')
                    }
                </ul>
            </div>
        )
    }

    componentDidMount() {
        const list = storage.get("list");
        if (list) {
            this.setState({
                list: list
            })
        }
    }

    keyAddList = e => {
        if (e.keyCode === 13) {
            this.addList()
        }
    };
    getList = (flag) => {
        if (flag === '1') {
            return this.state.list.map((item, key) => {
                if (!item.checked) {
                    return (
                        <li key={key}>
                            <input type="checkbox"
                                   checked={item.checked}
                                   onChange={() => this.changeCheckBox(key)}
                            />
                            {item.title}
                            <button onClick={() => this.deleteList(key)}>删除</button>
                        </li>
                    )
                } else {
                    return null;
                }
            })
        } else if (flag === '2') {
            return this.state.list.map((item, key) => {
                if (item.checked) {
                    return (
                        <li key={key}>
                            <input type="checkbox"
                                   checked={item.checked}
                                   onChange={() => this.changeCheckBox(key)}
                            />
                            {item.title}
                            <button onClick={() => this.deleteList(key)}>删除</button>
                        </li>
                    )
                } else {
                    return null;
                }
            })
        }
    };

    changeInput = e => {
        const res = e.target.value;
        this.setState(() => ({
            inputValue: res
        }))
    };
    addList = () => {
        const newItem = {title: this.state.inputValue, checked: false};
        this.setState((prevState) => ({
            list: [...prevState.list, newItem],
            inputValue: ''
        }));
        //缓存数据，localStorage只能保存字符串，不能保存对象数组，所有将list转换成字符串。
        // localStorage.setItem('list',JSON.stringify(this.state.list));
        storage.set("list", this.state.list)
    };

    deleteList(key) {
        const prevList = this.state.list;
        prevList.splice(
            key, 1
        );
        this.setState(() => ({
            list: [...prevList]
        }))
        storage.set("list", this.state.list)
    }

    changeCheckBox(key) {
        const prevList = this.state.list;
        prevList[key].checked = !prevList[key].checked;
        this.setState(() => ({
            list: [...prevList]
        }))
        storage.set("list", this.state.list)
    }
}

export default TodoList;