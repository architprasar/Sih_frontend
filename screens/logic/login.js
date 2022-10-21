/* eslint-disable prettier/prettier */
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

function login(email, password, history) {
  const payload = {
    username: email,
    password: password,
  };

  const a = axios
    .post('/auth/login/', payload)
    .then(async response => {
      const { token, user } = response.data;
      await AsyncStorage.setItem('Authtoken', token);

      // We set the returned token as the default authorization header
      axios.defaults.headers.common.Authorization = `Token ${token}`;

      // Navigate to the home screen
      history.push('/');
    })
    .catch(error => console.log(error));
}

export default login;
