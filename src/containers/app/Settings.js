import React, { useState } from "react"
import { View, Text, SafeAreaView, Image, TextInput, StyleSheet, TouchableOpacity } from 'react-native'
import TextField from "../../components/TextField"
import { Colors, vw } from "../../constants"
import Ionicons from "react-native-vector-icons/Ionicons"
import Feather from "react-native-vector-icons/Feather"
import FontAwesome from "react-native-vector-icons/FontAwesome"

const Settings = () => {

    const [input, setInput] = useState({
        name: "",
        password: "",
        email: "",
        phoneNumber: "",
        language: "",
        location: ""
    })

    const onChangeText = (name, value) => {
        setInput({
            ...input,
            [value]: name
        })
    }

    console.log(input, "INPpppasdoasdmaosdm");

    const inputFields = (fieldName, placeholder, value, type, image, size, Icon) => {

        return (
            <View style={{ marginTop: 20, borderWidth: 1, borderRadius: 10, borderColor: "#707070", flexDirection: "row", alignItems: "center" }}>
                {type == "icon" && Icon == "Feather" ?
                    <View style={{
                        justifyContent: "center", alignItems: "center",
                        height: 40, width: 40, backgroundColor: Colors.lightGreen,
                        marginLeft: 10,
                        borderRadius: 200
                    }}>
                        <Feather name={image}
                            size={size}
                            color="white"
                            style={{
                                // marginLeft: 10, backgroundColor: Colors.lightGreen,
                                // padding: 10, borderRadius: 200
                            }} />
                    </View>
                    :
                    type == "icon" && Icon == "Ionicons" ?
                        <View style={{
                            justifyContent: "center", alignItems: "center",
                            height: 40, width: 40, backgroundColor: Colors.lightGreen,
                            marginLeft: 10,
                            borderRadius: 200
                        }}>
                            <Ionicons name={image}
                                size={size}
                                color="white"
                                style={{

                                }} />
                        </View>
                        :
                        type == "icon" && Icon == "FontAwesome" ?
                            <View style={{
                                justifyContent: "center", alignItems: "center",
                                height: 40, width: 40, backgroundColor: Colors.lightGreen,
                                marginLeft: 10,
                                borderRadius: 200
                            }}>
                                <FontAwesome name={image}
                                    size={size}
                                    color="white"
                                    style={{

                                    }} />
                            </View>
                            :
                            <View style={{
                                justifyContent: "center", alignItems: "center",
                                height: 40, width: 40, backgroundColor: Colors.lightGreen,
                                marginLeft: 10,
                                borderRadius: 200
                            }}>
                                <Image source={image} />
                            </View>

                }
                <TextInput
                    style={{ marginLeft: 20 }}
                    placeholder={placeholder}
                    onChangeText={(text) => onChangeText(text, fieldName)}
                    value={value}
                />
            </View >
        )
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ justifyContent: "center", backgroundColor: Colors.lightGreen, alignItems: 'center', height: 60 }}>
                <Text style={{
                    fontSize: 22,
                    color: 'white'
                }}>Settings</Text>
            </View>

            <View style={{
                alignItems: "center", marginTop: 30
            }}>
                <View style={{
                    borderWidth: 1,
                    borderColor: "green",
                    backgroundColor: "white",
                    height: 120,
                    width: 120,
                    borderRadius: 200,
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                    <Image
                        source={require("../../assets/profile.png")}
                        style={{ height: 110, width: 110 }}
                    />
                    <TouchableOpacity style={{
                        backgroundColor: Colors.lightGreen, height: 25, width: 25, borderRadius: 200, justifyContent: "center", alignItems: "center",
                        position: "absolute", bottom: 0, right: 10
                    }}>
                        <Image source={require("../../assets/image_edit_icon.png")} resizeMode="contain" />
                    </TouchableOpacity>
                </View>
            </View>

            <View style={{
                alignItems: "flex-end",
                marginRight: 20,
                borderBottomWidth: StyleSheet.hairlineWidth,
                paddingBottom: 10
            }}>
                <Text style={{
                    fontSize: 12, fontWeight: "bold",
                    color: Colors.lightGreen
                }}>Edit info</Text>
            </View>

            <View style={{ marginHorizontal: 10, }}>
                {inputFields("name", "Lilly Singh", input.name, "icon", "user", 18, "Feather")}
                {inputFields("name", "Lilly@gmail.com", input.email, "icon", "mail", 18, "Feather")}
                {inputFields("name", "+1 331 642 52 42", input.phoneNumber, "icon", "call-outline", 18, "Ionicons")}
                {inputFields("name", "**************", input.password, "icon", "lock", 18, "FontAwesome")}
                {inputFields("name", "English", input.language, "image", require("../../assets/language_image.png"), "", "", "")}
                {inputFields("name", "Street 12, Downtown, LA", input.location,"image", require("../../assets/location_green_edit.png"), "", "", "")}
            </View>

            <View style={{ flex: 1, marginBottom: 20, justifyContent: "flex-end", alignItems: 'center', marginHorizontal: 20 }}>
                <TouchableOpacity style={{
                    backgroundColor: Colors.lightGreen,
                    width: vw * 0.9,
                    paddingVertical: 15,
                    borderRadius: 10
                }}>
                    <Text style={{ textAlign: "center", color: "white", fontSize: 16 }}>Save</Text>
                </TouchableOpacity>
            </View>

        </SafeAreaView >
    )
}

export default Settings