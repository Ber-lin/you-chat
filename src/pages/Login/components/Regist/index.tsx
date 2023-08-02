import React from "react";
import { Button, Col, Form, Input, Row } from "antd";
import { useForm } from "antd/es/form/Form";
import { api } from "../../../../../api";


export default function Register({
  setIsLogin,
  onFinish,
  onFinishFailed,
}: {
  setIsLogin: React.Dispatch<React.SetStateAction<boolean>>;
  onFinish: (form: any) => void;
  onFinishFailed: (err: any) => void;
}) {
  const form=useForm()[0]

  const sendEmail=async()=>{
    const email=form.getFieldValue('email')
    const res=await api.post('/registe/email',{email})
   
  }
  return (
    <div>
      <Form
        name="basic"
        form={form}
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
          rules={[{required:true, type: 'email',message: `${form.getFieldValue('email')}不是一个合法的邮箱格式!!!`  }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="UserName"

          name="userName"
          rules={[{required:true ,message: `整个用户名啊!!!`  }]}
        >
          <Input />
        </Form.Item>
        <Form.Item label="Captcha" extra="We must make sure that your are a human.">
        <Row gutter={8}>
          <Col span={12}>
            <Form.Item
              name="valicode"
              noStyle
              rules={[{ required: true, message: 'Please input the captcha you got!' }]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Button onClick={sendEmail}>Get captcha</Button>
          </Col>
        </Row>
      </Form.Item>
        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: "请输入密码!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item>
          <span className="login-form-forgot" onClick={() => setIsLogin(true)}>
           Back to Login
          </span>
        </Form.Item>
        <Form.Item wrapperCol={{ offset: 8, span: 8 }}>
          <Button type="primary" htmlType="submit">
            注册
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}
