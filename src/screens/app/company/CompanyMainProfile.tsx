import React, { useState } from "react";
import { Modal } from "react-native";
import AppLogo from "../../../components/reusable/AppLogo";
import AppText from "../../../components/reusable/AppText";
import Container from "../../../components/reusable/Container";
import Spacer from "../../../components/reusable/Spacer";
import ProfileScreen from "./ProfileScreen";

const CompanyProfile = () => {
  const [profileModal, setProfileModal] = useState(false);

  return (
    <Container
      flex
      direction="column"
      alignHorizantle="center"
      height="100%"
      style={{ backgroundColor: "#1D1D1D" }}
    >
      <Spacer height={2} />

      <AppLogo width={80} height={80} />

      <AppText color="#fafafa" size={25} weight="bold">
        Mina annonser
      </AppText>
      <Spacer height={1} />

      <Container
        touchable
        flex
        width="85%"
        height={40}
        alignVertical="center"
        style={{ backgroundColor: "#2C559D", padding: 5, borderRadius: 5 }}
        onClick={() => {
          setProfileModal(true);
        }}
      >
        <AppText color="#fafafa" size={19} weight="bold">
          Min annons
        </AppText>
      </Container>

      <Container
        position="absolute"
        flex
        width="60%"
        height={40}
        alignVertical="center"
        alignHorizantle="center"
        style={{ backgroundColor: "#2C559D", padding: 5, bottom: 30 }}
      >
        <AppText color="#fafafa" size={19} weight="bold">
          Lägg till annons
        </AppText>
      </Container>

      <ProfileScreen
        profileModal={profileModal}
        closeModal={() => {
          setProfileModal(false);
        }}
      />
    </Container>
  );
};

export default CompanyProfile;
