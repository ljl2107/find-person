import React from 'react';
import {Button, Result} from "antd";
import {SmileOutlined} from "@ant-design/icons";

function About(props) {
    return (
        <div>
            <Result
                icon={<SmileOutlined />}
                title="欢迎使用软院找人系统"
                subTitle={"开发者：我也需要被治愈"}
            />
        </div>
    );
}

export default About;