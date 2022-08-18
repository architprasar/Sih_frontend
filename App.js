import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import { Router, Route, Link } from "./react-router";
import Hoome from "./home";
const Home = () => <Text>Home</Text>;

const About = () => <Text>About</Text>;

const App = () => (
  <Router>
    
      <View style={styles.container}>
        <Route exact path="/" component={Hoome} />
        <Route path="/about" component={About} />
      </View>
  </Router>
);

const styles = StyleSheet.create({
  container: {
    marginTop: 25,
    padding: 0,
    flex: 1,
  },
  nav: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
});

export default App;
