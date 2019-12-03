import React from "react";
import { Platform } from "react-native";
import {
  createStackNavigator,
  createBottomTabNavigator
} from "react-navigation";

import TabBarIcon from "../app/components/TabBarIcon";
import FeedsScreen from "../app/screens/FeedsScreen";
import MoviesScreen from "../app/screens/MoviesScreen";
import ProfileScreen from "../app/screens/ProfileScreen";

const config = Platform.select({
  web: { headerMode: "screen" },
  default: {}
});

const FeedsStack = createStackNavigator(
  {
    Feeds: FeedsScreen
  },
  config
);

FeedsStack.navigationOptions = {
  tabBarLabel: "Feeds",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === "ios"
          ? `ios-information-circle${focused ? "" : "-outline"}`
          : "md-information-circle"
      }
    />
  )
};

FeedsStack.path = "";

const MoviesStack = createStackNavigator(
  {
    Movies: MoviesScreen
  },
  config
);

MoviesStack.navigationOptions = {
  tabBarLabel: "Movies",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "ios" ? "ios-link" : "md-link"}
    />
  )
};

MoviesStack.path = "";

const ProfileStack = createStackNavigator(
  {
    Profile: ProfileScreen
  },
  config
);

ProfileStack.navigationOptions = {
  tabBarLabel: "Profile",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "ios" ? "ios-options" : "md-options"}
    />
  )
};

ProfileStack.path = "";

const tabNavigator = createBottomTabNavigator({
  FeedsStack,
  MoviesStack,
  ProfileStack
});

tabNavigator.path = "";

export default tabNavigator;
