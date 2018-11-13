## antd-desgin 
- reactUl,比较适合后台
### antd按需引入
 **引入组件**
 
    import {Layout, Menu, Icon} from 'antd';
 **按需引入css**
    查看官网
## Redux

### 基本原则
1. store必须是唯一的
2. 只有store可以改变自己的内容
3. reducer必须是纯函数，并且不能有任何副作用。
  - 给固定的输入就会有固定的输出，不会有其他副作用。
  - 一旦一个函数里面有`setTimeOut`,`new Date()`,或者`ajax`请求,这些内容时，就不是一个纯函数了，因为输出是不固定的。

### 基本方法
- createStore(),创建一个store。
- store.dispatch. 派发一个方法(action).
- store.getState() 获取store里面所有的数据内容。
- store.subscribe() 订阅store发生改变。一旦store发生改变，subscribe里面的回调函数就会执行。

### store基本文件
- `index.js`用来创建`store`。
- `reducer.js`
  - 在`index`中引入，作为`createStore`的第一个参数。
- `actionType.js `
    抽出`action`方法的`type`，以便复用。
- `actionCreator.js`   
    `action`方法统一写在这里。方便测试和管理。  
  

### 操作示例
```
cnpm i redux -S
```
- 在`src`目录下创建`store`文件夹
- `store`文件夹下的`index.js`引入redux
    ```
    import {createStore} from  'redux';
    import reducer from './reducer';
    //创建一个store
    const store = createStore(reducer);
    const store = createStore(todoApp,  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())   
    ```
- createStore() 的第二个参数是可选的,如果浏览器安装了redux拓展，就会使用拓展工具。    
### Reducer
- 由于状态是只读的，reducer 本身并不能真正实现状态的修改，而是只把新状态作为返回值返回。
- 为了确保每次对状态修改的结果都是一致的，reducer 必须是一个纯函数，也就是说，只要是同样的输入，必定得到同样的输出。纯函数需要遵循以下约束：
    ```
    const defaultState = {
       inputValue:'',
       list: []
    };
   
   export default (state = defaultState, action) => {
       return state;
   }
   ```
 ### 组件获取redux store的state 数据
 ```
 //将redux的数据赋值给组件的state
 this.state = store.getState();
 //当redux数据更新调用handleStoreChange方法，重新给this.state赋值。
 store.subscribe(this.handleStoreChange);
 
 handleStoreChange() {
     this.setState(store.getState())
 }
 ```  
 ### 组件提交一个action 修改数据
 ```
 hadleInputChange(e) {
    const action = {
       type:'change_input_value',
       value:e.target.value
    }
    //reducer会接收这个action
    store.dispatch(action);
 }
 ```
 ### reducer处理action
 返回一个newState，redux的store会对newState处理，对state进行修改。
 ```
 if(action.type === 'change_input_value') {
    //对state进行深拷贝。
    const newState = JSON.parse(JSON.stringify(state))
    newState.inputValue = action.value;
    return newState;
 }
 ```
 ### action 拆分
 
 >好吃，如果action的type写错会报出异常，并且使用的时候会有提示。很方便。
 
 1. 新建一个`actionTypes.js`文件
 2. 将所有action的type都这样写在这个文件夹里
     ```
     export const CHANGE_INPUT_VALUE = 'change_input_value';
     ```
 3. 在ruducer引入这个文件。
     ```
     import {CHANGE_INPUT_VALUE} from "./actionTypes";
     //或者
     import * as Types from '';
     
     if (action.type === CHANGE_INPUT_VALUE) {}
     //或者
     if (action.type === Types.CHANGE_INPUT_VALUE) {}
     
     ```
 4. 组件里的使用
    ```
    hadleInputChange(e) {
        const action = {
            type:CHANGE_INPUT_VALUE,
            value:e.target.value
        }
        store.dispatch(action);
    }
    ```
 
 ## 使用actionCreator 统一创建 action   
   *之前我们在组件里直接定义action，然后派发action，action分散在各个业务逻辑里，没有统一管理，这是不规范的。*
   *自动化测试也会非常方便*
   *增强代码可维护性*
   
- 在`store`里创建文件`actionCreators.js`

    将action放在`actionCreators.js`文件里进行统一的管理
   
    ```
    import * as Types from './actionTypes';
     
    //每一个action都这样添加  
    export const getInputChangeAction = (value) => ({
      type: Types.CHANGE_INPUT_VALUE,
      value
    });
    ```
 - 在组件中使用
     在组件中引入`actionCreators.js`，
    
     之前引入的`actionTypes.js`可以删掉
     ```
     import * as Actions from './store/actionCreators';
    
     //派发action
     hadleInputChange(e) {
        const action = Actions.getInputChangeAction(e.target.value);
        store.dispatch(action);
     }
     ```