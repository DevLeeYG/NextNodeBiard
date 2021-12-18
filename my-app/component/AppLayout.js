import React, { useState } from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import "antd/dist/antd.css";
import { Menu, Input, Row, Col } from "antd";
import UserProfile from "../component/UserProfile";
import LoginForm from "../component/LoginForm";
const AppLayout = ({ children }) => {
  const [isLogin, setIsLogin] = useState(false);
  return (
    <div>
      <Menu mode="horizontal">
        <Menu.Item>
          <Link href="/">
            <a>노드버드</a>
          </Link>
        </Menu.Item>
        <Menu.Item>
          <Link href="/profile">
            <a>프로필</a>
          </Link>
        </Menu.Item>
        <Menu.Item>
          <Input.Search style={{ verticalAlign: "middle" }} enterButton />
        </Menu.Item>
        <Menu.Item>
          <Link href="/signup">
            <a>회원가입</a>
          </Link>
        </Menu.Item>
      </Menu>
      <Row gutter={8}>
        <Col xs={24} md={6}>
          {isLogin ? <UserProfile /> : <LoginForm />}
        </Col>
        <Col xs={24} md={12}>
          {children}
        </Col>
        <Col xs={24} md={6}>
          <a
            target="_blank"
            rel="norefferrer noopener"
            href="https://gearlog.ga/"
          >
            gearlog
          </a>
        </Col>
      </Row>
    </div>
  );
};
AppLayout.PropTypes = {
  children: PropTypes.node.isRequired,
};

export default AppLayout;
