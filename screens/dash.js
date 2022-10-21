import React, { useEffect, createContext, useState } from 'react';

import {
    View,
    Text,
    StyleSheet,
    Pressable,
    Image,
    TouchableHighlight, TextInput,
    ScrollView,
    KeyboardAvoidingView,
    Button,
    onPressLearnMore

} from 'react-native';
import { useHistory } from '../react-router';
import style from '../style';



const Dash = () => {
    const [text, onChangeText] = React.useState("Useless Text");
    const [task, setTask] = useState();
    const history = useHistory();
    const handleAddTask = (value) => {
        props.addTask(value);
        setTask(null);
    }


    return (


        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>BriGen</Text>
                <View style={style.parentset}>


                </View>


            </View>
            <View style={styles.containers}>
                <Image
                    style={styles.imagestyles}
                    source={require('../assets/emojis/Happy.png')}

                />
                <Text style={styles.textstyles}>Dont Worry Your Child is {'\n'}
                    Happy</Text>
            </View>

            <View style={styles.Task}>

                <Text placeholder='ge' style={styles.Ttext} >Tasks
                </Text>






            </View>
            <ScrollView horizontal={true}>

                <View style={styles.conts}>

                    <Text style={styles.textstyles}>Titile
                    </Text>
                    <Text style={styles.textstyles}>Description</Text>
                    <Text style={styles.textstyles}>Deadline</Text>
                </View>

                <View style={styles.conts}>

                    <Text style={styles.textstyles}>Titile
                    </Text>
                    <Text style={styles.textstyles}>Description</Text>
                    <Text style={styles.textstyles}>Deadline</Text>
                </View>
                <View style={styles.conts}>

                    <Text style={styles.textstyles}>Titile
                    </Text>
                    <Text style={styles.textstyles}>Description</Text>
                    <Text style={styles.textstyles}>Deadline</Text>
                </View>



                <View style={styles.conts}>

                    <Text style={styles.textstyles}>Titile
                    </Text>
                    <Text style={styles.textstyles}>Description</Text>
                    <Text style={styles.textstyles}>Deadline</Text>
                </View>

            </ScrollView>



            <Button
                onPress={() => history.push('/taskadd')}
                title="Add Task"
                color="#841584"
                accessibilityLabel="Add Task"
            />
        </View>



    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 6,
        
    },
    btn: {
        marginLeft: 40,
    },
    input: {
        height: 40,
    },


    Task: {
        flexDirection: 'row',
        marginLeft: 20,
        bottom: 25,




    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 0.5,

        padding: 10,
        bottom: 200,
        borderRadius: 10,
    },
    Ttext: {
        fontSize: 35,


    },
    conts: {
        backgroundColor: '#ccc',


        margin: 15,
        borderRadius: 10,
        width: "40%",
    },

    containers: {
        flex: 2,
        backgroundColor: '#EF5DA8',
        bottom: 35,
        margin: 15,
        borderRadius: 10,
        flexDirection: 'row',
    },
    containerss: {

        backgroundColor: 'wheat',
        flex: 1,

        margin: 15,
        borderRadius: 10,
        flexDirection: 'row',

        bottom: 100,

    },
    TaskText: {


        fontSize: 40,
        marginLeft: 20,
        bottom: 300,
    },

    textstyles: {

        fontSize: 20,
        padding: 10,

        top: 50,


    },
    header: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    headerText: {
        fontSize: 40,
        marginLeft: 20,
    },
    imagestyle: {
        width: 60,
        height: 60,
        marginRight: 20,
    },
    imagestyles: {
        width: 60,
        height: 60,
        marginLeft: 20,
        top: 50,
    },

});
export default Dash;

