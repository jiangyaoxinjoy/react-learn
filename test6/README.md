## styled-components
带样式的组件开发。

## iconfont

-  `iconfont`文件放入`statics`
- 修改`iconfont.css`里面的文件引用路径。(加上绝对路径)
- 可以将`iconfont.js`文件里面的图标命名删除，因为我们使用字体编码引用图标。(unicode字符串图标引用方式可查看阿里图标)
- 将`iconfont.css`改成`js`。
- 用`styled-components`的`createGlobalStyleapi`把`iconfont.js`改成全局样式。
- 在App.js里引用这个全局样式。
- 在组件里面使用图标

    ```<i className="iconfont">&#xe636;</i>```   
    
       
## redux之reducer代码拆分
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
## immutable
我们在`reducer`里是不能直接修改`state`的。通过返回一个新对象给`store`，`store`根据这个新对象和`state`的差别进行修改数据。

为了防止我们不小心修改了`state`，我们引入`immutable.js`。  

`immutable`不可修改的意思。我们可以把`state`对象变成一个`immutable`对象。

一个不可修改的对象，就不会有不小心修改`state`的风险。
    
    cnpm i immutable -S   
1. immutable对象的数据获取

        const mapStateToProps = (state) => {
            return {
                focused:state.header.get('focused')
            }
        };    
        
    在组件获取数据时，我们原来直接用`state.header.focused ` 的方法获取数据，
    
    `immutable`要有`get()`方法获取数据。 
 2. immutabel数据修改   
     #### （1）用`set()`方法修改数据。
        if (action.type === Types.SEARCH_BLUR) {
            return state.set('focused',false);
        } 
     
       **既然`immutable`对象是不可修改的，那么`set`方法为什么能修改数据呢。**
         - `set`方法会结合`immutable`对象之前的值和`set`方法设置的新值，返回一个新的对象
         - 我们之前的写法是深复制一个新的对象，然后返回新的对象。用`immutable`对象写就相当方便了。  
     
     #### （2）`merge()`方法可以一次修改多个数据
     
        return state.merge({
            list:action.data,
            totalPage:action.totalPage
        })
     `merge`方法修改多个数据比多个`set`连用性能更高。因为调用一次`set`就会返回一个新的`immutable`对象。而`merge`只返回一次。  
     #### (3) `immutable`数组拼接
     用`concat`方法拼接`immutable`数组
        
        state.set('articleList',state.get('articleList').concat(action.data))   
                     
  ## redux-immutable
  `redux-immutable`统一数据格式。  
  `state.header.get()`,这个获取数据格式不统一。前面是普通js对象用点获取属性，后面是用`immutable`对象的`get`方法获取数据。
    
    cnpm i redux-immutable -S
  1. 把header也变成一个immutable对象
      - 打开src->store->reducer
        
            import {combineReducers} from 'redux-immutable';
            export default combineReducers({
                header: headerReducer
            })
         
        之前的`combineReducers`是通过`redux`引入的。现在从redux-immutable引入，这个`combineReducers`方法下的对象就是一个`immutable`对象
        
  2. 使用
    
        在组件使用
    
         const mapStateToProps = (state) => {
             return {
                  // focused:state.get('header').get('focused')
                  focused:state.getIn(['header','focused'])
             }
         };
    
        header已经是一个immutable对象可以用get方法或者getIn方法回去数据了。    
## 前端模拟数据   
   在`public`目录下新建一个api文件夹。再新建一个`headerList.json`文件。 
   
   `create-react-app`低层是一个`node`服务器。
   
   当你在浏览器打开`http://localhost:3000/api/headerList.json`
   `node`会先在根目录下找`api`文件夹，找不到的时候，`node`就会去`public`目录找。
   通过这个特性，我们可以在`public`目录下模拟一些数据
   
## redux-thunk
ajax获取头部搜索列表。   

通过redux-thunk中间件，我们将ajax的函数放在redux中，redux-thunk可以让redux store接收一个方法。

**ps:因为我们用fromJS包装了state数据，state中的数组也会变成immutable数组，使用我们ajax返回数据是也要把数组用fromJS包装成immutable数组，让数据高的格式统一*
  
## 使用ref获取真实的dom节点
在`header`的换一批里通过`ref`获取元素，然后操作`dom`，用`原生js`写一个旋转动画。
      
# 首页

## 路由 
    cnpm i react-router-dom -S
    
    //BrowserRouter代表路由，Route代表路由规则
    import {BrowserRouter, Route} from 'react-router-dom'
    //引入组件
    import Header from './components/header'
    import Dom from './pages/home'
    
    <BrowserRouter>
        <Fragment>
            <Route path='/' exact component={Dom}></Route>
            <Route path='/detail' exact component={Detail}></Route>
        </Fragment>
    </BrowserRouter>

## 页面的背景图片怎么遍历

  在组件的元素上添加一个属性
        
    <BoardItem
        imgUrl={item.get('imgUrl')}
    >
    </BoardItem>     
  在`styled-component`里面通过获取`props.imgUrl` ,获取图片
  
    export const BoardItem = styled.a`
      background-image:url(${(props) => props.imgUrl});
    `;   
  ## componentDidMount 
  - 获取首页数据
  - 绑定一个window方法，监听滚动条，显示向上跳转按钮
  ## componentWillUnmount
  
  - 在组件移除之前把绑定在window上的方法移除，防止对其他组件的影响。
  
  ## pureComponent 
  > 子组件可以在sholdComponentUpdate中根据自身需要的数据接收数据。
   如果数据不过滤，那么每次数据更新，所有组件的render函数都会重新调用
   性能浪费.
  
   pureComponent 组件内部实现了一个shouldComPonentUpdate，就不用我们一个个手写了。
   
   ** ps:如果用pureComponent组件，一定要用immutable管理数据，否则可能会有坑**         
   
   ## 页面跳转Link
   
   #### 首页跳转到详情页
   单页应用跳转，不管怎么跳转，只会加载一个html文件。
   
   a标签的href跳转，不是单页应用，跳转html会重新加载。
   
   
   所以我们使用Link组件，用Link代替a标签
   
    import {Link} from 'react-router-dom'
    <Link to='/detail'></Link>  
    
# 详情页
   ### dangerouslySetInnerHTML
   带标签的内容直接放在页面上会被转义。
    
    dangerouslySetInnerHTML={{__html:content}}     
    
## 动态路由获取参数
    // detail/id
    <Link to={'/detail/'+item.get("id")}></Link>  
    
    <Route path='/detail/:id' exact component={Detail}></Route>
    
    //获取参数
    this.props.match.params.id
    
   ps：也可以通过 `?id=1` 的方式设置参数，但是获取参数会比较麻烦。
   
# 登录页面

  1. 通过`ref`获取`input`的值
  2. 登录成功后跳转
     
         import {Redirect} from 'react-router-dom'   
         
         //在render函数里这样写
         if(!login){
            return ()
         }else{
            return <Redirect to='/'/>
         }
      因为当登录成功后`login`值发生改变，`render`函数会重新渲染，页面会跳转到首页 
      
  3. 退出登录
  
      因为退出按钮在`header`组件，在`header`组件修改`login`组件`store的`数据。
       
         import {Action as LoginAction} from '../../pages/login/store'   
         
      在`header`组件引入`login`组件的`action`，然后给`login`的`store`派发方法就可以了。     
      
# 异步组件以及`withRouter`
   
分拆你的应用到分离的包，然后在需要的时候动态加载。

异步组件可以使用第三方模块实现。 
   ## `react-loadable` - 以组件为中心的代码分割和懒加载
    cnpm i react-loadable
    
  使用`loadable`查看`github`文档。
  
  使用`loadable`后，`detail`页面无法获取原来的路由参数。
  使用`withRouter`页面才能够重新获取路由参数
  
    import {withRouter} from 'react-router-dom';  
    export default connect(mapState, mapDispatch)(withRouter(Detail));
    
  使用`withRouter`方法，`Detail`就可以获取`router`里所有的参数内容  