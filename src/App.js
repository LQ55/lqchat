import React, { Component } from 'react';
import {BrowserRouter,Route,Router,Link} from 'react-router-dom';
import './App.css';
import 'antd/dist/antd.css';
import LoginForm from './components/loginForm';
import ChatHome from './components/chatHome';
import axios from 'axios';
//设置请求带上身份验证
axios.defaults.withCredentials = true;

class App extends Component {
  render() {
    return (
        <BrowserRouter>
            <div>
                {/*<Route exact path="/" component={Home}/>*/}
                {/*<div className="App">
                    <header className="App-header">
                        <img src={logo} className="App-logo" alt="logo" />
                        <h1 className="App-title">Welcome to React</h1>
                    </header>

                </div>*/}
                <Route exact path="/" component={LoginForm}></Route>
                <Route exact path="/home" component={ChatHome}></Route>
            </div>
        </BrowserRouter>
    );
  }
}

export default App;
