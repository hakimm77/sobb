import React from "react";
import { View, StyleSheet, TouchableOpacity, ScrollView } from "react-native";

interface ContainerType {
  scroll?: boolean;
  touchable?: boolean;
  children?: any;
  flex?: boolean;
  position?: string;
  direction?: string;
  width?: any;
  height?: any;
  alignHorizantle?: string;
  alignVertical?: string;
  style?: any;
  onClick?: any;
  contentContainerStyle?: any;
}

const Container: React.FC<ContainerType> = ({
  scroll,
  touchable,
  children,
  flex,
  position,
  direction,
  width,
  height,
  alignHorizantle,
  alignVertical,
  style,
  onClick,
  contentContainerStyle,
}) => {
  const containerStyle = StyleSheet.create({
    container: {
      position: position,
      display: flex && "flex",
      flexDirection: direction,
      width: width,
      height: height,
      alignItems: alignHorizantle,
      justifyContent: alignVertical,
      ...style,
    },
  });

  return touchable ? (
    <TouchableOpacity
      activeOpacity={1}
      style={containerStyle.container}
      onPress={onClick}
    >
      {children}
    </TouchableOpacity>
  ) : scroll ? (
    <ScrollView
      style={containerStyle.container}
      contentContainerStyle={contentContainerStyle}
    >
      {children}
    </ScrollView>
  ) : (
    <View style={containerStyle.container}>{children}</View>
  );
};

export default Container;
