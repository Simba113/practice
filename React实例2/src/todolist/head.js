//引入
import React,{Component} from 'react';
//声明一个类叫ToHeader 继承自Component
class ToHeader extends Component {
    //构造函数
    constructor(props) {
        //父级构造函数
        super(props);
        //当前对象的state(展示)
        this.state = {
            val:''
        }
    }
    //方法
    //改变
    change = (ev) => {
        //输入框
        //拿到输入框里面 的值;放到state里面去
        //let val = ev.target.value;
        let {value:val} = ev.target;
        //通过this.setState展示页面最新数据
        //this.setState回刷新页面 的展示.同时数据也会变化,变化的是this.setState的数据;
        this.setState({val});
    }
    //键盘抬起
    keyup = (ev) => {
        //判断键盘是不是回车键;
        if(ev.keyCode === 13){
            //let {add} = this.props;
            //拿数据
            let {val} = this.state;
            //声明一个对象,对象里面包含了一对属性
            let obj = {
                name:val,
                id:+new Date,
                checked:false
            };

            //添加数据
            this.props.add(obj);
            //把输入框里的内容清空
            this.setState({val:''});
        }
    }
    //渲染
    render() {
        //逻辑区域
        ///state里面存储了一对数据.用来做页面展示
        //拿数据
        let {val} = this.state;
        return (
            //模版区域
            <header className="header" >
                <h1>todos</h1>
                <input 
                    className="new-todo" 
                    placeholder="请输入内容" 
                    onChange = {this.change}
                    value={val}
                    onKeyUp={this.keyup}
                />
            </header>
        )
    }
}
 
export default ToHeader;