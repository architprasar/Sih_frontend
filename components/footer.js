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

export default function Footer() {
  const [active, setActive] = React.useState(1);
  React.useEffect(() => {}, [active]);
  return (
    <View style={style.top}>
      <Pressable
        style={[style.navbtn, { backgroundColor: "" }]}
        onPress={() => {
          setActive(1);
        }}
      >
        <Image
          style={style.img}
          source={
            active === 1
              ? require("../assets/footer/homeactive.png")
              : require("../assets/footer/home.png")
          }
        />
      </Pressable>
      <Pressable
        style={[style.navbtn, { backgroundColor: "" }]}
        onPress={() => {
          setActive(2);
        }}
      >
        <Image
          style={style.img}
          source={
            active === 2
              ? require("../assets/footer/brainactive.png")
              : require("../assets/footer/brain.png")
          }
        />
      </Pressable>
      <Pressable
        style={[style.navbtn, { backgroundColor: "" }]}
        onPress={() => {
          setActive(3);
        }}
      >
        <Image
          style={[style.img]}
          source={
            active === 3
              ? require("../assets/footer/musicactive.png")
              : require("../assets/footer/music.png")
          }
        />
      </Pressable>
      <Pressable
        style={[style.navbtn, { backgroundColor: "" }]}
        onPress={() => {
          setActive(4);
        }}
      >
        <Image
          style={style.img}
          source={
            active === 4
              ? require("../assets/footer/settingactive.png")
              : require("../assets/footer/setting.png")
          }
        />
      </Pressable>
    </View>
  );
}

const style = StyleSheet.create({
  top: {
    backgroundColor: "#fff",
    flexDirection: "row",
    flex: 0.6,
  },

  navbtn: {
    flex: 1,
    backgroundColor: "",
    justifyContent: "center",
    alignItems: "center",
  },
  img: {
    width: 32,
    height: 32,
  },
});
