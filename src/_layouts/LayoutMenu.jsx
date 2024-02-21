import { Menu } from "antd";

function LayoutMenu({ items }) {
  const backgroundColor = "rgb(245, 247, 252)";
  return (
    <Menu
      items={items}
      defaultSelectedKeys={["1"]}
      style={{ background: backgroundColor, border: "none" }}
    ></Menu>
  );
}

export default LayoutMenu;
