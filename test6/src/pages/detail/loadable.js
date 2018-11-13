import React from 'react';
import Loadable from 'react-loadable';
import Loading from '../../components/loading';

const LoadableComponent = Loadable({
    loader: () => import('./'), //index.js
    loading: Loading,
    delay: 300 //默认200
});

//返回一个无状态组件
export default () => <LoadableComponent/>

// export default class App extends React.Component {
//     render() {
//         return <LoadableComponent/>;
//     }
// }