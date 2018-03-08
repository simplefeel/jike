import React, { Component } from "react";
import {
  StyleSheet,
  View,
  TouchableHighlight,
  FlatList,
  Image,
  Text,
  ActivityIndicator
} from "react-native";

import CardBox from "./CardBox.js";

class ListView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          key: "0",
          title: "",
          name: "不好笑便利店",
          tag: "热门内容",
          url: "1.jpg"
        },
        {
          key: "1",
          title: "",
          name: "一张图读懂社会热点",
          tag: "热门内容",
          url: "2.jpg"
        },
        {
          key: "2",
          title: "",
          name: "直男这种生物",
          tag: "热门内容",
          url: "5.jpg"
        },
        {
          key: "3",
          title: "",
          name: "今天又啥好笑的",
          tag: "热门内容",
          url: "4.jpeg"
        }
      ],
      refreshing: false,
      showFoot: false
    };
  }
  _renderItem = ({ item }) => <CardBox item={item} />;

  onRefresh = () => {
    const { data, refreshing } = this.state;
    this.setState({ refreshing: true });
    setTimeout(() => {
      data.unshift({
        key: 4,
        title: "",
        name: "今天又啥好笑的",
        tag: "热门内容",
        url: "4.jpg"
      });
      this.setState({ refreshing: false, data });
    }, 1000);
  };

  onEndReached = () => {
    const { data } = this.state;
    setTimeout(() => {
      data.push({
        key: 5,
        title: "",
        name: "大公司新闻",
        tag: "热门内容",
        url: "1.jpg"
      });
    }, 1000);
    this.setState({ data });
  };

  _renderFooter = () => {
    return <ActivityIndicator animating={true} color="#3e9ce9" size="large" />;
  };

  render() {
    const { data, refreshing } = this.state;
    return (
      <FlatList
        data={data}
        renderItem={this._renderItem}
        onRefresh={this.onRefresh}
        refreshing={refreshing}
        onEndReachedThreshold={0.01}
        onEndReached={this.onEndReached}
        ListFooterComponent={this._renderFooter}
      />
    );
  }
}

export default ListView;
