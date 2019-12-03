import React, { Component } from "react";
import { View, Text } from "react-native";

import Header from "../components/Header";

class FeedsScreen extends Component {
  static navigationOptions = {
    headerTitle: () => <Header />,
    headerTitleAlign: "Center"
  };
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View>
        <Text> FeedsScreen </Text>
      </View>
    );
  }
}

export default FeedsScreen;
