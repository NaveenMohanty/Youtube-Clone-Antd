import React from "react";
import {
  Form,
  Input,
  InputNumber,
  Button,
  Layout,
  Upload,
  message,
  Row,
} from "antd";

import { InboxOutlined } from "@ant-design/icons";

const { Dragger } = Upload;
const { Content } = Layout;
const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
/* eslint-disable no-template-curly-in-string */

const validateMessages = {
  required: "${label} is required!",
  types: {
    email: "${label} is not a valid email!",
    number: "${label} is not a valid number!",
  },
  number: {
    range: "${label} must be between ${min} and ${max}",
  },
};
/* eslint-enable no-template-curly-in-string */

const UploadVideo = () => {
  const onFinish = (values) => {
    console.log(values);
  };
  const props = {
    name: "file",
    multiple: false,
    action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
    onChange(info) {
      const { status } = info.file;
      if (status !== "uploading") {
        console.log(info.file, info.fileList);
      }
      if (status === "done") {
        message.success(`${info.file.name} file uploaded successfully.`);
      } else if (status === "error") {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
    onDrop(e) {
      console.log("Dropped files", e.dataTransfer.files);
    },
  };
  return (
    <Content
      className="site-layout-background"
      style={{
        display: "flex",
        padding: "70px 30px",
        justifyContent: "center",
        overflowY: "scroll",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "50%",
          height: "93vh",
        }}
      >
        <Dragger {...props}>
          <p className="ant-upload-drag-icon">
            <InboxOutlined />
          </p>
          <p className="ant-upload-text">
            Click or drag file to this area to upload
          </p>
          <p className="ant-upload-hint">
            Support for a single or bulk upload. Strictly prohibit from
            uploading company data or other band files
          </p>
        </Dragger>
        <Form
          {...layout}
          style={{ paddingTop: "50px" }}
          name="nest-messages"
          onFinish={onFinish}
          validateMessages={validateMessages}
        >
          <Form.Item name={["user", "website"]} label="Title">
            <Input />
          </Form.Item>
          <Form.Item name={["user", "introduction"]} label="Description">
            <Input.TextArea />
          </Form.Item>
          <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </Content>
  );
};

export default UploadVideo;
