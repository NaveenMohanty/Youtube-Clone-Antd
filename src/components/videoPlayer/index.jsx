import React, { useEffect, useState } from "react";
import { Layout } from "antd";
import { ContextConsumer } from "../../context";
import history from "../../utils/createHistory";

const { Content } = Layout;

const Index = (props) => {
  const [iframe, setIframe] = useState("");
  const { youtubeData } = ContextConsumer();
  useEffect(() => {
    let index = String(props.match.params.index);
    if (
      typeof index &&
      youtubeData.length &&
      youtubeData[index] &&
      youtubeData[index].html
    ) {
      setIframe(index);
    }
  }, []);

  return (
    <Content
      className="site-layout-background"
      style={{
        padding: "70px 30px",
        overflowY: "scroll",
      }}
    >
      <iframe
        width="853"
        height="480"
        src={`https://www.youtube.com/watch?v=${iframe}`}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
      <iframe
        width="853"
        height="480"
        src="https://www.youtube.com/embed/VJj-ItImbt4"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </Content>
  );
};

export default Index;
