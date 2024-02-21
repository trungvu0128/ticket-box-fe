import React from "react";
import { Row, Col, Typography, Input, Flex, Image, Divider } from "antd";
import { FaPhone } from "react-icons/fa6";
import icon from "../assets/icons/ticketboxicon.svg";
import iconBct from "../assets/icons/bct.svg";
import { FaCircleArrowRight } from "react-icons/fa6";
import styled from "styled-components";

const TypographyTitleStyle = styled(Typography.Title)`
  &.phone {
    color: rgb(45, 194, 117) !important;
  }
  margin: 0 !important;
`;
const TypographyLinkStyle = styled(Typography.Link)`
  color: #aaa !important;
`;

const TypographyTextStyle = styled(Typography.Text)`
  color: #aaa !important;
`;

export const LayoutFooter = () => {
  return (
    <div>
      {/* <Divider style={{ background: "rgb(245, 247, 252)" }} /> */}
      <Row style={{ marginTop: "10px" }} className="container">
        <ColFooterItem
          span={6}
          items={[
            {
              header: <Image preview={false} src={icon} />,
            },
          ]}
        />
        <ColFooterItem
          span={10}
          items={[
            {
              header: "Information",
              text: (
                <Flex vertical>
                  <TypographyTextStyle>Ticketbox Co.Ltd</TypographyTextStyle>
                  <TypographyTextStyle>
                    Legal representative: Tran Ngoc Thai Son
                  </TypographyTextStyle>
                  <TypographyTextStyle>
                    Address: 3rd floor, Tower A, Viettel Building, 285 Cach Mang
                    Thang Tam, Ward 12, District 10, HCMC.
                  </TypographyTextStyle>
                  <TypographyTextStyle>
                    Hotline: 1900.6408 - Email: support@ticketbox.vn
                  </TypographyTextStyle>
                  <TypographyTextStyle>
                    Business registration certificate number: 0313605444, first
                    issued on January 7, 2016 by the Department of Planning and
                    Investment of Ho Chi Minh City
                  </TypographyTextStyle>
                </Flex>
              ),
            },
          ]}
        />
        <ColFooterItem
          span={8}
          items={[
            {
              header: <Image preview={false} src={iconBct} />,
            },
          ]}
        />
      </Row>
    </div>
  );
};

const FooterItem = ({ header, text, children }) => {
  return (
    <div>
      <div>
        <TypographyTitleStyle style={{ color: "#aaa" }} level={5}>
          {header}
        </TypographyTitleStyle>
      </div>
      <div>
        <Typography.Text style={{ color: "#aaa" }} level={6}>
          {text}
        </Typography.Text>
      </div>
      {children && <div>{children}</div>}
    </div>
  );
};

const ColFooterItem = ({ span, items }) => {
  return (
    <Col span={span}>
      <Flex vertical gap={20}>
        {items.map((item, index) => {
          return (
            <FooterItem
              header={item.header}
              text={item.text}
              children={item.children}
              key={index}
            />
          );
        })}
      </Flex>
    </Col>
  );
};
