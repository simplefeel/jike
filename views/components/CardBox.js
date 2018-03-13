import React, { Component } from "react";
import {
  StyleSheet,
  View,
  TouchableHighlight,
  FlatList,
  Image
} from "react-native";
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Thumbnail,
  Text,
  Button,
  Left,
  Icon,
  Body,
  Right
} from "native-base";
import { withNavigation } from "react-navigation";

class CardBox extends Component {
  render() {
    const { item } = this.props;
    const imageUrls = [
      require("../assets/1.jpg"),
      require("../assets/3.jpg"),
      require("../assets/5.jpg"),
      require("../assets/4.jpg"),
      require("../assets/4.jpg"),
      require("../assets/1.jpg")
    ];
    return (
      <Card>
        <CardItem>
          <Left>
            <Thumbnail source={imageUrls[item.key]} />
            <Body>
              <Text>{item.name}</Text>
              <Text note style={{ fontSize: 12, paddingTop: 5 }}>
                {item.tag}
              </Text>
            </Body>
          </Left>
        </CardItem>
        <CardItem cardBody>
          <Image
            source={imageUrls[item.key]}
            style={{ height: 200, width: null, flex: 1 }}
          />
        </CardItem>
        <CardItem>
          <Left>
            <Button transparent>
              <Icon active name="thumbs-up" />
              <Text>12 Likes</Text>
            </Button>
          </Left>
          <Body>
            <Button
              transparent
              onPress={() => this.props.navigation.navigate("Details")}
            >
              <Icon active name="chatbubbles" />
              <Text>4 Comments</Text>
            </Button>
          </Body>
          <Right>
            <Text>11h ago</Text>
          </Right>
        </CardItem>
      </Card>
    );
  }
}

export default withNavigation(CardBox);
