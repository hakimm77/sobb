import React from "react";
import { Image, StyleSheet, TouchableOpacity } from "react-native";

const BackArrowButton: React.FC<{ navigation: any }> = ({ navigation }) => {
  return (
    <TouchableOpacity
      style={styles.backButton}
      onPress={() => {
        navigation.goBack();
      }}
    >
      <Image
        source={require("../../../assets/left-arrow.png")}
        style={{
          width: 35,
          height: 35,
          marginRight: 5,
        }}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  backButton: {
    position: "absolute",
    top: 40,
    left: 20,
    borderColor: "#45afe3",
    borderWidth: 2,
    width: 55,
    height: 55,
    borderRadius: 55 / 2,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default BackArrowButton;
