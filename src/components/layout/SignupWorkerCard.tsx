import React, { useState } from "react";
import AppText from "../reusable/AppText";
import Container from "../reusable/Container";
import Spacer from "../reusable/Spacer";
import { TextInput, Alert } from "react-native";
import { ActivityIndicator, Menu } from "react-native-paper";
import { signupWorker } from "../../helpers/auth";

const SignupWorkerCard = () => {
  const [visible, setVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [afterName, setAfterName] = useState("");
  const [age, setAge] = useState("");
  const [previousJobs, setPreviousJobs] = useState("");
  const [about, setAbout] = useState("");
  const [workTime, setWorkTime] = useState("Önskad arbetstid");
  const [err, setErr] = useState("");
  const [loading, setLoading] = useState(false);

  const openMenu = () => setVisible(true);
  const closeMenu = () => setVisible(false);

  const MenuButton: React.FC<{ title: string }> = ({ title }) => {
    return (
      <Container
        touchable
        flex
        width={230}
        height={30}
        alignVertical="center"
        onClick={openMenu}
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.32)",
          borderRadius: 10,
          paddingLeft: 20,
        }}
      >
        <AppText color="#fafafa" size={15}>
          {title}
        </AppText>
      </Container>
    );
  };

  return (
    <Container
      flex
      direction="column"
      alignHorizantle="center"
      width={300}
      style={{ backgroundColor: "#fafafa", borderRadius: 30 }}
    >
      <Spacer height={0.5} />

      <TextInput
        style={{
          borderBottomWidth: 1,
          borderBottomColor: "#000",
          width: "70%",
        }}
        placeholder="Namn"
        placeholderTextColor="#000"
        onChangeText={setName}
        value={name}
      />
      <Spacer height={0.7} />

      <TextInput
        style={{
          borderBottomWidth: 1,
          borderBottomColor: "#000",
          width: "70%",
        }}
        placeholder="Efternamn"
        placeholderTextColor="#000"
        onChangeText={setAfterName}
        value={afterName}
      />
      <Spacer height={0.5} />

      <TextInput
        style={{
          borderBottomWidth: 1,
          borderBottomColor: "#000",
          width: "70%",
        }}
        placeholder="Alder"
        placeholderTextColor="#000"
        onChangeText={setAge}
        value={age}
      />
      <Spacer height={0.5} />

      <AppText color="#000" size={18}>
        Tidigare jobb?
      </AppText>

      <TextInput
        style={{
          borderBottomWidth: 1,
          borderBottomColor: "#000",
          width: "70%",
        }}
        placeholder="Svar"
        placeholderTextColor="#000"
        onChangeText={setPreviousJobs}
        value={previousJobs}
      />
      <Spacer height={1} />

      <Menu
        visible={visible}
        onDismiss={closeMenu}
        anchor={<MenuButton title={workTime} />}
      >
        <Menu.Item
          title="Förmiddag"
          onPress={() => {
            setWorkTime("Förmiddag");
            closeMenu();
          }}
        />
        <Menu.Item
          title="Eftermiddag"
          onPress={() => {
            setWorkTime("Eftermiddag");
            closeMenu();
          }}
        />
        <Menu.Item
          title="Kväll"
          onPress={() => {
            setWorkTime("Kväll");
            closeMenu();
          }}
        />
        <Menu.Item
          title="Drop in"
          onPress={() => {
            setWorkTime("Drop in");
            closeMenu();
          }}
        />
      </Menu>
      <Spacer height={0.5} />

      <AppText color="#000" size={18}>
        Kort om dig?
      </AppText>

      <TextInput
        style={{
          borderBottomWidth: 1,
          borderBottomColor: "#000",
          width: "70%",
        }}
        placeholder="Svar"
        placeholderTextColor="#000"
        onChangeText={setAbout}
        value={about}
      />
      <Spacer height={1} />

      <TextInput
        style={{
          borderBottomWidth: 1,
          borderBottomColor: "#000",
          width: "70%",
        }}
        placeholder="Mail"
        placeholderTextColor="#000"
        onChangeText={setEmail}
        value={email}
        autoCapitalize={"none"}
      />
      <Spacer height={1} />

      <TextInput
        secureTextEntry={true}
        style={{
          borderBottomWidth: 1,
          borderBottomColor: "#000",
          width: "70%",
        }}
        placeholder="Lösenord"
        placeholderTextColor="#000"
        onChangeText={setPassword}
        value={password}
        autoCapitalize={"none"}
      />
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
        }}
        onClick={() => {
          setLoading(true);
          setErr("");
          signupWorker(
            email,
            password,
            name,
            afterName,
            age,
            previousJobs,
            about,
            workTime,
            setErr,
            setLoading
          );
        }}
      >
        {loading ? (
          <ActivityIndicator color="#fff" size="small" />
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

export default SignupWorkerCard;
