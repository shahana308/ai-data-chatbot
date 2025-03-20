import { ThemeConfig } from "antd";

const theme: ThemeConfig = {
  token: {
    fontFamily: "Poppins",
    controlHeight: 32,
    fontSize: 14,
  },
  components: {
    Button: {
      colorPrimary: "#d5dae7",
      colorPrimaryText: "#000",

      colorPrimaryHover: "#c2c6d0",
      colorPrimaryActive: "#c2c6d0",
    },

    Menu: {
      itemSelectedBg: "#ef8d86",
      iconSize: 16,
      fontWeightStrong: 400,
      darkItemSelectedBg: "#ef8d86",
      darkItemBg: "#0e1e46",
      colorText: "#fff",
      itemSelectedColor: "#000",
      darkItemSelectedColor: "#000",
      fontSize: 15,
    },
  },
};

export default theme;
