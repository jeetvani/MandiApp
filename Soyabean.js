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
import firebase from 'firebase';
const firebaseConfig = {
  apiKey: "AIzaSyD3yhbWUSflgRV0MYV4X2eyXw9-SXDZbkw",
  authDomain: "mandiapp83-f3c73.firebaseapp.com",
  databaseURL: "https://mandiapp83-f3c73-default-rtdb.firebaseio.com",
  projectId: "mandiapp83-f3c73",
  storageBucket: "mandiapp83-f3c73.appspot.com",
  messagingSenderId: "285979018863",
  appId: "1:285979018863:web:101e49cefe31ae0a06ef9a",
  measurementId: "G-7DDXENRZW1"
};
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}else {
  firebase.app(); // if already initialized, use that one
}

import "react-native-gesture-handler";
// In a React Native application
import AsyncStorage from "@react-native-async-storage/async-storage";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
//Initializing the SDK

class Soyabean extends React.Component {
  

  async createsoyabeankharidi() {
    try {
      //create a new Parse Object instance
      var vajanup = parseInt(this.state.vajan);
      var bhavup = parseInt(this.state.bhav);
      var vikretakanaam =this.state.vikretakanaam;

      this.setState({addingkharidi:false})
    
      if ((bhavup==0)) {
        this.setState({addingkharidi:true})
        alert("कृपया भाव डाले 🙏");

      }
       else {
        if ((vajanup==0)) {
          this.setState({addingkharidi:true})
          alert("कृपया वजन  डाले 🙏");
        }
        else{
          if((vikretakanaam=="")){
            alert("कृपया विक्रेता का नाम डाले 🙏")
            this.setState({addingkharidi:true})
          }
else{
     
var dae = new Date().getDate().toLocaleString();
var month = new Date().getMonth() + 1;
var year = new Date().getFullYear().toLocaleString();
      var date = dae+"/"+month.toLocaleString()+"/"+year;
      this.setState({idtoset:Math.floor(Math.random() * 1000000)})
var dae = new Date().getDate().toLocaleString();
var month = new Date().getMonth() + 1;
var year = new Date().getFullYear().toLocaleString();
      var date = dae+"/"+month.toLocaleString()+"/"+year;
      function uuidv4() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
          var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
          return v.toString(16);
        });
      }
      
      console.log(uuidv4());

      firebase
      firebase
    .database()
    .ref('soyabeanKharidi/' + 'id:'+uuidv4())
    .set({
      vikretakanaam:this.state.vikretakanaam,
      vajan:this.state.vajan,
      bhav:this.state.bhav,
      Date:date,
      Kul_Raashi:this.state.kulrashi,
      Mobile_Number:this.state.mobilenumber,
      Bank_Acc_Number:this.state.bankaccnumber,
      Kharidi:'Kharidi',
    });
setTimeout(()=>{this.setState({addingkharidi:true})},300)

        alert("खरीदी जोड़ी गयी ✔️");
             }      }}
    } catch (error) {
      console.log("Error saving new person: ", error);
    }
  }

  state = {
    addingkharidi:true,
    vajan: 0,
    bhav: 1,
    vikretakanaam: "",
    kulrashi: 0,
    mobilenumber: "",
    vajanstr: "vajan",
    bhavstr: "0",
    bankaccnumber:"",
  };
  componentDidMount() {
    this._interval = setInterval(() => {
      this.setState({ kulrashi: this.state.vajan * this.state.bhav });
    }, 500);
  }
  componentWillUnmount() {
    clearInterval(this._interval);
  }

  render() {
   
 
    return (
      
      <View>
      {this.state.addingkharidi?
        <View>
          <View style={{ paddingHorizontal: 50 }}>
            <TextInput
              onChangeText={(number) => this.setState({ vajan: number })}
              keyboardType="numeric"
              placeholder="कुल वजन"
              style={{
                paddingHorizontal: 30,
                fontSize: 20,
                fontWeight: "bold",
                textAlign: "center",
                borderBottomWidth: 1,
              }}
            ></TextInput>
            <Text></Text>
            <Text style={{fontWeight:"bold",fontSize:30,textAlign:'center'}}>
         भाव:{this.state.bhav}
       </Text>
        <Text></Text>
            <TextInput
            onChangeText={(text) => this.setState({ vikretakanaam: text })}
              placeholder="विक्रेता का नाम"
              style={{
                paddingHorizontal: 30,
                fontSize: 20,
                fontWeight: "bold",
                textAlign: "center",
                borderBottomWidth: 1,
              }}
            ></TextInput>
            <Text></Text>
            <TextInput
              onChangeText={(text) => this.setState({ mobilenumber: text })}
              keyboardType="numeric"
              placeholder="मोबाइल नंबर"
              style={{
                paddingHorizontal: 30,
                fontSize: 20,
                fontWeight: "bold",
                textAlign: "center",
                borderBottomWidth: 1,
              }}
            ></TextInput>
            <Text></Text>
            <TextInput
              onChangeText={(text) => this.setState({ bankaccnumber: text })}
              
              placeholder="बैंक अकाउंट नंबर "
              style={{
                paddingHorizontal: 30,
                fontSize: 20,
                fontWeight: "bold",
                textAlign: "center",
                borderBottomWidth: 1,
              }}
            ></TextInput>
         
          </View>
          <Text></Text>
            
          <View style={{ flexDirection: "row" }}>
            <View
              style={{ flex: 1, paddingHorizontal: 6, alignContent: "center" }}
            >
              <TouchableOpacity
                style={{
                  borderColor: "lightgreen",
                  borderWidth: 1,
                  borderRadius: 10,
                }}
                onPress={this.createsoyabeankharidi.bind(this)}
              >
                <Text
                  style={{
                    textAlign: "center",
                    fontWeight: "bold",
                    fontSize: 20,
                    backgroundColor: "lightgreen",
                    padding: 5,
                  }}
                >
                  खरीदी जोड़े 📌
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <Text> </Text>
          <Text style={{ textAlign: "center", fontSize: 40 }}>
            ₹{this.state.kulrashi}
          </Text>
        </View>: <View style={{justifyContent:'center',alignContent:'center',alignItems:"center"}}>
       <Image style={{width:200,height:160,alignItems:'center',justifyContent:'center',marginTop:140,alignContent:'center'}} source={require('./assets/loader.gif')}/>
     </View>
      }
        <Text></Text>
      </View>
    )
    }
}

export default Soyabean;
