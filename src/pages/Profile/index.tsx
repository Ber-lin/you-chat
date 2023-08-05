import { Card, Avatar } from 'antd';
import Meta from 'antd/es/card/Meta';
import { SettingOutlined, EditOutlined, EllipsisOutlined } from "@ant-design/icons";
import './index.less';
import { useContext, useEffect, useState } from 'react';
import { ApiContext } from '@//context/ApiContext';
import { usePersonStore } from '@//store';

export default () => {
    // const user = useState();
    const { token, setUser, user } = usePersonStore();
    const api = useContext(ApiContext);
    useEffect(() => {
        api?.get('/user', { headers: { Authorization: "Bearer " + token } }).then(res => {
            setUser({ ...res.data })
        })
    }, [])

    return (
        <div className='w-full h-full bg-white rounded-lg'>
            <div className='w-full h-full flex p-4'>
                <div className='min-w-[10em]'>
                    <Card
                        style={{ width: 300 }}
                        cover={
                            <img
                                alt="avatar"
                                src={user.avatar}
                            />
                        }
                        actions={[
                            <SettingOutlined key="setting" />,
                            <EditOutlined key="edit" />,
                            <EllipsisOutlined key="ellipsis" />,
                        ]}
                    >
                        <Meta
                            avatar={<Avatar src={user.avatar} />}
                            title={user.userName}
                            description={user.slogan}
                        />
                    </Card>
                </div>
            </div>
        </div>
    )
}