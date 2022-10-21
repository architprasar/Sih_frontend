import { StyleSheet, View } from 'react-native';
import { Router } from './react-router';
import Home from './screens/home';
import React, { useEffect, createContext, useState } from 'react';
import axios from 'axios';
import { baseURL } from './axios.config';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AuthContext = createContext();
const App = () => {
  const [auth, setAuth] = useState(false);

  const getToken = async () => {
    const token = await AsyncStorage.getItem('Authtoken');
    if (token) {
      axios.defaults.headers.common.Authorization = `Token ${token}`;
      console.log('token found');
      setAuth(true);
    }
    else {
      setAuth(false);
    }
  };



  useEffect(() => {
    getToken();
    axios.defaults.baseURL = baseURL;
    axios.defaults.timeout = 105000;
  }, []);
  return (
    <AuthContext.Provider value={auth}>
      <Router>
        <View style={styles.container}>
          <Home />
        </View>
      </Router>
    </AuthContext.Provider>
  );
};
const styles = StyleSheet.create({
  container: {
    padding: 0,
    flex: 1,
  },
  nav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});

export default App;
export { AuthContext };
