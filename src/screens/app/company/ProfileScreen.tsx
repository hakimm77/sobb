import React, { useEffect, useState } from "react";
import { Image, Modal } from "react-native";
import { doc, getDoc } from "firebase/firestore";
import AppText from "../../../components/reusable/AppText";
import Container from "../../../components/reusable/Container";
import Spacer from "../../../components/reusable/Spacer";
import AppLogo from "../../../components/reusable/AppLogo";
import SettingsSection from "../../../components/layout/SettingSection";
import { getData } from "../../../helpers/AsyncStorageFuncs";
import { db } from "../../../firebase/firebaseConfig";
import { ActivityIndicator } from "react-native-paper";

const ProfileScreen: React.FC<{
  profileModal: boolean;
  closeModal: () => void;
}> = ({ profileModal, closeModal }) => {
  const [adInformation, setAdInformation] = useState<any>();
  const [settingsSectionModal, setSettingsModal] = useState(false);
  const [userID, setUserID] = useState("");

  useEffect(() => {
    getData("USER").then((data) => {
      setUserID(data as string);

      getDoc(doc(db, `/company/${data}`)).then((snapchot: any) => {
        setAdInformation(snapchot.data().ad);
      });
    });
  }, []);

  return (
    <Modal visible={profileModal} animationType="slide">
      {adInformation ? (
        <Container
          flex
          direction="column"
          height="100%"
          style={{ backgroundColor: "#2C559D" }}
        >
          <Container
            touchable
            position="absolute"
            style={{ top: 20, left: 10 }}
            onClick={closeModal}
          >
            <AppText color="#fafafa" size={18}>
              Avbryt
            </AppText>
          </Container>

          <Container
            flex
            direction="row"
            height={80}
            alignHorizantle="center"
            alignVertical="center"
          >
            <AppLogo width={80} height={80} />

            <Container
              touchable
              flex
              position="absolute"
              style={{ right: 5, bottom: 10 }}
              onClick={() => {
                setSettingsModal(true);
              }}
            >
              <Image
                source={require("../../../../assets/settings-icon.png")}
                width={40}
                height={40}
              />
            </Container>
          </Container>

          <AppText
            color="#fafafa"
            size={25}
            weight="bold"
            style={{ textAlign: "center" }}
          >
            {adInformation.name}
          </AppText>
          <AppText color="#fafafa" size={16} style={{ textAlign: "center" }}>
            {adInformation.branch}
          </AppText>
          <Spacer height={0.5} />

          <Container
            flex
            direction="column"
            height="100%"
            alignHorizantle="center"
            style={{
              backgroundColor: "#1D1D1D",
              borderTopRightRadius: 25,
              borderTopLeftRadius: 25,
            }}
          >
            <Spacer height={0.5} />

            <AppText
              color="#fafafa"
              size={16}
              weight="bold"
              style={{ lineHeight: 19 }}
            >
              Jobb beskrivning
            </AppText>
            <Spacer height={1} />

            <AppText
              color="#fafafa"
              size={14}
              style={{
                borderWidth: 1,
                borderColor: "#fafafa",
                width: "90%",
                padding: 7,
                lineHeight: 16,
              }}
            >
              {adInformation.description}
            </AppText>
            <Spacer height={0.4} />

            <Container flex direction="row">
              <Container
                flex
                direction="column"
                alignHorizantle="center"
                style={{ margin: 15 }}
              >
                <AppText color="#fafafa" size={15} weight="bold">
                  Ålder
                </AppText>
                <AppText color="#fafafa" size={14}>
                  {adInformation.age}
                </AppText>
              </Container>

              <Container
                flex
                direction="column"
                alignHorizantle="center"
                style={{ marginHorizontal: 15, marginTop: 5 }}
              >
                <Image
                  source={require("../../../../assets/location-icon.png")}
                  style={{
                    width: 23,
                    height: 23,
                    resizeMode: "contain",
                    margin: 5,
                  }}
                />
                <AppText color="#fafafa" size={14}>
                  {adInformation.plats}
                </AppText>
              </Container>

              <Container
                flex
                direction="column"
                alignHorizantle="center"
                style={{ margin: 15 }}
              >
                <AppText color="#fafafa" size={15} weight="bold">
                  Mail
                </AppText>
                <AppText color="#fafafa" size={14}>
                  @gmail.com
                </AppText>
              </Container>
            </Container>
            <Spacer height={0.3} />

            <AppText
              size={15}
              color="#fafafa"
              weight="bold"
              style={{ fontFamily: "Roboto" }}
            >
              Föredragna egenskaper
            </AppText>
            <Spacer height={0.5} />

            <AppText
              color="#fafafa"
              size={14}
              style={{
                borderWidth: 1,
                borderColor: "#fafafa",
                width: "90%",
                padding: 7,
              }}
            >
              Det är ett välkänt faktum att läsare distraheras av läsbar text på
              en sida när man skall studera layouten.
            </AppText>
            <Spacer height={1} />

            <Image
              source={require("../../../../assets/job-information-image.png")}
              width={320}
              height={120}
              style={{ borderWidth: 1.5, borderColor: "#fafafa" }}
            />
          </Container>
        </Container>
      ) : (
        <Container
          flex
          alignHorizantle="center"
          alignVertical="center"
          height="100%"
        >
          <ActivityIndicator color="white" />
        </Container>
      )}

      <SettingsSection
        company={true}
        settingsModal={settingsSectionModal}
        closeModal={() => {
          setSettingsModal(false);
        }}
        profileInfo={adInformation}
      />
    </Modal>
  );
};

export default ProfileScreen;
