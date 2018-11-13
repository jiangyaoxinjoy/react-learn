import React, {Component} from 'react';
import {Route, Link} from 'react-router-dom';
// import Main from './user/Main';
// import Info from "./user/Info";


class User extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="nestWrap">
                <div className="leftNav">
                    <ul>
                        <li>
                            <Link to="/user/">个人中心</Link>
                        </li>
                        <li>
                            <Link to="/user/info">用户信息</Link></li>
                    </ul>
                </div>
                <div className="rightContent">
                    {
                        this.props.routes.map((route, key) => {
                            return (
                                <Route
                                    key={key}
                                    exact={route.exact}
                                    path={route.path}
                                    component={route.component}
                                />
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}

export default User;