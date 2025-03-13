import { ThemeConfig } from "antd";

const theme: ThemeConfig = {
  token: {
    fontFamily: "Poppins",
    controlHeight: 32,
    fontSize: 14,
  },
  components: {
    Menu: {
      itemSelectedBg: "#000000",
      iconSize: 14,
      fontWeightStrong: 400,
      darkItemSelectedBg: "#000000",
      darkItemBg: "#000000",
      darkPopupBg: "#000000",
    },
    Select: {
      colorTextPlaceholder: "#000000",
    },
    Collapse: {
      padding: 0,
      contentPadding: "0 8px",
    },
    Tabs: {
      inkBarColor: "#000000",
      itemSelectedColor: "#000000",
      itemHoverColor: "#000000",
    },
    DatePicker: {
      colorPrimary: "#000000",
    },
    Progress: {
      defaultColor: "#000000",
    },
    Button: {
      colorLink: "#000000",
      colorLinkActive: "#000000",
      colorLinkHover: "#000000",
    },
    Badge: {
      colorError: "#000000",
    },
    Tag: {
      defaultBg: "#000000",
      defaultColor: "#fff",
      colorBorder: "#000000",
    },
    Carousel: {
      arrowSize: 32,
      colorBgContainer: "#000000",
    },
  },
};

export default theme;
