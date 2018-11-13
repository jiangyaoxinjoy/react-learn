import React, {Component} from 'react';
import Todolist from './components/TodoList'
import Axios from './components/Axios'
import LifeCycle from './components/LifeCycle'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            msg:'App.js msg',
            flag: true,
            btnMsg:"lifeCycle销毁"
        };
    }

    render() {
        return (
            <div>
                <Todolist/>
                <Axios/>
                {
                    this.state.flag ?  <LifeCycle msg={this.state.msg} changeMsg={this.changeMsg}/> : null
                }
                <button onClick={this.changeFlag}>{this.state.btnMsg}</button>
            </div>
        )
    }

    changeMsg =() =>{
        this.setState({
            msg:'App.js msg changed'
        })
    }
    changeFlag= () =>{
        const btnMsg = this.state.flag ?"lifeCycle挂载":"lifeCycle销毁"
        this.setState((prev) =>({
            flag: !prev.flag,
            btnMsg:btnMsg
        }))
    }
}

export default App