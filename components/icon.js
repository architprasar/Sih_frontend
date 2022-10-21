import React, { useContext } from "react";
import { View, Image, Pressable, StyleSheet, Text } from "react-native";
import { useHistory } from "../react-router";
import { AuthContext } from "../App";
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
  const auth = useContext(AuthContext);
  const history = useHistory();
  const today = new Date();
  return auth ? (
    <Pressable
      style={style.avatar1}
      onPress={() => {
        history.push("/profile");
      }}
    >
      <Image
        style={style.tinyLogo}
        source={{
          uri:
            "https://avatars.dicebear.com/api/big-ears-neutral/mychild" +
            today.getSeconds() +
            ".png",
        }}
      />
    </Pressable>
  ) : (
    <Pressable
      style={style.avatar}
      onPress={() => {
        history.push("/login");
      }}
    >
      <Text style={style.login_text}> Login</Text>
    </Pressable>
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
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    fontSize: 20,
    flexShrink: 0,
  },
  avatar1: {
    width: 40,
    height: 40,
    borderRadius: 100,
    borderWidth: 1,
    borderColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    fontSize: 20,
    flexShrink: 0,
    overflow: "hidden",
  },
  login_text: {
    fontSize: 15,
    color: "#000",
  },

  tinyLogo: {
    width: 50,
    height: 50,
  },
});

export { Avatar };
