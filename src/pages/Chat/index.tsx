import React from "react"
import { UserList } from "./components/userList/UserList"
import { io } from "socket.io-client"
import './index.less'
import Room from "./components/room/Room"

export const Chat: React.FC = () => {
    const cl = console.log;
    const socket = io("ws://localhost:3000", {
        extraHeaders: {
            authorization: "",
        },
        transports: ["websocket"],
    });

    socket.on('sendMsg', cl)

    const send = () => {
        socket.emit('hello', { data: "nihao" }, console.log)
    }

    return (
        <div className="p-1 h-full">
            <div className="bg-white flex h-full w-full rounded">
                <div className="min-w-[10em] shadow ">
                    <UserList />
                </div>
                <Room />
            </div>
        </div>
    )
}
