import React, { useEffect, useState } from "react";
import "react-native-gesture-handler";
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

import AsyncStorage from "@react-native-async-storage/async-storage";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
//Initializing the SDK

class MandiTax extends React.Component {
  state = {
    gehuwrittenbhav: 0,
    gehuobtainedbhav:0,
    makkiwrittenbhav: 0,
makkiobtainedbhav:0,
kapaswrittenbhav: 0,
kapasobtainedbhav:0,
mungfaliwrittenbhav: 0,
mungfaliobtainedbhav:0,
mungwrittenbhav: 0,
mungobtainedbhav:0,
jawarwrittenbhav: 0,
jawarobtainedbhav:0,
bajrawrittenbhav: 0,
bajraobtainedbhav:0,
soyabeanwrittenbhav: 0,
soyabeanobtainedbhav:0,
chawlawrittenbhav: 0,
chawlaobtainedbhav:0,
uradwrittenbhav: 0,
uradobtainedbhav:0,
tuarwrittenbhav: 0,
tuarobtainedbhav:0,

  };
  
  updateghubhav(){
    firebase
      .database()
      .ref("MandiTax/gehu")
      .set({
        Gehu: (this.state.gehuwrittenbhav * 1.017).toFixed(2),
      });
      

  };
  updatemakkibhav(){
    firebase
      .database()
      .ref("MandiTax/makki")
      .set({
        makki: (this.state.makkiwrittenbhav * 1.017).toFixed(2),
      });
      

  };
  updatetuarbhav= ()=>{
    firebase
      .database()
      .ref("MandiTax/tuar")
      .set({
        tuar: (this.state.tuarwrittenbhav * 1.017).toFixed(2),
      });
      

  };
   updateuradbhav = () => {
    firebase
      .database()
      .ref("MandiTax/urad")
      .set({
        urad: (this.state.uradwrittenbhav * 1.017).toFixed(2),
      });
      

  };
   updatemungfalibhav = () => {
    firebase
      .database()
      .ref("MandiTax/mungfali")
      .set({
        mungfali: (this.state.mungfaliwrittenbhav * 1.017).toFixed(2),
      });
      

  };
   updatemungbhav  ()  {
    firebase
      .database()
      .ref("MandiTax/mung")
      .set({
        mung: (this.state.mungwrittenbhav * 1.017).toFixed(2),
      });
      

  };
   updatechawlabhav = () => {
    firebase
      .database()
      .ref("MandiTax/chawla")
      .set({
        chawla: (this.state.chawlawrittenbhav * 1.017).toFixed(2),
      });
      

  };
  updatekapasbhav  ()  {
    firebase
      .database()
      .ref("MandiTax/kapas")
      .set({
        kapas: (this.state.kapaswrittenbhav * 1.017).toFixed(2),
      });
      

  };
   updatesoyabeanbhav  ()  {
    firebase
      .database()
      .ref("MandiTax/soyabean")
      .set({
        soyabean: (this.state.soyabeanwrittenbhav * 1.017).toFixed(2),
      });
      

  };
 
  render() {
  setTimeout(() => {
    var starCountRef = firebase.database().ref('MandiTax/');
  starCountRef.on('value', (snapshot) => {
    const data = snapshot.val();
    this.setState({makkiobtainedbhav:data.makki.makki,tuarobtainedbhav:data.tuar.tuar,chawlaobtainedbhav:data.chawla.chawla,mungfaliobtainedbhav:data.mungfali.mungfali,mungobtainedbhav:data.mung.mung, kapasobtainedbhav:data.kapas.kapas,soyabeanobtainedbhav:data.soyabean.soyabean,gehuobtainedbhav:data.gehu.Gehu});
    
  });
  },1000 ); 
      
    return (
      
      <ScrollView>
        <View
          style={{
            margin: 8,
            backgroundColor: "gray",
            borderColor: "black",
            borderRadius: 4,
            borderWidth: 2,
          }}
        >
          <View
            style={{
              alignItems: "center",
              paddingVertical: 5,
              borderBottomColor: "black",
              borderBottomWidth: 1,
            }}
          >
            <Text style={{ color: "white", fontSize: 24 }}>
              {" "}
              गेहू :{this.state.gehuobtainedbhav}₹/कुंटल{" "}
            </Text>
          </View>
          <Text></Text>
          <View style={{ flexDirection: "row" }}>
            <View style={{ flex: 1, alignItems: "center", paddingBottom: 5 }}>
              <TextInput
                placeholderTextColor="black"
                placeholder=" भाव यहाँ डाले  "
                keyboardType="number-pad"
                onChangeText={(text) => {
                  this.setState({ gehuwrittenbhav: text });
                }}
                style={{
                  margin: 3,
                  borderColor: "black",
                  borderWidth: 1,
                  fontSize: 18,
                }}
              ></TextInput>
            </View>
            <View style={{ flex: 1, alignItems: "center" }}>
              <Text style={{ fontSize: 14 }}>मंडी टैक्स :0.0015</Text>
            </View>
            <View style={{ flex: 1, alignItems: "center" }}>
              <Text style={{ fontSize: 14 }}>मंडी टैक्स :0.002</Text>
            </View>
          </View>
          <Button
            color="green"
            onPress={this.updateghubhav.bind(this)}
            title="भाव अपडेट करे "
          />
          <Text></Text>
        </View>
<Text></Text>
<View
style={{
  margin: 8,
  backgroundColor: "gray",
  borderColor: "black",
  borderRadius: 4,
  borderWidth: 2,
}}
>
<View
  style={{
    alignItems: "center",
    paddingVertical: 5,
    borderBottomColor: "black",
    borderBottomWidth: 1,
  }}
>
  <Text style={{ color: "white", fontSize: 24 }}>
    {" "}
    कपास  :{this.state.kapasobtainedbhav}₹/कुंटल{" "}
  </Text>
</View>
<Text></Text>
<View style={{ flexDirection: "row" }}>
  <View style={{ flex: 1, alignItems: "center", paddingBottom: 5 }}>
    <TextInput
      placeholderTextColor="black"
      placeholder=" भाव यहाँ डाले  "
      keyboardType="number-pad"
      onChangeText={(text) => {
        this.setState({ kapaswrittenbhav: text });
      }}
      style={{
        margin: 3,
        borderColor: "black",
        borderWidth: 1,
        fontSize: 18,
      }}
    ></TextInput>
  </View>
  <View style={{ flex: 1, alignItems: "center" }}>
    <Text style={{ fontSize: 14 }}>मंडी टैक्स :0.0015</Text>
  </View>
  <View style={{ flex: 1, alignItems: "center" }}>
    <Text style={{ fontSize: 14 }}>मंडी टैक्स :0.002</Text>
  </View>
</View>
<Button
  color="green"
  onPress={this.updatekapasbhav.bind(this)}
  title="भाव अपडेट करे "
/>
<Text></Text>
</View>
<Text></Text>
<View
style={{
  margin: 8,
  backgroundColor: "gray",
  borderColor: "black",
  borderRadius: 4,
  borderWidth: 2,
}}
>
<View
  style={{
    alignItems: "center",
    paddingVertical: 5,
    borderBottomColor: "black",
    borderBottomWidth: 1,
  }}
>
  <Text style={{ color: "white", fontSize: 24 }}>
    {" "}
    सोयाबीन :{this.state.soyabeanobtainedbhav}₹/कुंटल{" "}
  </Text>
</View>
<Text></Text>
<View style={{ flexDirection: "row" }}>
  <View style={{ flex: 1, alignItems: "center", paddingBottom: 5 }}>
    <TextInput
      placeholderTextColor="black"
      placeholder=" भाव यहाँ डाले  "
      keyboardType="number-pad"
      onChangeText={(text) => {
        this.setState({ soyabeanwrittenbhav: text });
      }}
      style={{
        margin: 3,
        borderColor: "black",
        borderWidth: 1,
        fontSize: 18,
      }}
    ></TextInput>
  </View>
  <View style={{ flex: 1, alignItems: "center" }}>
    <Text style={{ fontSize: 14 }}>मंडी टैक्स :0.0015</Text>
  </View>
  <View style={{ flex: 1, alignItems: "center" }}>
    <Text style={{ fontSize: 14 }}>मंडी टैक्स :0.002</Text>
  </View>
</View>
<Button
  color="green"
  onPress={this.updatesoyabeanbhav.bind(this)}
  title="भाव अपडेट करे "
/>
<Text></Text>
</View>
<Text></Text>
<View
style={{
  margin: 8,
  backgroundColor: "gray",
  borderColor: "black",
  borderRadius: 4,
  borderWidth: 2,
}}
>
<View
  style={{
    alignItems: "center",
    paddingVertical: 5,
    borderBottomColor: "black",
    borderBottomWidth: 1,
  }}
>
  <Text style={{ color: "white", fontSize: 24 }}>
    {" "}
    चवला  :{this.state.chawlaobtainedbhav}₹/कुंटल{" "}
  </Text>
</View>
<Text></Text>
<View style={{ flexDirection: "row" }}>
  <View style={{ flex: 1, alignItems: "center", paddingBottom: 5 }}>
    <TextInput
      placeholderTextColor="black"
      placeholder=" भाव यहाँ डाले  "
      keyboardType="number-pad"
      onChangeText={(text) => {
        this.setState({ chawlawrittenbhav: text });
      }}
      style={{
        margin: 3,
        borderColor: "black",
        borderWidth: 1,
        fontSize: 18,
      }}
    ></TextInput>
  </View>
  <View style={{ flex: 1, alignItems: "center" }}>
    <Text style={{ fontSize: 14 }}>मंडी टैक्स :0.0015</Text>
  </View>
  <View style={{ flex: 1, alignItems: "center" }}>
    <Text style={{ fontSize: 14 }}>मंडी टैक्स :0.002</Text>
  </View>
</View>
<Button
  color="green"
  onPress={this.updatechawlabhav.bind(this)}
  title="भाव अपडेट करे "
/>
<Text></Text>
</View>
<Text></Text>
<View
style={{
  margin: 8,
  backgroundColor: "gray",
  borderColor: "black",
  borderRadius: 4,
  borderWidth: 2,
}}
>
<View
  style={{
    alignItems: "center",
    paddingVertical: 5,
    borderBottomColor: "black",
    borderBottomWidth: 1,
  }}
>
  <Text style={{ color: "white", fontSize: 24 }}>
    {" "}
    मूंगफली :{this.state.mungfaliobtainedbhav}₹/कुंटल{" "}
  </Text>
</View>
<Text></Text>
<View style={{ flexDirection: "row" }}>
  <View style={{ flex: 1, alignItems: "center", paddingBottom: 5 }}>
    <TextInput
      placeholderTextColor="black"
      placeholder=" भाव यहाँ डाले  "
      keyboardType="number-pad"
      onChangeText={(text) => {
        this.setState({ mungfaliwrittenbhav: text });
      }}
      style={{
        margin: 3,
        borderColor: "black",
        borderWidth: 1,
        fontSize: 18,
      }}
    ></TextInput>
  </View>
  <View style={{ flex: 1, alignItems: "center" }}>
    <Text style={{ fontSize: 14 }}>मंडी टैक्स :0.0015</Text>
  </View>
  <View style={{ flex: 1, alignItems: "center" }}>
    <Text style={{ fontSize: 14 }}>मंडी टैक्स :0.002</Text>
  </View>
</View>
<Button
  color="green"
  onPress={this.updatemungfalibhav.bind(this)}
  title="भाव अपडेट करे "
/>
<Text></Text>
</View>
<Text></Text>
<View
style={{
  margin: 8,
  backgroundColor: "gray",
  borderColor: "black",
  borderRadius: 4,
  borderWidth: 2,
}}
>
<View
  style={{
    alignItems: "center",
    paddingVertical: 5,
    borderBottomColor: "black",
    borderBottomWidth: 1,
  }}
>
  <Text style={{ color: "white", fontSize: 24 }}>
    {" "}
    मूंग :{this.state.mungobtainedbhav}₹/कुंटल{" "}
  </Text>
</View>
<Text></Text>
<View style={{ flexDirection: "row" }}>
  <View style={{ flex: 1, alignItems: "center", paddingBottom: 5 }}>
    <TextInput
      placeholderTextColor="black"
      placeholder=" भाव यहाँ डाले  "
      keyboardType="number-pad"
      onChangeText={(text) => {
        this.setState({ mungwrittenbhav: text });
      }}
      style={{
        margin: 3,
        borderColor: "black",
        borderWidth: 1,
        fontSize: 18,
      }}
    ></TextInput>
  </View>
  <View style={{ flex: 1, alignItems: "center" }}>
    <Text style={{ fontSize: 14 }}>मंडी टैक्स :0.0015</Text>
  </View>
  <View style={{ flex: 1, alignItems: "center" }}>
    <Text style={{ fontSize: 14 }}>मंडी टैक्स :0.002</Text>
  </View>
</View>
<Button
  color="green"
  onPress={this.updatemungbhav.bind(this)}
  title="भाव अपडेट करे "
/>
<Text></Text>
</View>
<View
style={{
  margin: 8,
  backgroundColor: "gray",
  borderColor: "black",
  borderRadius: 4,
  borderWidth: 2,
}}
>
<View
  style={{
    alignItems: "center",
    paddingVertical: 5,
    borderBottomColor: "black",
    borderBottomWidth: 1,
  }}
>
  <Text style={{ color: "white", fontSize: 24 }}>
    {" "}
    तुअर :{this.state.tuarobtainedbhav}₹/कुंटल{" "}
  </Text>
</View>
<Text></Text>
<View style={{ flexDirection: "row" }}>
  <View style={{ flex: 1, alignItems: "center", paddingBottom: 5 }}>
    <TextInput
      placeholderTextColor="black"
      placeholder=" भाव यहाँ डाले  "
      keyboardType="number-pad"
      onChangeText={(text) => {
        this.setState({ tuarwrittenbhav: text });
      }}
      style={{
        margin: 3,
        borderColor: "black",
        borderWidth: 1,
        fontSize: 18,
      }}
    ></TextInput>
  </View>
  <View style={{ flex: 1, alignItems: "center" }}>
    <Text style={{ fontSize: 14 }}>मंडी टैक्स :0.0015</Text>
  </View>
  <View style={{ flex: 1, alignItems: "center" }}>
    <Text style={{ fontSize: 14 }}>मंडी टैक्स :0.002</Text>
  </View>
</View>
<Button
  color="green"
  onPress={this.updatetuarbhav.bind(this)}
  title="भाव अपडेट करे "
/>
<Text></Text>
</View>
<Text></Text>
<View
style={{
  margin: 8,
  backgroundColor: "gray",
  borderColor: "black",
  borderRadius: 4,
  borderWidth: 2,
}}
>
<View
  style={{
    alignItems: "center",
    paddingVertical: 5,
    borderBottomColor: "black",
    borderBottomWidth: 1,
  }}
>
  <Text style={{ color: "white", fontSize: 24 }}>
    {" "}
    मक्की :{this.state.makkiobtainedbhav}₹/कुंटल{" "}
  </Text>
</View>
<Text></Text>
<View style={{ flexDirection: "row" }}>
  <View style={{ flex: 1, alignItems: "center", paddingBottom: 5 }}>
    <TextInput
      placeholderTextColor="black"
      placeholder=" भाव यहाँ डाले  "
      keyboardType="number-pad"
      onChangeText={(text) => {
        this.setState({ makkiwrittenbhav: text });
      }}
      style={{
        margin: 3,
        borderColor: "black",
        borderWidth: 1,
        fontSize: 18,
      }}
    ></TextInput>
  </View>
  <View style={{ flex: 1, alignItems: "center" }}>
    <Text style={{ fontSize: 14 }}>मंडी टैक्स :0.0015</Text>
  </View>
  <View style={{ flex: 1, alignItems: "center" }}>
    <Text style={{ fontSize: 14 }}>मंडी टैक्स :0.002</Text>
  </View>
</View>
<Button
  color="green"
  onPress={this.updatemakkibhav.bind(this)}
  title="भाव अपडेट करे "
/>
<Text></Text>
</View>
<Text></Text>



      </ScrollView>
    );
  }
}
export default MandiTax;
