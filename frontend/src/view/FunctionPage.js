import React from 'react';
import { Layout } from 'antd';
import SideMenu from "../components/sndbox/SideMenu";
import TopHeader from "../components/sndbox/TopHeader";
// css
import '../source/css/FunctionPage.css';
import ContentRouter from "../components/sndbox/ContentRouter";
const {Content } = Layout;
// 功能性页面 计划包括查找，插入等功能
function FunctionPage(props) {
    return (
        <Layout>
            {/*边栏*/}
            <SideMenu></SideMenu>
            <Layout className="site-layout">
               <TopHeader></TopHeader>
                <Content className="site-layout-background"
                    style={{
                        margin: '24px 16px',
                        padding: 24,
                        minHeight: 280,
                        overflow: "auto"
                    }}
                >
                    <ContentRouter></ContentRouter>
                </Content>
            </Layout>
        </Layout>
    );
}

export default FunctionPage;