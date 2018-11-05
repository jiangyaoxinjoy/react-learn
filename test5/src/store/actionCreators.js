import * as Types from './actionTypes';

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

