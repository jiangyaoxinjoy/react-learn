import * as Types from './actionTypes'
import {fromJS} from 'immutable'

//fromJS这个API可以将普通js对象转换为immutable对象
// fromJS把list数组变成一个immutable数组
const defaultState = fromJS({
    focused: false,
    mouseIn:false,
    list:[],
    page:1,
    totalPage:1
});

export default (state = defaultState, action) => {
    switch (action.type) {
        case Types.SEARCH_FOCUS:
            //immutable对象的set方法，会结合之前的immutable对象和设置的值，返回一个新的immutable对象
            return state.set('focused',true);
        case Types.SEARCH_BLUR:
            return state.set('focused',false);
        case Types.CHANGE_LIST:
            //merge可以同时更改多个数据内容。
            // 而且比set性能更高，因为调用两次set会返回两个immutable数据。
            return state.merge({
                list:action.data,
                totalPage:action.totalPage
            });
            // return state.set('list',action.data).set('totalPage',action.totalPage);
        case Types.MOUSE_ENTER:
            return state.set('mouseIn',true);
        case Types.MOUSE_LEAVE:
            return state.set('mouseIn',false);
        case Types.CHANGE_PAGE:
            return state.set('page',action.page);
        default:
            return state;
    }
}