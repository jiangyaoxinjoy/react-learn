import * as Types from './actionTypes'
const defaultState = {
    list: [],
    inputValue: ''
}
export default (state = defaultState, action) => {
    if(action.type === Types.CHANGE_INPUT_VALUE) {
        const newState = JSON.parse(JSON.stringify(state));
        newState.inputValue = action.value;
        return newState;
    }
    if(action.type === Types.ADD_TODO_ITEM){
        const newState = JSON.parse(JSON.stringify(state));
        newState.list.push(newState.inputValue);
        newState.inputValue = '';
        return newState;
    }
    if(action.type === Types.DELECT_TODO_ITEM){
        const newState = JSON.parse(JSON.stringify(state));
        const newList = newState.list.filter( item => item !== action.value);
        newState.list = newList;
        return newState;
    }
    return state;
}