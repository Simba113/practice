//引入
import React,{Component} from 'react';
import ToHeader from './head';
import ToList from './list';
import ToFooter from './footer';
import './css/index.css';
//声明一个类叫App继承自Component
class App extends Component {
    //构造函数
    constructor(props) {
        //父级构造函数
        super(props);
        //当前对象的state(展示)
        this.state = {
            arr:[
                {name:"呵呵0",id:0,checked:true},
                {name:"呵呵1",id:1,checked:false}
            ],
            stateAll:'all'
        }
    }
    //方法
    //勾选
    changeChecked = (id) => {
        //state里面存储了一对数据.用来做页面展示
        let {arr} = this.state;
        //循环数组
        arr.forEach(e=>{
            //改变checked属性
            if(e.id === id){
                e.checked = !e.checked
            }
        });
        //重新设置页面的展示
        //thia.setState:会刷新页面的展示,同时数据也会变化,就是this.state数据会变化;
        this.setState({arr});
    }

    //添加
    add = (obj) => {
        //拿到arr的数据
        let {arr} = this.state;
        //修改数据;往数组第一位添加obj
        arr.unshift(obj);
        //把新数据放回去.通过this.setState展示出新的数据
        this.setState({arr});
    }

    //变全选，变全不选
    checkedAll = (ev) => {
        //有没有勾选上
        //ev.target:勾选框
        let {checked} = ev.target;
        //拿到arrr的数据
        let {arr} = this.state;
        //修改数据
        //循环修改每一个
        arr.forEach(e=>e.checked=checked);
        //通过this.setState展示出最新的数据
        this.setState({arr});

    }
    //删除
    deleFn = (id) => {
        //let arr = this.state.arr;
        let {arr} = this.state;
        arr = arr.filter(e=> e.id!=id);
        //展示最新的数据
        this.setState({arr});
    }
    //修改All
    changState = (stateAll) => {
        this.setState({stateAll});
    }

    //修改内容
    changeText = (newVal,id) => {
        //let arr = this.state.arr
        //state:里面存储的数据,用来做页面展示
        //通过this.state拿到arr里面的数据
        let {arr} = this.state;
        //修改
        //循环修改每一个
        arr.forEach(e=>{
            //每一个元素的id跟目标id是不是相等
            if(e.id === id){
                e.name = newVal
            }
        });
        //把修改好的数据放回去;通过this.setStatr展示最新的数据
        this.setState({arr});
    }

    //渲染
    render() {
        //let arr = this.state.arr;
        //let stateAll = this.state.stateAll;
        let {arr,stateAll} = this.state;
        //修改数据
        //声明一个all
        let all;
        //判断arr.length是不是>0
        if(arr.length>0){
            //查看数据中的每一个有没有全部都勾选;把查看结果给all
            all=arr.every(e=>e.checked)
        }else{
            all=false
        }
        //let all = arr.length?arr.every(e=>e.checked):false;
        //
        let len = arr.length;
        //filter:过滤;
        //通过filter过滤arr里面的每一个元素
        let arr2 = arr.filter((e,i)=>{
            //判断元素有没有勾选
            if(e.checked) {len --};

            //switch:选择
            //选择stateAll里面的状态是哪一种?
            switch(stateAll){
                //如果说是all就走return e;
                case  'all':
                    return e;
                //打断switch
                break;
                //如果说是active就走return !e.checked;
                case  'active':
                    return !e.checked;
                //打断switch
                break;
                //如果说是completed就走return e.checked;
                case  'completed':
                    return e.checked;
                break;
            }
        })
        //返回新数组
        let newArr = arr2.map((e,i)=>{
            return <ToList {...{
                key:i,
                txt:e.name,
                id:e.id,
                checked:e.checked,
                ccFn:this.changeChecked,
                deleFn:this.deleFn,
                changeText:this.changeText
            }}/>
        })
        //模版区
        return ( 
            <section className="todoapp">
                <div>
                    <ToHeader {...{add:this.add}}/>
                    <section className="main">
                        <input 
                            className="toggle-all" 
                            type="checkbox" 
                            checked={all}
                            onClick = {this.checkedAll}
                        />
                        <ul className="todo-list">
                            {newArr}
                        </ul>
                    </section>
                    <ToFooter 
                        lenn={len} 
                        cs={this.changState}
                    />
                </div>
            </section>
         )
    }
}
//导出App
export default App;