
## 安装环境 
- nodejs稳定版本
- cnpm 代替npm
- yarn 可以替代npm，因为npm安装模块有时候会报错。
```
npm install -g cnpm --registry=https://registry.npm.taobao.org
cnpm i -g yarn
```
## create-react-app
### 安装脚手架
```
cnpm i create-react-app -g
```
### 创建项目
在项目目录里
```
create-react-app myApp
npm start 
```
### create-react-app目录结构
- serviceWorker.js 用于浏览器缓存页面
- App.test.js 自动化测试
- .gitignore 用于git忽略文件
- manifest.json 定义网页在桌面快捷方式的图标和网址

## JSX 基础语法

JSX就是html和js宏写的一种模式
- 在js里写html标签，引用组件
    - js里写html要加 '' ,转换成字符串。
    - 在jsx直接写标签就可以。
    - jsx还可以写自己定义的标签，
    - 使用自己写的组件用标签的形式引入就可以了。
    - 自己的组件的标签要大写字母开头    
- 注释{/*注释*/}  放到{}里
- 样式 className='' 因为class和类有冲突.
- 标签不转义 `dangerouslySetInnerHTML={{__html: item}}`
    - 第一个{}表示表达式
    - 里面的{}表示一个对象
- label 点击label对应的input可以聚焦。

    **for和循环的for冲突，所以用htmlFor**
    
    `<label htmlFor="input">输入内容</label>`    
    
##  事件对象
 在触发`DOM`的某个事件时，会产生一个`event`对象，这个对象包含所有与事件相关的信息。    
## ref
  1. 在ref直接挂载一个dom元素
  
            //元素绑定ref
            <input ref='input' />
            //获取值
            this.refs.input.value
    
  2. 也可以将input这个dom元素直接挂载到组件上
        
            <input ref={(input) => this.input = input}/>
            this.input.value
    
## 表单元素
 ### 1.约束性和非约束性组件
  **非约束性组件**
  
  defaultValue相当于原生DOM的value
     
     <input defaultValue="a"/>  
      
  **约束性组件** 
    
  value一定要和onChange搭配使用。
  
  value的值是有onChange方法管理的。value值不是用户输入内容，而是调用onChange方法后重新赋值给value。  
     
     <input value={this.state.inputValue} onChange={}/>   
     
 ## 实现类似于vue的双向绑定数据
### 编写一个TodoList功能    
#### 响应式设计思想和数据绑定
  - 在构造函数中`this.state={}`中定义数据。
    - `value = {this.state.inputValue}`用{}绑定数据。
  - 事件绑定  `onChange={handle}` `change`首字母要大写。
    - handle方法定义在类里面.
    
### 事件的this指向
      
 1. 在构造函数中用
    ```
    this.handle = this.handle.bind(this)
    ```
 
 2.  在调用的时候bind(this)   
 3. 在调用的时候使用箭头函数 
    ```
    onChange={ () => this.handle()} 
    ```      
 ### 修改state里面的数据 `this.setState`
    this.setState({
        inputValue:e.target.value
    })
  - immutable state不允许做任何的改变  
 ### 循环一个数据 添加标签
    <ul>
        {
            this.state.list.map( (item,index) => {
                return <li key={index}> {item}</li>
            })
        }
    </ul>   
 ###   组件
 - 父组件通过属性的方式将数据传给子组件
     `item={item}` 
     - 前面的item是属性名，可以改变
     - {}内的item就是值
     - vue也是通过这个方式传递，格式是 `:item='item'` ，如果item值为字符串，则不用前面的冒号。
 - 子组件获取父组件的数据
    - `this.props.item`    
    - 子组件可以使用父组件传过来的数据，但不推荐在子组件改变父组件的数据。
 - 子组件调用父组件方法
    - 首先父组件把方法传给子组件，也是通过属性的方式，和数据一样。 
    - 子组件调用也是通过`this.props.xxx`的方式。  
 ### 组件代码优化
 - 通过上面的结构赋值，可以简写。 
    ```
    const {delectItem,index} = this.props;
    ```
 - 代码拆分
    render里面的循环列表这类的逻辑操作，可以提取出来，放在应该函数里面，
    然后render调用这个函数就可以了。
 - this.setState()改变数据     
   - 以前是通过接收一个对象的方式修改数据，新版的推荐用接收箭头函数的方式。
   传入箭头函数，变成异步的this.setState(),性能更好。
   ```
    const value = e.target.value;
    this.setState( () => ({inputValue: value}));
    // this.setState({
    //     inputValue: e.target.value
    // })
   ```   
    - 这个箭头函数可以接收一个参数`prevState`,就是修改之前的state数据。
    
 ###   React思考
 - React是一种声明式编程
    - Jquery是一种命令式编程，大多dom操作
 - 可以和其他框架并存。
 - 组件式开发。组件都是首字母大写。
 - 单向数据流。   
   - 父组件可以给子组件传值，但子组件不能改变这个数据。
 - 视图层框架。只解决数据和渲染的问题。
   - 大型项目要配合数据层框架来帮助组件传值。
 - 函数式编程。
   - 维护容易。
   - 面向测试。更容易实现前端自动化测试。  
   
### `PropTypes`与`DefaultProps`  
-  `PropTypes`属性接收的强校验。
    ```
    import PropTypes from 'Prop-types'
    
    TodoItem.propTypes = {
        test: PropTypes.string.isRequired,
        item: PropTypes.string.isRequired,
        delectItem: PropTypes.func,
        index: PropTypes.number
    }
    ```
- `DefaultProps`  默认属性  
    ```
    TodoItem.defaultProps = {
       test: '默认值'
    }
    ``` 
      
    
      