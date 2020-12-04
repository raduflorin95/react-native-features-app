import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import HeaderButton from "../components/UI/HeaderButton";

import PLACES from "../data/dummy-data";

const PlacesScreen = (props) => {
  return (
    <FlatList
      data={PLACES}
      keyExtractor={(item) => item.id}
      renderItem={(itemData) => (
        <View>
          <Text>{itemData.item.title}</Text>
        </View>
      )}
    />
  );
};

PlacesScreen.navigationOptions = (navData) => {
  return {
    headerTitle: "All Places",
    headerLeft: (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Menu"
          iconName={Platform.OS === "android" ? "md-menu" : "ios-menu"}
          onPress={() => {
            navData.navigation.toggleDrawer();
          }}
        />
      </HeaderButtons>
    ),
  };
};

const styles = StyleSheet.create({});

export default PlacesScreen;
