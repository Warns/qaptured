import React, { Component } from "react";
import {
  View,
  FlatList,
  TouchableOpacity,
  Dimensions,
  Image,
  componentDidMount,
  Text
} from "react-native";

import DefaultHeader from "../components/DefaultHeader";
// import { FlatList } from "react-native-gesture-handler"

import { URLs } from "../helper/Constants";
import { Utils } from "../helper/Utils";

const DIMENSIONS = Dimensions.get("screen");
const HALF_SCREEN = DIMENSIONS.width * 0.5;
const IMAGE_WIDTH = (DIMENSIONS.width - 60) * 0.5;
const IMAGE_HEIGHT = (DIMENSIONS.width - 60) * 0.5 * 1.48;
const ITEM_HEIGHT = (DIMENSIONS.width - 60) * 0.5 * 1.48 + 100;
const MIDDLE = (DIMENSIONS.width - IMAGE_WIDTH * 2) / 4;

class MoviesScreen extends React.Component {
  static navigationOptions = {
    headerTitle: () => <DefaultHeader />
  };
  state = {
    items: []
  };

  componentDidMount() {
    Utils.get(URLs.movieList, this._handleMoviesListResult);
  }

  _handleMoviesListResult = answer => {
    if (answer.type === "success") {
      this.setState({
        items: answer.data.data
      });
    } else {
      console.log(answer.error);
    }
  };

  _keyExtractor = (item, index) => index + "k";

  _renderItem = ({ item, index }) => {
    return <ListItem index={index} item={item} />;
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <FlatList
          style={{}}
          data={this.state.items}
          keyExtractor={this._keyExtractor}
          renderItem={this._renderItem}
          numColumns={2}
          contentContainerStyle={{ paddingHorizontal: MIDDLE }}
        />
      </View>
    );
  }
}

export default MoviesScreen;

class ListItem extends React.Component {
  render() {
    let { item } = this.props;
    return (
      <TouchableOpacity onPress={this._onPress}>
        <View
          style={{
            width: HALF_SCREEN,
            height: ITEM_HEIGHT
          }}>
          <Image
            source={{ uri: URLs.baseURL + item.mvs_poster }}
            style={{
              width: IMAGE_WIDTH,
              height: IMAGE_HEIGHT,
              resizeMode: "cover"
            }}
          />
          <Text style={{ maxWidth: IMAGE_WIDTH }}>{item.mvs_title}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}
