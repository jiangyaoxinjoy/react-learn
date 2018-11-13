// import {combineReducers} from 'redux';
//redux-immutable也提供了一个combineReducers，它生成的对象是一个immutable对象
import {combineReducers} from 'redux-immutable';
//as 别名
import {reducer as headerReducer} from '../components/header/store'
import {reducer as homeReducer} from '../pages/home/store'
import {reducer as detailReducer} from '../pages/detail/store'
import {reducer as loginReducer} from '../pages/login/store'

export default combineReducers({
    header: headerReducer,
    home: homeReducer,
    detail: detailReducer,
    login: loginReducer
})