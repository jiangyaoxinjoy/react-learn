import * as Types from './actionTypes';
import {fromJS} from 'immutable'
import axios from 'axios';

const changeDetail = (title,content) =>({
    type: Types.CHANGE_DETAIL,
    title:fromJS(title),
    content:fromJS(content)
})
export const getDetail= (id) => {
    console.log(id)
    return (dispatch) => {
        axios.get('/api/detail.json').then(res=>{
            const result = res.data.data;
            dispatch(changeDetail(result.title,result.content))
        }).catch(err => {

        })
    }
}