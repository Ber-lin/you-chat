import React, { useState } from "react";
import { usePersonStore } from "@/store/index";

interface IProps {
  className?: string;
}

interface IUser {
  name: string;
}

const UserCard: React.FC<{ user: IUser } & IProps> = ({ user, className }) => {
  return (
    <div className={className + " " + "p-1"}>
      <button className="w-full bg-gray-300 p-2 rounded">{user.name}</button>
    </div>
  );
};

export const UserList: React.FC<IProps> = ({ className }) => {
  const { user, setUser } = usePersonStore();
  const userList: IUser[] = [
    {
      name: "user1",
    },
    {
      name: "user2",
    },
  ];
  return (
    <div className={className}>
      <ul>
        {userList.map((i, index) => {
          return (
            <div
              onClick={() =>
                setUser({
                  uid: String(index),
                  email: "1529",
                  phone: "150450",
                  userName: i.name,
                  avatar: "https://",
                  slogan: "sunchaoxin233",
                })
              }
            >
              <UserCard user={i} key={i.name} />
            </div>
          );
        })}
      </ul>
    </div>
  );
};
