import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { Image, Text } from "react-native";
import { ActivityIndicator, BottomNavigation } from "react-native-paper";
import Container from "../../components/reusable/Container";
import { db } from "../../firebase/firebaseConfig";
import { getData, saveData } from "../../helpers/AsyncStorageFuncs";
import AdScreen from "../app/company/ad/CreateAd";
import Chat from "../app/company/Chat";
import CompanyProfile from "../app/company/CompanyMainProfile";

const CompanyStack = () => {
  const [loading, setLoading] = useState(false);
  const [haveAd, setHaveAd] = useState(false);
  const [index, setIndex] = useState(2);
  const [routes] = useState([
    {
      key: "profile",
      icon: () => (
        <Image
          source={require("../../../assets/navigationIcons/profile-icon.png")}
          style={{ width: 40, height: 40 }}
        />
      ),
    },
    {
      key: "notifications",
      icon: () => (
        <Image
          source={require("../../../assets/navigationIcons/notifications-icon.png")}
          style={{ width: 33, height: 33 }}
        />
      ),
    },
    {
      key: "jobs",
      icon: () => (
        <Image
          source={require("../../../assets/navigationIcons/jobs-icon.png")}
          style={{ width: 40, height: 40 }}
        />
      ),
    },
    {
      key: "chat",
      icon: () => (
        <Image
          source={require("../../../assets/navigationIcons/chat-icon.png")}
          style={{ width: 40, height: 40 }}
        />
      ),
    },
    {
      key: "calendar",
      icon: () => (
        <Image
          source={require("../../../assets/navigationIcons/calendar-icon.png")}
          style={{ width: 40, height: 40 }}
        />
      ),
    },
  ]);

  useEffect(() => {
    setLoading(true);
    getData("USER").then((data) => {
      getDoc(doc(db, `/company/${data}/`)).then((snapchot: any) => {
        if (snapchot.data().ad) {
          setLoading(false);
          setHaveAd(true);
        } else {
          setLoading(false);
          setHaveAd(false);
        }
      });
    });
  }, []);

  const renderScene = BottomNavigation.SceneMap({
    profile: () => <CompanyProfile />,
    notifications: () => <Text>heybye</Text>,
    jobs: () => <Text>heybye</Text>,
    chat: () => <Chat />,
    calendar: () => <Text>heybye</Text>,
  });

  return (
    <>
      {loading ? (
        <Container
          height="100%"
          alignHorizantle="center"
          alignVertical="center"
          style={{ backgroundColor: "#1D1D1D" }}
        >
          <ActivityIndicator color="white" size="large" />
        </Container>
      ) : (
        <>
          {haveAd ? (
            <BottomNavigation
              navigationState={{ index, routes }}
              onIndexChange={setIndex}
              renderScene={renderScene}
              barStyle={{
                backgroundColor: "#1D1D1D",
                height: 80,
                paddingLeft: 10,
                paddingRight: 10,
              }}
            />
          ) : (
            <AdScreen />
          )}
        </>
      )}
    </>
  );
};

export default CompanyStack;
