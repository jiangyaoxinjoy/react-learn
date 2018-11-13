import * as Types from './actionTypes'
import axios from 'axios'
import {fromJS} from 'immutable'

//changeList是在内部调用的，不用暴露出去，可以统一写在顶部。
const changeList = data => ({
    type: Types.CHANGE_LIST,
    //转成immutable数组，数据格式统一
    data: fromJS(data),
    totalPage: Math.ceil(data.length / 10)
});

export const searchFocus = () => ({
    type: Types.SEARCH_FOCUS
});

export const searchBlur = () => ({
    type: Types.SEARCH_BLUR
});
export const changePage = (page) => ({
    type: Types.CHANGE_PAGE,
    page
});
export const getList = () => {
    return (dispatch) => {
        axios.get('api/headerList.json').then(res => {
            const data = res.data.data;
            dispatch(changeList(data))
        }).catch(err => {
            console.log(err);
        })
    }
};
export const mouseEnter = () => ({
    type: Types.MOUSE_ENTER
});
export const mouseLeave = () => ({
    type: Types.MOUSE_LEAVE
})