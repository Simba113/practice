//引入
import React from 'react';
import {Link} from 'react-router-dom';
//声明一个类About继承自React.Component
class About extends React.Component {
    //渲染
    render() { 
        return (
            <div>
                <h1>关于</h1>
                <div>这个是关于的主页</div>
                <button>
                    <Link to="/about/a">关于我们</Link>
                </button>
                <button>
                    <Link to="/about/b">关于你们</Link>
                </button>
                <button>
                    <Link to="/about/c">关于它们</Link>
                </button>
            </div>
        )
    }
}
 
export default About;