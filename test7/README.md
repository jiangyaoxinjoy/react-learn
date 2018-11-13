## 路由
react-router-dom

    import {BrowserRouter, Route,Link} from "react-router-dom";
    <BrowserRouter>
        <div>
            <Link to="/" className="link" >home</Link>
            <Link to="/news" className="link">news</Link>
        </div>
    </BrowserRouter>
    
### 页面之间传值
- get传值 

    `?id=4` 解析比较不方便，可以引入url模块解析url地址。
      
      cnpm i url -S
      <Route exact path="/productDetail" component={ProductDetail}/>
      <Link to={`/productDetail?pid=${item.id}`} key={item.id}><div >{item.title}</div></Link>
      import url from 'url'
      const query = url.parse(this.props.location.search,true).query.pid;
- 动态路由 
        
      <Route exact path="/newsDetail/:id" component={NewsDetail}/>  
      //es6模板字符串
      <Link to={`/newsDetail/${item.id}`} key={item.id}><div >{item.title}</div></Link>
      //或者字符串拼接
      <Link to={"/newsDetail/"+item.id} key={item.id}><div >{item.title}</div></Link>
      console.log(this.props.match.params.id)
           
- localStorage传值
### js实现登录跳转
1. 设置一个是否登录的变量flag
2. 在登录方法里根据是否登录成功改变flag的值
3. render会根据flag值渲染当前页面，或者直接跳转到其他页面。
    
        import {Redirect} from 'react-router-dom';
        render(){
            if(flag) {
                return <Redirect to="/"/>
            }else{
                return (
                    <div></div>
                )
            }
        }
## 路由模块化
把路由提取出来，放在router中 
- 写好路由配置对象，将其导出。
    
    使用react-loadable对组件进行懒加载
          
      import Loadable from 'react-loadable'
      
      const loadable = (filename) => Loadable({
          loader: () => import(`../components/${filename}`),
          loading: () => ('')
      });  
      
      const routers = [
        {
          path: '/',
          exact: true,
          component: loadable('Home')
        },  
      ] 
- 使用时遍历路由对象
   
   将嵌套组件的路由传递给页面，this.props.router获取嵌套路由。
   
   嵌套路由也是通过遍历的方式导出。 
       
       {
           routers.map((route,index) => {
               return(
                   <Route
                       key={index}
                       path={route.path}
                       exact={route.exact}
                       render={props =>(
                           <route.component {...props} routes={route.routes} />
                       )}
                   />
               )
           })
       }     