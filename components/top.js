import {
    Pressable,
    StyleSheet,
    Text,
    View,
    Button,
    Dimensions,
    ScrollView,
    TextInput,
    Image,
  } from "react-native";
import React from "react";
import Icon, { Avatar } from "./icon.js";


export default function Top() {
    return (
      <View style={style.top}>
        <View
          title="Home"
          style={style.btn}
          onPress={() => {
            alert("Home");
          }}
        >
          <Icon url="./assets/Hamburger.png" />
        </View>
        <View
          title="Home"
          style={style.btn2}
          onPress={() => {
            alert("Home");
          }}
        ></View>
        <View title="Home" style={style.btn} onPress={() => {}}>
          <Avatar />
        </View>
      </View>
    );
  }



  const style = StyleSheet.create({
 
    t1: {
      color: "#fff",
      fontSize: 20,
  
      fontWeight: "bold",
      textAlign: "center",
    },
    top: {
      backgroundColor: "#000",
      flexDirection: "row",
      flex: 0.7,
    },
    btn: {
      flex: 1.5,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#fff",
    },
    btn2: {
      backgroundColor: "#fff",
      flex: 5,
    },
    main: {
      backgroundColor: "#fff",
  
      flex: 6,
    },
  
    navbtn: {
      flex: 1,
      backgroundColor: "#ccc",
    },
  });
  