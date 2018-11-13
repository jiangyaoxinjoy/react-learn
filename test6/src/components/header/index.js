import React, {Component} from 'react'
import {CSSTransition} from 'react-transition-group';
import {
    HeaderWrapper,
    Logo,
    Nav,
    NavItem,
    NavSearch,
    Addition,
    Button,
    SearchWrapper,
    SearchInfo,
    SearchInfoTitle,
    SearchInfoSwitch,
    SearchInfoItem
} from "./style";
import {connect} from 'react-redux'
import {Action} from './store'
import {Action as LoginAction} from '../../pages/login/store'
import {Link} from 'react-router-dom'

class Header extends Component {
    render() {
        const {logout,focused, handleInputFocus, handleInputBlur, list, login} = this.props;
        return (
            <HeaderWrapper>
                <Link to='/'> <Logo/></Link>
                <Nav>
                    <NavItem className='left active'>首页</NavItem>
                    <NavItem className='left'>下载App</NavItem>
                    {
                        login ?
                            <NavItem className='right' onClick={logout}>退出</NavItem> :
                            <Link to='/login'>
                                <NavItem className='right'>登录</NavItem>
                            </Link>

                    }
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
                                onFocus={() => handleInputFocus(list)}
                                onBlur={handleInputBlur}
                            ></NavSearch>
                        </CSSTransition>
                        <i className={focused ? 'focuse iconfont searchIcon' : 'iconfont searchIcon'}>&#xe62a;</i>
                        {this.getListArea()}
                    </SearchWrapper>
                    <Addition>
                        <Link to='/write'>
                            <Button className='writting'>
                                <i className="iconfont">&#xe6a5;</i>
                                写文章
                            </Button>
                        </Link>
                        <Button className='reg'>注册</Button>
                    </Addition>
                </Nav>
            </HeaderWrapper>
        )
    }

    getListArea() {
        const {focused, list, page, handleChangePage, handleMouseEnter, handleMouseLeave, mouseIn, totalPage} = this.props;
        if (focused || mouseIn) {
            return (
                <SearchInfo
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    <SearchInfoTitle>
                        热门搜索
                        <SearchInfoSwitch
                            onClick={() => handleChangePage(page, totalPage, this.spinIcon)}
                        >
                            <i ref={(icon) => {
                                this.spinIcon = icon
                            }} className="iconfont spin">&#xe851;</i>
                            换一批
                        </SearchInfoSwitch>
                    </SearchInfoTitle>
                    <div>
                        {
                            list.slice((page - 1) * 10, page * 10).map(item => <SearchInfoItem
                                key={item}>{item}</SearchInfoItem>)
                        }
                    </div>
                </SearchInfo>
            )
        } else {
            return null;
        }
    }
}

const mapStateToProps = (state) => {
    return {
        //immutable对象的属性不能通过‘.’来调用。
        // focused: state.header.focused
        //immutable的对象通过'.get()'来换取。
        // focused:state.header.get('focused')
        // focused:state.get('header').get('focused')
        focused: state.getIn(['header', 'focused']),
        list: state.getIn(['header', 'list']),
        page: state.getIn(['header', 'page']),
        mouseIn: state.getIn(['header', 'mouseIn']),
        totalPage: state.getIn(['header', 'totalPage']),
        login: state.getIn(['login', 'login'])
    }
};

const mapPropsToProsp = (dispatch) => {
    return {
        handleInputFocus(list) {
            (list.size === 0) && dispatch(Action.getList())
            dispatch(Action.searchFocus())
        },
        handleInputBlur() {
            dispatch(Action.searchBlur())
        },
        handleChangePage(page, totalPage, spin) {
            let originAngle = spin.style.transform.replace(/[^0-9]/ig, '');
            if (originAngle) {
                originAngle = parseInt(originAngle, 10);
            } else {
                originAngle = 0;
            }
            spin.style.transform = 'rotate(' + (originAngle + 360) + 'deg)';
            if (page === totalPage) {
                page = 1;
            } else {
                page += 1;
            }
            dispatch(Action.changePage(page))
        },
        handleMouseEnter() {
            dispatch(Action.mouseEnter())
        },
        handleMouseLeave() {
            dispatch(Action.mouseLeave())
        },
        logout() {
            dispatch(LoginAction.logout())
        }
    }
};

export default connect(mapStateToProps, mapPropsToProsp)(Header);