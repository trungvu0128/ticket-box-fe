import { Button, Flex, Typography } from "antd";
import React from "react";

const lineStyle = {
  background: "rgb(230, 235, 245)",
  height: "2px",
  width: "100%",
};
export const SeeMore = () => {
  return (
    <Flex style={{ width: "100%", margin: 20 }} align="center">
      <div style={lineStyle}></div>{" "}
      <Button
        style={{
          margin: "20px 50px",
          width: 400,
          height: 40,
          borderRadius: 50,
          background: "rgb(45, 194, 117)",
          color: "#fff",
        }}
      >
        <Typography.Text strong style={{ color: "#fff" }}>
          See more
        </Typography.Text>
      </Button>
      <div style={lineStyle}></div>{" "}
    </Flex>
  );
};
