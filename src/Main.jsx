import "./App.css";
import { Flex, Layout, Image, Divider, Typography } from "antd";
import { Content, Footer } from "antd/es/layout/layout";
import Sider from "antd/es/layout/Sider";
import LayoutHeader from "./_layouts/LayoutHeader";
import LayoutMenu from "./_layouts/LayoutMenu";
import { Home } from "./contents/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { LiveShowDetail } from "./contents/LiveShowDetails/LiveShowDetail";
import { LayoutFooter } from "./_layouts/LayoutFooter";
import { Login } from "./contents/Logins/LoginLayout";
function Main() {
  const backgroundColor = "rgb(245, 247, 252)";
  const categoryNavProps = [
    {
      label: "Home",
      icon: "https://i.imgur.com/NRKmnDM.png",
    },
    {
      label: "Live music",
      icon: "https://i.imgur.com/YyXHyXv.png",
    },
    {
      label: "Theater - Art culture",
      icon: "https://i.imgur.com/ljaLmnS.png",
    },
    {
      icon: "https://i.imgur.com/U2PS6E6.png",
      label: "Night Life",
    },
    {
      icon: "https://i.imgur.com/l60bw3u.png",
      label: "Community",
    },
    {
      icon: "https://i.imgur.com/fX2KeYU.png",
      label: "Course",
    },
    {
      label: "Attraction",
      icon: "https://i.imgur.com/7xTWoNU.png",
    },
    {
      label: "Sport",
      icon: "https://cdn02.ticketbox.vn/poster/9dc655de-c68a-11ea-98a5-0242ac110008",
    },
  ].map((key, index) => {
    return {
      key: index,
      label: (
        <Flex align="center" gap={10}>
          <Image width={25} src={key.icon} />
          <Typography.Text>{key.label}</Typography.Text>
        </Flex>
      ),
      // icon: ,
    };
  });

  const infoNavProps = [
    {
      label: "About us",
      icon: "https://i.imgur.com/NRKmnDM.png",
    },
    {
      label: "FAQ",
      icon: "https://i.imgur.com/YyXHyXv.png",
    },
    {
      label: "Payment methods",
      icon: "https://i.imgur.com/ljaLmnS.png",
    },
    {
      icon: "https://i.imgur.com/U2PS6E6.png",
      label: "Customer Terms of Service",
    },
    {
      icon: "https://i.imgur.com/l60bw3u.png",
      label: "Policy",
    },
  ].map((key, index) => {
    return {
      key: index,
      label: (
        <Flex align="center" gap={10}>
          <Image width={25} src={key.icon} />
          <Typography.Text>{key.label}</Typography.Text>
        </Flex>
      ),
    };
  });

  return (
    <Flex wrap="wrap" gap="middle">
      <Layout>
        <LayoutHeader />
        <Layout style={{ background: backgroundColor, flex: 1 }}>
          <div
            style={{
              background: backgroundColor,
              position: "fixed", // Fix the sidebar
              height: "100vh", // Set the height to full viewport height
              overflow: "auto",
              width: "20vw", // Enable scrolling for the sidebar content
            }}
          >
            <Sider width={"100%"}>
              <LayoutMenu items={categoryNavProps} />
              <Divider style={{ background: backgroundColor, margin: 0 }} />
              <LayoutMenu items={infoNavProps} />
              <Divider style={{ background: backgroundColor, margin: 0 }} />
              <LayoutMenu items={infoNavProps} />
            </Sider>
          </div>

          <Content
            className="bg-white"
            style={{
              marginLeft: "30%", // Adjust content margin to accommodate the fixed sidebar
              marginTop: "30px",
              marginRight: "10%",
              overflow: "auto", // Enable scrolling for the content
            }}
          >
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/live-show/:id" element={<LiveShowDetail />} />
            </Routes>
          </Content>
        </Layout>
      </Layout>
    </Flex>
  );
}
export default Main;
