import React from "react"
import { View, Text, SafeAreaView, Image, TouchableWithoutFeedback } from "react-native"
import { Colors } from "../constants"
let items = [
    {
        name: "Dashboard",
        imageActive: require("../assets/dashboard_white.png"),
        imageInActive: require("../assets/dashboard_grey.png")
    },
    {
        name: "Trending",
        imageInActive: require("../assets/bottomnoti.png"),
        imageActive: require("../assets/trending_white.png")
    },
    {
        name: "Report",
        image: require("../assets/bottomnoti.png")
    },
    {
        name: "Settings",
        image: require("../assets/bottomnoti.png")
    },
    {
        name: "Privacy",
        image: require("../assets/bottomnoti.png")
    },
]

const CustomBottom = (props) => {

    let value = items.map((item, index) => index === 0 ? 1 : 0)

    const handleNavigation = (index, name) => {
        props.navigation.navigate(name)
    }
    console.log(props.state.index, "ROUTEEEEEE");
    return (
        <SafeAreaView style={{
            backgroundColor: Colors.lightGreen,
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
        }}>
            <View style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginHorizontal: 10,
                marginTop: 10
            }}>

                {items.map((item, index) => {
                    let isFocused = props.state.index === index;
                    console.log(isFocused, "FFFFFF");
                    return (

                        <TouchableWithoutFeedback
                            onPress={() => handleNavigation(index, item.name)}
                        >
                            <View key={index} style={{ flexDirection: "column" }}>
                                <View style={{ justifyContent: "center", alignItems: 'center' }}>
                                    <Image source={isFocused ?
                                        item.imageActive :
                                        item.imageInActive}
                                    />
                                </View>
                                <View>
                                    <Text style={{
                                        textAlign: "center", color:
                                            isFocused ? "white" : "#a3a3a3"
                                    }}>{item.name}</Text>
                                </View>
                            </View>
                        </TouchableWithoutFeedback>
                    )
                }
                )
                }
            </View>

        </SafeAreaView>
    )
}

export default CustomBottom