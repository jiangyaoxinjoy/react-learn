import React, {Component} from 'react';

class Dom extends Component {
    constructor(props) {
        super(props);
        this.state = {
            msg: '我是一个home组件',
            inputValue: '1'
        }
    }

    render() {
        return (
            <div className="wrap">
                {this.state.msg}
                <h2>事件对象演示</h2>
                <button aid="123" onClick={(ev) => this.handleClick(ev)}>事件对象</button>
                <h2>表单事件演示-事件对象获取input值</h2>
                <input type="text" value={this.state.inputValue} onChange={this.changeInput}/>
                <button onClick={this.getInputValue}>获取input值</button>
            </div>
        )
    }

    handleClick(ev) {
        //ev事件对象，触发一个事件时产生的对象。包含这个事件的所有信息。
        console.log(ev)
        ev.target.style.backgroundColor = 'red';
        //获取aid属性
        console.log(ev.target.getAttribute('aid'))
    }

    changeInput = (ev) => {
        const val = ev.target.value;
        this.setState(() => ({
            inputValue: val
        }))
    };

    getInputValue = () => {
        console.log(this.state.inputValue)
    };
}

export default Dom;