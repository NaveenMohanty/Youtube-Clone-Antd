import React from "react";
import { Layout } from "antd";
import CardBox from "./CardBox";
import AdsBanner from "./AdsBanner";
import { ContextConsumer } from "../../context";

const { Content } = Layout;

const Index = () => {
  const { youtubeData } = ContextConsumer();
  return (
    <Content
      className="site-layout-background"
      style={{
        padding: "70px 30px",
        overflowY: "scroll",
      }}
    >
      <AdsBanner />
      <div
        style={{
          display: "grid",
          gridColumnGap: "10px",
          gridRowGap: "10px",
          gridTemplateColumns: "auto auto auto auto",
        }}
      >
        {youtubeData.map((data, idx) => (
          <CardBox videoData={data} idx={data.code} />
        ))}
      </div>
    </Content>
  );
};

export default Index;
