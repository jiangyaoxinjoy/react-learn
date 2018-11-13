import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link, Switch} from "react-router-dom";
import routers from "./router/router";

class App extends Component {
    render() {
        return (
            <Router>
                <main>
                    <Link to="/" className="link">home</Link>
                    <Link to="/news" className="link">news 路由动态传参</Link>
                    <Link to="/product" className="link">product get传值</Link>
                    <Link to="/user" className="link">user 嵌套路由</Link>
                    <Switch>
                        {
                            routers.map((route,index) => {
                                return(
                                    <Route
                                        key={index}
                                        path={route.path}
                                        exact={route.exact}
                                        render={props =>(
                                            <route.component {...props} routes={route.routes} />
                                        )}
                                    />
                                )
                            })
                        }
                    </Switch>
                </main>
            </Router>
        );
    }
}

export default App;
