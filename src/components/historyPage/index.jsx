import React, { useEffect } from "react";
import { Layout, Empty } from "antd";
import { ContextConsumer } from "../../context";
import SideCard from "../videoPlayer/SideCard";

const { Content } = Layout;

const HistoryPage = () => {
  const { historydata, youtubeData, getdata, isDark } = ContextConsumer();
  useEffect(() => {
    if (!youtubeData && !youtubeData.length) getdata();
  }, [historydata]);
  return (
    <Content
      className="site-layout-background"
      style={{
        display: "flex",
        padding: "70px 30px",
        overflowY: "scroll",
      }}
    >
      <div style={{ width: "100%", height: "90vh" }}>
        {youtubeData &&
        youtubeData.length &&
        historydata &&
        historydata.length ? (
          historydata.map((data, idx) => (
            <SideCard
              data={youtubeData[data] ? youtubeData[data] : null}
              parent="history"
              index={data}
            />
          ))
        ) : (
          <Empty
            style={{ color: isDark ? "white" : "black" }}
            image={Empty.PRESENTED_IMAGE_SIMPLE}
          />
        )}
      </div>
    </Content>
  );
};

export default HistoryPage;
