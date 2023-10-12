import React from 'react';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import {Button, Checkbox, Col, Form, Input, message, Row} from 'antd';
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

        axios.get(`http://localhost:8080/users?username=${values.username}&password=${values.password}`).then(
            res=>{
                console.log('admin',res.data)
                if(res.data.length===0){
                    message.error("用户名或密码不匹配")
                }else{
                    localStorage.setItem("token",JSON.stringify(res.data))
                    console.log("重定向")
                    navigate('/')
                }
            })
    };
    return (
       <div>
           <h1 className={"logintitle"}>软院找人</h1>
           <Row>
               <Col className={"formContainer"} xs={16} sm={16} md={16} lg={16} xl={16}>
                   <Form
                       name="normal_login"
                       className="login-form"
                       initialValues={{
                           remember: true,
                       }}
                       onFinish={onFinish}
                   >
                       <Form.Item
                           name="username"
                           rules={[
                               {
                                   required: true,
                                   message: 'Please input your Username!',
                               },
                           ]}
                       >
                           <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
                       </Form.Item>
                       <Form.Item
                           name="password"
                           rules={[
                               {
                                   required: true,
                                   message: 'Please input your Password!',
                               },
                           ]}
                       >
                           <Input
                               prefix={<LockOutlined className="site-form-item-icon" />}
                               type="password"
                               placeholder="Password"
                           />
                       </Form.Item>
                       <Form.Item>
                           <Form.Item name="remember" valuePropName="checked" noStyle>
                               <Checkbox>Remember me</Checkbox>
                           </Form.Item>

                           <a className="login-form-forgot" href="">
                               Forgot password
                           </a>
                       </Form.Item>

                       <Form.Item>
                           <Button type="primary" htmlType="submit" className="login-form-button">
                               Log in
                           </Button>
                           Or <a href="">register now!</a>
                       </Form.Item>
                   </Form>
               </Col>
               <Col xs={4} sm={8} md={8} lg={8} xl={8}>
                   <img className={"tximg"} src={"https://t.mwm.moe/tx/"}/>
               </Col>
           </Row>



       </div>
    );
}
