import React, {useState} from 'react';
import { useNavigate} from 'react-router-dom'
import { Layout, Dropdown, Menu, Avatar } from 'antd';
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    UserOutlined
} from '@ant-design/icons';
import {Header} from "antd/es/layout/layout";
import {connect} from "react-redux";

function TopHeader(props) {

    const changeCollapsed = () => {
        // setCollapsed(!collapsed)
        // console.log(props)
        props.changeCollapsed()
    }
    const navigate = useNavigate()
    const {role: {roleName}, username} = JSON.parse(localStorage.getItem("token"))
    const menu = (
        <Menu>
            <Menu.Item>
                {roleName}
            </Menu.Item>
            <Menu.Item>
                个人信息
            </Menu.Item>
            <Menu.Item>
                设置
            </Menu.Item>
            <Menu.Item danger onClick={() => {
                localStorage.removeItem("token")//移除了token
                navigate('/login')
            }}>
                登出
            </Menu.Item>
        </Menu>
    );

    return (
        <Header
            className="site-layout-background"
            style={{
                padding: '0 16px'
            }}
        >
            {
                props.isCollapsed ? <MenuUnfoldOutlined onClick={changeCollapsed}/> :
                    <MenuFoldOutlined onClick={changeCollapsed}/>
            }

            <div style={{float: 'right'}}>
                <span>欢迎<span style={{color: "blue"}}>{username}</span>回来</span>
                <Dropdown overlay={menu}>
                    <Avatar size="large" icon={<UserOutlined/>}/>
                </Dropdown>
            </div>
        </Header>
    );
}
    //connect(
    // mapStateToProps
    // mapDispatchToprops
// )(被包装的组件)
    const mapStateToProps = ({CollApsedReducer: {isCollapsed}}) => {
        return {
            isCollapsed
        }
    }
    const mapDispatchToprops = {
        changeCollapsed() {
            return {
                type: "change_collapsed"
                // pyload
            }//action
        }
    }


export default connect(mapStateToProps,mapDispatchToprops)(TopHeader)