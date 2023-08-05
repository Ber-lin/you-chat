import { Modal } from "antd";
import React, { useState, useMemo } from "react";
import Register from "./components/Regist";
import LoginModal from "./components/Login";
import { api } from "../../../api";
import { usePersonStore } from "@//store";


function Login({
  isModalOpen,
  setIsModalOpen,
}: {
  isModalOpen: boolean;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const [isLogin, setIsLogin] = useState(true);
  const { setUser, setToken } = usePersonStore()
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const onFinish = async (form: any) => {
    console.log(form);
    let res
    if (isLogin) {
      res = await api.post('/login', form)
      setToken("Bearer " + res.data.token)
    } else {
      api.post('/registe', form).then(res => {
        setUser({ email: res.data.email });
      })

    }

    // console.log(res.data);
  };
  const onFinishFailed = (err: any) => {
    console.log(err);
  };
  return (
    <>
      <Modal
        title={isLogin ? "登录" : "注册"}
        open={isModalOpen}
        footer={null}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        {isLogin ? (
          <LoginModal
            setIsLogin={setIsLogin}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
          />
        ) : (
          <Register
            setIsLogin={setIsLogin}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
          />
        )}
      </Modal>
    </>
  );
}

export default Login;
