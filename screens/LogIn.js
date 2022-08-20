import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";
import { useHistory } from "../react-router";

export default function LogIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  return (
    <View style={styles.container}>
      <View style={styles.inputView}>
        <Text style={styles.head}>My child</Text>
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Email"
          placeholderTextColor="black"
          onChangeText={(email) => setEmail(email)}
        />
      </View>

      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Password"
          placeholderTextColor="black"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        />
      </View>

      <TouchableOpacity style={styles.loginBtn}>
        <Text style={styles.loginText}>LOGIN</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text
          style={styles.forget_button}
          onPress={() => {
            history.push("/forget");
          }}
        >
          Forget Password ?
        </Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.register_text}>
          Do not have an account ?{" "}
          <Text
            style={styles.register_button}
            onPress={() => {
              history.push("/register");
            }}
          >
            Register here
          </Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 6,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },

  image: {
    marginBottom: 40,
  },

  inputView: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    height: 60,
    marginBottom: 10,
  },

  TextInput: {
    height: 55,
    width: "80%",
    borderColor: "#371B34",
    fontSize: 15,
    borderWidth: 2,
    backgroundColor: "#fff",
    borderRadius: 3,
    padding: 10,
  },

  register_button: {
    height: 30,
    color: "#0000EE",
    fontSize: 15,
  },
  register_text: {
    height: 30,
    color: "#371B34",
    fontSize: 15,
  },
  forget_button: {
    height: 30,
    marginTop: 20,
    color: "#0000EE",
    fontSize: 15,
  },

  loginBtn: {
    width: "80%",
    borderRadius: 3,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    fontWeight: "bold",
    backgroundColor: "#000",
  },
  loginText: {
    color: "#fff",
  },
  head: {
    fontSize: 35,
    fontWeight: "bold",
    paddingBottom: 10,
    color: "#371B34",
  },
});
