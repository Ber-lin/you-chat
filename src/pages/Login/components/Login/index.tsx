import React from "react";
import { Button, Form, Input } from "antd";
import { usePersonStore } from "@//store";

export default function LoginModal({
  setIsLogin,
  onFinish,
  onFinishFailed,
}: {
  setIsLogin: React.Dispatch<React.SetStateAction<boolean>>;
  onFinish: (form: any) => void;
  onFinishFailed: (err: any) => void;
}) {
  const {user}=usePersonStore()

  console.log(user);
  return (
    <div>
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Email"
          name="email"
          rules={[{ required: true, message: "请输入用户名!" }]}
        >
          <Input defaultValue={user.email}/>
        </Form.Item>
        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: "请输入密码!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item>
          <span className="login-form-forgot" onClick={() => setIsLogin(false)}>
            Forgot password
          </span>
        </Form.Item>
        <Form.Item wrapperCol={{ offset: 8, span: 8 }}>
          <Button type="primary" htmlType="submit">
            登录
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}
