import React, {useEffect, useState} from 'react';
import Home from "../../view/Home";
import {Navigate, Route, Routes} from "react-router-dom";
import {message, Spin} from "antd";
import NoPermission from "../../view/NoPermission";
import axios from "axios";
import StudentFind from "./student-manage/StudentFind";
import StudentList from "./student-manage/StudentList";
import About from "../../view/About";

// ----------------------------------------------------------------
// --------------------------Routermap start 后续添加也很方便---------------------------------------
const LocalRouterMap ={
    '/student-manage/find':<StudentFind/>,
    '/student-manage/list':<StudentList/>,
    '/about':<About/>
}
// --------------------------Routermap end 后续添加也很方便---------------------------------------
// --------------------------start---------------------------------------
function ContentRouter(props) {
    // console.log("props.isLoading",props.isLoading)
    // const {role:{rights}} = JSON.parse(localStorage.getItem("token"))
    const [BackRouteList,setRouteList] =  useState([])
    useEffect(()=>{
            axios.get("http://localhost:8080/sidemenu")
                .then(res=>{
                    // console.log("...res.data",...res.data)
                    // console.log("[...res.data]",[...res.data])
            setRouteList([...res.data])
            console.log("BackRouteList",BackRouteList)
        })
    },[])
    // --------------------------验证 start 防止低权限通过路由检索查看高权限---------------------------------------
    const checkRoute = (item) =>{
        return true;
        // return LocalRouterMap[item.key] && (item.pagepermisson || item.routepermisson)
    }

    const checkUserPermission = (item) =>{
        // return rights.includes(item.key)
        return true;
    }
    // --------------------------验证 end---------------------------------------
// --------------------------return---------------------------------------
    return (
        // <Spin size="large" spinning={props.isLoading}>
            <Routes>
                {

                    BackRouteList.map((item) => {
                            // if(checkRoute(item) && checkUserPermission(item)){
                                return <Route
                                    path={item.key}
                                    key={item.key}
                                    element={LocalRouterMap[item.key]}
                                />
                            // }else{
                            //     return <Route key={item.key} element={<NoPermission/>}></Route>
                            // }

                        }

                    )
                }

                {/*<Route exact path='/' element={<Navigate path="/" to="/home" />}></Route>*/}
                {
                    <Route path="*" element={<NoPermission />} />
                }
            </Routes>
        // </Spin>
    );
}

export default ContentRouter;