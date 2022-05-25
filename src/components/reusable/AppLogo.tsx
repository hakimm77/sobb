import React from "react";
import { Image } from "react-native";

const AppLogo: React.FC<{ width: any; height: any }> = ({ width, height }) => {
  return (
    <Image
      source={require("../../../assets/app-logo.png")}
      style={{ margin: 10, width: width, height: height }}
    />
  );
};

export default AppLogo;
