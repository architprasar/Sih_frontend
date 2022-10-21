/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
/* eslint-disable react/self-closing-comp */
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

} from 'react-native';
import { Route, useHistory } from '../react-router';
import React, { useEffect, useState } from 'react';
import Footer from '../components/footer';
import Top from '../components/top';
import style from '../style';
import SignUp from './SignUp';
import LogIn from './LogIn';
import Musicplayer from './musicplayer';
import Task from './task';
import Recorder from './recorder';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import Profile from './profile';
import Parent from './parent';
import Dash from './dash';
import Taskadd from './taskadd';



function Welcomeback() {
  const [name, setName] = useState(null);
  const getname = async () => {
    if (name === null) {
      const tt = await AsyncStorage.getItemAsync('name');
      if (tt !== null || tt !== '') {
        setName(tt);
      }
      else {
        const res = async () => {
          axios.get('retrieve/').then(async (re) => {
            setName(re.data["name"]);
            await AsyncStorage.setItemAsync('name', re.data["name"]);
          })
        }
        res();
      }
    }
  }
  useEffect(() => {
    getname()
  }
  );
  return (
    <View style={style.mainsrc_v1}>
      <Text style={style.heading}>
        Welcome back, <Text style={style.name}>{name === null || name === "" ? "Buddy" : name}</Text>
      </Text>
    </View>
  );
}

function FeelingBox(props) {

  return (
    <Pressable
      style={[style.feelings]}
      onPress={() => {
        props.setS(props.val);
      }}
      disabled={props.dis}
    >
      <View
        style={[
          style.flng,
          { backgroundColor: props.dis ? '#ccc' : props.color },
        ]}
      >
        <Image style={style.flnimg} source={props.imgsrc}></Image>
      </View>
      <Text style={style.flntitle}>{props.title}</Text>
    </Pressable>
  );
}

function FeelingCont() {
  const [selected, setSelected] = React.useState(null);
  const res = async () => {
    if (selected !== null) {
      await AsyncStorage.setItemAsync('crfeeling', selected);
    } else {
      const re = await AsyncStorage.getItemAsync('crfeeling');
      if (re !== null) {
        setSelected(re);
      }
    }
  };
  useEffect(() => {

    res();
  }, [selected]);
  return (
    <View style={style.mainsrc_v2}>
      <Text style={style.flngtxt}>How are you feeling today?</Text>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={style.horlist}
      >
        <FeelingBox
          setS={setSelected}
          val={0}
          title="Happy"
          dis={selected !== null ? (selected === 0 ? false : true) : false}
          color="#EF5DA8"
          imgsrc={
            selected !== null
              ? selected === 0
                ? require('../assets/emojis/Happy.png')
                : require('../assets/emojis/Happydisabled.png')
              : require('../assets/emojis/Happy.png')
          }
        />
        <FeelingBox
          title="Calm"
          color="#AEAFF7"
          setS={setSelected}
          val={1}
          dis={selected !== null ? (selected === 1 ? false : true) : false}
          imgsrc={require('../assets/emojis/Calm.png')}
        />
        <FeelingBox
          title="Relax"
          color="#F09E54"
          setS={setSelected}
          val={2}
          dis={selected !== null ? (selected === 2 ? false : true) : false}
          imgsrc={require('../assets/emojis/Relax.png')}
        />
        <FeelingBox
          title="Focus"
          color="#A0E3E2"
          setS={setSelected}
          val={3}
          dis={selected !== null ? (selected === 3 ? false : true) : false}
          imgsrc={require('../assets/emojis/Focus.png')}
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
        imgsrc={require('../assets/group.png')}
      />
      <Taskcard
        color="#rgba(240, 158, 84, 0.3)"
        desc="Aura is the most important thing that matters to you.join us on "
        title="Meditation"
        btnclr="#F09E54"
        btntitle="06:00 PM"
        imgsrc={require('../assets/med.png')}
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
                  history.push('/task');
                }}
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
      newFunction(),

      backAction
    );

    function newFunction() {
      return 'hardwareBackPress';
    }
  }, []);
  return (
    <View style={style.container}>
      <Top></Top>
      <Route path="/" exact component={MainScr}></Route>
      <Route path="/login" component={LogIn}></Route>
      <Route path="/register" component={SignUp}></Route>
      <Route path="/music" component={Musicplayer}></Route>
      <Route path="/task" component={Task}></Route>
      <Route path="/health" component={Recorder}></Route>
      <Route path="/forget" component={SignUp}></Route>
      <Route path="/profile" component={Profile}></Route>
      <Route path="/parent" component={Dash}></Route>
      <Route path="/taskadd" component={Taskadd}></Route>





      <Footer></Footer>
    </View>
  );
}
