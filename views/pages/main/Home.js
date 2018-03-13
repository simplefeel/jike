import React from "react";
import { Button, View, Text, StyleSheet } from "react-native";
import { StackNavigator } from "react-navigation";
import ScrollableTabView from "../../components/Tabs.js";

export default class HomeScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <ScrollableTabView />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#fff"
  }
});
