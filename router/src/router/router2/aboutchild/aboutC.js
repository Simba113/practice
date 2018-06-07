//引入
import React from 'react';
import {Link} from 'react-router-dom';
//声明一个类叫About3继承自 React.Component
class About3 extends React.Component {
    render() { 
        return (
            <div>
                <h1>关于它们</h1>
                <button>
                    <Link to="/about/a">关于我们</Link>
                </button>
                <button>
                    <Link to="/">返回首页</Link>
                </button>
            </div>

        )
    }
}
 //导出ABOUT3
export default About3;