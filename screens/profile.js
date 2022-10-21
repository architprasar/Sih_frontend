//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, Pressable } from 'react-native';
import { useHistory } from '../react-router';
import logout from './logic/logout';


const Profile = () => {
    const history = useHistory();
    return (
        <View style={styles.container}>

            <View style={styles.illu}>
                <View style={styles.iuulstrartstydgdu}>
                    <Image
                        style={[styles.illuimage]}
                        source={require('../assets/Illustration.png')}
                    />

                </View>
                <View style={styles.ques}>
                    <Text style={styles.que}>Carryminati</Text>

                </View>

            </View>

            <View style={styles.containers}>
                <Pressable style={styles.mic} onPress={() => { }}>
                    <Text style={styles.prs}>Tasks</Text>
                </Pressable>


                <Text style={styles.prs}>More Features</Text>
                <Text style={styles.prs} onPress={() => {
                    logout(history)
                }}>Logout</Text>
                <Text style={styles.prs}>App Version 1.0</Text>
                <Text style={styles.prs} onPress={()=>{
                    history.push('/parent')
                }} >Parent</Text>

            </View>

        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 7,
    },
    containers: {
        flex: 7,
        marginLeft: 10,
    },
    illu: {
        flex: 3,

        backgroundColor: '#EDE6FC',

        flexDirection: 'row',

        borderRadius: 10,
    },

    prs: {
        fontSize: 25,
        color: '#000',
        fontFamily: 'Alegreya',
        paddingTop: 30,
        marginLeft: 10,
    },

    iuulstrartstydgdu: {
        width: 90,
        height: 90,
        backgroundColor: '#FCDDEC',
        borderRadius: 20,
        overflow: 'hidden',
        borderRadius: 500,
        marginTop: 40,
        marginLeft: 20,
    },
    illuimage: {
        width: '100%',
        height: '100%',
    },
    ques: {
        marginTop: 40,
        marginLeft: 20,
    },
    que: {
        fontSize: 30,
        color: '#000',
        fontFamily: 'Alegreya',

        marginTop: 20,
    },
    qu: {
        fontSize: 15,
    },
});


export default Profile;