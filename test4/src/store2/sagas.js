import {takeEvery, put} from 'redux-saga/effects'
import * as Types from './actionTypes';
import * as Actions from './actionCreators';
import axios from 'axios';

function* getInitList() {
    try{
        //在generator函数里不用使用promise
        const res = yield axios.get('/list.json');
        const action = Actions.initListAction(res.data);
        yield  put(action);
    }catch (e) {
        console.log('list.json网络请求失败')
    }

}

//es6的generator函数
function* mySaga() {
    //每次都捕获组件派发的GET_INIT_LIST方法。
    yield takeEvery(Types.GET_INIT_LIST, getInitList);
}

export default mySaga;