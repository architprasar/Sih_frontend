import axios from "axios";
import AsyncStorage from '@react-native-async-storage/async-storage';


function register(fname, lname, age, email, password, history) {
  const payload = {
    username: email,
    password: password,
    first_name: fname,
    last_name: lname,
    age: age,
  };

  const a = axios
    .post(`auth/register/`, payload)
    .then(async (response) => {
      const { token, user } = response.data;
      await AsyncStorage.setItem("Authtoken", token);
      // We set the returned token as the default authorization header
      axios.defaults.headers.common.Authorization = `Token ${token}`;

      // Navigate to the home screen
      history.push("/");
    })
    .catch((error) => {
      alert(error.response.data["msg"]);
    });
}

export default register;
