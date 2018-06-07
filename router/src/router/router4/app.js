//引入
import React from 'react';
import Index from './index';
import Login from './login';
import {Route,Link,Redirect} from 'react-router-dom';
//声明一个类
class App extends React.Component {
    constructor(props) {
        super(props);
        //当前对象的state(展示)
        this.state = {
            onOff:false
        }
    }
    //方法

    go = () => {
        //执行这个方法的时候会刷新页面上的展示;根据参数中的一对数据刷新的;
        this.setState({onOff:true});
    }
    outFn = () => {
        //执行这个方法的时候会刷新页面上的展示;根据参数中的一对数据刷新的;
        this.setState({onOff:false});
    }
    //渲染
    render() {
        //拿到onoff
        let {onOff} = this.state;
        return (
            //模版
            <div>
                <Route exact path="/" render={()=>{
                    //在index组件中接收了onOff和outFn
                    return <Index onOff={onOff} outFn={this.outFn}/>
                }} />
                {/*"/login" 有可能对应<Redirect to="/" />;也有可能对应<Login go={this.go}/>*/}
                {/*根据onoff来对应;如果是true对应<Redirect to="/" />*/}
                {/*//如果是false对应的是<Login go={this.go}/>*/}
                <Route path="/login" render={()=>{
                    if(onOff){
                        return <Redirect to="/" />
                    }else{
                        return <Login go={this.go}/>
                    }
                }} />
            </div>
        )
    }
}
 
export default App;
