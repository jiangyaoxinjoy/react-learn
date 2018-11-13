import React, {Component,Fragment} from 'react'
import {BrowserRouter, Route} from 'react-router-dom'
import {Globalstyle} from './style'
import {Globaliconfont} from "./statics/iconfont/iconfont"
import Header from './components/header'
import Home from './pages/home'
import Detail from './pages/detail/loadable'
import Login from './pages/login'
import Write from './pages/write'

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Fragment>
                    <Globalstyle/>
                    <Globaliconfont/>
                    <Header/>
                    <Route path='/' exact component={Home}></Route>
                    <Route path='/detail/:id' exact component={Detail}></Route>
                    <Route path='/login' exact component={Login}></Route>
                    <Route path='/write' exact component={Write}></Route>
                </Fragment>
            </BrowserRouter>
        );
    }
}

export default App;
