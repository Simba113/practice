//引入 React 从这里'react'
import React from 'react';
//引入 ReactDOM 从这里'react-dom'
import ReactDOM from 'react-dom';
// import App from './ChildToParent/App/app';
// import App from './todolist/Index';
//引入一个App从这里'./classwork/App/App'
import App from './classwork/App/App';
//ReactDOM对象的render方法
ReactDOM.render(
    //模版
    <App />
    ,
    //挂载点/把东西放到这里
    document.getElementById('root')
)

if(module.hot){
    module.hot.accept();
}
 
