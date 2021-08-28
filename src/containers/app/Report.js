import React, { useState } from "react"
import { View, Text, SafeAreaView, TouchableOpacity, Image, StyleSheet, TextInput } from 'react-native'
import Ionicons from "react-native-vector-icons/Ionicons"
import EvilIcons from "react-native-vector-icons/EvilIcons"
import FontAwesome from "react-native-vector-icons/FontAwesome"
// import ModalDropdown from 'react-native-modal-dropdown';
import { Picker } from '@react-native-picker/picker';
import { Colors, vh, vw } from "../../constants"


let keyData = [
    {
        image: require("../../assets/placeholder.png"),
        desc: "View and pick a type of crime"
    },
    {
        image: require("../../assets/placeholder_yellow.png"),
        desc: "This allow you to add a crime that is not in the drop down."
    },
    {
        image: require("../../assets/location_green.png"),
        desc: "Click this icon to use your current location where crime is happening."
    },
 
]



const Report = ({navigation}) => {

    const [selectedLanguage, setSelectedLanguage] = useState();

    return (
        <SafeAreaView>
            <View style={{ justifyContent: "center", backgroundColor: "#17BBA9", alignItems: 'center', height: 50 }}>
                <View style={{ position: "absolute", left: 10 }}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Ionicons name="arrow-back" size={23} color="white" />
                    </TouchableOpacity>
                </View>
                <View style={{ position: "absolute", right: 10 }}>
                    <TouchableOpacity onPress={() => navigation.navigate("Keys", {
                        keyData
                    })}>
                        {/* <Ionicons name="arrow-back" size={30} color="white" /> */}
                        <Image source={require("../../assets/info.png")} />
                    </TouchableOpacity>
                </View>
                <Text style={{
                    fontSize: 22,
                    color: "white"
                }}>Report a Crime</Text>
            </View>
            <View style={{
                borderWidth: 1, marginHorizontal: 10, marginTop: 20, borderRadius: 10,
                borderColor: "#707070",
            }}>
                <Picker
                    selectedValue={selectedLanguage}
                    onValueChange={(itemValue, itemIndex) =>
                        setSelectedLanguage(itemValue)
                    }>
                    <Picker.Item label="Type of crime" value="Type of crime" />
                    <Picker.Item label="Robbery" value="Robbery" />
                    <Picker.Item label="Shooting" value="Shooting" />
                    <Picker.Item label="Firing" value="Firing" />
                </Picker>
            </View>

            <View style={{
                borderWidth: 1, marginHorizontal: 10, marginTop: 20, borderRadius: 10,
                borderColor: "#707070",
                flexDirection: 'row',
                alignItems: "center", justifyContent: "space-between",

            }}>
                <TextInput
                    placeholder="Location"
                    style={{ marginLeft: 10, color: "black" }}
                    placeholderTextColor="black"
                />
                <Image source={require("../../assets/location_green.png")} style={{
                    marginRight: 10
                }} />
            </View>

            <View style={{
                borderWidth: 1, marginHorizontal: 10, marginTop: 20, borderRadius: 10,
                borderColor: "#707070",
                flexDirection: 'row',
                alignItems: "center", justifyContent: "space-between",

            }}>
                <TextInput
                    placeholder="Enter Details"
                    style={{ marginLeft: 10, marginTop: 10, color: "#707070", textAlignVertical: "top" }}
                    placeholderTextColor="#707070"
                    numberOfLines={20}
                />

            </View>

            <View style={{  justifyContent: "flex-end", alignItems: 'center', marginHorizontal: 20 }}>
                <TouchableOpacity style={{
                    backgroundColor: Colors.lightGreen,
                    width: vw * 0.9,
                    paddingVertical: 15,
                    borderRadius: 10,
                    marginTop: vh * 0.07
                }}>
                    <Text style={{ textAlign: "center", color: "white", fontSize: 16 }}>Post a crime</Text>
                </TouchableOpacity>
            </View>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 40,
        alignItems: "center"
    }
});

export default Report