//引入
import React,{Component} from 'react';
//声明一个类叫ToList继承自Component
class ToList extends Component {
    //构造函数
    constructor(props) {
        super(props);
        //当前对象的state(展示)
        this.state = {
            val:'',
            editing:false //设置是否双击
        }
    }
    
    //切换checeked
    change = () => {
        let {id,ccFn} = this.props;
        //调用函数
        ccFn(id);
    }

    //删除功能
    dele = () => {
        let {id,deleFn} = this.props;
        deleFn(id);
    }

    //双击之后修改输入框中的内容
    textChange = (ev) => {
        //声明一个val = 输入框里的value
        let {value:val} = ev.target;
        //把val放到state里面去
        this.setState({val});
    }

    //输入框失焦
    blur = () => {
        //拿数据
        let {val} = this.state;
        //拿到PROPS里面的id,changeText,txt数据
        let {id,changeText,txt} = this.props;
        //当有东西的时候并且2个value值不相等的时候，
        //通知父级，数据已修改

        if(val && val!=txt){
            changeText(val,id);
        }
        //editing:false:取消编辑状态
        this.setState({editing:false});
    }

    //双击
    db = () => {
        /*
            双击的时候打开输入框
            顺便把父级的数据给val，这个时候输入框中的value就是父级的数据
        */
        let {txt} = this.props;
        this.setState({editing:true,val:txt},()=>{
            this.refs.a.focus();
        })
    }

    render() { 
        let {txt,id,checked} = this.props;
        //拿val,editingde 数据
        let {val,editing} = this.state;
       
        //通过editing去判断是否需要输入内容
        let sClass = checked?'completed':'';
        if(editing)sClass += '  editing';
        return (
            //模版区
            <li className={sClass}>
                <div className="view">
                    <input 
                        className="toggle" 
                        type="checkbox" 
                        checked = {checked}
                        onChange={this.change}
                    />
                    <label
                        onDoubleClick = {this.db}
                    >{txt}</label>
                    <button 
                        className="destroy"
                        onClick = {this.dele}
                    ></button>
                </div>
                <input 
                    className="edit" 
                    value={val}
                    onChange={this.textChange}
                    onBlur = {this.blur}
                    ref="a"  
                /> 
            </li>
        )
    }
}
 
export default ToList;