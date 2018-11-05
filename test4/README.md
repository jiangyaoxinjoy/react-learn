### UI组件，容器组件，无状态组件
- 所有的逻辑处理都放在容器组件里
- UI组件负责渲染页面
- 当一个页面只有一个render函数时，可以成为无状态组件。
- 无状态组件就是一个函数。
  - 把render函数的内容写在这个函数里面。
  - 性能比较高。就是一个函数。
  - render函数写在React.Component这个类里，这个类还有很多生命周期函数。比函数执行的内容多很多。
  
 ## Redux的中间件 
 
 ### 原理：
 *中间件是action和store中间。*
 
 *之前action只能返回一个对象，dispatch把这个对象直接传递给store*
 
 *在使用redux-thunk后，action可返回一个函数。*
 
 *中间件对dispatch方法进行了升级，当我们把一个函数作为dispatch的参数，
 这时候这个参数不会和之前参数是对象的时候一样直接传给store，它会让函数先执行，执行完需要调用store的时候才调用store。*
 
 **所以中间件的原理就是对store的dispatch方法进行了升级**
 
### 最近比较火的中间件
 redux-thunk , redux-log , redux-sage
 
  
##  Redux-thunk 。
*将异步请求，非常复杂的逻辑都放在组件中实现，代码会非常臃肿。Redux-thunk中间件 可以将这些代码放到action中处理*
1. 安装`redux-thunk`
    ```
    cnpm i redux-thunk -S
    ```
2. 在`store`的`index`中引入中间件
    ```
    import { createStore, applyMiddleware } from 'redux';
    import thunk from 'redux-thunk';
    import reducer from './reducer';
    
    //原来的window.__REDUX_D...也是一个中间件。
    const store = createStore(
       reducer,
       applyMiddleware(thunk)
    );
   
    export default store;
    ```    
     
     - 添加`redux_devTools`中间件,两个中间件一起用的方法。在`github`的`redux_devTools`中找。
     ```
     import {createStore, applyMiddleware,compose } from 'redux';
     import thunk from 'redux-thunk';
     import reducer from './reducer';
    
     //在redux-devtools的github里找到添加redux-devtools中间件的方法。
     const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;
     const enhancer = composeEnhancers(
        applyMiddleware(thunk),
     );
     const store = createStore(
        reducer,
        enhancer
     );
    
     export default store;
     ```    
 3. 将组件异步代码移到`action`里面去。   
     - 之前写的action方法返回的都是对象，使用中间件后可以返回一个函数。 
     
 ## Redux-saga

 
 实例在`store2`。
 
 `Redux-saga`远比`Redux-thunk`复杂，`Redux-thunk`只是让`action`从原来的接收一个对象，变成可以接收函数，而`Redux-saga`本身拥有很多的`API`。
 1. 在index配置saga
     ```
     //安装`redux-saga`
     cnpm install --save redux-saga
     
     //引入saga
     import createSagaMiddleware from 'redux-saga'
     
     //创建sagas文件。我们都逻辑处理就放在这里
     import mySaga from './sagas'
     
      //创建saga
     const sagaMiddleware = createSagaMiddleware();
     
      //添加saga中间件
     const enhancer = composeEnhancers(
         applyMiddleware(sagaMiddleware),
     );
     
     //启动saga
     sagaMiddleware.run(mySaga);
     
     ```
 2. 在Types文件添加一个获取ajax的方法。
      ```
      export const GET_INIT_LIST = 'get_init_list'
      ```  
 3. 在actionCreators文件夹里添加这个方法的action
     ```
     export const getInitList = () => ({
         type: Types.GET_INIT_LIST
     }) 
     ```    
 4. 在组件派发这个action
 
     **因为使用了saga这个中间件，不仅redux可以接收派发的action，saga也可以接收。**
    ```
    const action = Actions.getInitList();
    store.dispatch(action);
    ```   
 5. saga接收到action然后执行要处理的业务
    ```
    //saga引入api
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
     ```   
            
            