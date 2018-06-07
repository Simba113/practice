//引入
import React from 'react';
import {Route,Link} from 'react-router-dom';
import Index from './index';
import About from './about';
import About1 from './aboutchild/aboutA';
import About2 from './aboutchild/aboutB';
import About3 from './aboutchild/aboutC';
import Btn from './button';
import './1.css';
//声明一个类App继承自React.Component
class App extends React.Component {
    constructor(props) {
        super(props);
        //当前对象的state
        this.state = {  };
    }
    //渲染
    render() {
        /*
            exact 只找这个路径,后面的路径就不认了
                /index
                /index/aa  后面的就用不了。

            strict 只认包含这个路径的，包括后面的
                /index/
                /index/aa

                /index  没有后面的/就用不了。

        */
        return (
            //模版
            <div>
                <Route path="///" children={(url)=>{
                    console.log(url);
                    return <Btn url={url}/>
                }} />
                {/*exact 只找这个路径,后面的路径就不认了*/}
                    {/*/index*/}
                {/*<Route exact path="/" component={Index}/>   把index组件告诉Route,同时对应的是/这个路径*/}
                <Route path="/about" component={About}/>
                <Route path="/about/:id" render={({match:{params}})=>{ //根据不同的id找到不同的组件
                   switch(params.id){
                        case 'a': //如果是/about/a就对应<About1 />组件
                            return <About1 />
                        break;
                        case 'b':
                            return <About2 />
                        break;
                        case 'c':
                            return <About3 />
                        break;
                        default:
                            return <About1 />
                        //中断执行
                        break;  
                   }    
                }}/>


                {/* <Route path="/about/a" component={About1}/>
                <Route path="/about/b" component={About2}/>
                <Route path="/about/c" component={About3}/> */}
            </div>
        )
    }
}
//导出
export default App;