import * as Types from './actionTypes';
import axios from 'axios';

const changeLogin = () =>({
    type:Types.CHANGE_LOGIN,
    value:true
});

export const login = (account,password) => {
    return (dispatch) => {
        //这个应该用post，为了数据模拟方便用get
        axios.get('/api/login.json?account='+account+'&password='+password).then(res =>{
            const result = res.data.data;
            if(result) {
                dispatch(changeLogin())
            }else{

            }
        })
    }
};
export const logout = () => ({
    type:Types.CHANGE_LOGIN,
    value:false
});