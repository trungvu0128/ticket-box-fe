import React from "react";
import { Card, Flex, Image, Typography } from "antd";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const CardStyle = styled(Card)`
  &:hover {
    opacity: 0.5;
    cursor: pointer;
  }
  border: none;
  padding: 5px !important;
`;

export const LiveShow = ({ image, name, date, category, id }) => {
  let navigate = useNavigate();
  return (
    <CardStyle
      bodyStyle={{ padding: 0 }}
      onClick={() => navigate(`/live-show/${id}`)}
    >
      <Flex vertical gap={5}>
        <Image preview={false} style={{ borderRadius: 5 }} src={image}></Image>
        <Typography.Title level={4}>{name}</Typography.Title>
        <Typography.Text>{date}</Typography.Text>
        <Typography.Text type="secondary">{category}</Typography.Text>
      </Flex>
    </CardStyle>
  );
};
