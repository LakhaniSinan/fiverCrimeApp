import React from "react"
import { View, Text, SafeAreaView, Image, TouchableWithoutFeedback } from "react-native"
import { Colors } from "../constants"
import DashboardWhite from "../assets/svg/dashboard_white.svg"
import DashboardGrey from "../assets/svg/dashboard_grey.svg"
import ReportGrey from "../assets/svg/Report_grey.svg"
import ReportWhite from "../assets/svg/Report_white.svg"
import PrivacyWhite from "../assets/svg/privacy_white.svg"
import PrivacyGrey from "../assets/svg/privacy_grey.svg"
import TrendingGrey from "../assets/svg/trending_grey.svg"
import TrendingWhite from "../assets/svg/trending_white.svg"
import SettingsGrey from "../assets/svg/settings_grey.svg"
import SettingsWhite from "../assets/svg/settings_white.svg"
let items = [
    {
        name: "Dashboard",
        imageActive: require("../assets/dashboard_white.png"),
        imageInActive: require("../assets/dashboard_grey.png")
    },
    {
        name: "Trending",
        imageInActive: require("../assets/trnding_grey.png"),
        imageActive: require("../assets/trending_white.png")
    },
    {
        name: "Report",
        imageInActive: require("../assets/post_grey.png"),
        imageActive: require("../assets/post_white.png")
    },
    {
        name: "Settings",
        imageInActive: require("../assets/settings_grey.png"),
        imageActive: require("../assets/settings_white.png")
    },
    {
        name: "Privacy",
        imageInActive: require("../assets/privacy_grey.png"),
        imageActive: require("../assets/privacy_white.png")
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
                                    {/* <Image source={isFocused ?
                                        item.imageActive :
                                        item.imageInActive}
                                        resizeMode="contain"
                                        style={{ height: 20, width: 20 }}
                                    /> */}
                                    {item.name == "Dashboard" && isFocused == true ?
                                        <DashboardWhite size={30} />
                                        : item.name == "Dashboard" && isFocused == false ?
                                            <DashboardGrey size={30} />
                                            :
                                            item.name == "Report" && isFocused == false ?
                                                <ReportGrey size={30} />
                                                :
                                                item.name == "Report" && isFocused == true ?
                                                    <ReportWhite size={30} />
                                                    :
                                                    item.name == "Trending" && isFocused == true ?
                                                        <TrendingWhite size={30} />
                                                        :
                                                        item.name == "Trending" && isFocused == false
                                                            ?
                                                            <TrendingGrey size={30} />
                                                            :
                                                            item.name == "Privacy" && isFocused == true ?
                                                                <PrivacyWhite size={30} />
                                                                :
                                                                item.name == "Privacy" && isFocused == false ?
                                                                    <PrivacyGrey size={30} />
                                                                    :
                                                                    item.name == "Settings" && isFocused == true ?
                                                                        <SettingsWhite size={30} />
                                                                        :
                                                                        item.name == "Settings" && isFocused == false ?
                                                                            <SettingsGrey size={30} />
                                                                            :
                                                                            null

                                    }
                                    {/* <DashboardWhite size={30} color="pink" /> */}
                                </View>
                                <View style={{ justifyContent: "flex-end" }}>
                                    <Text style={{
                                        textAlign: "center", color: "white",
                                        opacity: isFocused ? 1 : 0.5

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