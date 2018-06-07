//引入
import React from 'react';
import {Link} from 'react-router-dom';
import About1 from './aboutchild/aboutA'
//声明一个类叫About继承自React.Component
class About extends React.Component {
    //渲染
    render() {
        //
        console.log(this.props)
        let {location:{pathname}} = this.props;
        let com = pathname == '/about'? <About1 />:'';
        return (
            <div>
                <h1>关于</h1>
                <Link to="/about/a">
                    <button>关于我们</button>
                </Link>
                <Link to="/about/b">
                    <button>关于你们</button>
                </Link>
                <Link to="/about/c">
                    <button>关于它们</button>
                </Link>
                {com}
            </div>
        )
    }
}
 //导出
export default About;