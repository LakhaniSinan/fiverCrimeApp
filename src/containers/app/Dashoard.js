import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps
import { View, StyleSheet, Text, SafeAreaView, Image, TextInput, TouchableOpacity } from 'react-native';
import React from "react"
import { vh, vw } from '../../constants';
import EvilIcons from "react-native-vector-icons/EvilIcons"

const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
        flex: 1,
        width: null,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    map: {
        ...StyleSheet.absoluteFillObject,
    },
});


const markerItems = [
    {
        latitude: 37.78825,
        longitude: -122.4300,
        new: 0,
    },
    {
        latitude: 37.78825,
        longitude: -122.4324,
        new: 1,
    },
    {
        latitude: 37.780,
        longitude: -122.4324,
        new: 0,
    },
    {
        latitude: 37.784,
        longitude: -122.4324,
        new: 1,
    }
]

let keyData = [
    {
        image: require("../../assets/placeholder.png"),
        desc: "Red color means activity happens recently"
    },
    {
        image: require("../../assets/placeholder_yellow.png"),
        desc: "Yellow color means activity happens 2hrs ago"
    },
    {
        image: require("../../assets/upwords.png"),
        desc: "Allows you to vote that the crime alert can be verified"
    },
    {
        image: require("../../assets/downword_red.png"),
        desc: "Use to vote a crime that never happened"
    },
]

const Dashboard = ({ navigation }) => (
    <SafeAreaView style={styles.container}>
        <MapView
            provider={PROVIDER_GOOGLE} // remove if not using Google Maps
            style={styles.map}
            region={{
                latitude: 37.78825,
                longitude: -122.4324,
                latitudeDelta: 0.015,
                longitudeDelta: 0.0121,
            }}
        >
            {markerItems.map((marks, index) => {
                return (
                    <Marker
                        coordinate={{
                            latitude: marks.latitude,
                            longitude: marks.longitude,
                        }}
                        onPress={(e) => alert("hi")}
                    >
                        {marks.new == 1 ?
                            <Image
                                source={require("../../assets/placeholder.png")}
                            // style={{ height: 40, width: 30 }}
                            />
                            :
                            <Image
                                source={require("../../assets/placeholder_yellow.png")}
                            // style={{ height: 40, width: 30 }}
                            />
                        }

                    </Marker>
                )
            })

            }
        </MapView>
        <View style={{
            position: "absolute", top: 80, left: 0, right: 0,
            flexDirection: 'row', alignItems: "center", justifyContent: "space-around"
        }}>
            <View style={{
                justifyContent: "center", alignItems: "center",
                height: vh * 0.05, width: "12%",
            }}
            >
                <TouchableOpacity
                    onPress={() => navigation.navigate("Keys", {
                        keyData
                    })}
                >
                    <Image source={require("../../assets/notification.png")} />
                </TouchableOpacity>
            </View>
            <View style={{
                backgroundColor: "white",
                width: "65%",
                height: vh * 0.05,
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: 'center',
                paddingHorizontal: 10
            }}>
                <TextInput placeholder="Search Location Here"
                    style={{
                        fontWeight: "bold",
                        fontSize: 14,
                        width: "80%",
                    }} />
                <EvilIcons name="search" size={26} />
            </View>
            <View style={{ width: "12%", height: vh * 0.05, justifyContent: "center", alignItems: "center", backgroundColor: "white", shadowOpacity: 0.4 }}>
                <Image source={require("../../assets/bottomnoti.png")} />
            </View>

        </View>
    </SafeAreaView>
);

export default Dashboard