import React from 'react';
import {Route,Link} from 'react-router-dom';
import {Row,Col,Menu,Icon,Layout,Breadcrumb} from 'antd';
const { Header, Content, Sider } = Layout;
const MenuItemGroup = Menu.ItemGroup;

//首页，做页面的布局
class WelcomePage extends React.Component{
    state = {
        current: 'mail',
    };

    constructor(props){
        super(props);
    };

    handClick = (e) => {
        console.log('click ', e);
        this.setState({
            current: e.key,
        });
    }

    render(){
        return (
            <div>系统Welcome页面</div>
        );
    }
}

export default WelcomePage;