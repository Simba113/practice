//引入
import React from 'react';
import List from './list';
import {Route,Link} from 'react-router-dom';
//声明一个类叫Index继承自React.Component
class Index extends React.Component {
    constructor(props) {
        super(props);
        //当前对象的state(展示)
        this.state = {
            arr:[]
        }
    }
    //方法
    //点击
    click = () => {
        //执行这个方法的时候回刷新页面的展示;根据里面的参数来展示
        this.setState({arr:[1,2,3,4,5]});
    }
    //专属
    zsclick = () => {
        //执行这个方法的时候会刷新页面的展示.如何展示是根据里面 的参数来展示数据
        this.setState({arr:['寂寞','同城','胶友']});
    }
    //
    out = () => {
        let {outFn} = this.props;
        //调用函数
        outFn();
        //展示空数组
        this.setState({arr:[]});
    }
    render() {
        //逻辑区域
        //拿到arr数据
        let {arr} = this.state;
        let {onOff} = this.props;
    //根据onoff来决定btn2的值;
    let btn2 = onOff?(
        //如果是true就走线面的代码
        <span>
            <button
                onClick={this.zsclick}
            >你的专属新闻</button>
            <button 
                onClick={this.out}
            >退出</button>
        </span>
        //如果是false就走下面 的代码
        ):( <Link to="/login"> 
            <button>你的专属新闻</button>
        </Link>)
        //渲染
        return (
            //模版区域
            <div>
                <button 
                    onClick={this.click}
                >今日新闻</button>
               {btn2}
                <ul>{
                    //返回新数组
                    arr.map((e,i)=>{
                        return <List {...{
                            key:i,
                            txt:e
                        }}/>
                    })
                }</ul>
            </div>
        )
    }
}
 //导出Index
export default Index;