import React, {useEffect, useRef, useState} from 'react';
import axios from "axios";
import {Button, Radio, Modal, Space, Table, Tag, message} from "antd";
import {DeleteTwoTone, ExclamationCircleOutlined, UnorderedListOutlined} from "@ant-design/icons";
import StudentForm from "../../stu-manage/StudentForm";

const { confirm } = Modal;

function StudentList(props) {
    const [studentList, setstudentList] = useState([])
    const [isAddVisible, setisAddVisible] = useState(false)

    const addForm = useRef(null)

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
        axios.delete(`http://localhost:8080/student-manage/delete`,
            {
                params:{
                    sid:item.sid
                }
            })
            .then(res => {
                console.log("删除",res)
                if (res.data==1){
                    message.success("删除成功！",5)
                }else {
                    message.error("删除失败！",5);
                }
            })
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
                    {/*<Button shape="circle" icon={<UnorderedListOutlined/>}*/}
                    {/*        onClick={() => handleUpdate(item)} disabled={item.default}></Button>*/}
                </div>
            }
        }
    ];
    const addFormOK = (item) => {
        console.log("输入：",item)

        addForm.current.validateFields().then(value => {

            // setisAddVisible(false)
            //
            addForm.current.resetFields()//重置字段到init
            console.log(value.email,value.username,value.mobile,value.classname,value.gender,value.sid)
            //poSt到后端，生成id 再设置datasource ,方便后面的删除和更新
            axios.post(`http://localhost:8080/student-manage/add`, {
                classname: value.classname,
                email: value.email,
                gender: value.gender,
                mobile: value.mobile,
                sid: value.sid,
                name: value.username
            }).then(res => {
                console.log(res)
                // setstudentList([...studentList, {
                //     ...res.data,
                //     // role: roleList.filter(item => item.id === value.roleId)[0]
                // }])
                if (res.data==1){
                    message.success("成功插入")
                }else {
                    message.error("插入失败")
                }
            }).catch(err => {
                message.error("插入失败")
                console.log(err.data)
            })
        }).catch(err => {
            console.log(err)
        })
    }
    return (
        <div>
            <Button type='primary' onClick={() => {
                setisAddVisible(true)
            }}>添加用户</Button>
            <Table
                columns={columns}
                pagination={{
                    position: ['bottomCenter'],
                }}
                dataSource={studentList}
                rowKey={studentList.key}
            />

            <Modal
                open={isAddVisible}
                title="添加学生"
                okText="确定"
                cancelText="取消"
                onCancel={() => {
                    setisAddVisible(false)
                }}
                onOk={() => addFormOK()}
            >
                <StudentForm ref={addForm}/>
            </Modal>
        </div>
    );
}

export default StudentList;