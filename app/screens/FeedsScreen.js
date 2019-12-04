import React, { Component } from "react";
import { View, Text } from "react-native";

import DefaultHeader from "../components/DefaultHeader";

class FeedsScreen extends Component {
  static navigationOptions = {
    headerTitle: () => <DefaultHeader />,
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
