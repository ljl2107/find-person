import React, {useEffect, useState} from 'react';
import { useNavigate} from 'react-router-dom'
import {Layout, Dropdown, Menu, Avatar, Upload, message} from 'antd';
import {
    LoadingOutlined,
    MenuFoldOutlined,
    MenuUnfoldOutlined, PlusOutlined,
    UserOutlined
} from '@ant-design/icons';
import {Header} from "antd/es/layout/layout";
import {connect} from "react-redux";
import axios from "axios";


const getBase64 = (img, callback) => {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);
};
const beforeUpload = (file) => {
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
    if (!isJpgOrPng) {
        message.error('You can only upload JPG/PNG file!');
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
        message.error('Image must smaller than 2MB!');
    }
    return isJpgOrPng && isLt2M;
};
function TopHeader(props) {
    const [loading, setLoading] = useState(false);
    const [imageUrl, setImageUrl] = useState();
    const handleChange = (info) => {
        if (info.file.status === 'uploading') {
            setLoading(true);
            return;
        }
        console.log("info.file.originFileObj",info.file.originFileObj)
        if (info.file.status === 'done') {
            // Get this url from response in real world.
            getBase64(info.file.originFileObj, (url) => {
                setLoading(false);
                setImageUrl(url);
                console.log("imgurl",imageUrl)
            });
        }
    };
    const uploadButton = (
        <div>
            {loading ? <LoadingOutlined /> : <PlusOutlined />}
            <div
                style={{
                    marginTop: 8,
                }}
            >
                上传头像
            </div>
        </div>
    );

    const changeCollapsed = () => {
        // setCollapsed(!collapsed)
        // console.log(props)
        props.changeCollapsed()
    }
    const navigate = useNavigate()
    const {role: {roleName}, username,id} = JSON.parse(localStorage.getItem("token"))
    const menu = (
        <Menu>
            <Menu.Item>
                {roleName}
            </Menu.Item>
            <Menu.Item>
                <Upload
                    name="avatar"
                    listType="picture-circle"//圆形上传框
                    className="avatar-uploader"
                    showUploadList={false}
                    action="http://localhost:8080/user-manage/upload/avatar"//上传的地址
                    beforeUpload={beforeUpload}
                    onChange={handleChange}
                >
                    {imageUrl ? (
                        <img
                            src={imageUrl}
                            alt="avatar"
                            style={{
                                width: '100%',
                            }}
                        />
                    ) : (
                        uploadButton
                    )}
                </Upload>
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
    useEffect(() => {
        axios.get("http://localhost:8080/user-manage/avatar")
            .then(res => {
                console.log("获取的头像数据",res)
                setImageUrl("data:image/jpeg;base64,"+res.data)
        })
    }, [])
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
                    <Avatar size="large" src={imageUrl}/>
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