import React from "react";
import "antd/dist/antd.css";
import { Card } from "antd";
import { ContextConsumer } from "../../context";
import history from "../../utils/createHistory";

const { Meta } = Card;

const SideCard = (props) => {
  const { isDark } = ContextConsumer();
  return (
    <Card
      onClick={() => history.push(`/playVideo/${props.index}`)}
      theme="dark"
      hoverable
      style={{
        display: "flex",
        width: props.parent == "videoPlayer" ? 340 : "50%",
        margin: "10px 15px",
        padding: "0px",
        background: isDark ? "#2D3A60" : "#FFFFFF",
        borderColor: isDark ? "#2D3A60" : "#FFFFFF",
        WebkitTextFillColor: isDark ? "#FFFFFF" : "",
      }}
      cover={
        <img
          alt="example"
          style={{ width: "210px", heigh: "100px" }}
          src={props.data.thumbnail_url}
        />
      }
    >
      <Meta title={props.data.author_name} description={props.data.title} />
    </Card>
  );
};

export default SideCard;
