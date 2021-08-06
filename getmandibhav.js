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
import {
  Card,
  CardTitle,
  CardContent,
  CardAction,
  CardButton,
  CardImage,
} from "react-native-cards";
import "react-native-gesture-handler";

class Getmandibhav extends React.Component {
  async getmakkikharidi() {
    try {
      const myitems = firebase.database().ref("Bhavupdate");
      myitems.on("value", (datasnap) => {
        this.setState({ chanaprice: datasnap.val().Chana });
        this.setState({ soyabeanprice: datasnap.val().Soyabean }),
          this.setState({ kapasprice: datasnap.val().Kapas });
          this.setState({ cottonoilcakeprice: datasnap.val().Cottonoilcake });
          this.setState({gehuprice:datasnap.val().Gehu})
      });

      console.log(this.state.chanaprice);

      this.setState({ dataloading: false });
    } catch (error) {
      console.log(error);
    }
  }

  state = {
    dataloading: true,
    chanaprice: "",
    soyabeanprice: "",
    kapasprice: "",
    cottonoilcakeprice:'0',
    gehuprice:'0'
  };
  componentDidMount() {
    setTimeout(this.getmakkikharidi.bind(this), 1000);
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
          <ScrollView>
            <Card>
              <CardImage
                source={{
                  uri: "https://images.indianexpress.com/2020/04/kala-chana_1200.jpg",
                }}
              />

              <CardContent>
                <Text
                  style={{
                    textAlign: "center",
                    fontSize: 24,
                    fontWeight: "bold",
                  }}
                >
                  चना :{this.state.chanaprice}₹/कुंटल{" "}
                </Text>
              </CardContent>
            </Card>
            <Text></Text>
            <Card>
              <CardImage
                source={{
                  uri: "https://img2.exportersindia.com/product_images/bc-full/2019/3/6246796/soybean-seed-1553509164-4809917.jpeg",
                }}
              />

              <CardContent>
                <Text
                  style={{
                    textAlign: "center",
                    fontSize: 24,
                    fontWeight: "bold",
                  }}
                >
                  सोयाबीन :{this.state.soyabeanprice}₹/कुंटल{" "}
                </Text>
              </CardContent>
            </Card>
            <Text></Text>
            <Card>
              <CardImage
                source={{
                  uri: "https://static.fibre2fashion.com/Newsresource/images/270/shutterstock-281842232_281960.jpg",
                }}
              />

              <CardContent>
                <Text
                  style={{
                    textAlign: "center",
                    fontSize: 24,
                    fontWeight: "bold",
                  }}
                >
                  कपास :{this.state.kapasprice}₹/कुंटल{" "}
                </Text>
              </CardContent>
            </Card>
            <Text></Text>
            <Card>
              <CardImage
                source={{
                  uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4o5JNzrm1Q2WWjgeS1yT3IaMY2UWiemY7_w&usqp=CAU",
                }}
              />

              <CardContent>
                <Text
                  style={{
                    textAlign: "center",
                    fontSize: 24,
                    fontWeight: "bold",
                  }}
                >
                  कॉटन सीड आयल केक :{this.state.cottonoilcakeprice}₹/कुंटल{" "}
                </Text>
              </CardContent>
            </Card>
            <Text></Text>
            <Card>
              <CardImage
                source={{
                  uri:'https://www.agweek.com/incoming/4905392-kthgtl-2436498Wheat-li-jingwang-istockphoto.jpg/alternates/FREE_768/2436498%2BWheat%20li%20jingwang%20istockphoto.jpg'
                 }}
              />

              <CardContent>
                <Text
                  style={{
                    textAlign: "center",
                    fontSize: 24,
                    fontWeight: "bold",
                  }}
                >
          गेहू :{this.state.gehuprice}₹/कुंटल{" "}
                </Text>
              </CardContent>
            </Card>
          
          </ScrollView>
        )}
      </View>
    );
  }
}

export default Getmandibhav;
