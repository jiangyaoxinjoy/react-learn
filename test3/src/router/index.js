import Loadable from 'react-loadable';

const LoadableComponent = (filename) => Loadable({
    loader: () => import(`../antd/${filename}`),
    loading: () => (''),
});

const routers = [
    {path: '/', exact: true, component: LoadableComponent('TodoList')},
    {
        path: '/layout',
        component: LoadableComponent('Layout'),
        routes: [
            {path: '/layout/content1', exact: true, component: LoadableComponent('layout/Content1')},
            {path: '/layout/content2', exact: true, component: LoadableComponent('layout/Content2')},
            {path: '/layout/content3', exact: true, component: LoadableComponent('layout/Content3')}
        ]
    }
];

export default routers;