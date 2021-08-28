import React, { useState } from "react"
import { View, Text, SafeAreaView, Image, TextInput,StyleSheet } from 'react-native'
import TextField from "../../components/TextField"
import {Colors} from "../../constants"

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

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ justifyContent: "center", backgroundColor: "green", alignItems: 'center', height: 60 }}>
                <Text style={{
                    fontSize: 25,
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
                </View>
            </View>

            <View style={{
                alignItems: "flex-end",
                marginRight: 20,
                borderBottomWidth:StyleSheet.hairlineWidth,
                paddingBottom:10
            }}>
                <Text style={{ fontSize: 12, fontWeight: "bold",
            color:Colors.lightGreen}}>Edit info</Text>
            </View>

            <View>
                <View>

                </View>
                <View>
                    <TextInput
                        placeholder="Lilly Singh"
                        onChangeText={(text) => onChangeText(text, "name")}
                        value={input.name}
                    />
                </View>
                <View>
                    <TextInput
                        placeholder="Lilly Singh"
                        onChangeText={(text) => onChangeText(text, "password")}
                        value={input.password}
                    />
                </View>
                <View>
                    <TextInput
                        placeholder="Lilly Singh"
                        onChangeText={(text) => onChangeText(text, "email")}
                        value={input.email}
                    />
                </View>
                <View>
                    <TextInput
                        placeholder="Lilly Singh"
                        onChangeText={(text) => onChangeText(text, "phoneNumber")}
                        value={input.phoneNumber}
                    />
                </View>

            </View>

        </SafeAreaView>
    )
}

export default Settings