//引入
import React,{Component} from 'react';
import './App.css';
import Re from '../regexp/regexp';
//声明一个类叫App继承自Component
class App extends Component {
    //构造函数
    constructor(props) {
        //父级构造函数
        super(props);
        //把changeCount里面的this强制变成当前对象;
        //bind:强制把函数中的this指定为当前对象;
        this.changeCount=this.changeCount.bind(this);
        //当前对象的state属性
        this.state = {
            //数据
            arr:[
                {
                    name:'QQ：',
                    txt:'请输入QQ',
                    re:/^[1-9]\d{4,10}$/,
                    count:false
                },
                {
                    name:'Email：',
                    txt:'请输入邮箱',
                    re:/^[A-Za-z][\w]{6,11}@[0-9a-z]{2,8}((\.com|\.cn)|(\.com\.cn))$/,
                    count:false
                },
                {
                    name:'Mobile：',
                    txt:'请输入手机号码',
                    re:/^1[3-9]\d{9}$/,
                    count:false
                },
                {
                    name:'Date：',
                    txt:'请输入生日',
                    re:/^(\d+)\D+(\d+)\D+(\d+)\D?$/,
                    count:false
                }
            ]
        }
    }
    //方法
    //
    changeCount (name,onOff) {
        let {arr} = this.state;
        arr.forEach(e=>{
            if(e.name === name){
                e.count = onOff
            }
        })
        //通过当前对象的setState属性来改变状态值
        this.setState({arr});
    }
    //渲染
    render() {
        //逻辑区域
        //this.start由组件自己创建，可以修改，一般由用户交互产生新的状态(数据)
        let {arr} = this.state;
        //查看数组中是不是每一个符合条件.如果有一个不符合就返回false,符合返回true;
        let all = arr.every(e=>e.count);
        //把arr中的东西重新组装返回新数组
        let newArr = arr.map((e,i)=>{
            return (<Re {...{
                name:e.name,
                txt:e.txt,
                re:e.re,
                key:i,
                changeCount:this.changeCount
            }}/>)
        })
        //模版区域
        return (
            <div id="contain">
                {newArr}
                <p>
                    <input
                        className={all?'succ':'fail'}
                        type="button" 
                        value="注册" 
                        id="btn" 
                    /></p>
            </div>
        )
    }
}
 //导出App
export default App;