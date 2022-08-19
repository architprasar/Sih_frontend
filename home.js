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
} from "react-native";
import React, { useEffect } from "react";
import Footer from "./components/footer";
import Top from "./components/top";
import { useFonts } from "expo-font";

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
    <Pressable
      style={[style.feelings]}
      onPress={() => {
      }}
    >
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
                onPress={() => {
                }}
              >
                {props.btntitle}
              </Text>
            </Pressable>
          </View>
        </View>
        <View style={style.img}>
          <Image source={props.imgsrc} />
        </View>
      </View>
    </View>
  );
}

/*

main starts here 
*/

function MainScr() {
  const [loddd] = useFonts({
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

export default function Hoome() {
  return (
    <View style={style.container}>
      <Top></Top>
      <MainScr></MainScr>
      <Footer></Footer>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
    backgroundColor: "#fff",
    flexDirection: "column",
    flex: 1,
  },
  t1: {
    color: "#fff",
    fontSize: 20,

    fontWeight: "bold",
    textAlign: "center",
  },
  top: {
    backgroundColor: "#000",
    flexDirection: "row",
    flex: 0.8,
  },
  btn: {
    flex: 1.5,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  btn2: {
    backgroundColor: "#fff",
    flex: 5,
  },
  main: {
    backgroundColor: "#fff",
    zIndex: 1000,

    flex: 6,
  },
  scrmain: {},

  navbtn: {
    flex: 1,
    backgroundColor: "#ccc",
  },

  mainsrc_v1: {
    height: 60,
    backgroundColor: "#fff",
    justifyContent: "center",
    paddingLeft: 25,
  },
  mainsrc_v2: {
    height: 190,
    backgroundColor: "#fff",
    paddingTop: 20,
    paddingLeft: 0,
  },
  mainsrc_v3: {
    height: 600,
    paddingTop: 20,
    backgroundColor: "#fff",
    paddingBottom: 100,
  },

  heading: {
    color: "#371B34",
    fontSize: 35,
    fontFamily: "Alegreya",
    fontWeight: "100",
  },
  name: {
    color: "#000",
    fontSize: 40,
    fontWeight: "bold",
  },
  flngtxt: {
    color: "#371B34",
    fontSize: 25,
    fontFamily: "Alegreya",
    paddingLeft: 25,
  },
  horlist: {
    flexDirection: "row",
    backgroundColor: "#fff",
    paddingLeft: 25,
  },
  feelings: {
    height: 170,
    backgroundColor: "#fff",
    width: 75,
    justifyContent: "center",
    paddingTop: 25,
    alignItems: "center",
    marginRight: 25,
  },

  flng: {
    height: 75,
    backgroundColor: "#000",
    width: 75,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  flnimg: {
    height: 40,
    width: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  flntitle: {
    flex: 1,
    color: "#371B34",
    textAlign: "center",
    fontSize: 15,
    fontFamily: "Alegreya",
    paddingTop: 5,
  },
  todaytask: {
    color: "#371B34",
    fontSize: 25,
    fontFamily: "Alegreya",
    paddingLeft: 25,
    fontWeight: "100",
  },
  cardcont: {
    height: 250,
    backgroundColor: "#fff",
    paddingEnd: 25,
    paddingTop: 25,
    paddingLeft: 25,
  },
  card: {
    height: 200,
    backgroundColor: "#FCDDEC",
    borderRadius: 20,
    flexDirection: "row",
    overflow: "hidden",
  },
  cardcontent: {
    height: 200,
    width: "60%",
    paddingTop: 25,
    paddingLeft: 25,
  },
  img: {
    height: 200,
    width: "40%",
    justifyContent: "center",
    alignItems: "center",
  },
  cntnt: {
    height: "70%",
  },
  cardbtn: {
    height: "30%",
  },
  conttitle: {
    color: "#371B34",
    fontSize: 25,
    fontFamily: "Alegreya",
    fontFamily: "Alegreya",
    fontWeight: "bold",
    marginBottom: 10,
  },
  desc: {
    color: "#371B34",
    fontFamily: "Alegreya",
    fontSize: 15,
  },
  prsblecardbtn: {
    height: 40,
    justifyContent: "center",
  },
  prsblecardbtntxt: {
    fontSize: 20,
    fontFamily: "Alegreya",
    fontWeight: "bold",
  },
});
