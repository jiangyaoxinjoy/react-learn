## React-redux
方便我们在`react`中使用`redux`

    cnpm i react-redux -S

## API：

- `<Provider store>`
- `connect([mapStateToProps], [mapDispatchToProps], [mergeProps], [options])`

## API使用：

### Provider
index引入Provider和store

    import {Provider} from 'react-redux'
    import store from './store'
    
    const App = (
        <Provider store={store}>
            <TodoList/>
        </Provider>
    )
    
    ReactDOM.render(App, document.getElementById('root'));
Provider组件可以给内部的组件通过store    

### connect

连接 React 组件与 Redux store。

连接操作不会改变原来的组件类。

反而返回一个新的已与 Redux store 连接的组件类。

    /**
     * connect把映射关系和业务逻辑集成到了TodoList这个UI组件中
     * 对UI组件进行了包装，返回一个容器组件
     * 容器组件就是connect返回的结果
     * 使以 export default 返回一个容器组件
     * @param mapStateToProps连接规则
     * @param mapDispatchToProps props和dispatch做关联，达到修改store的目的。
     * @param TodoList和store做连接
     */
    export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
    
 因为页面的数据操作和逻辑处理都放在mapStateToProps和mapDispatchToProps里，所以TodoList只有一个render函数，可以写成一个无状态组件   
