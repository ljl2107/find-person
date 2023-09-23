import React from 'react';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Form, Input, message } from 'antd';
import { useNavigate} from 'react-router-dom'
import '../source/css/Login.css'
// // -----------------ParticleLine start----------
import ReactParticleLine from 'react-particle-line';
import axios from 'axios';
//-------------------ParticleLine end---------------
export default function Login() {
    const navigate = useNavigate()
    const onFinish = (values) => {
        console.log('Success:', values);
        axios.post('http://localhost:8080/users',
            {
                username:values.username,
                password: values.password
            })
            .then(function (response){
                console.log(response)
        })
            .catch(function (error){
            console.log(error)
        })

        // axios.get(`http://localhost:8080/users?username=${values.username}&password=${values.password}&roleState=true&_expand=role`).then(
        //     res=>{
        //         console.log('admin',res)
        //         if(res.data.length===0){
        //             message.error("用户名或密码不匹配")
        //         }else{
        //             if(JSON.stringify(res.data[0])){
        //                 console.log("为真")
        //             }
        //             localStorage.setItem("token",JSON.stringify(res.data[0]))
        //             console.log("重定向")
        //             navigate('/home')
        //         }
        //     })
    };
    return (
        <div style={{ backgroundColor: 'rgb(35,39,60)', height: "100%" }}>
            <ReactParticleLine
                lineWidth={0.3}
                dotsNumber={100}
                dotsDistance={100}
                hoverEffect={true}
            >
                <div className='logintitle'>全球新闻发布管理系统</div>

                <div className="formContainer">
                    <Form
                        name="normal-login"
                        className='login-form'
                        onFinish={onFinish}
                    >
                        {/* --------------用户名 start----------------- */}
                        <Form.Item
                            name="username"
                            rules={[{ required: true, message: 'Please input your Username!' }]}
                        >
                            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
                        </Form.Item>
                        {/* --------------用户名 end----------------- */}
                        {/* --------------密码 start----------------- */}
                        <Form.Item
                            name="password"
                            rules={[{ required: true, message: 'Please input your Password!' }]}
                        >
                            <Input
                                prefix={<LockOutlined className="site-form-item-icon" />}
                                type="password"
                                placeholder="Password"
                            />
                        </Form.Item>
                        {/* --------------密码 end----------------- */}

                        {/* --------------按钮 start----------------- */}
                        <Form.Item>
                            <Button type="primary" htmlType="submit" className="login-form-button">
                                登录
                            </Button>
                        </Form.Item>
                        {/* --------------按钮 end----------------- */}

                    </Form>
                </div>
            </ReactParticleLine>
        </div>
    );
}
