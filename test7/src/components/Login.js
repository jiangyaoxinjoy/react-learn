import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loginState: false
        };
    }

    render() {
        if(this.state.loginState) {
            return <Redirect to="/"/>
        }else{
            return (
                <div>
                    <form className="loginForm" onSubmit={this.doLogin}>
                        <input type="text" placeholder="登录名" ref={input => this.username = input}/>
                        <input type="password" placeholder="密码" ref={input => this.password = input}/>
                        <input type="submit" defaultValue="执行登录"/>
                    </form>
                </div>
            )
        }
    }

    doLogin = (e) => {
        if(this.username.value === 'admin' && this.password.value === '123456') {
            this.setState(()=>({
                loginState:true
            }))
        }else{
            console.log('登录失败')
        }
        e.preventDefault();
    }
}

export default Login