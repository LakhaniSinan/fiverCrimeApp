import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps
import { View, StyleSheet, Text, SafeAreaView, Image, TextInput, TouchableOpacity } from 'react-native';
import React, { useState } from "react"
import { vh, vw } from '../../constants';
import EvilIcons from "react-native-vector-icons/EvilIcons"
import Entypo from "react-native-vector-icons/Entypo"
import FontAwesome from "react-native-vector-icons/FontAwesome"
import Modal from "react-native-modal"


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
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2
    },
    buttonOpen: {
        backgroundColor: "#F194FF",
    },
    buttonClose: {
        backgroundColor: "#2196F3",
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center"
    }
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

const Dashboard = ({ navigation }) => {

    const [modal, setModal] = useState(false)
    const [modalData, setModalData] = useState("")
    const setData = (data) => {
        // console.log(data, "DDDDDDDDDDDDD");
        setModal(true)
        setModalData(data)
    }

    return (
        <>
            <View>
                <Modal
                    animationIn={"slideInUp"}
                    // animationOut={"slideInUp"}
                    animationInTiming={1000}
                    animationOutTiming={3000}
                    isVisible={modal}
                    onRequestClose={() => setModal(false)}
                    style={{ margin: 0, justifyContent: "flex-end", marginBottom: 20 }}
                >
                    <View style={{ justifyContent: "flex-end", flex: 1, width: vw, alignItems: 'center' }}>

                        <View style={{
                            flexDirection: "row", justifyContent: "space-between", width: vw * 0.6,
                            backgroundColor: modalData.new == 1 ? "red" : "yellow",
                            alignItems: "flex-end"
                        }}>
                            <Entypo
                                name="cross"
                                size={20}
                                color={modalData.new == 1 ? "white" : "black"}
                                onPress={() => setModal(false)}
                            />
                            <Text style={{ marginRight: 10 }}>07.45pm</Text>
                        </View>
                        <View style={{ width: vw * 0.6, backgroundColor: "white", height: vh * 0.15, paddingLeft: 5 }}>
                            <Text
                                style={{ fontSize: 18 }}
                            >Robbers are trying to loot visitors at National Park.</Text>
                            <View style={{
                                marginTop: vh * 0.02,
                                flexDirection: "row",
                                justifyContent: "space-around",
                                alignItems: "center"
                            }}>
                                <View style={{ borderRadius: 10, justifyContent: "center", width: "40%", paddingVertical: 10, flexDirection: "row", alignItems: "center", backgroundColor: "red", }}>
                                    <FontAwesome name="long-arrow-down" color="white" />
                                    <Text style={{ marginLeft: 10, color: "white" }}>45</Text>
                                </View>

                                <View style={{ borderRadius: 10, justifyContent: "center", width: "40%", paddingVertical: 10, flexDirection: "row", alignItems: "center", backgroundColor: "green", }}>
                                    <FontAwesome name="long-arrow-up" color="white" />
                                    <Text style={{ marginLeft: 10, color: "white" }}>85</Text>
                                </View>

                            </View>

                        </View>
                        <View>

                        </View>
                    </View>
                </Modal>
            </View>
            < SafeAreaView style={styles.container} >
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
                                onPress={(e) => setData(marks)}
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
                        height: vh * 0.055,
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: 'center',
                        paddingHorizontal: 12
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
            </SafeAreaView >
        </>
    );
}




export default Dashboard