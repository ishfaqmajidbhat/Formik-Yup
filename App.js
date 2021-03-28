import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import SignInScreen from "./screens/SignInScreen";
import "react-native-gesture-handler";
// import { NavigationContainer } from "@react-navigation/native";
// import { createStackNavigator } from "@react-navigation/stack";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import { createDrawerNavigator } from "@react-navigation/drawer";
// import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
// import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
// import { DefaultTheme, Provider as PaperProvider } from "react-native-paper";

const App = () => {
  const addData = (NewData) => {
    setData((PreviousData) => {
      return [NewData, ...PreviousData];
    });
  };
  const isvalid = true;
  return <SignInScreen addData={addData} />;
};
export default App;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
