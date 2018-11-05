### styled-components
带样式的组件开发。

### iconfont

-  `iconfont`文件放入`statics`
- 修改`iconfont.css`里面的文件引用路径。(加上绝对路径)
- 可以将`iconfont.js`文件里面的图标命名删除，因为我们使用字体编码引用图标。(unicode字符串图标引用方式可查看阿里图标)
- 将`iconfont.css`改成`js`。
- 用`styled-components`的`createGlobalStyleapi`把`iconfont.js`改成全局样式。
- 在App.js里引用这个全局样式。
- 在组件里面使用图标

    ```<i className="iconfont">&#xe636;</i>```   
    
       
### redux之reducer代码拆分
当页面很多数据很多的时候，所有数据和数据处理放在一个reducer中不规范
1. 在组件中新建一个`store`文件夹，基本上和`src`目录下的`store`一样。
    - 组件下的`store`的`index.js`用来导出`reducer`，此处导出可以让引用的时候简短一点。这个`index`也可以不用写。
    - 同时也可以在`index.js`里导出`actionCreators.js`和`actionTypes.js`。统一导出，方便引用。
2. 在组件里建好`reducer`就可以在`src->store`目录的`reducer`文件里引入合并这个`reducer`  
    `combineReducers`这个API用于合并reducer
    header组件下的reducer命名为`header `
    ```
    import {combineReducers} from 'redux';
    import headerReducer from '../components/header/store/reducer'
    /*
    //在index.js导出的写法
    import {reducer as headerReducer} from '../components/header/store'
    */
    
    export default combineReducers({
       header: headerReducer
    })
    ```
3. 将`header reducer`的数据映射到props上
    ```
    const mapStateToProps = (state) => {
           return {
               focused: state.header.focused
           }
       };
    ```   