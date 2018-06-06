//引入
import React,{Component} from 'react';
class ToFooter extends Component {
    constructor(props) {
        super(props);
        //当前对象的state(展示)
        this.state = {
            changState:[
                {name:'全部',state:'all'},
                {name:'未完成',state:'active'},
                {name:'已完成',state:'completed'}
            ],
            all:'all'
        }
    }
    //方法
    //点击
    click = (state) => {
        let {cs} = this.props;
        cs(state);
        this.setState({all:state})
    }
    //渲染
    render() {
        //逻辑区域
        let {lenn} = this.props;
        //拿数据
        let {changState,all} = this.state;
        //返回新数组
        let newArr = changState.map((e,i)=>{
            return (
                <li key={i}>
                    <a 
                        href={'#/'+e.state} 
                        className={all==e.state?'selected':''}
                        onClick={(state)=>{this.click(e.state)}}
                    >{e.name}</a>
                </li>
            )
        })
        return (
            //模版区域
            <footer className="footer">
                <span className="todo-count">
                    <strong>{lenn}</strong>
                    <span>条未选中</span>
                </span>
                <ul className="filters">
                    {newArr}
                    {/* <li>
                        <a href="#/all" className="selected">全部</a>
                    </li>
                    <li>
                        <a href="#/active" className="">未完成</a>
                    </li>
                    <li>
                        <a href="#/completed" className="">已完成</a>
                    </li> */}
                </ul>
            </footer>
        )
    }
}
//导出ToFooter
export default ToFooter;