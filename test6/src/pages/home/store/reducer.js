import * as Types from './actionTypes'
import {fromJS} from 'immutable'

const defaultState = fromJS({
    //topicList是一个immutable数组。获取topicList的内容也要用get方法 topicList.get('id').
    //因为immutable数组里面包含的是immutable对象。
    topicList: [],
    articleList: [],
    recommentList: [],
    writerList: [],
    articlePage: 1,
    showScroll: false
});
const getHomeData = (state,action) =>(
    state.merge({
        topicList: action.data.get('topicList'),
        articleList: action.data.get('articleList'),
        recommentList: action.data.get('recommentList'),
        writerList: action.data.get('writerList')
    })
);
const addHomeList = (state,action) =>(
    state.merge({
        articleList: state.get('articleList').concat(action.data),
        articlePage: action.page
    })
);

export default (state = defaultState, action) => {
    switch (action.type) {
        case Types.GET_HOME_DATA:
            return getHomeData(state,action);
        case Types.ADD_HOME_LIST:
            return addHomeList(state,action);
        case Types.CAHNGE_SCROLL_TOP_SHOW:
            return state.set('showScroll',action.val)
        default:
            return state;
    }
}