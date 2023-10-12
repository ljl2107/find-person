import React, {useEffect, useState} from 'react';
import {Button, message, Table} from "antd";
import {DeleteTwoTone, UnorderedListOutlined} from "@ant-design/icons";
import axios from "axios";
import Search from "antd/es/input/Search";


function StudentFind(props) {
    const [studentList, setstudentList] = useState([])//
    useEffect(() => {

    }, [])
    const onSearch = (value, _e, info) => {
        console.log(info?.source, value);
        axios.get("http://localhost:8080/student-manage/find",
            {
                params:{
                    value:value
                }
            }).then(res => {
            console.log("201792228,竺锦杰,1,1",res)
            setstudentList(res.data)

            if (res.data.length==0){
                message.error("出错了，请检查输入和提示是否一致（逗号不区分中英文）",5)
            }
        })
    }
    // 学号，姓名，性别，班级，手机号码，邮件地址。
    const columns = [
        {
            title: '学号',
            dataIndex: 'sid',
            key: 'sid',
            render: (text) => <a>{text}</a>,
        },
        {
            title: '姓名',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: '性别',
            dataIndex: 'gender',
            key: 'gender',
        },
        {
            title: '班级',
            dataIndex: 'classname',
            key: 'classname',
            render: (text) => <a>{text}</a>,
        },
        {
            title: '手机号码',
            dataIndex: 'mobile',
            key: 'mobile',
        },
        {
            title: '邮件地址',
            dataIndex: 'email',
            key: 'email',
        }
    ];
    return (
        <div>
            <Search
                placeholder="学号，姓名，手机号，邮件地址"
                allowClear
                enterButton="搜索"
                size="large"
                onSearch={onSearch}
            />
            <Table
                columns={columns}
                pagination={{
                    position: ['bottomCenter'],
                }}
                dataSource={studentList}
            />
        </div>
    );
}

export default StudentFind;