## 模块化开发
- React组件模块化

  解决html 标签构建应用的不足
## state render
- 当父组件的render函数被运行时，他的子组件的render也会被再次执行。
- 当一个组件的state或者props发生改变时，他的render函数会重新执行。

## 虚拟dom
用js生成一个js对象消耗的性能极小。
1. state 数据
2. JSX 模板
3. 数据+模板 生成虚拟DOM(虚拟DOM就是一个js对象，用来描述真实DOM)(消耗了性能)
      
      `['div',{id:'abc'},['span',{},'hello']]`

4. 用虚拟DOM生成真实的DOM，来显示
5. state 发生变化
6. 数据+模板 生成新的虚拟DOM(提升了性能)

    `['div',{id:'abc'},['span',{},'change']]`
7. 比较原始虚拟DOM和新的虚拟DOM的区别。(提升了性能)
8. 直接操作DOM。改变span中的内容。

JSX -> 虚拟DOM(JS对象) -> 真实的DOM
#### 优点
1. 性能提升(比对虚拟DOM的区别，而不去比对真实DOM的区别)
2. 它可以实现跨端应用。React Native
    - 在安卓等原生应用里面没有DOM的概念
    - 虚拟DOM，一个JS对象，在浏览器里可以被识别，在原生应用里也可以被识别。
    - 在原生应用里面虚拟DOM可以生成一些原生的组件。

## 虚拟DOM中的Diff算法    
 就是两个虚拟DOM比对的方式
 - 同层虚拟DOM比对， 比对速度快。
 - 循环列表通过key值比对，key值要稳定。
   - 要保证新的虚拟DOM的key值可之前的一致
   - 这就是为什么不推荐使用index作为key值的原因。因为数据变化后，index会变，key值就不稳定。
## ref 操作dom
```
ref={el => this.inputElement = el}
this.inputElement.value
```   
不推荐使用，尽量直接操作数据。   
- 因为`this.setState()`是一个异步方法。在数据改变之前就获取了真实DOM，这时的结果可能是错误的。
- 可以放在`this.setState()`的回调函数中执行。
```
this.setState({}, () => { //回调函数})
```
## React生命周期函数
 在某个适合组件会自动调用执行的函数。
 1. 初始化
    - 在constructor()中初始化state和props
 2. 挂载
      1. componentWillMount 组件即将挂载到页面的时候执行(废弃)
      2. render 渲染
      3. componentDidMount 组件挂载完成执行
 3. 组件更新  (state,props发生改变)
      #### 公用的
      1. shouldComponentUpdate 询问组件是否要更新，返回true or false。
            - 返回false的话，数据改变，组件不会更新。 
      2. componentWillUpdate   在组件更新前执行。
            - 如果shouldComponentUpdate返回false，就不会执行。
      3. render
      4. componentDidUpdate  组件更新完成后执行 
      #### props 独有的
      - componentWillReceiveProps(废弃)  
        - 组件初始化render时不执行
        - 当props发生变化时执行
 4. unmounting 组件去除
    - componentWillUnmount 组件销毁前调用。    
 ##  React生命周期使用场景   
`` 组件中唯独render这个函数不能去掉，因为其他生命周期函数都在React.Component类中内置了，唯独render没有预先定义。``
1. 组件性能优化`shouldComponentUpdate`
    
    因为父组件的render函数重新执行会导致子组件的render函数重新执行。会导致性能浪费。
     
    可以在子组件中使用 `shouldComponentUpdate`函数，当与子组件相关的数据发生变化是，子组件才更新。   
    ```
    shouldComponentUpdate(nextProps, nextState) {
       if(nextProps.item !== this.props.item){
           return true;
       }else{
           return false;
       }
    }
    ```
 2. ajax获取数据 `componentDidMount`   
    - `componentDidMount` 只执行一次。
    - 为什么不放在`componentWillMount`上，因为可能和后续的React Native有冲突。
    
 ## React获取服务器API接口的数据
 
 可以用Charles对本地数据进行模拟
 1. axios 
        对jsonp不友好,推荐用CROS方法更为干净。
 2. fetch-jsonp 
 ## 动画
 - css动画 `transition: all 1s ease-in;`
 - `keyframes`动画 `animation: show-item 1s ease-in forwards;`
 - 动画模块 React-transiton-group