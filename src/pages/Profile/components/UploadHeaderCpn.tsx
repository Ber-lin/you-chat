import { ApiContext } from '@//context/ApiContext';
import { usePersonStore } from '@//store';
import { InboxOutlined } from '@ant-design/icons';
import type { UploadProps } from 'antd';
import { message, Upload } from 'antd';
import { AxiosRequestConfig } from 'axios';
import { useContext } from 'react';

export default ({ className }: { className?: string }) => {
    const { token, setUser } = usePersonStore();
    const api = useContext(ApiContext);
    const { Dragger } = Upload;

    const props: UploadProps = {
        name: 'header',
        multiple: false,
        action: '/api-v1/user/header',
        method: 'post',
        accept: '.jpg, .jpeg, .png, .webp, .svg',
        maxCount: 1,
        withCredentials: true,
        showUploadList: false,
        progress: {
            strokeColor: {
                '0%': '#108ee9',
                '100%': '#87d068',
            },
            size: 3,
            format: (percent) => percent && `${parseFloat(percent.toFixed(2))}%`,
        },
        customRequest: async (arg) => {
            const form = new FormData();
            form.append('header', arg.file);
            const config: AxiosRequestConfig = { headers: { 'Authorization': token } }
            const res = await api?.post('/user/header', form, config);
            console.log(res);
            setUser(res?.data);
            if ((res as unknown as { code: number }).code === 0) {
                message.success(`文件上传成功.`);
            }
        }
    };
    return (
        <div className={className + ' w-full h-full'}>
            <Dragger {...props} className={'w-full '}>
                <p className="ant-upload-drag-icon">
                    <InboxOutlined />
                </p>
                <p className="ant-upload-text">点击或拖动文件至此区域上传</p>
            </Dragger>
        </div>
    )
};