import * as Types from './actionTypes';
import axios from 'axios';

export const getInputChangeAction = (value) => ({
    type: Types.CHANGE_INPUT_VALUE,
    value
});

export const getAddItemAction = () => ({
    type: Types.ADD_TODO_ITEM
})

export const getDelectItemAction = (value) => ({
    type: Types.DELECT_TODO_ITEM,
    value
})

export const initListAction = (value) => ({
    type: Types.INIT_LIST,
    value
})

export const getTodoList = () => {
    return (dispatch) => {
        axios.get('/list.json').then( res => {
            const action = initListAction(res.data);
            dispatch(action);
        }).catch( err => {

        })
    }
}