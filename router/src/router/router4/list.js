//引入
import React from 'react';
//声明一个类叫List 继承自React.Component
class List extends React.Component {
    render() {
        //拿到txt数据
        let {txt} = this.props;
        //渲染
        return (
            <li>{txt}</li>
        )
    }
}
 
export default List;