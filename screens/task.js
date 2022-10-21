import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Pressable,
  TouchableOpacity,
} from 'react-native';

const Task = () => {
  return (
    <View style={styles.container}>

      <View style={styles.illu}>
        <View style={styles.create}>
          <Text style={styles.txt}>Today's Task</Text>
          <Text style={styles.txts}>Peer Meet Group</Text>
        </View>

        <View style={styles.iuulstrartstydgdu}>

          <Image
            style={[styles.illuimage]}
            source={require('../assets/group.png')}
          />

        </View>

      </View>

      <View style={styles.text}>
        <Text style={styles.Tasks}>
          Let’s open up to the  thing that matters amoung the people{' '}
        </Text>
        <Text style={styles.Taskss}>Time: 12:45 p.m </Text>
        <Text style={styles.Taskss}>Duration: 40 min </Text>
        <Text style={styles.Taskss}>Focus: Stress and social Interaction </Text>
      </View>
      <View style={styles.containers}>
        <TouchableOpacity style={styles.loginBtn}>
          <Text style={styles.loginText}>Join</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.containers} />


    </View>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 7,
  },
  loginBtn: {
    width: '80%',
    borderRadius: 3,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 'bold',
    backgroundColor: '#000',

  },
  loginText: {
    color: '#fff',
  },
  txt: {
    padding: 15,
    fontSize: 35,
  },
  text: {
    padding: 15,
  },
  Tasks: {
    fontSize: 25,
    paddingBottom: 15,
  },
  Taskss: {
    fontSize: 20,
    paddingBottom: 15,
  },
  txts: {
    padding: 15,
    fontSize: 20,
  },
  containers: {
    flex: 2,
  },
  illu: {
    flex: 3,

    backgroundColor: '#EDE6FC',

    flexDirection: 'row',

    borderRadius: 10,
  },

  iuulstrartstydgdu: {
    width: 150,
    height: 150,

    overflow: 'hidden',

    marginTop: 5,
  },
  illuimage: {
    width: '100%',
    height: '100%',
  },
});

export default Task;