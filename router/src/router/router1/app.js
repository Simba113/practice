//引入
import React from 'react';
import {Route} from 'react-router-dom';
import Index from './index';
import About from './about';
//声明一个类叫App继承自React.Component
class App extends React.Component {
    //构造函数
    constructor(props) {
        super(props);
        //当前对象的state(展示)
        this.state = {  };
    }
    //渲染
    render() {
        return (
            //模版
            <div>
                <div>都是页面</div>
                <Route exact path="/" component={Index}/>
                <Route exact path="/about" component={About}/>
                {/*如果要超精确匹配，那么要加 exact strict  比如:/about/aa*/}
                {/* <Route exact strict  path="/about/" component={About}/> */}
            </div>
        )
    }
}
//导出App
export default App;