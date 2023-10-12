import React, {useEffect, useState} from 'react';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import { message, Upload } from 'antd';
import axios from "axios";
const getBase64 = (img, callback) => {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);
};
const beforeUpload = (file) => {
    console.log("beforeUpload-file:",file,"file.type",file.type)
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
    if (!isJpgOrPng) {
        message.error('You can only upload JPG/PNG file!');
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
        message.error('Image must smaller than 2MB!');
    }
    return isJpgOrPng && isLt2M;
};
function ImgUploadTest(props) {
    const [loading, setLoading] = useState(false);
    const [imageUrl, setImageUrl] = useState();

    useEffect(() => {
        axios.get("http://localhost:8080/user-manage/avatar")
            .then(res => {
                // console.log("获取的头像数据",res)
            setImageUrl("data:image/jpeg;base64,"+res.data)
        })
    }, [])
    const handleChange = (info) => {
        console.log("handleChange-info:",info)

        if (info.file.status === 'uploading') {
            setLoading(true);
            return;
        }
        if (info.file.status === 'done') {
            // Get this url from response in real world.
            getBase64(info.file.originFileObj, (url) => {
                console.log("info.file.originFileObj",info.file.originFileObj)
                // console.log("url",url)
                setLoading(false);
                setImageUrl(url);
            });
        }
        console.log("dbd头像jg",info.file.response)
    };
    const uploadButton = (
        <div>
            {loading ? <LoadingOutlined /> : <PlusOutlined />}
            <div
                style={{
                    marginTop: 8,
                }}
            >
                Upload
            </div>
        </div>
    );

    // const onPreview = async file => {
    //     console.log("onPreview:",file)
    //     let src = file.url;
    //     if (!src) {
    //         src = await new Promise(resolve => {
    //             const reader = new FileReader();
    //             reader.readAsDataURL(file.originFileObj);
    //             reader.onload = () => resolve(reader.result);
    //         });
    //     }
    //     const image = new Image();
    //     image.src = src;
    //     const imgWindow = window.open(src);
    //     imgWindow.document.write(image.outerHTML);
    // };


    return (
        <div>
            <Upload
                name="avatar"
                listType="picture-circle"
                className="avatar-uploader"
                showUploadList={false}
                // action="http://localhost:8080/user-manage/upload/avatar"
                action="http://localhost:8080/student-manage/imgQuery"
                beforeUpload={beforeUpload}
                onChange={handleChange}

            >
                {imageUrl ? (
                    <img
                        src={imageUrl}
                        alt="avatar"
                        style={{
                            width: '100%',
                        }}
                    />
                ) : (
                    uploadButton
                )}
            </Upload>
        </div>
    );
}

export default ImgUploadTest;