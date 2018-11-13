import React, {Component} from 'react';
import {Layout, Menu, Icon} from 'antd';
import {Route, Link} from 'react-router-dom';

const {Header, Sider, Content} = Layout;

class SiderDemo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            collapsed: false,
        };
    }

    render() {
        return (
            <Layout>
                <Sider
                    trigger={null}
                    collapsible
                    collapsed={this.state.collapsed}
                >
                    <div className="logo"/>
                    <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                        <Menu.Item key="1">
                            <Link to="/layout/content1">
                                <Icon type="user"/>
                                <span>nav 1</span>
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="2">
                            <Link to="/layout/content2">
                                <Icon type="video-camera"/>
                                <span>nav 2</span>
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="3">
                            <Link to="/layout/content3">
                                <Icon type="upload"/>
                                <span>nav 3</span>
                            </Link>
                        </Menu.Item>
                    </Menu>
                </Sider>
                <Layout>
                    <Header style={{background: '#fff', padding: 0}}>
                        <Icon
                            className="trigger"
                            type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                            onClick={this.toggle}
                        />
                    </Header>
                    <Content style={{margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280}}>
                        {
                            this.props.routes.map((route, index) => {
                                return (
                                    <Route key={index} path={route.path} component={route.component}/>
                                )
                            })
                        }
                    </Content>
                </Layout>
            </Layout>
        );
    }

    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };
}

export default SiderDemo;