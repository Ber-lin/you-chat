import React from "react"
import { UserList } from "./components/UserList"

export const Chat: React.FC = () => {
    return (
        <div className="flex min-h-screen bg-gray-50 ">
            <div className="min-w-[10em] shadow">
                <UserList />
            </div>
            <div className="flex-1 flex flex-col">
                <div className="flex-1"></div>
                <div className="min-h-[12em] border-t"></div>
            </div>
        </div>
    )
}
