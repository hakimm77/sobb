import React, { useState, useEffect } from "react";
import Container from "../../../components/reusable/Container";
import AppText from "../../../components/reusable/AppText";
import Spacer from "../../../components/reusable/Spacer";
import AppLogo from "../../../components/reusable/AppLogo";
import { getProfileInfo } from "../../../helpers/getProfileInfo";
import { getData } from "../../../helpers/AsyncStorageFuncs";
import SettingsSection from "../../../components/layout/SettingSection";
import { Image, ImageSourcePropType } from "react-native";
import { ActivityIndicator } from "react-native-paper";
import { WorkerInfo } from "../../../../types/user";

const ProfileScreen = () => {
  const [tabs, setTabs] = useState(["Info om mig", "Tidigare jobb"]);
  const [selectedTab, setSelectedTab] = useState("Info om mig");
  const [userInformation, setUserInformation] = useState<WorkerInfo>();
  const [settingsSectionModal, setSettingsModal] = useState(false);
  const [userID, setUserID] = useState();

  useEffect(() => {
    getData("USER").then((data) => {
      setUserID(data as any);

      getProfileInfo(setUserInformation, data);
    });
  }, []);

  return (
    <Container
      flex
      direction="column"
      height="100%"
      style={{ backgroundColor: "#1D1D1D" }}
    >
      {userInformation ? (
        <Container>
          <Spacer height={2} />
          <Container
            flex
            direction="row"
            height={80}
            alignHorizantle="center"
            alignVertical="center"
            style={{ borderBottomWidth: 2, borderBottomColor: "#fafafa" }}
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

          <Container
            flex
            direction="row"
            alignHorizantle="center"
            style={{
              padding: 15,
              backgroundColor: "#1D1D1D",
              borderBottomWidth: 2,
              borderBottomColor: "#fafafa",
            }}
          >
            <Image
              source={{
                uri: userInformation.profilePic,
              }}
              style={{ width: 120, height: 120, borderRadius: 100 }}
            />

            <AppText size={15} color="#fafafa" style={{ padding: 15 }}>
              {userInformation.name}
            </AppText>
            <AppText size={15} color="#fafafa" style={{ padding: 15 }}>
              {userInformation.afterName}
            </AppText>
          </Container>

          <Container flex direction="column" style={{ padding: 15 }}>
            <AppText size={20} color="#fafafa">
              Kort om mig
            </AppText>
            <AppText size={15} color="#fafafa">
              {userInformation.about}
            </AppText>
          </Container>

          <Container
            flex
            direction="row"
            style={{
              backgroundColor: "#1D1D1D",
              borderWidth: 2,
              borderColor: "#fafafa",
            }}
          >
            {tabs.map((tab) => {
              return (
                <Container
                  touchable
                  key={tab}
                  flex
                  width="50%"
                  height={40}
                  alignHorizantle="center"
                  alignVertical="center"
                  style={{ borderRightWidth: 2, borderRightColor: "#fafafa" }}
                  onClick={() => {
                    setSelectedTab(tab);
                  }}
                >
                  <AppText
                    color="#c9c9c9"
                    style={
                      selectedTab === tab && {
                        textDecorationLine: "underline",
                        color: "#fafafa",
                      }
                    }
                  >
                    {tab}
                  </AppText>
                </Container>
              );
            })}
          </Container>

          {selectedTab === "Info om mig" ? (
            <Container
              flex
              direction="row"
              alignHorizantle="center"
              alignVertical="center"
            >
              <Spacer height={8} />

              <Container
                flex
                direction="column"
                alignHorizantle="center"
                style={{ padding: 20 }}
              >
                <AppText size={18} color="#fafafa">
                  Ålder
                </AppText>
                <AppText size={15} color="#fafafa">
                  {userInformation.age}
                </AppText>
              </Container>

              <Container
                flex
                direction="column"
                alignHorizantle="center"
                style={{ padding: 20 }}
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
                <AppText size={15} color="#fafafa">
                  Fjällbacka
                </AppText>
              </Container>

              <Container
                flex
                direction="column"
                alignHorizantle="center"
                style={{ padding: 20 }}
              >
                <AppText size={18} color="#fafafa">
                  Telefon
                </AppText>
                <AppText size={15} color="#fafafa">
                  +46
                </AppText>
              </Container>
            </Container>
          ) : (
            <Container
              flex
              direction="column"
              alignHorizantle="center"
              alignVertical="center"
              style={{ padding: 20 }}
            >
              <Spacer height={1} />

              <AppText size={18} color="#fafafa">
                {userInformation.previousJobs}
              </AppText>
            </Container>
          )}
        </Container>
      ) : (
        <Container
          flex
          height="100%"
          width="100%"
          alignHorizantle="center"
          alignVertical="center"
        >
          <ActivityIndicator size="large" color="#fff" />
        </Container>
      )}

      <SettingsSection
        settingsModal={settingsSectionModal}
        closeModal={() => {
          setSettingsModal(false);
        }}
        profileInfo={userInformation}
      />
    </Container>
  );
};

export default ProfileScreen;
