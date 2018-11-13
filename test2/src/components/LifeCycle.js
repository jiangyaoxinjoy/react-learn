import React, {Component} from 'react';

class LifeCycle extends Component {
    constructor(props) {
        console.log('01构造函数')
        super(props);
        this.state = {
            msg:'lifeCycle.js msg'
        };
    }

    render() {
        console.log('02 render函数')
        return (
            <div>
                <hr/>
                <h2>生命周期函数</h2>
                <p>{this.props.msg}</p>
                <p>{this.state.msg}</p>
                <button onClick={this.props.changeMsg}>change App msg</button>
                <button onClick={this.changeMsg}>change LifeCycle msg</button>
            </div>
        )
    }

    componentDidMount() {
        console.log('03 lifeCycle组件挂载函数')
    }

    shouldComponentUpdate(nextProsp,nextState) {
        console.log('04 shouldComponentUpdate函数');
        console.log(nextProsp,nextState)
        // return false 组件props和state无法更新，不会触发render函数。
        return true;
    }
    changeMsg = () => {
        this.setState({
            msg:'lifeCycle.js msg changed'
        })
    }
    componentWillUnmount() {
        console.log('05 lifeCycle组件销毁前调用函数');
    }
}

export default LifeCycle