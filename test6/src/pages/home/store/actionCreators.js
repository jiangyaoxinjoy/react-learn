import * as Types from './actionTypes';
import {fromJS} from 'immutable'
import axios from 'axios';

const getData = data => ({
    type: Types.GET_HOME_DATA,
    data: fromJS(data)
});
const addHomeList = (data,page) => ({
    type: Types.ADD_HOME_LIST,
    data: fromJS(data),
    page:page
});
export const getHomeData = () => {
    return (dispatch) => {
        axios.get('/api/home.json').then(res => {
            const data = res.data.data;
            dispatch(getData(data))
        })
    }
};
export const getMoreList = (page) => {
    return (dispatch) => {
        axios.get('/api/homeList.json?page='+ page).then(res=> {
            const data = res.data.data;
            dispatch(addHomeList(data,page+1))
        })
    }
};
export const changeScrollTopShow = (val) =>({
    type:Types.CAHNGE_SCROLL_TOP_SHOW,
    val
})