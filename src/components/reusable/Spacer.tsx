import React from "react";
import { View, StyleSheet } from "react-native";

const Spacer: React.FC<{ height: any }> = ({ height }) => {
  const spacerStyle = StyleSheet.create({
    spacer: {
      height: height * 20,
    },
  });

  return <View style={spacerStyle.spacer} />;
};

export default Spacer;
