import React, { Component } from "react";
import { View, Image, Text } from "react-native";

class DefaultHeader extends Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center" }}>
        <Image
          source={require("../../assets/logo.png")}
          style={{ width: 161, height: 32, alignSelf: "center" }}
        />
      </View>
    );
  }
}

export default DefaultHeader;
