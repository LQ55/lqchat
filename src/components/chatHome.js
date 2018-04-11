import React from 'react';
import {Route,Link,Switch} from 'react-router-dom';
import {Row,Col,Menu,Icon,Layout,Breadcrumb} from 'antd';
import WelcomePage from './WelcomePage';
import UserList from './user/userList';

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;
const MenuItemGroup = Menu.ItemGroup;


//首页，做页面的布局
class ChatHome extends React.Component{

    constructor(props){
        super(props);
        this.navToAim = this.navToAim.bind(this);
    };

    handClick = (e) => {
        alert("dfdsf");
        console.log('click ', e);
        // this.setState({
        //     current: e.key,
        // });
    }

    navToAim = () =>{
        this.porps.history.push("/home/userList");
    }

    render(){
        return (
            <Layout>
                <Header className="header">
                    <div className="logo" />
                  {/*  <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']} style={{ lineHeight: '64px' }}>
                        <Menu.Item key="1">nav 1</Menu.Item>
                        <Menu.Item key="2">nav 2</Menu.Item>
                        <Menu.Item key="3">nav 3</Menu.Item>
                    </Menu>*/}
                </Header>
                <Layout>
                    <Sider width={200} style={{ background: '#fff' }}>
                        <Menu
                            mode="inline"
                            style={{ height: '100%', borderRight: 0 }}
                        >
                            <SubMenu key="sub1" title={<span><Icon type="user" />操作员管理</span>}>
                                <Menu.Item key="1" onClick={this.handClick}><Link to="`{this.props.math.url}`/userList">操作员信息</Link></Menu.Item>
                                <Menu.Item key="2">新增操作员</Menu.Item>
                            </SubMenu>
                            <SubMenu key="sub2" title={<span><Icon type="laptop" />权限管理</span>}>
                                <Menu.Item key="5">权限点管理</Menu.Item>
                                <Menu.Item key="6">分配权限</Menu.Item>
                            </SubMenu>
                        </Menu>
                    </Sider>
                    <Layout style={{ padding: '0 24px 24px' }}>
                        <Breadcrumb style={{ margin: '16px 0' }}>
                            <Breadcrumb.Item>Home</Breadcrumb.Item>
                            <Breadcrumb.Item>List</Breadcrumb.Item>
                        </Breadcrumb>
                        <Content style={{ background: '#fff', padding: 24, margin: 0, minHeight: 280 }}>
                            <Switch>
                                <Route exact path="/home" component={WelcomePage}></Route>
                                <Route exact path="/userList" component={UserList}/>
                            </Switch>
                        </Content>
                    </Layout>
                </Layout>
            </Layout>
        );
    }
}

export default ChatHome;