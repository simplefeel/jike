import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";

import ScrollableTabView, {
  DefaultTabBar
} from "react-native-scrollable-tab-view";

import ListView from "./ListView.js";

export default props => {
  return (
    <ScrollableTabView
      style={{ marginTop: 0 }}
      initialPage={0}
      tabBarUnderlineStyle={{
        backgroundColor: "#3e9ce9",
        height: 1
      }}
      tabBarActiveTextColor="#3e9ce9"
      renderTabBar={() => <DefaultTabBar tabStyle={{ paddingBottom: 0 }} />}
    >
      <View tabLabel="关注">
        <ListView {...props} />
      </View>
      <View tabLabel="推荐">
        <Image
          source={{ uri: "./1.jpeg" }}
          style={{ height: 200, width: null, flex: 1 }}
        />
      </View>
      <Text tabLabel="热门" />
    </ScrollableTabView>
  );
};

const styles = StyleSheet.create({});
