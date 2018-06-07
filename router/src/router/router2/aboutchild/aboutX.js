//引入
import React from 'react';
import {Link} from 'react-router-dom';
import About1 from './aboutA'
import About2 from './aboutB'
import About3 from './aboutC'
import About from '../about';
//声明一个类AboutX继承自React.Component
class AboutX extends React.Component {
    //渲染
    render() { 
        let {match:{params:{id}}} = this.props;
        let temp = '';
        switch(id){
            case 'a':
                temp = <About1 />
            break;
            case 'b':
                temp = <About2 />
            break;
            case 'c':
                temp = <About3 />
            break;
            default:
                temp = <About1 />
            break;
        }
        //模版
        return (
            <div>
                <About />
                {temp}
            </div>
        )
    }
}
 //导出AboutX
export default AboutX;