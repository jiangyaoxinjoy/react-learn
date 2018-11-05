import React, {Component, Fragment} from 'react';
import './style.css'
import TodoItem from './components/TodoItem';
//Fragment占位符。
class TodoList extends Component {
    //类的构造函数，当我们执行一个类时，构造函数是最先执行的函数
    constructor(props) {
        //继承父类
        super(props);
        //定义数据
        this.state = {
            inputValue: '',
            list: []
        };
        //组件初始化的时候就把this指向绑定
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleBtnClick = this.handleBtnClick.bind(this);
        this.handleDelect = this.handleDelect.bind(this);
        this.getTodoItem = this.getTodoItem.bind(this);
    }

    render() {
        return (
            <Fragment>
                <div>
                    <label htmlFor="input">输入内容</label>
                    <input
                        className="input"
                        id="input"
                        type="text"
                        value={this.state.inputValue}
                        onChange={this.handleInputChange}
                    />
                    <button onClick={this.handleBtnClick}>提交</button>
                </div>
                <ul>
                    {this.getTodoItem()}
                </ul>
            </Fragment>
        )
    }

    getTodoItem() {
        console.log('e')
        return this.state.list.map((item, index) => {
            return (
                <TodoItem
                    item={item}
                    index={index}
                    key={index}
                    delectItem={this.handleDelect}
                />
            )
        });
    }

    handleInputChange(e) {
        //this.setState传入一个函数变成一个异步的this.setState
        const value = e.target.value;
        this.setState( () => ({inputValue: value}));
        // this.setState({
        //     inputValue: e.target.value
        // })
    }

    handleBtnClick() {
        this.setState( (prevState) => ({
            list: [...prevState.list, prevState.inputValue],
            inputValue: ''
        }))
        /*
        this.setState({
            //...展开运算符，把数组展开生成新的数组
            list: [...this.state.list, this.state.inputValue],
            inputValue: ''
        })
        */
    }

    handleDelect(val) {
        this.setState( prevState => {
            const list = [...prevState.list];
            list.splice(val, 1);
            return {list};
        } )
    }
}

export default TodoList