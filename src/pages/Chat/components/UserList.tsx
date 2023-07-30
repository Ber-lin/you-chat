import React, { useState } from "react";

interface IProps {
    className?: string;
}

interface IUser {
    name: string;
}

const UserCard: React.FC<{ user: IUser } & IProps> = ({ user, className }) => {
    return (
        <div className={className + " " + "p-1"}>
            <button className="w-full bg-gray-300 p-2 rounded">
                {user.name}
            </button>
        </div>
    )
}

export const UserList: React.FC<IProps> = ({ className }) => {
    const userList: IUser[] = [
        {
            name: "user1"
        }, {
            name: "user2"
        }
    ]
    return (
        <div className={className}>
            <ul>
                {userList.map(i => {
                    return <UserCard user={i} key={i.name} />
                })}
            </ul>
        </div>
    )
}