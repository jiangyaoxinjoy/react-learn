import React, {Component} from 'react';

class List extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue:''
        };
    }

    render() {
        return (
            <div className="wrap">
                <h2>表单事件演示-ref获取input值</h2>
                <input ref={(input) => this.input = input} type="text"/>
                <button onClick={this.getInputValueRef}>ref获取input值</button>

                <h2>键盘事件</h2>
                <input ref="inputValue"  type="text" onKeyUp={this.keyUp}/>
            </div>
        )
    }

    getInputValueRef = () => {
        console.log(this)
        //this.input直接挂载在组件上
        console.log(this.input.value)
    }
    keyUp = (e) => {
        if(e.keyCode === 13) {
            //inputValue挂载在组件的refs上。
            console.log(this.refs.inputValue.value)
        }
    }
}

export default List