import React, {Component} from 'react'
import {Globalstyle} from './style'
import {Globaliconfont} from "./statics/iconfont/iconfont"
import Header from './components/header'

class App extends Component {
    render() {
        return (
            <div>
                <Globalstyle/>
                <Globaliconfont/>
                <Header/>
            </div>
        );
    }
}

export default App;
