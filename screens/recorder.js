import React, { useEffect } from "react";
import { View, StyleSheet, Text, Pressable, Image, Button } from "react-native";
import uploadaudio from "./logic/audioupload";
import AudioRecord from 'react-native-audio-record';
import base64 from "react-native-base64";
import style from "../style";

const Recorder = () => {
  const [recording, setRecording] = React.useState(false);
  const [recordings, setRecordings] = React.useState(null);
  const [mood, setMood] = React.useState(null);
   


  const options = {
    sampleRate: 16000,  // default 44100
    channels: 1,        // 1 or 2, default 1
    bitsPerSample: 16,  // 8 or 16, default 16
    audioSource: 6,     // android only (see below)
    wavFile: 'test.wav' // default 'audio.wav'
  };

  const ques = {
    0: "Is is easy for you to fell asleep?",
    1: "What was the best experience you had today?",
    2: "When were you the most happy?",
    3: "Is something worrying You?",
    4: "Are you scared of something?",
    5: "What makes you angreiest"
  }
  useEffect(() => {
    console.log(mood)
  }, [mood]);
  const startRecording = () => {

    try {
      AudioRecord.init(options);
      AudioRecord.start(options);

      setRecording(true);
    } catch (error) {
      console.log(error);
    }
  };
  const stopRecording = async () => {
    try {

      const path = await AudioRecord.stop();
      console.log(path)
      let file = new File([path], "test.wav", { type: "audio/wav" });

      function toDataURL(url, callback) {
        var xhr = new XMLHttpRequest();
        xhr.onload = function () {
          var reader = new FileReader();
          reader.onloadend = function () {
            uploadaudio(reader.result, setMood)
          }
          reader.readAsDataURL(xhr.response);
        };
        xhr.open('GET', url);
        xhr.responseType = 'blob';
        xhr.send();
      }
      toDataURL("file://" + path)



      setRecording(false);
    } catch (error) {
      console.log(error);
    }
  }


  return (
    <View style={styles.container}>
      <View style={styles.heading}>
        <Text style={styles.spkup}>Speak Up</Text>
      </View>
      <View style={styles.illu}>
        <View style={styles.iuulstrartstydgdu}>
          <Image
            style={[styles.illuimage]}
            source={require("../assets/Illustration.png")}
          />
        </View>
        <View style={styles.ques}>
          <Text style={styles.que}>{ques[(Math.random() * 5)]}</Text>
        </View>
      </View>
      <View style={styles.btn}>
        <View style={styles.recrow}>
          <Text style={styles.textmood}>{mood}</Text>
        </View>
        {recordings === null ? <Pressable
          style={styles.mic}
          onPress={async () => recording ? stopRecording() : startRecording()}

        >
          <Image
            style={[styles.micimg]}
            source={
              recording
                ? require("../assets/micactive.png")
                : require("../assets/mic.png")
            }
          ></Image>
        </Pressable> : <Text>Uploading</Text>}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 6,
    backgroundColor: "#fff",
    backgroundColor: "#fff",
  },
  heading: {
    flex: 0.5,
    justifyContent: "center",
  },
  illu: {
    flex: 3,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    flexDirection: "column",
  },
  btn: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  spkup: {
    color: "#000",
    fontSize: 40,
    marginLeft: 25,
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "Alegreya",
  },
  iuulstrartstydgdu: {
    width: 300,
    height: 300,
    backgroundColor: "#FCDDEC",
    borderRadius: 20,
    overflow: "hidden",
  },
  illuimage: {
    width: "100%",
    height: "100%",
  },
  ques: {
    marginTop: 10,
  },
  que: {
    fontSize: 30,
    color: "#000",
    fontFamily: "Alegreya",
  },
  mic: {
    width: 80,
    height: 80,
    backgroundColor: "#FCDDEC",
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  micimg: {
    width: "60%",
    height: "60%",
  },
  textmood: {
    color: "#000",

    fontSize: 30,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  fill: {
    flex: 1,
    margin: 16,
  },
  button: {
    margin: 16,
    justifyContent: "center",
    width: 30,
    height: 30,
    borderRadius: 100,
  },
  recrow: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  playimg: {
    width: 30,
    height: 30,
  },
});

export default Recorder;
