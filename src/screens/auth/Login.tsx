import React from "react";
import AppLogo from "../../components/reusable/AppLogo";
import Spacer from "../../components/reusable/Spacer";
import LoginCompanyCard from "../../components/layout/LoginCard";
import BackArrowButton from "../../components/reusable/BackButton";
import { ScrollView, Text, View } from "react-native";
import LoginCard from "../../components/layout/LoginCard";

const Login: React.FC<{ navigation: any; type: string }> = ({
  navigation,
  type,
}) => {
  return (
    <ScrollView
      style={{
        backgroundColor: "#1D1D1D",
        flexDirection: "column",
        height: "100%",
      }}
    >
      <View
        style={{
          flexDirection: "column",
          alignItems: "center",
          height: "100%",
          borderBottomLeftRadius: 180,
          borderBottomRightRadius: 180,
          backgroundColor: "#2C559D",
        }}
      >
        <BackArrowButton navigation={navigation} />

        <Spacer height={3} />

        <AppLogo width={150} height={150} />
        <Text style={{ fontSize: 35, color: "#fff", marginTop: -20 }}>
          Logga in
        </Text>
        <Spacer height={0.5} />

        <Spacer height={0.5} />
        <LoginCard type={type} />

        <Spacer height={5} />
      </View>
    </ScrollView>
  );
};

export default Login;
