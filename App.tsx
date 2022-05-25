import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Provider as PaperProvider } from "react-native-paper";
import { getData, saveData } from "./src/helpers/AsyncStorageFuncs";
import AuthStack from "./src/screens/stack-navigator/AuthStack";
import CompanyStack from "./src/screens/stack-navigator/CompanyStack";
import WorkerStack from "./src/screens/stack-navigator/WorkerStack";
import { UserStatusType } from "./types/user";

const App = () => {
  console.disableYellowBox = true;
  const [userStatus, setUserStatus] = useState<UserStatusType>("none");
  // saveData("TYPE", "");
  // saveData("USER", "");

  useEffect(() => {
    getData("TYPE").then((type) => {
      console.log(type);
      if (!type) {
        setUserStatus("none");
      } else {
        setUserStatus(type as UserStatusType);
      }
    });
  }, []);

  const displayApp = () => {
    switch (userStatus) {
      case "none":
        return <AuthStack />;
      case "company":
        return <CompanyStack />;
      case "worker":
        return <WorkerStack />;
    }
  };

  return (
    <PaperProvider>
      <>{displayApp()}</>
    </PaperProvider>
  );
};

export default App;
