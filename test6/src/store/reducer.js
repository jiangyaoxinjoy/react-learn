import {combineReducers} from 'redux';
//as 别名
import {reducer as headerReducer} from '../components/header/store'

export default combineReducers({
    header: headerReducer
})