import React from "react";
import { Image, Text } from "react-native";
import { BottomNavigation } from "react-native-paper";
import CalendarScreen from "../app/worker/CalendarScreen";
import NotificationScreen from "../app/worker/NotificationsScreen";
import ProfileScreen from "../app/worker/ProfileScreen";
import Chat from "../app/worker/Chat";
import JobsScreen from "../app/worker/JobsScreen";

const WorkerStack = () => {
  const [index, setIndex] = React.useState(2);
  const [routes] = React.useState([
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

  const renderScene = BottomNavigation.SceneMap({
    profile: () => <ProfileScreen />,
    notifications: () => <NotificationScreen />,
    jobs: () => <JobsScreen />,
    chat: () => <Chat />,
    calendar: () => <CalendarScreen />,
  });

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
      barStyle={{ backgroundColor: "#1D1D1D", height: 80 }}
    />
  );
};

export default WorkerStack;
