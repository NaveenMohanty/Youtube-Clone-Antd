import React from "react";
import { Card, Avatar } from "antd";
import history from "../../utils/createHistory";

const { Meta } = Card;

const CardBox = (props) => {
  return (
    <Card
      onClick={() => history.push(`/playVideo/${props.idx}`)}
      style={{ maxWidth: 290, cursor: "pointer" }}
      cover={
        <img
          style={{ maxHeight: 200 }}
          alt={props.videoData.title}
          width="290px"
          src={props.videoData.thumbnail_url}
        />
      }
    >
      <Meta
        avatar={<Avatar src={props.videoData.thumbnail_url} />}
        title={props.videoData.author_name}
        description={props.videoData.title}
      />
    </Card>
  );
};
export default CardBox;
