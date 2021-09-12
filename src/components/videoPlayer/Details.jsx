import React, { createElement, useState } from "react";
import { Comment, Tooltip, Avatar } from "antd";
import { ContextConsumer } from "../../context";
import {
  DislikeOutlined,
  LikeOutlined,
  DislikeFilled,
  LikeFilled,
} from "@ant-design/icons";

const Demo = (props) => {
  const { isDark } = ContextConsumer();
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);
  const [action, setAction] = useState(null);

  const like = () => {
    setLikes(1);
    setDislikes(0);
    setAction("liked");
  };

  const dislike = () => {
    setLikes(0);
    setDislikes(1);
    setAction("disliked");
  };

  const actions = [
    <Tooltip key="comment-basic-like" title="Like">
      <span onClick={like}>
        {createElement(action === "liked" ? LikeFilled : LikeOutlined)}
        <span className="comment-action">{likes}</span>
      </span>
    </Tooltip>,
    <Tooltip key="comment-basic-dislike" title="Dislike">
      <span onClick={dislike}>
        {React.createElement(
          action === "disliked" ? DislikeFilled : DislikeOutlined
        )}
        <span className="comment-action">{dislikes}</span>
      </span>
    </Tooltip>,
    <span key="comment-basic-reply-to">Reply to</span>,
  ];

  return (
    <Comment
      style={{
        maxWidth: 853,
        color: isDark ? "white" : "black",
        background: isDark ? "rgb(44,58,100)" : "white",
        padding: "10px",
      }}
      actions={actions}
      author={
        props.videoDetail && props.videoDetail.author_name ? (
          <a>{props.videoDetail.author_name}</a>
        ) : (
          <a>Han Solo</a>
        )
      }
      avatar={
        <Avatar
          src={
            props.videoDetail && props.videoDetail.thumbnail_url
              ? props.videoDetail.thumbnail_url
              : "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
          }
          alt="Han Solo"
        />
      }
      content={
        props.videoDetail && props.videoDetail.title ? (
          <p>{props.videoDetail.title}</p>
        ) : (
          <p>Han Solo</p>
        )
      }
    />
  );
};

export default Demo;
