import { Button, Col, Divider, Flex, Image, Row, Typography } from "antd";
import React from "react";
import { LiveShowList } from "../LiveShows/LiveShowList";

export const LiveShowDetail = () => {
  return (
    <Flex vertical style={{ background: "rgb(245, 247, 252)" }} gap={20}>
      <Flex vertical gap={20} style={{ background: "#fff", padding: 20 }}>
        <Image
          preview={false}
          src="https://images.tkbcdn.com/1/1560/600/Upload/eventcover/2024/02/02/0390BC.jpg"
          alt="banner"
          width={"100%"}
        ></Image>
        <Row gutter={[16, 0]}>
          <Col span={3}>
            <Flex
              vertical
              gap={10}
              style={{
                textAlign: "center",
                borderColor: "#666",
                borderStyle: "solid",
                borderWidth: "1px 1px 2px 1px",
              }}
            >
              <div style={{ background: "red" }}>
                <Typography.Title style={{ color: "#fff" }} level={5}>
                  February
                </Typography.Title>
              </div>
              <div>
                <h3>17</h3>
                <p>Saturday</p>
              </div>
            </Flex>
          </Col>
          <Col span={12}>
            <Flex vertical>
              <Flex vertical>
                <Typography.Title style={{ margin: 0 }} level={3}>
                  [ KỊCH TẾT ] KHÚC DẠ TÂM ( TÂM LÝ - KINH DỊ - HÀI ) đạo diễn
                  NSƯT Vũ Xuân Trang. NS Hoàng Thy, dv Nhã Uyên, Quốc Huy, Thành
                  Phương, Quỳnh Nhi, Thuỵ My, Thành An, Yến Thanh, Hằng Nga,
                  Quốc Minh, Tạ Minh Đạt, Trúc Linh.
                </Typography.Title>
                <Typography.Title level={5}>
                  Saturday, 17 February 2024 (07:00 PM - 09:30 PM)
                </Typography.Title>
              </Flex>
              <Flex vertical>
                <Typography.Title level={5}>
                  SÂN KHẤU XÓM KỊCH - 06 Huyền Trân Công Chúa phường Bến Thành
                  quận 1, District 1, Ho Chi Minh City
                </Typography.Title>
                <Typography.Text></Typography.Text>
              </Flex>
            </Flex>
          </Col>
          <Col span={8}>
            <Flex vertical gap={10} align="center">
              <Button
                style={{
                  width: "100%",
                  height: 60,
                  background: "red",
                  color: "#fff",
                }}
              >
                Book now
              </Button>
              <Flex style={{ width: "100%" }} gap={10}>
                <Button style={{ width: "50%", height: 40 }}>
                  Share to facebook
                </Button>
                <Button style={{ width: "50%", height: 40 }}>Follow</Button>
              </Flex>
            </Flex>
          </Col>
        </Row>
      </Flex>
      <Flex vertical gap={20}>
        <Flex vertical style={{ background: "#fff", paddingBottom: 20 }}>
          <Divider orientation="left">
            <Typography.Title level={4}>About</Typography.Title>
          </Divider>
          <div style={{ padding: "0px 20px" }}>
            👑 “TRUY LÙNG THÁI TỬ” là vở hài kịch cổ trang nói về sự náo loạn
            của thế thời cùng với những tình huống hài hước thú vị trong hành
            trình truy tìm nhân vật Thái Tử. Với kịch đậm chất hài kịch này được
            thể hiện bởi bởi các nghệ sỹ, diễn viên nổi tiếng như Việt Hương,
            Phi Phụng, Minh Nhí, Phương Dung, Võ Tấn Phát, Tú Vi, Bảo Bảo, Su
            Su, Thạch Thảo, Võ Minh Khải, Song Duy, Trung Tín, Quách Thành Nhân,
            Minh Khánh, Minh Tân và các diễn viên trẻ Sân khấu nghệ thuật Trương
            Hùng Minh. 📌 Thể loại: Hài kịch 📌 Tác giả: NSƯT Nguyễn Văn Phúc,
            Bạch Mai, Thạch Thảo 📌 Đạo diễn: NSƯT Minh Nhí 📌 Cố vấn nghệ
            thuật: NSND Trần Ngọc Giàu{" "}
          </div>
        </Flex>
        <Flex vertical style={{ background: "#fff" }}>
          <Divider orientation="left">
            <Typography.Title level={4}>Ticket infomation</Typography.Title>
          </Divider>
          <Flex vertical>
            <Flex
              style={{ width: "100%", padding: "0px 20px" }}
              justify="space-between"
              align="center"
            >
              <Typography.Text>VIP</Typography.Text>
              <Flex
                vertical
                justify="center"
                align="center"
                style={{ marginBottom: 20 }}
              >
                <Typography.Title style={{ margin: 0 }} level={4}>
                  400.000 VND
                </Typography.Title>
                <Typography.Text type="danger">Sold out</Typography.Text>
              </Flex>
            </Flex>
            <Divider />
            <Flex
              style={{ width: "100%", padding: "0px 20px" }}
              justify="space-between"
              align="center"
            >
              <Typography.Text>VIP</Typography.Text>
              <Flex
                vertical
                justify="center"
                align="center"
                style={{ marginBottom: 20 }}
              >
                <Typography.Title style={{ margin: 0 }} level={4}>
                  400.000 VND
                </Typography.Title>
                <Typography.Text type="danger">Sold out</Typography.Text>
              </Flex>
            </Flex>
            <Divider />
            <Flex
              style={{ width: "100%", padding: "0px 20px" }}
              justify="space-between"
              align="center"
            >
              <Typography.Text>VIP</Typography.Text>
              <Flex
                vertical
                justify="center"
                align="center"
                style={{ marginBottom: 20 }}
              >
                <Typography.Title style={{ margin: 0 }} level={4}>
                  400.000 VND
                </Typography.Title>
                <Typography.Text type="danger">Sold out</Typography.Text>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
        <Flex vertical style={{ background: "#fff" }}>
          <Divider orientation="left">
            <Typography.Title level={4}>Organizer</Typography.Title>
          </Divider>
          <Flex style={{ paddingLeft: 20, paddingBottom: 20 }}>
            <Image src="https://static.tkbcdn.com/Upload/organizerlogo/2024/01/23/EB4F3D.jpg"></Image>
            <Flex justify="center" vertical style={{ marginLeft: 20 }}>
              <Typography.Title level={4}>HARMONY HILL</Typography.Title>
              <Typography.Text>Harmony show</Typography.Text>
            </Flex>
          </Flex>
        </Flex>
        <Flex vertical style={{ background: "#fff" }}>
          <Divider orientation="left">
            <Typography.Title level={4}>Recommended for you</Typography.Title>
          </Divider>
          <Flex>
            <LiveShowList />
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};
