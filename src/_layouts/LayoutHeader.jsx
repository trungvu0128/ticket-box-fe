import { Button, Flex, Image } from "antd";
import { Header } from "antd/es/layout/layout";
import Search from "antd/es/input/Search";
import { FaTicketSimple } from "react-icons/fa6";
import icon from "../icon.png";
import { useNavigate } from "react-router-dom";
const headerCSSProperties = {
  borderBottom: "2px solid rgb(230, 235, 245)",
  height: "76px",
  background: "white",
  position: "sticky",
  top: 0,
  zIndex: 1,
};

const subNavCssProperties = {
  width: "20%",
};

const divNavCssProperties = {
  width: "100%",
  height: "100%",
};

function LayoutHeader() {
  let navigate = useNavigate();
  return (
    <Header style={headerCSSProperties}>
      <Flex
        align="center"
        style={divNavCssProperties}
        gap="middle"
        justify="space-between"
      >
        <Flex align="center" gap="middle" style={subNavCssProperties}>
          <Image width={50} src={icon} alt="icon"></Image>
          <Search placeholder="input search" size="large"></Search>
        </Flex>
        <Flex
          align="center"
          gap="middle"
          style={subNavCssProperties}
          justify="center"
        >
          <Button type="text" size="large">
            <FaTicketSimple />
          </Button>
          <Button onClick={() => navigate("/login")} size="large">
            Login | Sign up
          </Button>
        </Flex>
      </Flex>
    </Header>
  );
}

export default LayoutHeader;
