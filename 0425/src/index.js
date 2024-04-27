//项目从这里开始运行

//react 核心包
import React from 'react';
import ReactDOM from 'react-dom/client';

//导入根组件
import App from './App';

//把app根组件  渲染到 id为root的dom节点上
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( <App /> );


