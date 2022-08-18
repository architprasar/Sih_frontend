import {
  Pressable,
  StyleSheet,
  Text,
  View,
  Button,
  Dimensions,
  ScrollView,
  TextInput,
} from "react-native";
import React from "react";
import { Icon } from "react-native-eva-icons";

function Top() {
  return (
    <View style={style.top}>
      <View
        title="Home"
        style={style.btn}
        onPress={() => {
          alert("Home");
        }}
      >
        <Icon name="github" width={48} height={48} />
      </View>
      <View
        title="Home"
        style={style.btn2}
        onPress={() => {
          alert("Home");
        }}
      ></View>
      <Pressable
        title="Home"
        style={style.btn}
        onPress={() => {
          alert("Home");
        }}
      ></Pressable>
    </View>
  );
}

function MainScr() {
  return <View style={style.main}></View>;
}

function Footer() {
  return (
    <View style={style.top}>
      <Pressable
        style={[style.navbtn, { backgroundColor: "#000" }]}
        onPress={() => {}}
      ></Pressable>
      <Pressable style={style.navbtn}></Pressable>
      <Pressable style={style.navbtn}></Pressable>
      <Pressable style={style.navbtn}></Pressable>
      <Pressable style={style.navbtn}></Pressable>
    </View>
  );
}

export default function Hoome() {
  return (
    <View style={style.container}>
      <Top></Top>
      <MainScr></MainScr>
      <Footer></Footer>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
    backgroundColor: "#f00",
    flexDirection: "column",
    flex: 1,
  },
  t1: {
    color: "#fff",
    fontSize: 20,

    fontWeight: "bold",
    textAlign: "center",
  },
  top: {
    backgroundColor: "#000",
    flexDirection: "row",
    flex: 0.8,
  },
  btn: {
    flex: 1.5,
    backgroundColor: "#ccc",
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
