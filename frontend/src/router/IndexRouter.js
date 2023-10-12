import React from 'react';
import {HashRouter, Route, Routes, Navigate} from 'react-router-dom'
import Login from "../view/Login";
import Home from "../view/Home";
import FunctionPage from "../view/FunctionPage";
import ImgUploadTest from "../view/ImgUploadTest";


function IndexRouter() {
    return (
        <HashRouter>
            <Routes>
                {/*登录页*/}
                <Route path={'/login'} element={<Login/>}></Route>
                {/*主页*/}
                {/*<Route path={'/home'} element={<Home/>}></Route>*/}
                <Route path={'/imgupload'} element={<ImgUploadTest/>}></Route>
                {/*筛选重定向 这里理论上是应该有令牌判断是否有的*/}
                <Route path='/*' element={localStorage.getItem("token") ?
                    <FunctionPage/>:
                    <Navigate to="/login"/>}/>
            </Routes>
        </HashRouter>
    );
}

export default IndexRouter;