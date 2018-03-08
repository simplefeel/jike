import React from "react";
import { StackNavigator, TabNavigator } from "react-navigation";
import DetailsScreen from "./pages/products";
import Main from "./pages/main";
import Category from "./pages/category";
import About from "./pages/about";
import Feedback from "./pages/feedback";
import { Platform, StyleSheet, Text, View, Image } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

const TabContainer = TabNavigator(
  {
    home: {
      screen: Main,
      navigationOptions: {
        tabBarLabel: "首页",
        tabBarIcon: ({ tintColor }) => (
          <Ionicons name="md-home" size={25} color={tintColor} />
        )
      }
    },
    vidio: {
      screen: Category,
      navigationOptions: {
        tabBarLabel: "动态",
        tabBarIcon: ({ tintColor }) => (
          <Ionicons name="md-people" size={25} color={tintColor} />
        )
      }
    },
    news: {
      screen: Feedback,
      navigationOptions: {
        tabBarLabel: "发现",
        tabBarIcon: ({ tintColor }) => (
          <Ionicons name="ios-search" size={25} color={tintColor} />
        )
      }
    },
    small: {
      screen: About,
      navigationOptions: {
        tabBarLabel: "我的",
        tabBarIcon: ({ tintColor }) => (
          <Ionicons name="ios-body" size={25} color={tintColor} />
        )
      }
    }
  },
  {
    lazy: true,
    tabBarPosition: "bottom",
    tabBarOptions: {
      activeTintColor: "#3e9ce9",
      inactiveTintColor: "#999999",
      showLabel: true,
      style: {
        backgroundColor: "#fff"
      },
      indicatorStyle: {
        opacity: 0
      },
      tabStyle: {
        padding: 3
      }
    }
  }
);

const RootStack = StackNavigator(
  {
    Home: {
      screen: TabContainer,
      navigationOptions: {
        headerLeft: null,
        headerTitle: <Text style={{ color: "#3e9ce9" }}>即刻</Text>
      }
    },
    Details: {
      screen: DetailsScreen
    }
  },
  {
    initialRouteName: "Home"
  },
  {
    headerMode: "screen",
    navigationOptions: {
      headerStyle: {
        backgroundColor: "#fff"
      },
      headerTitleStyle: {
        color: "blue",
        fontSize: 20
      },
      headerTintColor: "#fff"
    }
  }
);

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}
