import {
  Pressable,
  StyleSheet,
  Text,
  View,
  Button,
  Dimensions,
  ScrollView,
  TextInput,
  Image,
  BackHandler,
} from "react-native";
import { Route, useHistory } from "../react-router";
import React, { useEffect } from "react";
import Footer from "../components/footer";
import Top from "../components/top";
import { useFonts } from "expo-font";
import style from "../style";
import SignUp from "./SignUp";
import LogIn from "./LogIn";

function Welcomeback() {
  return (
    <View style={style.mainsrc_v1}>
      <Text style={style.heading}>
        Welcome back, <Text style={style.name}>Sir</Text>
      </Text>
    </View>
  );
}

function FeelingBox(props) {
  return (
    <Pressable style={[style.feelings]} onPress={() => {}}>
      <View style={[style.flng, { backgroundColor: props.color }]}>
        <Image style={style.flnimg} source={props.imgsrc}></Image>
      </View>
      <Text style={style.flntitle}>{props.title}</Text>
    </Pressable>
  );
}

function FeelingCont() {
  return (
    <View style={style.mainsrc_v2}>
      <Text style={style.flngtxt}>How are you feeling today?</Text>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={style.horlist}
      >
        <FeelingBox
          title="Happy"
          color="#EF5DA8"
          imgsrc={require("./assets/emojis/Happy.png")}
        />
        <FeelingBox
          title="Calm"
          color="#AEAFF7"
          imgsrc={require("./assets/emojis/Calm.png")}
        />
        <FeelingBox
          title="Relax"
          color="#F09E54"
          imgsrc={require("./assets/emojis/Relax.png")}
        />
        <FeelingBox
          title="Focus"
          color="#A0E3E2"
          imgsrc={require("./assets/emojis/Focus.png")}
        />
      </ScrollView>
    </View>
  );
}

function TaskCont() {
  return (
    <View style={style.mainsrc_v3}>
      <Text style={style.todaytask}>Today's Task</Text>
      <Taskcard
        color="#FCDDEC"
        desc="Let’s open up to the thing that matters amoung the people"
        title="Peer Group Meetup"
        btnclr="#EF5DA8"
        btntitle="Join now"
        imgsrc={require("./assets/group.png")}
      />
      <Taskcard
        color="#rgba(240, 158, 84, 0.3)"
        desc="Aura is the most important thing that matters to you.join us on "
        title="Meditation"
        btnclr="#F09E54"
        btntitle="06:00 PM"
        imgsrc={require("./assets/med.png")}
      />
    </View>
  );
}
function Taskcard(props) {
  return (
    <View style={style.cardcont}>
      <View style={[style.card, { backgroundColor: props.color }]}>
        <View style={style.cardcontent}>
          <View style={style.cntnt}>
            <Text style={style.conttitle}>{props.title}</Text>
            <Text style={style.desc}>{props.desc}</Text>
          </View>
          <View style={style.cardbtn}>
            <Pressable style={style.prsblecardbtn}>
              <Text
                style={[style.prsblecardbtntxt, { color: props.btnclr }]}
                onPress={() => {}}
              >
                {props.btntitle}
              </Text>
            </Pressable>
          </View>
        </View>
        <View style={style.img}>
          <Image source={props.imgsrc} style={style.tskimg} />
        </View>
      </View>
    </View>
  );
}

/*

main starts here 
*/

function MainScr() {
  const [loaded] = useFonts({
    Alegreya: require("./assets/font/Alegreya-VariableFont_wght.ttf"),
  });

  return (
    <View style={style.main}>
      <ScrollView style={style.scrmain} bounces={true}>
        <Welcomeback />
        <FeelingCont />
        <TaskCont></TaskCont>
      </ScrollView>
    </View>
  );
}

export default function Home() {
  const history = useHistory();
  const backAction = () => {
    history.goBack();
    return true;
  };
  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );
  }, []);
  return (
    <View style={style.container}>
      <Top></Top>
      <Route path="/" exact component={MainScr}></Route>
      <Route path="/login" component={LogIn}></Route>
      <Route path="/register" component={SignUp}></Route>

      <Route path="/forget" component={SignUp}></Route>

      <Footer></Footer>
    </View>
  );
}
