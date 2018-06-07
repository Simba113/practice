//引入
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router} from 'react-router-dom'
// import App from './ChildToParent/App/app';
// import App from './router/router1/app';
// import App from './router/router2/app';
//import App from './router/router3/app';
 import App from './router/router4/app';
//渲染
ReactDOM.render(
    //模版
    <Router>
        <App />
    </Router>
    ,
    //挂载点
    document.getElementById('root')
)

if(module.hot){
    module.hot.accept();
}
 
