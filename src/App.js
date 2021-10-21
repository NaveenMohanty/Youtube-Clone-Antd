import React, { useState } from "react";
import { Layout, Menu } from "antd";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  HomeFilled,
  HistoryOutlined,
  UploadOutlined,
} from "@ant-design/icons";
import logoDark from "./asset/images/youtube-logo.png";
import logoLight from "./asset/images/youtube-light.png";
import SearchInput from "./components/SearchInput";
import { Row, Col } from "antd";
import { Avatar } from "antd";
import { Switch } from "antd";
import Routes from "./routes";
import { ContextConsumer } from "./context";
import history from "./utils/createHistory";

const { Header, Sider } = Layout;

let styles = {
  menuContainer: {
    display: "flex",
    width: "75px",
    justifyContent: "center",
    height: "100%",
    alignItems: "center",
    // alignItems: "center",
    
  },
  menuIcon: {
    fontSize: "24px",
  },
  header: {
    display: "flex",
    flexDirection: "row",
    padding: 0,
    zIndex: 2,
  },
  slider: { width: "100%", paddingTop: "60px" },
  col3: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
  },
  col4: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
  },
};

function App() {
  const [collapsed, setCollapsed] = useState(true);
  const { isDark, setIsdark } = ContextConsumer();

  const toggle = () => {
    setCollapsed(!collapsed);
  };

  const onThemeChange = (e, v) => {
    setIsdark(e);
  };

  return (
    <Layout className="site-layout" style={{ height: "100vh" }}>
      <Layout className="site-layout">
        <Header
          className="site-layout-background"
          style={{
            ...styles.header,
            background: isDark ? "rgb(0,21,41)" : "#FFFFFF",
          }}
        >
          <Row style={{ width: "100%" }}>
            <Col span={2}>
              <div style={styles.menuContainer}>
                {collapsed ? (
                  <MenuUnfoldOutlined
                    style={{
                      ...styles.menuIcon,
                      color: isDark ? "white" : "black",
                    }}
                    onClick={toggle}
                  />
                ) : (
                  <MenuFoldOutlined
                    style={{
                      ...styles.menuIcon,
                      color: isDark ? "white" : "black",
                    }}
                    onClick={toggle}
                  />
                )}
              </div>
            </Col>
            <Col span={2}>
              <img
                src={isDark ? logoDark : logoLight}
                alt="youtube"
                width="150px"
                height={isDark ? "40px" : "30px"}
              />
            </Col>
            <Col span={15} style={styles.col3}>
              <SearchInput />
            </Col>
            <Col span={4} style={styles.col4}>
              <Switch
                checkedChildren="Dark"
                unCheckedChildren="Light"
                checked={isDark}
                onChange={onThemeChange}
              />
              <Avatar
                size="large"
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
              />
            </Col>
          </Row>
        </Header>
      </Layout>
      <Layout
        style={{ background: isDark ? "#2C3A47" : "#c9c4c3" }}
        className="site-layout"
      >
        <Sider
          trigger={null}
          collapsible
          collapsed={collapsed}
          style={styles.slider}
          theme={isDark ? "dark" : "light"}
        >
          <Menu
            theme={isDark ? "dark" : "light"}
            mode="inline"
            defaultSelectedKeys={["1"]}
          >
            <Menu.Item
              onClick={() => history.push("/")}
              key="1"
              icon={<HomeFilled />}
            >
              Home
            </Menu.Item>
            <Menu.Item
              onClick={() => history.push("/HistoryPage")}
              key="2"
              icon={<HistoryOutlined />}
            >
              History
            </Menu.Item>
            <Menu.Item
              onClick={() => history.push("/UploadVideo")}
              key="3"
              icon={<UploadOutlined />}
            >
              Upload
            </Menu.Item>
          </Menu>
        </Sider>
        <Routes />
      </Layout>
    </Layout>
  );
}

export default App;
