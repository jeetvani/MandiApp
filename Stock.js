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
import Gehu from "./Gehu";
import Kharidi from "./GehuKharidi";
import "react-native-gesture-handler";
// In a React Native application
import Parse from "parse/react-native.js";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Kapas from "./Kapas";
import Urad from "./Urad";
import Mungfali from "./Mungfali";
import Soyabean from "./Soyabean";
import Chawla from "./Chawla";
import Jawar from "./Jawar";
import Makki from "./Makki";
import Mung from "./Mung";
import Chana from "./Chana";
import Tuar from "./Tuar";
import {createDrawerNavigator} from '@react-navigation/drawer'
import Carousel from "react-native-snap-carousel";
//Initializing the SDK
const Drawer =createDrawerNavigator();
class Stock extends React.Component {
  async getalllstock() {
    try {
      const myitems = firebase.database().ref("Stock");
      myitems.on("value", (datasnap) => {
      console.log(datasnap.val().mung);this.setState({mungvajan: Object.values(datasnap.val().mung)})
      });

      
 } catch (error) {
      console.log(error);
    }
  }
  

  constructor(props){
    super(props);
    this.state = {
     

      activeIndex:0,
      carouselItems: [
      {
          title:"गेहू 🌾",
          text: this.state.gehuvajan,
      },
      {
          title:"कपास ☁️",
          text: this.state.kapasvajan,
      },
      {
          title:"सोयाबीन🌱",
          text: this.state.soyabeanvajan,
      },
      {
          title:"मूंग🟢",
          text: this.state.mungvajan,
      },
      {
          title:"मूंगफली",
          text: this.state.mungvajan,
      },
      {
        title:"ज्वार",
        text: this.state.jawarvajan,
    },
 
    ]
  }
}

_renderItem({item,index}){
  
  
   
  
 return (
      <View style={{
          backgroundColor:'floralwhite',
          borderRadius: 8,
          height: 500,
          padding: 50,
          marginLeft: 25,
          borderWidth:2,
          borderColor:'#f3af04',
          
          marginRight: 25, }}>
        <Text style={{fontSize: 30,fontWeight:"bold",textAlign:'center'}}>{item.title}</Text>
     <Text></Text>
        <Text style={{fontWeight:'bold',textAlign:'center',fontSize:30,fontStyle:'italic'}} >{item.text} कुंटल </Text>
      </View>

    )
}

state={gehuvajan:0,uradvajan:0,mungvajan:0,mungfalivajana:0,tuarvajan:0,jawarvajan:0,kapasvajan:0,soyabeanvajan:0}
componentDidMount() {
  setTimeout(this.getalllstock.bind(this), 1000);
}
render() {
  
    return (
  
  <SafeAreaView style={{flex: 1, backgroundColor:'black', paddingTop: 50, }}>
        <View style={{ flex: 1, flexDirection:'row', justifyContent: 'center',alignItems:'center' }}>
            <Carousel
              layout={"default"}
              ref={ref => this.carousel = ref}
              data={this.state.carouselItems}
              sliderWidth={300}
              itemWidth={300}
              renderItem={this._renderItem}
              onSnapToItem = { index => this.setState({activeIndex:index}) } />
        </View>
      </SafeAreaView>)
 
}}
export default Stock;
