import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { useHistory } from '../react-router';
import register from './logic/register';

export default function SignUp() {
  const [fName, setfName] = useState(null);
  const [lName, setlName] = useState(null);
  const [age, setAge] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [cpassword, setcPassword] = useState(null);
  const history = useHistory();
  function validateEmail(inputText) {
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (inputText.match(mailformat)) {
      return true;
    } else {
      return false;
    }
  }

  return (
    <View style={styles.container}>
      <ScrollView style={{ width: '100%', height: '100%' }}>
        <View style={styles.inputView}>
          <Text style={styles.head}>My child</Text>
        </View>
        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="First name"
            placeholderTextColor="black"
            onChangeText={fName => setfName(fName)}
          />
        </View>
        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="Last name"
            placeholderTextColor="black"
            onChangeText={lName => setlName(lName)}
          />
        </View>
        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="Age"
            keyboardType="numeric"
            placeholderTextColor="black"
            onChangeText={age => setAge(age)}
          />
        </View>
        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="Email"
            placeholderTextColor="black"
            onChangeText={email => setEmail(email)}
          />
        </View>
        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="Password"
            placeholderTextColor="black"
            secureTextEntry={true}
            onChangeText={password => setPassword(password)}
          />
        </View>

        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="Confirm Password"
            placeholderTextColor="black"
            secureTextEntry={true}
            onChangeText={cpassword => setcPassword(cpassword)}
          />
        </View>
        <View style={styles.inputView}>
          <TouchableOpacity
            style={styles.loginBtn}
            onPress={() => {
              if (
                fName !== null &&
                lName !== null &&
                age !== null &&
                email !== null &&
                password !== null &&
                cpassword !== null
              ) {
                if (password === cpassword) {
                  if (validateEmail(email)) {
                    register(fName, lName, age, email, password, history);
                  } else {
                    alert('Invalid Email');
                  }
                } else {
                  alert('Password does not match');
                }
              } else {
                alert('Please fill all the fields');
              }
            }}>
            <Text style={styles.loginText}>Register</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.inputView}>
          <TouchableOpacity>
            <Text style={styles.baseText}>
              Already Have an account?
              <Text
                style={styles.LinkText}
                onPress={() => {
                  history.push('/login');
                }}>
                {' Login'}
              </Text>
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.inputView}>
          <TouchableOpacity>
            <Text style={styles.baseText}>

              <Text
                style={styles.LinkText}
                onPress={() => {
                  history.push('/asparent');
                }}>
                {' As parent'}
              </Text>
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 6,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  image: {
    marginBottom: 40,
  },

  inputView: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    marginBottom: 10,
  },

  TextInput: {
    height: 55,
    width: '80%',
    borderColor: '#371B34',
    fontSize: 15,
    borderWidth: 2,
    backgroundColor: '#fff',
    borderRadius: 3,
    padding: 10,
  },

  forgot_button: {
    height: 30,
    marginBottom: 30,
    top: 10,
  },

  loginBtn: {
    width: '80%',
    borderRadius: 3,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 'bold',
    backgroundColor: '#000',
    fontSize: 20,
  },
  loginText: {
    color: '#fff',
  },
  head: {
    fontSize: 35,
    fontWeight: 'bold',
    color: '#371B34',
    paddingBottom: 10,
  },
  baseText: {
    paddingTop: 10,
    fontSize: 15,
    color: '#371B34',
  },
  LinkText: {
    color: '#0000EE',
  },
});
