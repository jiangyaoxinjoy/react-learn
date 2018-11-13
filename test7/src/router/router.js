import Loadable from 'react-loadable'

//标记： 在定义我们的路由对象，使用react-loadable 对路由组件进行懒加载，这是经常需要做的行为。
// 详情请参考这一篇文章：https://blog.csdn.net/China_Guanq/article/details/82194928#loadable
const loadable = (filename) => Loadable({
    loader: () => import(`../components/${filename}`),
    loading: () => ('')
});


//路由配置对象
const routers = [
    {
        path: '/',
        exact: true,
        component: loadable('Home')
    },
    {
        path: '/content/:id',
        component: loadable('Content')
    },
    {
        path: '/news',
        component: loadable('News')
    },
    {
        path: '/newsDetail/:id',
        component: loadable('NewsDetail')
    },
    {
        path: '/product',
        component: loadable('Product')
    },
    {
        path: '/productDetail',
        component: loadable('ProductDetail')
    },
    {
        path: '/user',
        component: loadable('User'),
        routes: [
            {path:'/user/',exact: true,component:loadable("user/Main")},
            {path:'/user/info',component:loadable("user/Info")}
        ]
    },
    {
        path: '',
        component: loadable('NotMatch')
    }
];

export default routers;