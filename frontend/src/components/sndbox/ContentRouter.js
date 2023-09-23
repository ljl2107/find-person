import React, {useEffect, useState} from 'react';
import Home from "../../view/Home";
import {Navigate, Route, Routes} from "react-router-dom";
import {Spin} from "antd";
import NoPermission from "../../view/NoPermission";
import axios from "axios";

// ----------------------------------------------------------------
// --------------------------Routermap start 后续添加也很方便---------------------------------------
const LocalRouterMap ={
    "/home":<Home/>,
}
// --------------------------Routermap end 后续添加也很方便---------------------------------------
// --------------------------start---------------------------------------
function ContentRouter(props) {
    console.log("props.isLoading",props.isLoading)
    const {role:{rights}} = JSON.parse(localStorage.getItem("token"))
    const [BackRouteList,setRouteList] =  useState([])
    useEffect(()=>{
        Promise.all([
            axios.get("http://localhost:8000/rights"),
            axios.get("http://localhost:8000/children"),
        ]).then(res=>{
            setRouteList([...res[0].data,...res[1].data])
            // console.log(BackRouteList)
        })
    },[])
    // --------------------------验证 start 防止低权限通过路由检索查看高权限---------------------------------------
    const checkRoute = (item) =>{
        return LocalRouterMap[item.key] && (item.pagepermisson || item.routepermisson)
    }

    const checkUserPermission = (item) =>{
        return rights.includes(item.key)
    }
    // --------------------------验证 end---------------------------------------
// --------------------------return---------------------------------------
    return (
        <Spin size="large" spinning={props.isLoading}>
            <Routes>
                {

                    BackRouteList.map((item) => {
                            if(checkRoute(item) && checkUserPermission(item)){
                                return <Route
                                    path={item.key}
                                    key={item.key}
                                    element={LocalRouterMap[item.key]}
                                />
                            }else{
                                return <Route key={item.key} element={<NoPermission/>}></Route>
                            }

                        }

                    )
                }

                <Route exact path='/' element={<Navigate path="/" to="/home" />}></Route>
                {
                    BackRouteList.length>0 && <Route path="*" element={<NoPermission />} />
                }
            </Routes>
        </Spin>
    );
}

export default ContentRouter;