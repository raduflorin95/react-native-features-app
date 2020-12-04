import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createDrawerNavigator } from "react-navigation-drawer";

import PlacesScreen from "../screens/PlacesScreen";
import PlaceDetailScreen from "../screens/PlaceDetailScreen";
import NewPlaceScreen from "../screens/NewPlaceScreen";

import Colors from "../constants/Colors";

const defaultNavOptions = {
  headerStyle: {
    backgroundColor: Platform.OS === "android" ? Colors.primary : "",
  },
  //   headerTitleStyle: {
  //     fontFamily: "open-sans-bold",
  //   },
  //   headerBackTitleStyle: {
  //     fontFamily: "open-sans",
  //   },
  headerTintColor: Platform.OS === "android" ? "white" : Colors.primary,
};

const MapsNavigator = createStackNavigator(
  {
    Places: PlacesScreen,
    PlaceDetail: PlaceDetailScreen,
    NewPlace: NewPlaceScreen,
  },
  {
    defaultNavigationOptions: defaultNavOptions,
  }
);

const MainNavigator = createDrawerNavigator(
  {
    Map: { screen: MapsNavigator, navigationOptions: { title: "Maps" } },
  },
  {
    contentOptions: {
      activeTintColor: Colors.primary,
    },
  }
);

export default createAppContainer(MainNavigator);
