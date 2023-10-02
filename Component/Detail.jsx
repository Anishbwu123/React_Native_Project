import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { firebase } from '../config'
import { useNavigation } from '@react-navigation/native'


const Detail = ({ route }) => {
    const Navi = useNavigation();
    const [notetext, setnotetext] = useState(route.params.item.note);
    const [notetitle, setnotetittle] = useState(route.params.item.title)

    const handleUpdate = () => {
        if (notetitle && notetitle.length > 0) {
            firebase.firestore()
                .collection('notes')
                .doc(route.params.item.id)
                .update({
                    title: notetitle,
                    note: notetext,
                })
                .then(() => {
                    Navi.navigate('Home');
                })
                .catch((error) => {
                    console.log("Error");
                })
        }
    }

    const handleDelete = () => {
        firebase.firestore()
            .collection('notes')
            .doc(route.params.item.id)
            .delete()
            .then(() => {
                Navi.navigate('Home');
            })
            .catch((error) => {
                console.log("Error");
            })
    }
    return (
        <View style={styles.container}>
            <TextInput placeholder='Title' value={notetitle} onChangeText={(text) => setnotetittle(text)} style={styles.inputtitle} />

            <TextInput placeholder='Note' value={notetext} onChangeText={(text) => setnotetext(text)} style={styles.inputnote} multiline={true} />
            <View style={styles.buttonView}>
                <TouchableOpacity style={styles.button} onPress={handleDelete}>
                    <Text style={styles.buttontext}>Delete</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button} onPress={handleUpdate}>
                    <Text style={styles.buttontext}>Update</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}

export default Detail

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#c9f5d9'
    },
    inputtitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 20,
        marginBottom: 10,
        height: 50,
        width: '97%',
        borderWidth: 1,
        borderRadius: 5,
        padding: 10,
    },
    inputnote: {
        fontSize:18,
        height: 300,
        width: '97%',
        borderColor: 'gray',
        borderWidth: 1 / 2,
        borderRadius: 5,
        padding: 10,
    },
    buttonView:{
        flexDirection:'row',
        justifyContent:'space-around',
        width:'97%',
    },
    button:{
        backgroundColor:'#000',
        padding:10,
        borderRadius:5,
        marginTop:10,
    },
    buttontext:{
        color:'#fff',
        fontSize:18,

    }
})