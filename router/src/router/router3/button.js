//引入
import React from 'react';
import {Link} from 'react-router-dom';
//声明类
class Btn extends React.Component {
    //方法
    //点击
    click = () => {
        let {url:{history:{goBack}}} = this.props;
        //调用函数
        goBack();
    }
    //渲染
    render() { 
        return (
            //模版
            <div>
                {/*Link to :点击btn的时候跳转到哪里*/}
                {/*链接*/}
                <Link to="/">
                    <button>首页</button>
                </Link>
                <Link to="/about">
                    <button>关于</button>
                </Link>
                <button
                    onClick={this.click}
                >上次操作</button>
            </div>
        )
    }
}
 //导出
export default Btn;