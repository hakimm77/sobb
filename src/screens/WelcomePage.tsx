import React from "react";
import AppLogo from "../components/reusable/AppLogo";
import {
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";

const WelcomeScreen: React.FC<{ navigation: any }> = ({ navigation }) => {
  return (
    <TouchableOpacity
      style={{
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
        width: "100%",
        backgroundColor: "#2C559D",
      }}
      onPress={() => {
        navigation.navigate("registrationPage");
      }}
    >
      <AppLogo width={200} height={200} />
      <Text style={{ color: "#fff", fontWeight: "bold", fontSize: 40 }}>
        SOBB
      </Text>
    </TouchableOpacity>
  );
};

export default WelcomeScreen;
