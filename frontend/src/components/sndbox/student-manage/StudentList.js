import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Button, Radio,Modal, Space, Table, Tag} from "antd";
import {DeleteTwoTone, ExclamationCircleOutlined, UnorderedListOutlined} from "@ant-design/icons";

const { confirm } = Modal;

function StudentList(props) {
    const [studentList, setstudentList] = useState([])//

    useEffect(() => {
        axios.get("http://localhost:8080/student-manage/list").then(res => {
            setstudentList(res.data)
        })
    }, [])
    //----------------delete start---------------------------//
    const confirmMethod = (item) => {
        confirm({
            title: '你确定要删除?',
            icon: <ExclamationCircleOutlined />,
            content: '三思而后行',
            onOk() {
                deleteMethod(item)
            },
            onCancel() { },
        });
    };
    const deleteMethod = (item) => {
        setstudentList(studentList.filter(data => data.sid !== item.sid))//删除就是覆盖
        // axios.delete(`http://localhost:8000/users/${item.id}`)
    }
    //----------------delete end---------------------------//
    //----------------update start 删除按钮旁边的按钮---------------------------//
    const handleChange = (item) => [
        // console.log(item),
        // item.roleState = !item.roleState,
        // setdataSource([...dataSource]),
        //
        // axios.patch(`http://localhost:8000/users/${item.id}`, {
        //     roleState: item.roleState
        // })
    ]
    const handleUpdate = (item) => {
        // setTimeout(() => {
        //     setisUpdateVisible(true)
        //     if (item.roleId === 1) {
        //         //禁用
        //         setisUpdateDisabled(true)
        //     } else {
        //         // 不禁用
        //         setisUpdateDisabled(false)
        //     }
        //     updateForm.current.setFieldsValue(item)
        // }, 0)
        // setcurrent(item)
    }
    const UpdateFormOK = () => {
        // updateForm.current.validateFields().then(value => {
        //     // console.log(value)
        //     setisUpdateVisible(false)
        //
        //     setdataSource(dataSource.map(item => {
        //         if (item.id === current.id) {
        //             return {
        //                 ...item,
        //                 ...value,
        //                 role: roleList.filter(data => data.id === value.roleId)[0]
        //             }
        //         }
        //         return item
        //     }))
        //     setisUpdateDisabled(!isUpdateDisabled)
        //
        //     axios.patch(`http://localhost:8000/users/${current.id}`, value)
        // })
    }
    //----------------update end 删除按钮旁边的按钮---------------------------//
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
        },
        {
            title: '操作',
            key: 'action',
            render: (item) => {
                return <div>
                    <Button danger shape="circle" icon={<DeleteTwoTone twoToneColor="red"/>}
                            onClick={() => confirmMethod(item)} disabled={item.default}/>
                    <Button shape="circle" icon={<UnorderedListOutlined/>}
                            onClick={() => handleUpdate(item)} disabled={item.default}></Button>
                </div>
            }
        }
    ];
    return (
        <div>
            <Button type='primary' onClick={() => {
            }}>添加用户</Button>
            <Table
                columns={columns}
                pagination={{
                    position: ['bottomCenter'],
                }}
                dataSource={studentList}
                rowKey={studentList.key}
            />
        </div>
    );
}

export default StudentList;