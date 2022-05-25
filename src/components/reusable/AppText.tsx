import React from "react";
import { Text, StyleSheet } from "react-native";

interface AppTextType {
  children?: any;
  size?: number;
  weight?: string;
  color?: string;
  style?: any;
}

const AppText: React.FC<AppTextType> = ({
  children,
  size,
  weight,
  color,
  style,
}) => {
  const textStyle = StyleSheet.create({
    appText: {
      fontSize: size,
      fontWeight: weight,
      fontFamily: "serif",
      color: color,
      ...style,
    },
  });

  return <Text style={textStyle.appText}>{children}</Text>;
};

export default AppText;
