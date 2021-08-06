import React, { useEffect, useState } from "react";
import "react-native-gesture-handler";

import {
  ActivityIndicator,
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
  ToastAndroid,
} from "react-native";
import { enableScreens } from "react-native-screens";
enableScreens();

import "react-native-gesture-handler";
// In a React Native application
import Parse from "parse/react-native.js";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
//Initializing the SDK

Parse.setAsyncStorage(AsyncStorage);
//Paste below the Back4App Application ID AND the JavaScript KEY
Parse.initialize(
  "ROoOLieWxN4ceAgEr4VtrNwmrmKQXPPzPgGOisgd",
  "uvb8U3GKKp20KXA2Li03mYSEwTZdPuV3INCyqPaS"
);
//Point to Back4App Parse API address
Parse.serverURL = "https://parseapi.back4app.com/";

class Profit_Loass extends React.Component {
  state = {
    color:'red',
  isnegeative:'+',
    totalprofit: 0,
    totalprofitpercentage: 0,
    dataloading: false,
  };

  render() {
    return (
      <View>
        
        <View>
          
         <View>
         <View
            style={{
              paddingTop: 4,
              backgroundColor: "black",
              margin: 15,
              borderRadius: 16,
            }}
           >
            <Text style={{ fontWeight:'bold',textAlign: "center", fontSize: 40, color: this.state.color }}>
              {this.state.isnegeative} ₹ {parseInt(this.state.totalprofit)}
            </Text>
            <Text style={{ color: "gray", textAlign: "center" }}>
              ------------------------------------------------------------------------------------------
            </Text>
            <Text style={{ color: "blue", fontWeight:'bold',textAlign: "center", fontSize: 40 }}>
              {this.state.isnegeative} {parseInt(this.state.totalprofitpercentage)}%
            </Text>
            <Text style={{ color: "gray", textAlign: "center" }}>
              ------------------------------------------------------------------------------------------
            </Text>

            <Text></Text>
          </View>
          <View style={{
              paddingTop: 2,
              backgroundColor: "black",
              margin: 5,
              borderRadius: 10,
            }}
          >
            </View>
          </View>
          
        </View>
      </View>
    );
  }
}

export default Profit_Loass;
