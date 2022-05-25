import React, { useEffect, useState } from "react";
import { Modal, Linking, Image } from "react-native";
import GestureRecognizer from "react-native-swipe-gestures";
import { saveData } from "../../helpers/AsyncStorageFuncs";
import * as Updates from "expo-updates";
import AppLogo from "../reusable/AppLogo";
import Spacer from "../reusable/Spacer";
import Container from "../reusable/Container";
import AppText from "../reusable/AppText";
import UpdateInfoModal from "./UpdateInfoModal";

const SettingsSection: React.FC<{
  settingsModal: boolean;
  closeModal: any;
  profileInfo: any;
  company?: boolean;
}> = ({ settingsModal, closeModal, profileInfo, company }) => {
  const [openUpdateProfile, setOpenUpdateProfile] = useState(false);

  const logout = async () => {
    await saveData("USER", "");
    await saveData("TYPE", "none");
    await Updates.reloadAsync();

    console.log("logged out");
  };

  return (
    <GestureRecognizer style={{ flex: 1 }} onSwipeDown={closeModal}>
      <Modal transparent visible={settingsModal} animationType="slide">
        <Container
          position="absolute"
          height="80%"
          width="100%"
          alignHorizantle="center"
          style={{
            backgroundColor: "#313131",
            bottom: 0,
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
          }}
        >
          <Spacer height={2} />
          <Container
            touchable
            flex
            direction="row"
            width="90%"
            alignVertical="flex-start"
            alignHorizantle="center"
            style={{ borderBottomWidth: 1, borderBottomColor: "#000" }}
            onClick={() => {
              if (company) {
                return;
              } else {
                setOpenUpdateProfile(true);
              }
            }}
          >
            <Image
              source={require("../../../assets/navigationIcons/profile-icon.png")}
              width={35}
              height={35}
              style={{ margin: 10 }}
            />
            <AppText size={23} color="#fafafa">
              Profil
            </AppText>
          </Container>
          <Spacer height={1} />

          <Container
            flex
            direction="row"
            width="90%"
            alignVertical="flex-start"
            alignHorizantle="center"
            style={{ borderBottomWidth: 1, borderBottomColor: "#000" }}
          >
            <Image
              source={require("../../../assets/security-icon.png")}
              width={35}
              height={35}
              style={{ margin: 10 }}
            />

            <AppText size={23} color="#fafafa">
              Säkerhet
            </AppText>
          </Container>
          <Spacer height={1} />

          <Container
            touchable
            flex
            direction="row"
            width="90%"
            alignVertical="flex-start"
            alignHorizantle="center"
            style={{ borderBottomWidth: 1, borderBottomColor: "#000" }}
            onClick={() => {
              Linking.openURL("https://sobb.se/kontakt");
            }}
          >
            <AppLogo width={65} height={65} />
            <AppText size={23} color="#fafafa">
              Kontakta oss
            </AppText>
          </Container>

          <Container
            position="absolute"
            width="100%"
            style={{ bottom: 0, borderTopWidth: 1, borderTopColor: "gray" }}
          >
            <Spacer height={0.5} />

            <Container touchable style={{ margin: 10 }} onClick={logout}>
              <AppText color="#2998FF" size={20}>
                Logga ut
              </AppText>
            </Container>
            <Spacer height={1} />

            <Container touchable style={{ margin: 10 }} onClick={() => {}}>
              <AppText color="#2998FF" size={20}>
                Ta bort konto
              </AppText>
            </Container>
            <Spacer height={1} />
          </Container>
        </Container>
      </Modal>

      {profileInfo && (
        <UpdateInfoModal
          openModal={openUpdateProfile}
          closeModal={() => {
            setOpenUpdateProfile(false);
          }}
          profileInfo={profileInfo}
        />
      )}
    </GestureRecognizer>
  );
};

export default SettingsSection;
