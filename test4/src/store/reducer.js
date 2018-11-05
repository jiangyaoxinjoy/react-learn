import * as Types from "./actionTypes";
const defaultState = {
    inputValue: '',
    list: []
};

//reducer可以接收state，但是不能修改state。
// reducer 必须是一个纯函数。固定的输入必须有固定输出。
export default (state = defaultState, action) => {
    if (action.type === Types.CHANGE_INPUT_VALUE) {
        //对state进行深拷贝。
        const newState = JSON.parse(JSON.stringify(state))
        newState.inputValue = action.value;
        /*
        //实例不为纯函数
        //这就不是一个纯函数了，因为输出不固定。
        newState.date = new Date()
        */
        return newState;
    }
    if (action.type === Types.ADD_TODO_ITEM) {
        const newState = JSON.parse(JSON.stringify(state));
        newState.list.push(newState.inputValue);
        newState.inputValue = '';
        return newState;
    }
    if (action.type === Types.DELECT_TODO_ITEM) {
        const newState = JSON.parse(JSON.stringify(state));
        const newList = newState.list.filter(item => {
            return item !== action.value;
        })
        newState.list = newList;
        return newState;
    }
    if(action.type === Types.INIT_LIST) {
        const newState = JSON.parse(JSON.stringify(state));
        newState.list = action.value;
        return newState
    }

    return state;
}