import React from "react"
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ToastAndroid } from "react-native"
import Entypo from "react-native-vector-icons/Entypo"
import Fontisto from "react-native-vector-icons/Fontisto"
import EvilIcons from "react-native-vector-icons/EvilIcons"
import Feather from "react-native-vector-icons/Feather"
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"

const SignUp = () => {
    return (



        < View style={{ flex: 1, backgroundColor: "white" }}>
            <View style={{ marginTop: 10, alignItems: "center" }}>
                <Text style={{ color: "#17bba9", fontSize: 60, marginTop: 100 }}>Logo</Text>
            </View>
            <View style={{ marginTop: 30 }}>

                <View style={{ borderWidth: 1, borderColor: "#eaeaea", borderRadius: 10, flexDirection: "row", alignItems: "center", marginLeft: 20, marginRight: 20 }}>
                    <View style={{ backgroundColor: "#17bba9", borderRadius: 200, padding: 7, marginLeft: 10 }}>
                        <Entypo name="user" size={20} color="white" />
                    </View>

                    <View style={{ marginLeft: 30 }}>
                        <TextInput
                            placeholder="Name"
                            placeholderTextColor="#b4b4b4"
                            style={{ fontSize: 20 }}
                        />
                    </View>
                </View>

                <View style={{ marginTop: 20, borderWidth: 1, borderColor: "#eaeaea", borderRadius: 10, flexDirection: "row", alignItems: "center", marginLeft: 20, marginRight: 20 }}>
                    <View style={{ backgroundColor: "#17bba9", borderRadius: 200, padding: 7, marginLeft: 10 }}>
                        <Fontisto name="email" size={20} color="white" />
                    </View>

                    <View style={{ marginLeft: 30 }}>
                        <TextInput
                            placeholder="Email"
                            placeholderTextColor="#b4b4b4"
                            style={{ fontSize: 20 }}
                        />
                    </View>
                </View>
                <View style={{ marginTop: 20, borderWidth: 1, borderColor: "#eaeaea", borderRadius: 10, flexDirection: "row", alignItems: "center", marginLeft: 20, marginRight: 20 }}>
                    <View style={{ backgroundColor: "#17bba9", borderRadius: 200, padding: 7, marginLeft: 10 }}>
                        <Feather name="phone" size={20} color="white" />
                    </View>

                    <View style={{ marginLeft: 30 }}>
                        <TextInput
                            placeholder="Phone Number"
                            placeholderTextColor="#b4b4b4"
                            style={{ fontSize: 20 }}
                        />
                    </View>
                </View>
                <View style={{ marginTop: 20, borderWidth: 1, borderColor: "#eaeaea", borderRadius: 10, flexDirection: "row", alignItems: "center", marginLeft: 20, marginRight: 20 }}>
                    <View style={{ backgroundColor: "#17bba9", borderRadius: 200, padding: 7, marginLeft: 10 }}>
                        <Feather name="lock" size={20} color="white" />
                    </View>

                    <View style={{ marginLeft: 30 }}>
                        <TextInput
                            placeholder="Password"
                            placeholderTextColor="#b4b4b4"
                            style={{ fontSize: 20 }}
                        />
                    </View>
                </View>

                <TouchableOpacity style={{
                    marginTop: 30,
                    marginHorizontal: 30,
                    alignItems: "center",
                    backgroundColor: "#17bba9",
                    paddingVertical: 10,
                    borderRadius: 10
                }}
                >
                    <Text style={{ fontSize: 20, color: "white" }}>Sign Up</Text>
                </TouchableOpacity>

                <View style={{ justifyContent: "center", flexDirection: "row", alignItems: "center", marginTop: 50 }}>
                    <Text style={{ color: "#17bba9", fontSize: 15 }}>Already have an account? </Text>
                    <TouchableOpacity onPress={() => setShow(true)}>
                        <Text style={{ fontSize: 16, color: "#17bba9", fontWeight: "bold" }}>Login</Text>
                    </TouchableOpacity>
                </View>

            </View>
        </View>

    )
}


var styles = StyleSheet.create({
    textStyle: {

    },
    linearGradient: {
        flex: 1,
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 5
    },
    buttonText: {
        fontSize: 18,
        fontFamily: 'Gill Sans',
        textAlign: 'center',
        margin: 10,
        color: '#ffffff',
        backgroundColor: 'transparent',
    },
});

export default SignUp