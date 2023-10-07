import React, {forwardRef} from 'react';
import {Form, Input, Select} from "antd";
const { Option } = Select
const StudentForm = forwardRef((props,ref) => {
    const {roleId,region,username} = JSON.parse(localStorage.getItem("token"))

    function checkRegionDisabled(item) {
        return true;
    }
    const onFinish = (values) => {
        console.log(values);
    };
    return (
        <div>
            <Form
                ref={ref}
                layout="vertical"
                onFinish={onFinish}
            >
                <Form.Item
                    name="sid"
                    label="学号"
                    rules={[
                        {
                            required: true,
                            message: '必填项!',
                        },
                    ]}
                >
                    <Input/>
                </Form.Item>
                <Form.Item
                    name="username"
                    label="学生姓名"
                    rules={[
                        {
                            required: true,
                            message: '必填项!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    name="gender"
                    label="性别"
                    rules={[
                        {
                            required: true,
                            message: '必填项!',
                        },
                    ]}
                >
                    <Select
                        placeholder="选择性别"
                        allowClear
                    >
                        <Option value="男">男</Option>
                        <Option value="女">女</Option>
                    </Select>
                </Form.Item>
                <Form.Item
                    name="classname"
                    label="班级"
                    rules={[
                        {
                            required: true,
                            message: '必填项!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    name="mobile"
                    label="电话号码"
                    rules={[
                        {
                        },
                    ]}
                >
                    <Input/>
                </Form.Item>
                <Form.Item
                    name="email"
                    label="电子邮件"
                    rules={[
                        {
                        },
                    ]}
                >
                    <Input/>
                </Form.Item>
            </Form>
        </div>
    );
}
)
export default StudentForm;