import React from 'react';
import axios from 'axios';
import * as $ from 'jquery';
axios.defaults.withCredentials = true
class UserList extends React.Component{
    constructor(props){
        super(props);
       // this.state = {userdatas:[]};
    };

    componentDidMount(){
        //采用此方法进行处理传参为题
        var params = new URLSearchParams();
        params.append("pageIndex","1");
        params.append("pageSize","2");
        params.append("searchCondition","");
        axios({
            method:"post",
            url:"/userController/getSearchPageList",
            data:params,
            responseType: 'json', // 默认的
            withCredentials: true
        }).then(
            function(response){
                console.log(response.data);
            }.bind(this)
        ).catch(function(error){
            console.log(error);
        }.bind(this));
    };

    render(){
        return (
            <div>
                UserList页面为什么没有显示出来？
            </div>
        );
    }
}

export default UserList;