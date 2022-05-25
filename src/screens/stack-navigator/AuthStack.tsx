import React from "react";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import RegistrationPage from "../auth/RegistrationPage";
import Login from "../auth/Login";
import WelcomeScreen from "../WelcomePage";
import Signup from "../auth/Signup";

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="welcomeScreen" component={WelcomeScreen} />
        <Stack.Screen name="registrationPage" component={RegistrationPage} />
        <Stack.Screen
          name="loginCompany"
          component={(props) => (
            <Login type="company" navigation={props.navigation} />
          )}
        />
        <Stack.Screen
          name="loginWorker"
          component={(props) => (
            <Login type="worker" navigation={props.navigation} />
          )}
        />
        <Stack.Screen
          name="signupWorker"
          component={(props) => (
            <Signup type="worker" navigation={props.navigation} />
          )}
        />
        <Stack.Screen
          name="signupCompany"
          component={(props) => (
            <Signup type="company" navigation={props.navigation} />
          )}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AuthStack;
