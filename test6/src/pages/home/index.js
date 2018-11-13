import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import Topic from './components/Topic'
import List from './components/List'
import Recomment from './components/Recomment'
import Writer from './components/Writer'
import {Action} from './store'
import {
    HomeWrapper,
    HomeLeft,
    HomeRight,
    BackTop
} from "./style";

class Home extends PureComponent {
    render() {
        const {showScroll} = this.props;
        return (
            <HomeWrapper>
                <HomeLeft>
                    <img className='banner-img'
                         src="https://upload.jianshu.io/admin_banners/web_images/4552/9e5c3eaefe05d6314315f466344c2e540a2f4d97.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540"
                         alt=""/>
                    <Topic/>
                    <List/>
                </HomeLeft>
                <HomeRight>
                    <Recomment/>
                    <Writer/>
                </HomeRight>
                {
                    showScroll? <BackTop onClick={this.handleScroll}>
                        <i className='iconfont'>&#xe619;</i>
                    </BackTop>: null
                }

            </HomeWrapper>
        )
    }
    handleScroll() {
        window.scrollTo(0,0);
    }
    componentDidMount() {
        const {getHomeData} = this.props;
        getHomeData();
        this.bindEvent()
    }
    bindEvent() {
        const {changeScrollTopShow} = this.props;
        window.addEventListener('scroll',changeScrollTopShow);
    }
    componentWillUnmount() {
        // 事件绑定在window上，销毁前移除，以防影响其他组件
        const {changeScrollTopShow} = this.props;
        window.removeEventListener('scroll',changeScrollTopShow);
    }
}

const mapDispatch = dispatch => {
    return {
        getHomeData() {
            dispatch(Action.getHomeData())
        },
        changeScrollTopShow() {
            if(document.documentElement.scrollTop>200) {
                dispatch(Action.changeScrollTopShow(true))
            }else{
                dispatch(Action.changeScrollTopShow(false))
            }
        }
    }
};
const mapState = (state) => ({
    showScroll:state.getIn(['home','showScroll'])
})
export default connect(mapState, mapDispatch)(Home);