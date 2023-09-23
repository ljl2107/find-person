import React from 'react';
import {HashRouter, Route, Routes, Navigate} from 'react-router-dom'
import Login from "../view/Login";
import Home from "../view/Home";
import FunctionPage from "../view/FunctionPage";


function IndexRouter() {
    return (
        <HashRouter>
            <Routes>
                {/*登录页*/}
                <Route path={'/login'} element={<Login/>}></Route>
                {/*主页*/}
                <Route path={'/home'} element={<Home/>}></Route>
                <Route path={'/functionpage'} element={<FunctionPage/>}></Route>
                {/*筛选重定向 这里理论上是应该有令牌判断是否有的*/}
                <Route path='/*' element={1 == 1 ?
                    <Home/>:
                    <Navigate to="/login"/>}/>
            </Routes>
        </HashRouter>
    );
}

export default IndexRouter;