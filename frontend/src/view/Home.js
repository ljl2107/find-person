import React from 'react';
import {Carousel, FloatButton} from "antd";
// import bg1 from '../source/bg1.jpg'
import bg2 from '../source/bg2.jpg'
import bg3 from '../source/bg3.png'
import {Navigate} from "react-router-dom";
import { Typography } from 'antd';
const { Title } = Typography;
const bg1 = "D:\\Code\\Resource\\404.jpg";
const contentStyle = {
    // height:'160px',
    // movable: false,//是否可移动
    background: '#364d79',
    width: window.innerWidth,
    height: window.innerHeight,

};
const textStyle = {
    fontsize: '2.85em',
    textAlign: 'center',
    color: '#f0900d',
    position: 'fixed',
    top: '40%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    zIndex: 3,
    fontfamily: '/"KaiTi/", serif;'
    // position: 'fixed'

}
const textStyle2 = {
    fontsize: '3.85em',
    textAlign: 'center',
    color: '#f0900d',
    position: 'fixed',
    top: '45%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    zIndex: 3
    // position: 'fixed'

}
// 首页的欢迎页面 希望好看一点
function Home(props) {
    return (
        <>
            {/*<Title  style={textStyle}>欢迎来到软院找人！</Title>*/}
            {/*<Title underline={true} level={2} style={textStyle2}>点击图片进入系统</Title>*/}
            {/*<Carousel autoplay>*/}
            {/*    <div>*/}
            {/*        <a href={'/#/functionpage'}>*/}
            {/*            <img style={contentStyle} src={bg1}/>*/}
            {/*        </a>*/}
            {/*    </div>*/}
            {/*    <div>*/}
            {/*        <a href={'/#/functionpage'}>*/}
            {/*            <img style={contentStyle} src={bg2}/>*/}
            {/*        </a>*/}
            {/*    </div>*/}
            {/*    <div>*/}
            {/*        <a href={'/#/functionpage'}>*/}
            {/*            <img style={contentStyle} src={bg3}/>*/}
            {/*        </a>*/}
            {/*    </div>*/}
            {/*</Carousel>*/}


                        <img style={contentStyle} src={bg1}/>
        </>
    );
}

export default Home;