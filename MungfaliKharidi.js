import React, { useEffect, useState } from "react";
import "react-native-gesture-handler";

import {
  ActivityIndicator,
  FlatList,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  useColorScheme,
  View,
  Button,
  Image,
  TouchableOpacity,
  Alert,
} from "react-native";
import { enableScreens } from "react-native-screens";
enableScreens();
import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyD3yhbWUSflgRV0MYV4X2eyXw9-SXDZbkw",
  authDomain: "mandiapp83-f3c73.firebaseapp.com",
  databaseURL: "https://mandiapp83-f3c73-default-rtdb.firebaseio.com",
  projectId: "mandiapp83-f3c73",
  storageBucket: "mandiapp83-f3c73.appspot.com",
  messagingSenderId: "285979018863",
  appId: "1:285979018863:web:101e49cefe31ae0a06ef9a",
  measurementId: "G-7DDXENRZW1",
};
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app(); // if already initialized, use that one
}

import "react-native-gesture-handler";
// In a React Native application
import Parse from "parse/react-native.js";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
//Initializing the SDK


class MungfaliKharidi extends React.Component {
  arr = [];

  async getmungfalikharidi() {
    try {
      const myitems = firebase.database().ref("mungfaliKharidi");
      myitems.on("value", (datasnap) => {
        this.setState({ data: Object.values(datasnap.val()) });
      });

      console.log();

      this.setState({ dataloading: false });
    } catch (error) {
      console.log(error);
    }
  }

  state = {
    dataloading: true,
    data: [],
  };
  componentDidMount() {
    setTimeout(this.getmungfalikharidi.bind(this), 1000);
  }
  render() {
    return (
      <View>
        {this.state.dataloading ? (
          <View
            style={{
              justifyContent: "center",
              alignContent: "center",
              alignItems: "center",
            }}
          >
            <Image
              style={{
                width: 150,
                height: 160,
                alignItems: "center",
                justifyContent: "center",
                marginTop: 140,
                alignContent: "center",
              }}
              source={require("./assets/loader.gif")}
            />
          </View>
        ) : (
          <View></View>
        )}
        <FlatList
          style={{ paddingVertical: 8 }}
          data={this.state.data}
          renderItem={({ item }) => (
            <View
              style={{
                borderWidth: 1,
                borderColor: "black",
                padding: 8,
                marginHorizontal: 8,
                marginVertical: 8,
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                }}
              >
                <View style={{ flex: 1 }}>
                  <Text
                    style={{ fontWeight: "bold", fontSize: 15, color: "black" }}
                  >
                    {" "}
                    {item.vikretakanaam}{" "}
                  </Text>
                </View>
                <View style={{ flex: 1 }}>
                  <Text
                    style={{ fontWeight: "bold", fontSize: 15, color: "black" }}
                  >
                    भाव : {item.bhav}
                  </Text>
                </View>
                <View>
                  <Text
                    style={{ fontWeight: "bold", fontSize: 15, color: "black" }}
                  >
                    {item.vajan} कुंटल
                  </Text>
                </View>
              </View>
              <Text></Text>
              <View
                style={{
                  flexDirection: "row",
                }}
              >
                <View style={{ flex: 1 }}>
                  <Text
                    style={{ fontWeight: "bold", fontSize: 15, color: "black" }}
                  >
                    {" "}
                    {item.Date}
                  </Text>
                </View>
                <View style={{ flex: 1 }}>
                  <Text
                    style={{ fontWeight: "bold", fontSize: 15, color: "black" }}
                  >
                    {" "}
                    ₹ {item.Kul_Raashi}{" "}
                  </Text>
                </View>
                <View>
                  <Text
                    style={{ fontWeight: "bold", fontSize: 15, color: "black" }}
                  >
                    मूंगफली
                  </Text>
                </View>
              </View>
              <Text></Text>
              <View style={{ flexDirection: "row" }}>
                <View style={{ flex: 1 }}>
                  <Text
                    style={{ fontWeight: "bold", fontSize: 15, color: "black" }}
                  >
                    {" "}
                    मो.न.{item.Mobile_Number}{" "}
                  </Text>
                </View>
                <View style={{ flex: 1 }}>
                  <Text
                    style={{ fontWeight: "bold", fontSize: 15, color: "black" }}
                  >
                    {" "}
                    बे.न.{item.Bank_Acc_Number}{" "}
                  </Text>
                </View>
              </View>
            </View>
          )}
        />
      </View>
    );
  }
}
export default MungfaliKharidi;
