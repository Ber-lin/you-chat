import React from "react"
import { UserList } from "./components/UserList"
import { io } from "socket.io-client/debug"

export const Chat: React.FC = () => {
    const cl = console.log;
    const socket = io("ws://localhost:3000", {
        extraHeaders: {
            authorization: "",
        },
        transports: ["websocket"],
    });

    socket.on('test', cl)

    const send = () => {
        socket.emit('hello', { data: "nihao" }, console.log)
    }

    return (
        <div className="flex min-h-screen bg-gray-50 ">
            <div className="min-w-[10em] shadow">
                <UserList />
            </div>
            <div className="flex-1 flex flex-col p-4">
                <div className="flex-1">
                    <button className="border rounded p-2" onClick={send}>Click</button>
                </div>
                <div className="min-h-[12em] border-t"></div>
            </div>
        </div>
    )
}
