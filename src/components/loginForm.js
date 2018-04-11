//登陆界面
import React from 'react';
import {HashRouter} from 'react-router-dom';
import {Form,Input,Button,Row,Col,notification} from 'antd';
import $ from 'jquery';
import axios from 'axios';
import logo from '../assert/logo.svg';


axios.defaults.withCredentials = true;
const FormItem = Form.Item;

const openNotificationWithIcon = (type,title,mes) => {
    notification[type]({
        message: title || "提示",
        description: mes || "默认提示",
    });
};

class LoginForm extends React.Component{
    constructor(props){
        super(props);
        console.log(props);
        this.login = this.login.bind(this);
    }

    login(){
        let form = this.props.form;
        var no = form.getFieldProps("no").value;
        var pwd = form.getFieldProps("pwd").value;
        var user = {no:no,pwd:pwd};
        axios.post("/userController/checkLoginUser",user)
            .then(function (response) {
                if(response.data.state == true){
                    openNotificationWithIcon("success","操作结果","登陆成功");
                    localStorage.setItem("user",JSON.stringify(response.data.mes));
                    //重置表单
                    form.resetFields();
                    this.props.history.push("/home");
                }
                else{
                    openNotificationWithIcon("error","操作结果",response.data.mes);
                    form.reset();
                }
                console.log(response);
            }.bind(this))
            .catch(function (error) {
                console.log(error);
            }.bind(this));
    }

    render(){
        const { getFieldProps } = this.props.form;
        return(
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">欢迎你</h1>
                </header>
                <Row>
                    <Col span={8}>
                    </Col>
                    <Col span={8}>
                        <Form inline="true">
                            <FormItem label="请输入登陆账号">
                                <Input type="text" {...getFieldProps('no')} defaultValue=""/>
                            </FormItem>
                            <FormItem label="请输入登陆密码">
                                <Input type="password" {...getFieldProps('pwd')} id="password" defaultValue=""/>
                            </FormItem>
                        </Form>
                        <Row>
                            <Button onClick={this.login}>登陆</Button>
                        </Row>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default LoginForm = Form.create({})(LoginForm);