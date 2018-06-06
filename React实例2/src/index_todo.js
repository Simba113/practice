//引入
import React from 'react';
import ReactDOM from 'react-dom';
// import App from './ChildToParent/App/app';
import App from './todolist/Index';



ReactDOM.render(
    //模版
    <App />
    ,
    //挂载点
    document.getElementById('root')
)

if(module.hot){
    module.hot.accept();
}
 
