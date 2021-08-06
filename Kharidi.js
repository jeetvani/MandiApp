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

class Kharidi extends React.Component{
render(){
    return(
        <View style={{ alignItems: "center" }}>
        <ScrollView style={{  }}>
          <View style={{ flex: 1 }}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("गेहू खरीदी");
              }}
            >
              <Image
                style={{ width: 100, height: 70 }}
                source={require("./assets/gehu.png")}
              />
              <Text></Text>
              <Text
                style={{ fontWeight: "bold", fontSize: 16, textAlign: "center" }}
              >
                {" "}
                गेहू
              </Text>
            </TouchableOpacity>
            <Text></Text>
            <Text></Text>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("कपास खरीदी");
              }}
            >
              <Image
                style={{ height: 80, width: 160 }}
                source={require("./cotton.png")}
              />
              <Text></Text>
              <Text
                style={{ fontWeight: "bold", fontSize: 16, textAlign: "center" }}
              >
                {" "}
                कपास
              </Text>
            </TouchableOpacity>
            <Text></Text>
            <Text></Text>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("उड़द खरीदी");
              }}
            >
              <Image
                source={{
                  height: 80,
                  width: 160,
                  uri: "https://www.futuroorganic.com/wp-content/uploads/2020/03/Black-Urad-dal.jpg",
                }}
              />
              <Text></Text>
              <Text
                style={{ fontWeight: "bold", fontSize: 16, textAlign: "center" }}
              >
                उड़द
              </Text>
            </TouchableOpacity>
            <Text></Text>
            <Text></Text>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("मूंगफली खरीदी");
              }}
            >
              <Image
                style={{ height: 80, width: 160 }}
                source={require("./mungfali.png")}
              />
              <Text></Text>
              <Text
                style={{ fontWeight: "bold", fontSize: 16, textAlign: "center" }}
              >
                मूंगफली
              </Text>
            </TouchableOpacity>
            <Text></Text>
            <Text></Text>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("अरण्डी खरीदी");
              }}
            >
              <Image
                source={{
                  height: 80,
                  width: 160,
                  uri: "https://jariboti.pk/wp-content/uploads/2020/03/Castor-Bean-Tukhm-e-Arandi-rohanishop.png",
                }}
              />
              <Text></Text>
              <Text
                style={{ fontWeight: "bold", fontSize: 16, textAlign: "center" }}
              >
                अरण्डी
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("चना खरीदी");
              }}
            >
              <Image
                source={{
                  height: 80,
                  width: 160,
                  uri: "https://image.shutterstock.com/image-photo/heap-black-chick-pea-kala-260nw-712884847.jpg",
                }}
              />
              <Text></Text>
              <Text
                style={{
                  fontWeight: "bold",
                  fontSize: 16,
                  textAlign: "center",
                }}
              >
                {" "}
                चना
              </Text>
            </TouchableOpacity>
          </View>
  
          <View style={{ flex: 1 }}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("ज्वार खरीदी");
              }}
            >
              <Image
                source={{
                  height: 80,
                  width: 160,
                  uri: "https://img3.exportersindia.com/product_images/bc-full/2018/7/3323768/sorghum-seeds-1531380715-4094036.png",
                }}
              />
              <Text></Text>
              <Text
                style={{ fontWeight: "bold", fontSize: 16, textAlign: "center" }}
              >
                {" "}
                ज्वार
              </Text>
            </TouchableOpacity>
            <Text></Text>
            <Text></Text>
  
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("मक्की खरीदी");
              }}
            >
              <Image
                source={{
                  height: 80,
                  width: 160,
                  uri: "https://i.pinimg.com/originals/ea/fa/f4/eafaf462dd58fdab1603da644fd1f7c8.gif",
                }}
              />
              <Text></Text>
              <Text
                style={{ fontWeight: "bold", fontSize: 16, textAlign: "center" }}
              >
                {" "}
                मक्की
              </Text>
            </TouchableOpacity>
            <Text></Text>
            <Text></Text>
  
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("मूंग खरीदी");
              }}
            >
              <Image
                source={{
                  height: 80,
                  width: 160,
                  uri: "https://5.imimg.com/data5/NG/VE/QS/GLADMIN-11590084/1770-1-500x500.png",
                }}
              />
              <Text></Text>
              <Text
                style={{ fontWeight: "bold", fontSize: 16, textAlign: "center" }}
              >
                {" "}
                मूंग
              </Text>
            </TouchableOpacity>
            <Text></Text>
            <Text></Text>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("सोयाबीन खरीदी");
              }}
            >
              <Image
                source={{
                  height: 80,
                  width: 160,
                  uri: "https://c0.klipartz.com/pngpicture/469/0/gratis-png-soja.png",
                }}
              />
              <Text></Text>
              <Text
                style={{ fontWeight: "bold", fontSize: 16, textAlign: "center" }}
              >
                {" "}
                सोयाबीन
              </Text>
            </TouchableOpacity>
            <Text></Text>
            <Text></Text>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("बाजरा खरीदी");
              }}
            >
              <Image
                source={{
                  height: 80,
                  width: 160,
                  uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKzUbxrxgJdWSu88tTZyHm13sRQS8K2iOnjg&usqp=CAU",
                }}
              />
              <Text></Text>
              <Text
                style={{ fontWeight: "bold", fontSize: 16, textAlign: "center" }}
              >
                बाजरा
              </Text>
            </TouchableOpacity>
            <Text></Text>
            <Text></Text>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("तुअर खरीदी");
              }}
            >
              <Image
                source={{
                  height: 80,
                  width: 160,
                  uri: "https://d3pc1xvrcw35tl.cloudfront.net/images/686x514/tuar-detail-k_202001357547.jpg",
                }}
              />
              <Text></Text>
              <Text
                style={{ fontWeight: "bold", fontSize: 16, textAlign: "center" }}
              >
                तुअर
              </Text>
            </TouchableOpacity>
            <Text></Text>
            <Text></Text>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("चवला खरीदी");
              }}
            >
              <Image
                source={{
                  height: 80,
                  width: 160,
                  uri: "https://image.shutterstock.com/image-photo/black-eyed-peas-beans-canvas-260nw-240764812.jpg",
                }}
              />
              <Text></Text>
              <Text
                style={{
                  fontWeight: "bold",
                  fontSize: 16,
                  textAlign: "center",
                }}
              >
                चवला
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    )
}
}
export default Kharidi;