import React from "react";
import "./index.less";
import { usePersonStore } from "@//store";

const messageList = [
  {
    id: 1,
    user: {
      id: 1,
      username: "伏翎",
      email: "111@qq.com",
      avatar:
        "http://oss.linbaba.love/test/1.jpeg?Expires=1690931808&OSSAccessKeyId=TMP.3KeCCbj2U5TKxLh6qdUTfVotYLjTvQueYkqj2w5iio4cGj1jmzPVGGv7dbUniD5bpzYMhZJ2P2CeciNXeqeRGAtSN6HWRi&Signature=VQ7USpm4D4zNL%2BzsxZ1YkYpw7Eo%3D",
      slogan: "超市sunchaoxin",
    },
    content: "这是一段测试消息",
    type: "common",
  },
  {
    id: 2,
    user: {
      id: 1,
      username: "伏翎",
      email: "111@qq.com",
      avatar:
        "http://oss.linbaba.love/test/1.jpeg?Expires=1690931808&OSSAccessKeyId=TMP.3KeCCbj2U5TKxLh6qdUTfVotYLjTvQueYkqj2w5iio4cGj1jmzPVGGv7dbUniD5bpzYMhZJ2P2CeciNXeqeRGAtSN6HWRi&Signature=VQ7USpm4D4zNL%2BzsxZ1YkYpw7Eo%3D",
      slogan: "超市sunchaoxin",
    },
    content: "这是一段测试消息",
    type: "common",
  },
  {
    id: 3,
    user: {
      id: 1,
      username: "伏翎",
      email: "111@qq.com",
      avatar:
        "http://oss.linbaba.love/test/1.jpeg?Expires=1690931808&OSSAccessKeyId=TMP.3KeCCbj2U5TKxLh6qdUTfVotYLjTvQueYkqj2w5iio4cGj1jmzPVGGv7dbUniD5bpzYMhZJ2P2CeciNXeqeRGAtSN6HWRi&Signature=VQ7USpm4D4zNL%2BzsxZ1YkYpw7Eo%3D",
      slogan: "超市sunchaoxin",
    },
    content: "## 这是一段测试消息",
    type: "markdown",
  },
];
export default function Room() {
  const { user, setUser } = usePersonStore();
  return (
    <div className="flex-1 flex flex-col p-4">
      <div className="flex-1">
        {
          messageList.map(message => (
            <div className="flex">
              <div className="avatar">
                <img src={message.user.avatar} />
              </div>
            </div>
          ))
        }
      </div>
      <div className="min-h-[12em] border-t p-4 relative">
        <div className="editor" contentEditable={true} />
        <button
          onClick={() => {
            console.log(user);
          }}
          className="send-btn"
        >
          发送
        </button>
      </div>
    </div>
  );
}
