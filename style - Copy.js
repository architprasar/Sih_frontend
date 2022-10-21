import { StyleSheet, Dimensions } from "react-native";

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
    overflow: "visible",
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
  tskimg: {
    height: 80,
    width: 100,
  },
});

export default style;
