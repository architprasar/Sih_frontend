import React from 'react';
import {View, StyleSheet, Text, Pressable, Image} from 'react-native';

const Musicplayer = () => {
  return (
    <View style={styles.container}>
      <View style={styles.heading}>
        <Text style={styles.spkup} />
      </View>
      <View style={styles.illu}>
        <View style={styles.iuulstrartstydgdu}>
          <Image
            style={[styles.illuimage]}
            source={require('../assets/Illustration.png')}
          />
        </View>
        <View style={styles.ques}>
          <Text style={styles.que}>What are you doing today?</Text>
        </View>
      </View>
      <View style={styles.btn} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 6,
    backgroundColor: '#fff',
    backgroundColor: '#fff',
  },
  heading: {
    flex: 0.5,
    justifyContent: 'center',
  },
  illu: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    flexDirection: 'column',
  },
  btn: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  spkup: {
    color: '#000',
    fontSize: 40,
    marginLeft: 25,
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'Alegreya',
  },
  iuulstrartstydgdu: {
    width: 300,
    height: 300,
    backgroundColor: '#FCDDEC',
    borderRadius: 20,
    overflow: 'hidden',
  },
  illuimage: {
    width: '100%',
    height: '100%',
  },
  ques: {
    marginTop: 10,
  },
  que: {
    fontSize: 30,
    color: '#000',
    fontFamily: 'Alegreya',
  },
  mic: {
    width: 80,
    height: 80,
    backgroundColor: '#FCDDEC',
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  micimg: {
    width: '60%',
    height: '60%',
  },
});

export default Musicplayer;
