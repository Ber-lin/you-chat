import React, { useState } from "react";
import { Breadcrumb, Layout, Menu, MenuProps, theme } from "antd";
import { MailOutlined } from "@ant-design/icons";
import "./index.less";
import { Outlet, useNavigate } from "react-router-dom";
import { routesArr } from "@/routes/index";
import Login from "../Login";

const { Header, Content, Footer } = Layout;

type MenuItem = Required<MenuProps>["items"][number];
function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: "group"
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}

const items: MenuProps["items"] = [
  getItem("Navigation One", "/", <MailOutlined />),

  getItem("chat", "/chat", <MailOutlined />),

  { type: "divider" },

  getItem("login", "/login", <MailOutlined />),

  getItem("no", "/sub4", <MailOutlined />),
];

const Home: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);


  const navigate = useNavigate();
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const onClick: MenuProps["onClick"] = ({ key }) => {
    navigate(key);
  };
  return (
    <>
      <Layout className="layout">
        <Header style={{ display: "flex", alignItems: "center" }}>
          <div className="demo-logo" />
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={["2"]}
            items={items}
            onClick={onClick}
          />
          <span className="text-light-50" onClick={()=>setIsModalOpen(true)}>登录</span>
        </Header>
        <Content style={{ padding: "0 50px" }}>
          <Breadcrumb
            style={{ margin: "16px 0" }}
            items={[
              {
                title: "Home",
              },
              {
                title: <a href="">Application Center</a>,
              },
              {
                title: <a href="">Application List</a>,
              },
              {
                title: "An Application",
              },
            ]}
          ></Breadcrumb>
          <div
            className="site-layout-content"
            style={{
              background: "#e5e7eb",
              margin: "24px 16px",
              padding: 12,
              height: "80vh",
              borderRadius: "8px",
            }}
          >
            <Outlet></Outlet>
          </div>
        </Content>
      </Layout>
      <Login isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
    </>
  );
};

export default Home;
