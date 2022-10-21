import axios from 'axios';
import React, { useEffect, createContext, useState } from 'react';

import {
    View,
    Text,
    StyleSheet,
    Pressable,
    Image,
    TouchableOpacity, TextInput,
    ScrollView,
    KeyboardAvoidingView,
    Button,
    onPressLearnMore

} from 'react-native';
import { useHistory } from '../react-router';


export default function Taskadd() {
    const [Title, setTitle] = useState(null);
    const [description, setDescription] = useState(null);
    const [deadline, setDeadline] = useState(null);
    const [others, setOthers] = useState(null);
    const history = useHistory();

    const cc = () => {
        axios.post(
            'add/task',
            {
                title: Title,
                desc: description,
                end: deadline,
                reward: others
            }

        )
    }
    return (
        <View style={hh.container}>
            <View style={hh.inputView}>
                <Text style={hh.head}>Add Task for your child</Text>
            </View>
            <View style={hh.inputView}>
                <TextInput
                    style={hh.TextInput}
                    placeholder="Title"
                    placeholderTextColor="black"
                    onChangeText={(Title) => setTitle(Title)}
                />
            </View>

            <View style={hh.inputView}>
                <TextInput
                    style={hh.TextInput}
                    placeholder="Description"
                    placeholderTextColor="black"

                    onChangeText={(description) => setDescription(description)}
                />
            </View>
            <View style={hh.inputView}>
                <TextInput
                    style={hh.TextInput}
                    placeholder="Deadline"
                    placeholderTextColor="black"

                    onChangeText={(deadline) => setDeadline(deadline)}
                />
            </View>
            <View style={hh.inputView}>
                <TextInput
                    style={hh.TextInput}
                    placeholder="Rewards"
                    placeholderTextColor="black"

                    onChangeText={(others) => setOthers(others)}
                />
            </View>

            <TouchableOpacity
                style={hh.addBtn}
                onPress={() => {

                }}
            >
                <Text style={hh.addText}
                    onPress={() => {
                        cc();
                    }}
                >Add</Text>
            </TouchableOpacity>


        </View>
    );
}

const hh = StyleSheet.create({
    container: {
        flex: 6,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#fff",
    },

    image: {
        marginBottom: 40,
    },

    inputView: {
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        height: 60,
        marginBottom: 10,
    },

    TextInput: {
        height: 55,
        width: "80%",
        borderColor: "#371B34",
        fontSize: 15,
        borderWidth: 2,
        backgroundColor: "#fff",
        borderRadius: 3,
        padding: 10,
    },


    addBtn: {
        width: "80%",
        borderRadius: 3,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        fontWeight: "bold",
        backgroundColor: "#000",
    },
    addText: {
        color: "#fff",
    },
    head: {
        fontSize: 35,
        fontWeight: "bold",
        paddingBottom: 10,
        color: "#371B34",
    },
});



