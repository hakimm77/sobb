import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import AppLogo from "../../components/reusable/AppLogo";
import Spacer from "../../components/reusable/Spacer";

const AuthButton: React.FC<{ textInside: any; clickEvent: any }> = ({
  textInside,
  clickEvent,
}) => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: "#1D1D1D",
        borderRadius: 10,
        margin: 5,
        width: 150,
        height: 35,
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
      }}
      onPress={clickEvent}
    >
      <Text style={{ color: "#fff", fontSize: 19 }}>{textInside}</Text>
    </TouchableOpacity>
  );
};

const RegistrationPage: React.FC<{ navigation: any }> = ({ navigation }) => {
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        alignItems: "center",
        backgroundColor: "#1D1D1D",
      }}
    >
      <Spacer height={1} />
      <AppLogo width={150} height={150} />
      <Text style={{ color: "#fff", fontSize: 35, marginTop: -30 }}>
        Välkommen
      </Text>
      <Spacer height={1} />

      <View
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          width: 450,
          height: "100%",
          backgroundColor: "#2C559D",
          borderTopLeftRadius: 180,
          borderTopRightRadius: 180,
        }}
      >
        <Spacer height={2} />

        <View style={{ height: "90%", flexDirection: "row" }}>
          <View
            style={{
              flexDirection: "column",
              width: "100%",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                fontSize: 23,
                color: "#fff",
                borderBottomWidth: 1,
                borderBottomColor: "#fafafa",
                padding: 5,
              }}
            >
              Registrera/logga in
            </Text>
            <Spacer height={1} />

            <View
              style={{
                flexDirection: "column",
                width: "80%",
                alignItems: "center",
              }}
            >
              <Text style={{ color: "#fff", fontSize: 18 }}>
                som jobbsökande
              </Text>

              <AuthButton
                textInside="Logga In"
                clickEvent={() => {
                  navigation.navigate("loginWorker");
                }}
              />
              <AuthButton
                textInside="Registrera"
                clickEvent={() => {
                  navigation.navigate("signupWorker");
                }}
              />
              <Spacer height={1} />

              <Text style={{ color: "#fff", fontSize: 18 }}>som Företag</Text>
              <AuthButton
                textInside="Logga In"
                clickEvent={() => {
                  navigation.navigate("loginCompany");
                }}
              />
              <AuthButton
                textInside="Registrera"
                clickEvent={() => {
                  navigation.navigate("signupCompany");
                }}
              />
            </View>
            <Spacer height={1} />

            <Image
              source={require("../../../assets/handshake.png")}
              width={80}
              height={50}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default RegistrationPage;
