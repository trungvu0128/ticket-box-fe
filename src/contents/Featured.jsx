import { Flex, Image, Typography } from "antd";
import React from "react";
import feature1 from "../assets/icons/featured-1.svg";
import feature2 from "../assets/icons/featured-2.svg";

export const Featured = () => {
  return (
    <>
      <Flex
        justify="center"
        align="center"
        style={{ width: "100%", marginTop: "30px" }}
        gap={10}
      >
        <Image
          width={150}
          style={{ marginTop: "12px" }}
          preview={false}
          src={feature1}
        />
        <Typography.Title type="success" level={1} style={{ margin: 0 }}>
          Featured Events
        </Typography.Title>
        <Image width={150} preview={false} src={feature2} />
      </Flex>
      <div
        style={{
          marginLeft: "20%",
          marginRight: "20%",
          marginBottom: "30px",
          background: "#000",
          height: "2px",
          width: "100%",
        }}
      ></div>
    </>
  );
};
