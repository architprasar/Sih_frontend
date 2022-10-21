/* eslint-disable prettier/prettier */
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

function logout() {

    const a = axios
        .get('/auth/logout/')
        .then(async response => {
            await AsyncStorage.removeItem('Authtoken');
            history.push('/');
        })
        .catch(error => console.log(error));
}

export default logout;
