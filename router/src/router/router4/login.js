//引入
import React from 'react';
class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    //方法
    //点击
    click = () => {
        //拿到go数据
        let {go} = this.props;
        go();
    }
    //渲染
    render() { 
        return (
            //模版区
            <div>
                <button onClick={this.click}>走你</button>
            </div>
        )
    }
}
 //导出
export default Login;