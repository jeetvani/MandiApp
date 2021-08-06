import React, { useEffect, useState } from "react";
import "react-native-gesture-handler";
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
import Soyabeanbikri from "./soyabeanbeche";
import Profit_Loass from "./Profit_Loss";
import Getmandibhav from "./getmandibhav";
import Mungfalibikri from "./mungfalibeche";
import Kapasbikri from "./kapasbeche";
import Gehu from "./Gehu";
import SoyabeanKharidi from "./SoyabeanKharidi";
import MakkiKharidi from "./MakkiKharidi";
import MungKharidi from "./MungKharidi";
import KapasKharidi from "./KapasKharidi";
import GehuKharidi from "./GehuKharidi";
import { createDrawerNavigator } from "@react-navigation/drawer";
import UradKharidi from "./UradKharidi";
import "react-native-gesture-handler";
// In a React Native application
import Constants from 'expo-constants';
import Gehubikri from "./gehubeche";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Kapas from "./Kapas";
import Mungbikri from "./Mungbeche";
import JawarKharidi from "./JawarKharidi";
import Urad from "./Urad";
import Mungfali from "./Mungfali";
import Soyabean from "./Soyabean";
import Chawla from "./Chawla";
import Jawar from "./Jawar";
import Makki from "./Makki";
import Mung from "./Mung";
import Chana from "./Chana";
import Tuar from "./Tuar";
import BajraKharidi from "./BajraKharidi";
import Makkibikri from "./makkibeche";
import ChawlaKharidi from "./ChawlaKharidi";
import Stock from "./Stock";
import MungfaliKharidi from "./MungfaliKharidi";
import Kharidi from "./Kharidi";
import TuarKharidi from "./TuarKharidi";
import MandiTax from "./MandiTax";
import ChanaKharidi from "./ChanaKharidi";
import { func } from "prop-types";
//Initializing the SDK

const Drawer = createDrawerNavigator();
function HomeScreen({ navigation }) {
  return (
    <View>
  
      <Text></Text>
      <Text></Text>

   
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        alignContent: "center",
        paddingTop: 10,
      }}
    >
       
      <View>
      </View>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("MandiTax");
          }}
        >
          <Image
            style={{ width: 100, height: 80 }}
            source={require("./manditax.png")}
          />
          <Text
            style={{ textAlign: "center", fontWeight: "bold", fontSize: 16 }}
          >
            मन्दी टैक्स अपडेट
          </Text>
        </TouchableOpacity>
        <Text></Text>

        <TouchableOpacity
          onPress={() => {
            navigation.navigate("AddDhan");
          }}
        >
          <Image
            style={{ width: 100, height: 80 }}
            source={require("./jode.png")}
          />
          <Text
            style={{ textAlign: "center", fontWeight: "bold", fontSize: 16 }}
          >
            धान जोड़े
          </Text>
        </TouchableOpacity>
        <Text></Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("खरीदी");
          }}
        >
          <Image
            style={{ width: 100, height: 80 }}
            source={require("./assets/kharidi.png")}
          />
          <Text
            style={{ textAlign: "center", fontSize: 16, fontWeight: "bold" }}
          >
            आपकी खरीदी
          </Text>
        </TouchableOpacity>
        <Text></Text>

        <TouchableOpacity
          onPress={() => {
            navigation.navigate("मुनाफा नुक्सान");
          }}
        >
          <Image
            style={{ width: 100, height: 80 }}
            source={require("./assets/profit.png")}
          />
          <Text
            style={{ textAlign: "center", fontSize: 16, fontWeight: "bold" }}
          >
            मुनाफा / नुक्सान
          </Text>
        </TouchableOpacity>
        <Text></Text>
      </View>
      <View style={{ flex: 1, alignItems: "center" }}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("मंडी भाव");
          }}
        >
          <Image
            source={{
              uri: "https://ekisan.net/wp-content/uploads/2020/02/aaj-ke-mandi-bhav-1.jpg",
              width: 100,
              height: 80,
            }}
          />
          <Text
            style={{ textAlign: "center", fontSize: 16, fontWeight: "bold" }}
          >
            मंडी भाव
          </Text>
        </TouchableOpacity>
        <Text></Text>
        <Text></Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("मंडी भाव");
          }}
        >
          <Image
            source={{
              uri: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxITEhUSExIVFRUXFhUXGRgYFRUVFRgXFRUYFxUXFxUYHSggGBolGxUVITEhJSkrLi4uFyAzODMtNygtLisBCgoKDg0OGhAQGyslHyUrLy0tLS0vLy0vLSstLSstLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAOEA4QMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAAAAQIDBQYEB//EAFIQAAEDAgIFBQcNDgUFAQAAAAEAAgMEEQUhBhIxQVETYXGBkQciMqGx0dIUFSM1UlRykpOys8HwFiQlM0JEYmNzdIOU4fEXNKKjwkNTVWSCRf/EABoBAQACAwEAAAAAAAAAAAAAAAABBAIDBQb/xAA6EQACAQICBgcFBwQDAAAAAAAAAQIDESExBBJBUWFxMjOBkaHB8AUUsdHhEyI0UmJysiNCovFDU4L/2gAMAwEAAhEDEQA/APcUITHm2xAOJQkYnIBAUEqN5ts28Eseee9APQClXLUVLW77ngEA2vxOCEAzTRxX2a72sv0axF1xO0qoB+e03y8R/wCS81wWkjrTPW1fsjjI8AOJ1WMZmAOAAPiScrgn6nsk8ysrR+JWlpNm0kz0R2mFFuqoPlo/SUTtL6XdV03y0Z/5Lz8y4Lu5Hsk8yGy4L+p7JFPu63ke8/pZvTpZS+/af5aLzpn3UUvv2D5eP0lhuVwT9T2SJOVwX9T2SeZPd0Pef0vuN0NKKX37B8uz0krdK6X37B8tF51g2y4L+p7JE7lcE/U9kifYIe8/pZvmaX0vvumP8aP0lK3TCi31VP1Tx+kvPOVwX9T2P8ya2XBf1PZInu6HvP6WemM0roD+e0w6Z4x5XJw0ooPftL8vF6S8z5XBP1PZIjlcE/U9knmT3cj3p/lfcemfdRQe/aX5eL0laRyBwBBBB2EG4PQV5Nh9HhU7iyJkTja9hrg22Xz6Vd9zaR0VRV0QcXRRaj4wTct176zejYtc6OqrpmynXU5atrHoJKVCg1918uK0m8mBQSgBKgBCjvu3KRACEIQCEoAQSlQETwRmOsIdKLZZk7Esj7dKjDC3vtvH+iAkYy2Z2pkp1e+7ef8AqiScAX7Aq6oqCcz1BAPqMQuMsh41BG3O52+RR6h8LfwUsbroDzXRJv3hUH9Ko+YFre5zQU7sOgc+GJzrPuTG0uPsjrZkZrKaJH8H1Hw6j5gWz7mkR9bacjbZ9vlHK1X6PaVaHTnzL5mC0+008PRyTPMlkwSmOynhv+yZ5lS4rJi5ld6mbS8llq8o54fsz1gG8brjMmPDa2i+O/0VXUeKLNzSNwul308II2+xM8yGYLTk3NPCBuHJM8yzB9fjY6lF8Z/opzZceOWrRfHf6KavFC5qH4JTH83h+SZ5k1mFU2w08II/VM8yzWtj/uaL47/RTD6/Oz1KL4z/AEU1eKFzTNwemdn6nhA3exMz8SkdgtMfzeH5JnmWXEuPXtq0Xx3+il1sf9zRfHf6KnV4oXNI3CabYaeHp5JmfiR6z0zvzeG37JmfiWYJx5w8Gi+M/wBFabAX1PJAVYjEtz+LJLNXdmQM1DVtouYfE6VjMZLWMaxvqO9mtDRflBnYb0aHT6mKVu+7Ih5VNjXt2f3MfSBcmjTb4lW8NWJWH1XYVV175HpLJg/wTlv8yl1Ra25U0EhYfIfqKtYKgO6eCqlsUHVyOzcfOlLrmw6ykeb96Osob3uW7j50BI1thZAFk5JdAKhCEAKF51dnYpSUjWoBkbd+0lE0oaL9iZI7Uu78nf8A0VdUVGtn2BARzvN9bju8ySMXzO3yJWN3nb5Ejm2zHWFIJFG/I3H904yC10kbbm56hwQHnGiLfvCoP6VR8wLddzD2sp+h/wBI5YTRIfeFQR7qo+YFuu5kQMMp+YP+kcrNfo9pVodOfM0U8jRnrAEcSBdMZUMcbl7ct2sFR4noVSVMrp5WyazrXtLI0ZCwyBsMhuXK/ubUFsmy/Ly+kq9o7/D6lnE1vqhnu29oTJZWbddoI/SCybO5zhxHgzDj98S+khnc3oDnqzW/by5/6ktDf4fUYmnbUsdte2w3awzXR6oZ7tvaFkndzWg3Nlv+3l9JNZ3OcPO1swI2/fEvpKbQ3+H1GJrHysP5bb8dYKNtS12Re34wzWXb3OKAnJs1v28uf+pP/wANcP3Nl+Xl9JLR3+H1GJrBOz3Te0JSA4bb84WPZ3OMP2Fs1/28vpK/wbCYqePkIQ4Rgk985zzc7e+cSVDUdj8BiYrGc8ZOf5oB0+yBQ6LD8J1vwIvrXRjjB69W/wDTH0i59FvbOsv7iJWH1XYVl+IfI2rm3UTZCDYHrTnOvkOsp3Ji1lWLRZ0koItvG3zqci6pYZS0jxH6irRk+sO927+ZQB17ZX/opQE1rABZKMkA5CEIBCUqFy1k+o3p2IDmxCpztuHjK4Q0jO39FIxu87U9SABSPdZRu73PdwSsbfM9SAYGHwrdSnY69kKMjVNx1hAedaIn8H1Hwqj5gWz7mkZ9bac8z8uPsjli9Em/eFR8Ko+YFuu5h7WU/Q/6Rys1+j2lWh058xcW00jgldEaaqeW2u5kLnMzF8nDauT/ABFi951v8u5a97bd8OvnSN77Pdw86r3juLOJi36fxk39R1n8u7PpUo7osXvOt/l3LaqN7N42+VLx3eIxMf8A4ixe863+Xcope6BGfzOt/l3LZNdr8w3qYJeO7xGJi290SLZ6jrf5dyX/ABDi951v8u5a98d8xkU0PLstnH+iXju8RiY6TugxO2Udb0+p3LSYBiraiISCOSPMjVkYWOy36p3KyAtsTXsv08VDa3DE89xr27P7mPpAuPRtt8SrPgxLpxok4yePqQD/AHAodFRbE634EX1q1/xdhVXXvkbGM2yP91Ike26i1z4O/iqpbHSG/ej+ymopeTdY7DvUbG2SubdAXaS64qGY21TmRs6F2gKAKhCEAhKrKx13dGXnXfM/VBPMqpAR+D0eRPc8AXSPcAM1C0WsSMvIpBI1t8z1DggjVzGzyKRI42QAXC10xguQTs3BRhu+2XD610MOxQDzTRK/qCoP6VR8wLd9zA/gyn6H/SOWG0S9r6j4VR8wLZdzRh9bac2ys/Lj7I5Wq/R7SrQ6c+ZLjOFYlJK58Fe2GI21WGCN1rDPvnNJNzmuP1gxkZjFW3/dofQWmqccpY3aslTCxw2tdKxrhfZcE3Cj+6Si9+U/y0fpLQpO2XgWLIzrcExki/rs3+Wg9BIMDxl3/wCq237tD6CvHaR0RJIq6f5aMX8alZpNQ2/zdOP40fnU60t3h9BZemZ/7n8Z2+urb/u0PoIZguMn/wDWb/LQegtF90lF78p/lo/SUMmkdETlV04/jRi/jTWlu8PoLL0yiGCYybj11aR+7Q+glGj+Mf8AlW5f+tD6Cv49JqG3+bpx/Gj86f8AdJRe/Kf5aP0k1pbvD6Cy9MzjcFxk5euzb8PU0HoLR4LBUMiDJ5xPJc3kDGsyOwarQBdRSaR0ROVXT348tH5134dWRys1onse3Zdjg4XG3MLFttYrwJSMFjbPw1Ye8x9IodFfbKtv7iL610417dn9zH0gXFo4L4nWW9zF1Ky+q7CquvfI2z3bht8iOSFreNJDllv8qkVUtjGO3Hb5UPfuG1JMd2/yJIsjY7ePFAT0p1SPGrZqp1Z0sl2jjs7FAJ0IQgOTEXd6BxKrS63QuvEHd8BwC5dW+1ANa2+Z6lIVGDq5HZxT3OtmpBH4PR5ErRfM7NwQG3zOzcEeD0eRASKO2qb7vIpLqNo1jfd5UB5xok29BUcNao+YFu+5h7WU/Q/6RywmiZPqCo4a1R8wLd9zD2sp+h/0jlZr9HtKtDpz5nbiOi9HK8yyU0b3HwiRmbC1+xc40Mw9xypIrdBz8agxrSGrZK6OPDppoxaz2uaA7K5twzy6lxDSuvBuMInA4azVoSnb6/UsYFz9xOHe9Iuw+dMfoTh+0UkXRY+dVg0ur/8AxE/x2prtLa87MJn5+/aptPf4/UYFn9xmHu2UkQG82PZtUv3E4d70i7D5114LUySwtlfA6B5uDG4gmwJANxxGfWrNj7rFuS2k2Rn3aEYfupIuw+dRjQ3DzkKOIccjl41oXuubDrPBIY7Zt2jxqNaW8WRS/cTh3vSLsPnVlQ4ZFAwRwMbG0EkBosLnauqN9+lDn7ht8iNt5knnWNOJxk7j6kA/3AodFRbEq34EX1qbGmWxmw95g/7ih0VP4SrfgRfWrT6rsKi698jZvZfpTOUOy2f2zTnv3Dak5LLn4qqWxzGW6Ur23TWP3Hale+3SgEDjsO1d2Gu2jrXCGcdq6KJ1njsQFqhCFAKusPflQqSp8J3SoNa21SBz7Wz2KBu6+zd/VSBt8zs3BSEIASHnUYOrkdnFKBrZ7vKgIx16t10tSWUbe9PN5EB51oh7X1Hwqj5gWx7moPrbBttZ9/lHLGaJA+oKjhrVHzAt33MPayn6H/SOVmv0e0q0OnPmahtrZJy8+rNLKxz6p1HBG6Clc5she46zyy/KagHCx7Opa3BcUbVwRzMBa17QTfaDvb2qu4tZllNM63bTq7N/9FNHa2WxU2luOihpXVGpr6pY0Nvq3LnAbbbgSepWNPJrMbI0ZOa1xHSLqLYXJOtc8m3vev7cU4v1sm9Z4J7W2yCgBFa2SeontO0bd44pDLfJu3yIBJNve7d6WC1uffxT2MskezeNvlQHnuNe3Z/cx9IFxaO39c6y23ViXVjT74zkM/UYH+4odFR+Eq34EX1q2+q7CouvfI2MPj3qRMey+Y2pOV5s+CqlsJvHuSRbTfb9tiexlsztQ9l0A5PhPfDpChD+O1Pj2hAXSEiFAKqp8J3SoC2+1dNYO/P23KFSCNrrZHqKkJSPAtmoGnYDs3c6AfbW6PKgHVyOzcVKkcOKAVR+EebyqMHd+TddLdyA8z0Sd94VHDWqPmBbvuYe1lP0P+kcsNoh7X1Hwqj5gWy7mjj62043Wff5Rys1+j2lWh058zOaNVjaeHFoZCA6N87zfa5rg4Nt8I2+MFf9zKdjaCNnKNc5ou9txrM1zdtxuuPKs9prgjK7EhT03eSNivUSZ6gbtjDmja7Z4uC7Wdy51jevlDnW5TVYA1xZ+LsL3Grzk9SwlqtYvPE3q+wf3Q9aunhwyAi9zNK7aGBrSG63xjlxIVroNjvKRCjl9jqoBqPa45kNyD2+6BFlX09TQYQHh05mqH5yOtrTPO4ADwRzE9arX09TiNRDU+p20UMTw4TPNp3tG47Lg55buKiy1bbN/EnaemFmrmOsKVpvmFn8S00oIMn1LLjc27z2Nuq6Lui4c497OW3260b2jpuQtahJq9mTdGve/cNvkVbj5dHTTPjcQ5sTyDvuGnPpU2HYnTytBimY+/BwJPUo9KP8nUfsZPmlQsyWeX4OyumhZL65Tt1he1gbZkbb8yMUNVAwvfik9hu1RcngO+2owfEI4KCGR5sAw5bz3xyA4p2CYS+qeKqqFmjOKLcODncVYim5PdyXyNNScYRuw0Qw+pe81lRI4uczUaH5uLSQbk7tmQ51Z6Kn8JVvwIvrV8s3o/IG4lWG4HexWuQLrZUwgyro83Ordm5e+3SmclvvmuOpxKKKKSZzgdRrnOAILrNFyAL5nJZtvdIpzmKepI5mMP8AyVRRbOgbNj79KHussW/uhQH82qgf2bPSSN7ocG009UT+zZ6SnUkTZ7jaBm87U9m0LLYTpxBPMyARTsc+9i9rQMhfc4layId8OkKGmsyC2QlQsQV2IN77pC5NbirDEG5A8FXFt+hAZDT7E5mGnihkMbpHuuRt1WjfzZ+JU7MaxNmXKQzD9Nmqe1uqptKpC/EWNP8A0oSet+XbYlMWqvWlTairZbuL8jr6BoFOvSc6ieeFnssvO51QadVDMpqIn9KN9/8ASR9a7Iu6BRuIEnKRczmHyi4VPtTXWsdYAjnCwWlrbHuf+zbL2RH+ybXNJ/CxvcNxOCoaTDI2RosDY7L7AeC6mHVIB2bivNdBKXERDJPSRwPjfI67XktcdTIapBAtmR2q+k0lrY/x+GzADaYvZfIMlclTxsvicJMptD2OdQztAzL5+slgsAu3RPTE0lJHTvoap5YHXLWDVN3F2Vzfes7hmNSU/LOp2B9OZCdSRwjkY47RnttsyG5ddJpzUzO1IaQOedlnucBznvRl1hWpKMk9bJdlimlUhJ6qvc0ru6PFEXSGgqGa1gXFrGk22AuJzXO7SPEcQP3oBSU/u3AGR3Gxzt/89q5aLROWd4lr5TIRmI2m0beY28g67rYRsDAAAA0ZAAWt1cFw9L9pU4fdoYvfs7N754c9nQpUZNXqeBih3OA5xfJVvc8nWLgwXLjvuTcquxPDaKJ/Jy1VVUOG2OM3PXYH6lqtLsXe0MpafOonybb8hv5Tzwyvbt3LqwPBYqWMRxgF5zfIc3OO8k/Uq0dNrqCqVZvHopWWG9vVulfBWxfBYmx043tFLj8vWRlKHEMJhsDSuiPGaJzj2uvZX0LcKqBYCnf1Na7tyIV8+EbwHA7QQCqyt0UoZc3U7AeLLxnpuy1+tVnpFObvJ1E96lrfHVf+RkoyWVu6xVVnc/pT38LpYj+i/WHVrXPjVVjeE1tJA98VbJLHqkPY6/gOyORJB2q1folJEfvSsmiPuXHXZ1/1BXHilHiz4nwObC9rxYyN71xF942DqCu0NKqa0f66lG6up4O23pJ9lpM1yhG3RtyOHQ/R90rIp6g3jYPYY91r+E4b81rMSxOGDOSRrOYnM9SqMPwbETGyIzRU8bWtaOTGvJYC3hO384srbDtFqaE6xZy0p/LlOu6/EA5N6l0a3tXR6atF6z4fP5XKK0KrUlrTdkVn3XMflBBNMdxawhvxis960Sz4lD6qidEyofbVD++s1h/Kbs2BemNitmNviVDi7r4jhv7ST5hVbR/as69ZQUUk7728m+XgWFocKUdZZ/UXSfufUUNJUTMEutHDI8XlcRdrCRcHbsWZwd/sEfwB5V6hpsR631fPTzfRleW4O32CP4AW7SpOVNX3+R1vY+FWVvy+Z3BBQCglc+yPQ3wIKM/hGk/i+QL1Sjbd47V5XRe2FJ/E8gXrOGt2nqXTpdVDk/5M8p7Q/FVOz+KO9CELIqEUzNYEKqVyQqfEnBms45ANLuoC5QHl0knKVtXJu1xGObUGfjUwKrsAu6IvO2R73npc66tCFR0h3qy4Ydysep0Cnq6NBLdfvx8wXLisurDI79EroBVXpHd0YiG2SRjB0krGjHWqRXE3aTU1KM5cH32Z6b3Pqbk8Ppo9l2a56ZCZCOnvlpJpAxjnHY1pJ6ALlNpacNjbGBYNa0W4WFlSabVphoKhxP8A03Bp462VvGuljKXPzPH5IwOiei9PUxeqp2ue+SSR3hENtrkbBzg71sKSljhHJxMaxv6LQO220865tHKcx0sEQyLYma3M4tu7xkq1DBay8zpekTq1JazbV3ZXdkr4YZZFynBRirZg1tlw47irKaF0z9gyA3ucdjR0rrB1cjsWSnjNXiTmPzipWtIbuMj8w4jf/RYaPSjOTc+jFXfLDBc20uGZM5NLDNk+iuGvaXVc/wCPmHybDsYOG7sC1DGgIayypNLMSfTwgR/jJXtij32c693W5gD4lLlPSattrw4LhyS+AwhH16zL1QvOqcuzgsvHjNRRER1vskZtq1DRkCd0gGzpWppXtc0Pa4ODhcOBuCOYrCpRlTs3jF5NZP1udmTGV8B0beu+9PUZGrnuSuk4Z3WrMka/I5b9ydEN+0lKxlsztTXNtmOsICRZrGxbEcOI/wC4/wCYVojILXWdxYH1yw2//ck+YVe9m/iY/wDr+LNdboM1OmAvh9Y47fU0/V7G5eZYP+Ii+AF6dps37wqyPe81/k3LzDBz7BH8AeVdnSerXPyLnsfrZ/t8zsdxQ1IAlIVI7/Eio/bGj/i+QL2Cljs0cdvavIsLF8Soxzy+QL2Jq6VPqocn/JnlfaH4qp2fxQ5CELIqAsv3RZ9TD6h+zvNQcbyER5fG8S05Cwfdcn+9oYBtlnYOpuZ8ZCyjbWVxZvBGTw+PViY3g0eRdCHBMvfJclu7ue1S1Vq7hxzXPSQcriFHFuDzIehuw/6SukLo0Dg5XFJH7oYLdbrD63dis6Kvv33J/LzOd7Vlq6O1vaXn5HrKw3dTl1oIaYf9aoiYegHWPiC2OsfBv1/besTpdZ+J0UA2RslmcOnvGnxOVqU9SLnuTfcrnm7Xw3lrH3venqKlSObdRa5He+NeSSL46R18h/ZZR/3tirSfAqo9Xm12eD5Lf/S1mTRckAbyTbxrLadhslM2oic1zqeRkgLSDlcB2zqPUrWhtOp9m8pfd7Xl/lY11Mr7sfn4GsWU02PstCeFRs6QLeQq+o6wPjY9uYe0OHNcbFQaQt166hh26rnzO6GjL5ru1NEjatd7FK/ZGVxU6Pd8TSSQixa4BzXCxBFx0EcFnJsBnpXGWgddhzdTuPeHiYyfBK1ZULnavR5FqpVpU72xTzTxT5rzzWwmUEyqwfSeKc8mQYpxkYnjVdffa/hBWobq59qqtI8KpZI9epIZa1pdbUc0k97Z3SqxtdWUX44Gqpt0rM5Wt3a7d/T41u+xhUxpYP8AK9v7ZOyfJ2e69zHWcel3/NGuBTXusuHDcUhmZykMge07hkQeBac2nmK7Y27ztVWUXFtSWWzI2Jp4oZqEd94vMqHGHXxHDf2knzCrbFMbp6f8dM1hOwG5cehrbk9iyhx2CoxKhMOsQ2R1y5hYDdh2XXR9m0qjrRqar1ccbO3Re3I01pLVtfH6noOm/tfV/u830bl5ZhDfYIz+iF6dpiQcPrHXH+WmsL7PY3eNeZ4P+Ii+AF1tIf8ATXPyL3shf1Zft8zsBQSmu4oGao2O/fYLg/tnR/xfmhewgrx7CPbOi/i/NC9hsulT6qHJ/FnlfaH4qp2fxQqEIWRUEIXl/dMrGmtpY3OADGvebmw1jk37cy9RVPjOj1LVG80LHkC2sR3wHAFSrY33fEyhLUnGWdmn3O55o1wdsII5ilLVpqjuZULr8mZoHfoyE+J98lXVHc4qmfiK8O4NljI7XNJ8irPRV/bLvVvmdqHtiP8AfB9jv8bFW0q37kcJd6sn93K1l+AYC42+UHYqOrwPFI7tMUUtt7HeQGx8S69GaDGKWENhdAGuJeYpPDBO3O1tw3rdQouCldrG23vKvtHTIV1CML4Xbw7F5nrHJC1l53A/lcXq3nMRRxQtPPqhzvGXKcaXYnF+Pw3XG8wyeO3fLNYVQ4i8zVcBDHSzSOdDILEgHI6x6SN2xNIoSnRlFNY4eK8jmxklJM3z3bht8ihrqmKGN0krg1jRck/VxPMs3TaYGE8nW076d3u7F0Z69o8a5qOE4nO6WQ/ekLy2OMbJHD8t3Nvtz24rge5TptuteMVi3g78IvFNvwzZa+1T6OLG0lJJiTxLUazKUfi4r2MnBz7fb6+TTLAIqSPl6a8dzycjLksex4INwt3VTMYwkkNa0XJOTWgb+YLHMY7E5GlwLKJjri4IdM4bOhv22nKxo+kTctfo0o5rZbd+qUu++OCWGucElbOT2+thx6IaYU8EBgncbsJDS1peHtvkBbYemwVxotBJLPJXzMLA9vJwtdtEd73I3XsPGuzSXAKZ1LIOTYzUY5zXAAFpaLg3G7JcmiWk0L6eKOSZvLW1S0mxNsht32SrKNWlOrRi7ydpbbJ43Vltt96+KyWDJScWoyeWXw/0ap77dKRjOOZTGDVOe/esrU4jUUFQTO50tJK64ftMTjuPN9uZUKVF1bxg8di/NwWy9sUtuw2ylq5mjxChZLG6KRutG7IjhwIWVoa6TDZBT1BL6Vx9il9xf8h/Af32bNm2drmhzSHBwuCMwQeC5K7D2SsMcrQ5jhY83OOB51nRrJJ06ivB5rjvjua8VdPhE443Wa9YlXXaLMe7l6eQ08xz1meA6/um7CFzersVjBaaSKQj8tsgDTz6pII6LBclBWyYbIKeoJfSuPsU3uBua/gP77NmjrtIqWKMyOmYRa4DXBxdwDQNpW+o6sbRcVUi+i7N34XTTVsnF9F7LYmC1Xjez2+vPaUGglLHU8pW1BEsxdqarmi0YbsAaVocZ0ahqgzlNZupfV1DqWv0Ko7ndG9sMk726vLyukDeAOw9C2YK9DLCWGFsFw4FVYrEw+Kdz+Lkn8k+Uv1HaodKdUut3t+a6paXBMTZG1ogiIaLXMrL5f8A0vUXGyiDCTcDfsUSeurTV+ZtpVZ0nem7PgedMwTFXEWpoj/FZ6Sl+5zGPe0XyrPSXq9JEAL7z9rLoJWGpT/Kjd77pP8A2Pw+R5bo5o1iArYJ54o2Mi17kSNd4QtsBJvsXqIN1HtzAy8qlBWWxJKxonOU5OUndvb2JeQqEIUGIhSpCgFAMey+YyKZyhOQyO/+iV7ich1nggx8MiPtmgEkpwRbxqtqICMjt3FWsb79KZONbvbX+pAU3KHZvUrG2Us9AWjLPn39agY/cdqkDKqmZI0te0OadxAI8aw8LKjDZJWMgdNTyOL2cn4UZP5OrvG7qW7e/cNqBELc/FYzhGcXCaumE2ndHntIZcVeQ8GKljdZ7L3fI8fkuO4fbbmNsI2MZawaxo6A0DyLJtdLh0014ZJqeZ5ka6Maz2Odm5pbwuuSTEJcUkMDA+GmYRyt8pXn3Fvydn22Lk6Vos3O3RpRyexb8M3JvDuxsboTVt8n65WJKmokxJ/Ixkto2O79+wzEfkt/R+3AK4r9FaR0Do+Sa2zSQ4CzmkDIgq3pKJkTAxrQ1rRYAbAAsriFfJXSGkp3asDTaacb/wBWw/bs26IVJ1JJUnqQjje+XF2zk3sx2JK2Bm0kvvYt+vXjxstBq8zUceu4OeNZpzzIY4tBI27AFb1cDXMdHI0PY4WsfIspi2h0MERmpnyRTRjWDtckO1c7OB+qy0ej1Yainimd4T2AnhfYbdaw0mNOTdak3quTwtZxb+8snlud9mRMG+jLO3eZiB8mFyBkl30bz3rtphJ3Hm8q20UjXNDmkOaRcEZggrnrYoyxzJQDGQb62y3P51g9FqOskbMKSqMdOyVzY9ca1xcnvcssrdq3QovTk5ZTVrvG0r7cL2lvwxzzvfFy+zwzXr1wL3uiSMbRva6xLi3UG/WBvkOi67MC0PpWRxPfTs5Xk49a4v3+qNY2OV73UWE6FgSCeqmfUSjMB2TGnjq7/tktT4PR5F19Fo+70vs1K+N3sXrDM0Tes72JAFEe9z3KQu3p9NSuebnILaQRRRl58g+sq1p6cN5ykjhEezZv4qfWFr7lAI3jVzGzeEN77Pd5UAa3R5Urm2zHWEBKkskab5oBugHIQhACjeOCkQgGR2snpCEFARPFzlt4pY+G/epAEEIBVx1dI12zJ3EfWutACAqTSubtF+dMVyQopIWnaM+xAVEnjWFkMuHVU0jony08519Zg1nMfvuOH9F6S7DxuPao30LuYrGcI1IuEldMJtO6PNpsXlxJ5pqcOhhFjNI4WfqnYxo3Xsf7bdZQYfFBE2KNuq0bBvJ4k7zzrNVXKYbVzyyxPNNOQ7lGt1tRw3OtuzPiSTYvNiBEFC17Yz+MqC0gBu9rD7o9vlXM0jQqspqlSVqed9l7YuT2tZLkks7m6FSKWtLP1kJjOIPq5DQ0zha3s0u0NZsLW852XXfpHVChodWI6rg1scWwnW2AgbzvRP3PYgGGnfLBI0W12Ekv53Dj0KbDtBbStmqJZal7c28pfVaRsNic1ZegQ1oJS+5HG1sW+OzluWFnizD7R44YvwKwaNV88bW1Nd7G4AuY1jQ/PPVLgBfxrW4dQshY2NjdVjRZo4c54k8VZijedymbQ8T2K5ZJWikluSS+BgcakZATuy513xUzW7u3NS2QHBBRBti7MeIdSsUJoFkA5c+p8W+xTEXTkAgSpoFkEIBmrw2KVCEAIQhACEIQAhCEAIQhACEIQAhCEAIQhANdsQzYhCjaSOQhCkgEIQgBCEIAQhCAEIQgBCEIAQhCAEIQgP/Z",

              width: 100,
              height: 80,
            }}
          />
          <Text
            style={{ textAlign: "center", fontSize: 16, fontWeight: "bold" }}
          >
            अनुज्ञा बनाये
          </Text>
        </TouchableOpacity>
        <Text></Text>

        <TouchableOpacity
          onPress={() => {
            navigation.navigate("स्टॉक");
          }}
        >
          <Image
            source={{
              uri: "https://s32519.pcdn.co/wp-content/uploads/2019/12/inventory-planning-1280x960px-640x480.png.webp",
              width: 100,
              height: 80,
            }}
          />
          <Text
            style={{ textAlign: "center", fontSize: 16, fontWeight: "bold" }}
          >
            आपका स्टॉक
          </Text>
        </TouchableOpacity>
        <Text></Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("धान बेचे");
          }}
        >
          <Image
            source={{
              uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjJmSAZzvDQ7vD-pTE1tqMN2-qv7edKv-MLw&usqp=CAU",
              width: 100,
              height: 80,
            }}
          />
          <Text
            style={{ textAlign: "center", fontSize: 16, fontWeight: "bold" }}
          >
            धान बेचे
          </Text>
        </TouchableOpacity>
        <Text></Text>

        <TouchableOpacity
          onPress={() => {
            navigation.navigate("खरीदी");
          }}
        >
          <Image
            style={{ width: 100, height: 80 }}
            source={require("./assets/bikri.png")}
          />
          <Text
            style={{ textAlign: "center", fontSize: 16, fontWeight: "bold" }}
          >
            आपकी बिक्री
          </Text>
        </TouchableOpacity>
        <Text></Text>
      </View>
    </View>
</View>
  );
}

function KharidiScreen({ navigation }) {
  return (
    <View style={{ alignItems: "center" }}>
      <ScrollView style={{}} showsVerticalScrollIndicator={false}>
        <View style={{ flex: 1 }}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("गेहू खरीदी");
            }}
          >
            <Image
              style={{ width: 150, height: 110 }}
              source={require("./assets/gehu.png")}
            />
            <Text></Text>
            <Text
              style={{ fontWeight: "bold", fontSize: 16, textAlign: "center" }}
            >
              
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
              style={{ height: 100, width: 160 }}
              source={require("./cotton.png")}
            />
            <Text></Text>
            <Text
              style={{ fontWeight: "bold", fontSize: 16, textAlign: "center" }}
            >
              
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
                height: 110,
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
              style={{ height: 100, width: 160 }}
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
                height: 120,
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
              
              चना
            </Text>
          </TouchableOpacity>
        </View>
        <Text></Text>
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
  );
}

function AddDhanScreen({ navigation }) {
  return (
    <View style={{ alignItems: "center" }}>
      <ScrollView style={{}} showsVerticalScrollIndicator={false}>
        <View style={{ flex: 1 }}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("गेहू");
            }}
          >
            <Image
              style={{ width: 150, height: 90 }}
              source={require("./assets/gehu.png")}
            />
            <Text></Text>
            <Text
              style={{ fontWeight: "bold", fontSize: 16, textAlign: "center" }}
            >
              
              गेहू
            </Text>
          </TouchableOpacity>
          <Text></Text>
          <Text></Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("कपास");
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
              
              कपास
            </Text>
          </TouchableOpacity>
          <Text></Text>
          <Text></Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("उड़द");
            }}
          >
            <Image
              source={{
                height: 110,
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
              navigation.navigate("मूंगफली");
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
              navigation.navigate("अरण्डी");
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
              navigation.navigate("चना");
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
              
              चना
            </Text>
          </TouchableOpacity>
        </View>

        <View style={{ flex: 1 }}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("ज्वार");
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
              
              ज्वार
            </Text>
          </TouchableOpacity>
          <Text></Text>
          <Text></Text>

          <TouchableOpacity
            onPress={() => {
              navigation.navigate("मक्की");
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
              
              मक्की
            </Text>
          </TouchableOpacity>
          <Text></Text>
          <Text></Text>

          <TouchableOpacity
            onPress={() => {
              navigation.navigate("मूंग");
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
              
              मूंग
            </Text>
          </TouchableOpacity>
          <Text></Text>
          <Text></Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("सोयाबीन");
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
              
              सोयाबीन
            </Text>
          </TouchableOpacity>
          <Text></Text>
          <Text></Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("बाजरा");
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
              navigation.navigate("तुअर");
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
              navigation.navigate("चवला");
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
  );
}

function SellDhanScreen({ navigation }) {
  return (
    <View style={{ alignItems: "center" }}>
      <ScrollView style={{}} showsVerticalScrollIndicator={false}>
        <View style={{ flex: 1 }}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("गेहू बेचे");
            }}
          >
            <Image
              style={{ width: 150, height: 90 }}
              source={require("./assets/gehu.png")}
            />
            <Text></Text>
            <Text
              style={{ fontWeight: "bold", fontSize: 16, textAlign: "center" }}
            >
              
              गेहू
            </Text>
          </TouchableOpacity>
          <Text></Text>
          <Text></Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("कपास बेचे");
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
              
              कपास
            </Text>
          </TouchableOpacity>
          <Text></Text>
          <Text></Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("उड़द");
            }}
          >
            <Image
              source={{
                height: 110,
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
              navigation.navigate("मूंगफली बेचे");
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
              navigation.navigate("अरण्डी");
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
              navigation.navigate("चना");
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
              
              चना
            </Text>
          </TouchableOpacity>
        </View>

        <View style={{ flex: 1 }}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("ज्वार");
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
              
              ज्वार
            </Text>
          </TouchableOpacity>
          <Text></Text>
          <Text></Text>

          <TouchableOpacity
            onPress={() => {
              navigation.navigate("मक्की बेचे");
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
              
              मक्की
            </Text>
          </TouchableOpacity>
          <Text></Text>
          <Text></Text>

          <TouchableOpacity
            onPress={() => {
              navigation.navigate("मूंग बेचे");
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
              
              मूंग
            </Text>
          </TouchableOpacity>
          <Text></Text>
          <Text></Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("सोयाबीन बेचे");
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
              
              सोयाबीन
            </Text>
          </TouchableOpacity>
          <Text></Text>
          <Text></Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("बाजरा");
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
              navigation.navigate("तुअर");
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
              navigation.navigate("चवला");
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
  );
}

const Stack = createStackNavigator();

class App extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            options={{ headerShown: false }}
            name="Home"
            component={HomeScreen}
          />

          <Stack.Screen name="स्टॉक" component={Stock} />
          <Stack.Screen name="धान बेचे" component={SellDhanScreen} />
          <Stack.Screen name="गेहू बेचे" component={Gehubikri} />
          <Stack.Screen name="मूंगफली बेचे" component={Mungfalibikri} />
          <Stack.Screen name="कपास बेचे" component={Kapasbikri} />
          <Stack.Screen name="AddDhan" component={AddDhanScreen} />
          <Stack.Screen name="गेहू" component={Gehu} />
          <Stack.Screen name="कपास" component={Kapas} />
          <Stack.Screen name="सोयाबीन" component={Soyabean} />
          <Stack.Screen name="उड़द" component={Urad} />
          <Stack.Screen name="मूंग" component={Mung} />
          <Stack.Screen name="चवला" component={Chawla} />
          <Stack.Screen name="तुअर" component={Tuar} />
          <Stack.Screen name="चना" component={Chana} />
          <Stack.Screen name="ज्वार" component={Jawar} />
          <Stack.Screen name="खरीदी" component={KharidiScreen} />
          <Stack.Screen name="मक्की" component={Makki} />
          <Stack.Screen name="मूंगफली" component={Mungfali} />
          <Stack.Screen name="गेहू खरीदी" component={GehuKharidi} />
          <Stack.Screen name="कपास खरीदी" component={KapasKharidi} />
          <Stack.Screen name="सोयाबीन खरीदी" component={SoyabeanKharidi} />
          <Stack.Screen name="उड़द खरीदी" component={UradKharidi} />
          <Stack.Screen name="मूंग खरीदी" component={MungKharidi} />
          <Stack.Screen name="चवला खरीदी" component={ChawlaKharidi} />
          <Stack.Screen name="तुअर खरीदी" component={TuarKharidi} />
          <Stack.Screen name="चना खरीदी" component={ChanaKharidi} />
          <Stack.Screen name="ज्वार खरीदी" component={JawarKharidi} />
          <Stack.Screen name="बाजरा खरीदी" component={BajraKharidi} />
          <Stack.Screen name="मक्की खरीदी" component={MakkiKharidi} />
          <Stack.Screen name="मूंगफली खरीदी" component={MungfaliKharidi} />
          <Stack.Screen name="मुनाफा नुक्सान" component={Profit_Loass} />
          <Stack.Screen name="मूंग बेचे" component={Mungbikri} />
          <Stack.Screen name="सोयाबीन बेचे" component={Soyabeanbikri} />
          <Stack.Screen name="मक्की बेचे" component={Makkibikri} />
          <Stack.Screen name="MandiTax" component={MandiTax} />
          <Stack.Screen name="मंडी भाव" component={Getmandibhav} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

<View>
  <Mungbikri />
  <Soyabeanbikri />
  <MandiTax />
  <Profit_Loass />
  <Mungfalibikri />
  <Gehubikri />
  <MakkiKharidi />
  <JawarKharidi />
  <ChanaKharidi />
  <MungfaliKharidi />
  <TuarKharidi />
  <MungKharidi />
  <UradKharidi />
  <KapasKharidi />
  <GehuKharidi />
  <Makkibikri />
  <Gehu />
  <Urad />
  <Stock />
  <Kapasbikri />
  <Mungfali />
  <SoyabeanKharidi />
  <Jawar />
  <Soyabean />
  <Kapas />
  <BajraKharidi />
  <Mung />
  <Chawla />
  <Makki />
  <Chana />
  <Tuar />
</View>;

export default App;
