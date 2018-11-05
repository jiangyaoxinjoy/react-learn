import React from 'react'
import {CSSTransition} from 'react-transition-group';
import {HeaderWrapper, Logo, Nav, NavItem, NavSearch, Addition, Button, SearchWrapper} from "./style";
import {connect} from 'react-redux'
import {Action} from './store'

const Header = (props) => {
    const {focused, handleInputFocus, handleInputBlur} = props;
    return (
        <HeaderWrapper>
            <Logo/>
            <Nav>
                <NavItem className='left active'>首页</NavItem>
                <NavItem className='left'>下载App</NavItem>
                <NavItem className='right'>登录</NavItem>
                <NavItem className='right'>
                    <i className="iconfont">&#xe636;</i>
                </NavItem>
                <SearchWrapper>
                    <CSSTransition
                        in={focused}
                        timeout={500}
                        classNames="slide"
                    >
                        <NavSearch
                            className={focused ? 'focuse' : ''}
                            onFocus={handleInputFocus}
                            onBlur={handleInputBlur}
                        ></NavSearch>
                    </CSSTransition>
                    <i className={focused ? 'focuse iconfont' : 'iconfont'}>&#xe62a;</i>
                </SearchWrapper>
                <Addition>
                    <Button className='writting'>
                        <i className="iconfont">&#xe6a5;</i>
                        写文章
                    </Button>
                    <Button className='reg'>注册</Button>
                </Addition>
            </Nav>
        </HeaderWrapper>
    )
};

const mapStateToProps = (state) => {
    return {
        focused: state.header.focused
    }
};

const mapPropsToProsp = (dispatch) => {
    return {
        handleInputFocus() {
            dispatch(Action.searchFocus())
        },
        handleInputBlur() {
            dispatch(Action.searchBlur())
        }
    }
};

export default connect(mapStateToProps, mapPropsToProsp)(Header);