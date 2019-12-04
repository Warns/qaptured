import React, { Component } from "react";
import { View, Text } from "react-native";

import DefaultHeader from "../components/DefaultHeader";

class ProfileScreen extends Component {
  static navigationOptions = {
    headerTitle: () => <DefaultHeader />
  };
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View>
        <Text> ProfileScreen </Text>
      </View>
    );
  }
}

export default ProfileScreen;
