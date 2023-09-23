import React, {useEffect, useState} from 'react';
import {
    HomeFilled,
    AppstoreOutlined
} from '@ant-design/icons';
import { Layout, Menu, Button, theme } from 'antd';
import {connect} from "react-redux";
import '../../source/css/logo.css'
import {useLocation, useNavigate} from "react-router-dom";
import axios from "axios";
import SubMenu from "antd/es/menu/SubMenu";
const { Header, Sider} = Layout;

const iconList = {
    '/home': <HomeFilled />,
    '/user-manage': <AppstoreOutlined />,
    '/right-manage': <AppstoreOutlined />,
    '/audit-manage': <AppstoreOutlined />,
    '/news-manage': <AppstoreOutlined />,
    '/publish-manage': <AppstoreOutlined />
}

function SideMenu(props) {
    const navigate = useNavigate()
    const location = useLocation()
    const [menu, setMenu] = useState([])
    const {role:{rights}} = JSON.parse(localStorage.getItem("token"))

    const selectKeys = [location.pathname]
    const openKeys = ["/" + location.pathname.split("/")[1]]
    useEffect(() => {
        // TODO 目前使用apifox的mock 后续请后端返回应有的数据 详细见apifox
        axios.get("http://localhost:8080/sidemenu").then(res => {
            console.log(res.data)
            console.log(Array.isArray(res.data))
            setMenu(res.data)
        })
    }, [])
    const checkPagePermission = (item) => {
        // TODO  此处是权限判断，但是为了前期开发简单 直接返回真
        return true;
        // return item.pagepermisson && rights.includes(item.key)
    }
    const renderMenu = (menuList) => {
        return menuList.map(item => {

            if (item.children?.length > 0 && checkPagePermission(item)) {
                return <SubMenu key={item.key} icon={iconList[item.key]} title={item.title}>
                    {renderMenu(item.children)}
                </SubMenu>
            }
            else {
                return (checkPagePermission(item) && <Menu.Item
                        key={item.key} icon={iconList[item.key]} onClick={() => {
                        navigate(item.key)
                    }}>
                        {item.title}
                    </Menu.Item>
                )
            }
        })
    }
    const onClick = (e) => {
        console.log('click ', e);
    };

    return (
        <Sider trigger={null} collapsible collapsed={props.isCollapsed}>
            <div style={{ display: "flex", height: "100%", "flexDirection": "column" }}>
                <div  className="logo" >软院找人</div>
                <div  style={{ flex: 1, "overflow": "auto" }}>
                    <Menu
                        theme="dark"
                        mode="inline"
                        defaultOpenKeys={openKeys}
                        selectedKeys={selectKeys}
                        // defaultSelectedKeys={['1']}
                        onClick={onClick}
                    >
                        {renderMenu(menu)}
                    </Menu>
                </div>

            </div>

        </Sider>
    );
}
const mapStateToProps = ({CollApsedReducer:{isCollapsed}})=>({
    isCollapsed
})
export default connect(mapStateToProps)(SideMenu);