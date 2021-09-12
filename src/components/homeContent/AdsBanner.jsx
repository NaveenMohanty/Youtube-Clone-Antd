import React from "react";
import { Carousel } from "antd";
const contentStyle = {
  display: "flex",
  justifyContent: "center",
  height: "160px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};

const AdsBanner = () => {
  return (
    <Carousel autoplay>
      <div>
        <h3 style={contentStyle}>
          <img
            height="160px"
            src="https://preview.pixlr.com/images/800wm/1379/2/1379100550.jpg"
          />
        </h3>
      </div>
      <div>
        <h3 style={contentStyle}>
          <img
            height="160px"
            src="https://preview.pixlr.com/images/800wm/1439/2/1439102798.jpg"
          />
        </h3>
      </div>
      <div>
        <h3 style={contentStyle}>
          <img
            height="160px"
            src="https://preview.pixlr.com/images/800wm/1379/2/1379101730.jpg"
          />
        </h3>
      </div>
      <div>
        <h3 style={contentStyle}>
          <img
            height="160px"
            src="https://preview.pixlr.com/images/800wm/1281/2/1281106968.jpg"
          />
        </h3>
      </div>
    </Carousel>
  );
};

export default AdsBanner;
