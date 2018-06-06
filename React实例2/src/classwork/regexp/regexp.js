//引入
import React,{Component} from 'react';
//声明一个类叫Re继承自Compenent
class Re extends Component {
    //构造函数
    constructor(props) {
        //父级构造函数
        super(props);
        //当前对象的state(状态)
        this.state = {
            val:'',
            onOff:true
        }
    }
    //方法
    //改变
    change = (ev) => {
        let {value:val} = ev.target;
        //接收
        let {re,changeCount,name} = this.props;
        //this.state:里面存储了一对数据,对应页面的展示状态,;展示的状态在模版中;
        let {onOff} = this.state;
        //test:是正则表达式的一个方法;用来测试字符串是不是符合正则表达式的规则;如果符合规则返回的饿是true,否则返回是true;
        onOff = re.test(val);
        //判断name是不是是Date;如果是Date就进一步做日期的验证;
        if(name == 'Date：'){
            //调用birthday方法
            onOff = this.birthday(val,re);
        }
        //调用函数
        changeCount(name,onOff);
        //当前对象的setState方法;里面参数是一个对象,这个对象里面存储了一对数据;页面根据数据来做改变
        this.setState({val,onOff});
       
    }
    //判断生日
    birthday = (val,re) => {
        //replace:替换(第一个参数是正则表达示,第二个参数是一个函数)
        //替换val里面的数据
        let str = val.replace(re,function($0,$1,$2,$3){
            return $1+'-'+$2+'-'+ $3
        });
        //以 - 为界限把字符串拆分成一个数组;
        let arr = str.split('-');
        //arr[0],arr[1]-1,arr[2]:年月日;
        //根据年月日来构造一个日期
        let setdate = new Date(arr[0],arr[1]-1,arr[2]);
        /*
            设置的时间有没有比现在时间大
        */
       if(setdate.getTime() > Date.now()){
           return false;
       }else{
           //获取年月日
            let y = setdate.getFullYear();
            let m = setdate.getMonth() + 1;
            let d = setdate.getDate();
            //判断输入的日期和获取的日期相符
            if(y == arr[0] && m == arr[1] && arr[2] == d){
                return true;
            }else{
                return false;
            }
       }
    }
    //渲染
    render() {
        //逻辑区域
        //接收外部传来的属性,数据
        let {name,txt,re} = this.props;
        //this.state:里面存储了一对数据,对应页面的展示状态,;展示的状态在模版中;
        let {val,onOff} = this.state;
        
        return (
            //模版区域
            <div>
                <span>{name}</span>
                <input 
                    className={onOff?'ok':'error'}
                    type="text"  
                    placeholder={txt}
                    onChange={this.change}
                    value={val}
                />
            </div>
         )
    }
}
//导出Re
export default Re;