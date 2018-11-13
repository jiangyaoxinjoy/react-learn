import React, {Component,Fragment} from 'react';
import routers from "./router";
import {BrowserRouter as Router, Route, Link, Switch} from "react-router-dom";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <Router>
                <Fragment>
                    <Link to="/" className="link">TodoList</Link>
                    <Link to="/layout" className="link">layout</Link>
                    <Switch>
                        {
                            routers.map((route, index) => {
                                return (
                                    <Route
                                        key={index}
                                        path={route.path}
                                        exact={route.exact}
                                        render={props => (
                                            <route.component {...props} routes={route.routes}/>
                                        )}
                                    />
                                )
                            })
                        }
                    </Switch>
                </Fragment>
            </Router>
        )
    }
}

export default App