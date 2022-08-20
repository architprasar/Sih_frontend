import { StyleSheet, View } from "react-native";
import { Router } from "./react-router";
import Home from "./screens/home";


const App = () => {
  return (
    <Router>
      <View style={styles.container}>
        <Home />
      </View>
    </Router>
  );
};
const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    padding: 0,
    flex: 1,
  },
  nav: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
});

export default App;
