import React, { useState } from "react";
import AppText from "../reusable/AppText";
import Container from "../reusable/Container";
import Spacer from "../reusable/Spacer";
import { Image, TextInput, ActivityIndicator } from "react-native";
import { login } from "../../helpers/auth";

const LoginCard: React.FC<{ type: string }> = ({ type }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState("");
  const [loading, setLoading] = useState(false);

  return (
    <Container
      flex
      direction="column"
      alignHorizantle="center"
      width={300}
      style={{ backgroundColor: "#fafafa", borderRadius: 30 }}
    >
      <Spacer height={1} />

      <TextInput
        onChangeText={setEmail as any}
        style={{
          borderBottomWidth: 1,
          borderBottomColor: "#000",
          width: "70%",
          height: 30,
        }}
        placeholder="Mail"
        value={email}
        autoCapitalize="none"
      />
      <Spacer height={0.5} />

      <TextInput
        onChangeText={setPassword as any}
        secureTextEntry={true}
        style={{
          borderBottomWidth: 1,
          borderBottomColor: "#000",
          width: "70%",
          height: 40,
          padding: 0,
        }}
        placeholder="Lösenord"
        value={password}
        autoCapitalize="none"
      />
      <AppText
        size={13}
        weight="bold"
        style={{ marginLeft: "-25%", padding: 5, fontFamily: "sans-serif" }}
      >
        Glömt ditt lösenord?
      </AppText>
      <Spacer height={1} />

      {err ? (
        <AppText color="red" size={18}>
          {err}
        </AppText>
      ) : null}

      <Container
        touchable
        flex
        direction="row"
        alignHorizantle="center"
        alignVertical="center"
        width="80%"
        style={{
          backgroundColor: "rgb(33, 229, 41)",
          borderRadius: 30,
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 3,
          },
          shadowOpacity: 0.29,
          shadowRadius: 4.65,
          elevation: 7,
        }}
        onClick={() => {
          setErr("");
          setLoading(true);
          login(type, email, password, setErr, setLoading);
        }}
      >
        {loading ? (
          <ActivityIndicator size="small" color="#fff" />
        ) : (
          <AppText
            color="#fafafa"
            size={23}
            style={{
              padding: 3,
              textShadowColor: "rgba(0, 0, 0, 0.4)",
              textShadowOffset: { width: -1, height: 1 },
              textShadowRadius: 10,
            }}
          >
            Logga in
          </AppText>
        )}
      </Container>

      <Spacer height={1} />
    </Container>
  );
};

export default LoginCard;
