import React from "react";
import { View, Image, Pressable, StyleSheet } from "react-native";

export default function Icon(props) {
  return (
    <Pressable
      style={style.container}
      onPress={() => {
        alert("hello");
      }}
    >
      <Image source={require("../assets/Hamburger.png")} />
    </Pressable>
  );
}

function Avatar(props) {
  return (
    <Pressable
      style={style.avatar}
      onPress={() => {
        alert("hello");
      }}
    ></Pressable>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  avatar: {
    height: 40,
    width: 40,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 50,
    borderWidth: 1,
    borderColor: "#CDD0E3",
    flexShrink: 0,
  },
});

export { Avatar };
