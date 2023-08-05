import { useContext, useEffect } from 'react';
import { ApiContext } from '@//context/ApiContext';
import { usePersonStore } from '@//store';
import ProfileCard from './components/index.tsx';
import { IUser } from '@/types/user';

export default () => {
    const { token, setUser, user } = usePersonStore();
    const api = useContext(ApiContext);
    useEffect(() => {
        api?.get('/user', { headers: { Authorization: token } }).then(res => {
            setUser({ ...res.data })
        })
    }, [])

    return (
        <div className='w-full h-full bg-white rounded-lg'>
            <div className='w-full h-full p-4'>
                <ProfileCard user={user as IUser} />
            </div>
        </div>
    )
}