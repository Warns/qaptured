import React, { Component } from "react";
import { View, Image, Text } from "react-native";

class Header extends Component {
  render() {
    return (
      <Image
        source={require("../../assets/logo.png")}
        style={{ width: 157.8, height: 32, alignSelf: "center" }}
      />
    );
  }
}

export default Header;
