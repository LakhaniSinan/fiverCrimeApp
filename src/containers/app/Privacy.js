import React from "react"
import { View, Text, SafeAreaView, TouchableOpacity, Image, StyleSheet, TextInput } from 'react-native'
import Ionicons from "react-native-vector-icons/Ionicons"
import EvilIcons from "react-native-vector-icons/EvilIcons"
import FontAwesome from "react-native-vector-icons/FontAwesome"
// import ModalDropdown from 'react-native-modal-dropdown';
import { Picker } from '@react-native-picker/picker';
import { Colors, vh, vw } from "../../constants"

const Privacy = () => {
    return (
        <SafeAreaView style={{ backgroundColor: "white", flex: 1 }}>
            <View style={{ justifyContent: "center", backgroundColor: "#17BBA9", alignItems: 'center', height: 50 }}>
                <View style={{ position: "absolute", left: 10 }}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Ionicons name="arrow-back" size={23} color="white" />
                    </TouchableOpacity>
                </View>
                {/* <View style={{ position: "absolute", right: 10 }}>
                    <TouchableOpacity onPress={() => navigation.navigate("Keys", {
                        keyData
                    })}>
                        <Image source={require("../../assets/info.png")} />
                    </TouchableOpacity>
                </View> */}
                <Text style={{
                    fontSize: 22,
                    color: "white"
                }}>Privacy Policy</Text>
            </View>
            <View style={{ marginTop: 20, marginHorizontal: 20 }}>
                <View>
                    <Text style={{
                        color: Colors.lightGreen,
                        fontSize: 22
                    }}>Terms Of Services</Text>

                    <Text style={{fontSize:16,color:"#707070"}}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
                    </Text>
                </View>

                <View style={{marginTop:10}}>
                    <Text style={{
                        color: Colors.lightGreen,
                        fontSize: 22
                    }}>Authorized User</Text>

                    <Text style={{fontSize:16,color:"#707070"}}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
                    </Text>
                </View>

            </View>
        </SafeAreaView>
    )
}

export default Privacy