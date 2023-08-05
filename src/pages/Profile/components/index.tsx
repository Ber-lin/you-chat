import { Card, Avatar } from 'antd';
import Meta from 'antd/es/card/Meta';
import { IUser } from '@/types/user';
import PorfileCardCover from './PorfileCover';

interface IProps {
    user: IUser
}

export default ({ user }: IProps) => {
    return (<>
        <Card
            className='overflow-hidden flex flex-col h-full'
            cover={<PorfileCardCover url={user.header} />}
        >
            <div className='flex-1'>
                <Meta
                    avatar={<Avatar size={'large'} src={user.avatar} />}
                    title={user.userName}
                    description={user.slogan ?? "这里什么都没有"}
                />
            </div>
        </Card></>)
}