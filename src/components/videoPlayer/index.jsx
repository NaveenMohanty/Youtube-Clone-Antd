import React, { useEffect, useState } from "react";
import { Layout } from "antd";
import { ContextConsumer } from "../../context";
import history from "../../utils/createHistory";
import Comments from "./Comments";
import Details from "./Details";
import SideCard from "./SideCard";

const { Content } = Layout;

const Index = (props) => {
  const [iframe, setIframe] = useState("");
  const [videoDetail, setVideoDetail] = useState(null);
  const { isDark } = ContextConsumer();
  const { youtubeData, getdata, setHistorydata, historydata } =
    ContextConsumer();
  const { index } = props.match.params;
  useEffect(() => {
    if (
      typeof index &&
      youtubeData.length &&
      youtubeData[index] &&
      youtubeData[index].html
    ) {
      let newStr = youtubeData[index].html.replace(
        'width="200"',
        'width="853"'
      );
      setIframe(newStr.replace('height="113"', 'height="480"'));
      setVideoDetail({ ...youtubeData[index] });
      setHistorydata([...historydata, index]);
    } else {
      getdata();
    }
  }, [youtubeData, index]);

  return (
    <Content
      className="site-layout-background"
      style={{
        display: "flex",
        padding: "70px 30px",
        overflowY: "scroll",
      }}
    >
      <div>
        <div dangerouslySetInnerHTML={{ __html: iframe }}></div>
        <Details videoDetail={videoDetail} />
        <Comments isDark={isDark} />
      </div>
      <div style={{ width: "100%" }}>
        {youtubeData.map((data, idx) => (
          <SideCard data={data} parent="videoPlayer" index={idx} />
        ))}
      </div>
    </Content>
  );
};

export default Index;
