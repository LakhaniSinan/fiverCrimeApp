import React from "react"
import { View, Text, SafeAreaView, TouchableOpacity, Image } from 'react-native'
import Ionicons from "react-native-vector-icons/Ionicons"
import EvilIcons from "react-native-vector-icons/EvilIcons"
import FontAwesome from "react-native-vector-icons/FontAwesome"
import { vw } from "../../constants"

let data = [
    {
        type: "Armed Robbery",
        minutes: "2 mins ago",
        location: "Downtown Street 11,LA",
        upvote: "50",
        downvote: "20"
    },
    {
        type: "Bank Robbery",
        minutes: "10 mins ago",
        location: "Downtown Street 11,LA",
        upvote: "50",
        downvote: "20"
    },
    {
        type: "Stranger Robbery",
        minutes: "30 mins ago",
        location: "Downtown Street 11,LA",
        upvote: "50",
        downvote: "20"
    },
    {
        type: "House Robbery",
        minutes: "45 mins ago",
        location: "Downtown Street 11,LA",
        upvote: "50",
        downvote: "20"
    },
    {
        type: "Cafe Robbery",
        minutes: "1 hr ago",
        location: "Downtown Street 11,LA",
        upvote: "50",
        downvote: "20"
    },
]


let keyData = [
    {
        image: require("../../assets/upwords.png"),
        desc: "Confirm the crime report is real"
    },
    {
        image: require("../../assets/downword_red.png"),
        desc: "Confirm the crime report is fake"
    },
    {
        image: require("../../assets/location_green.png"),
        desc: "Location the crime take place"
    },
    {
        image: require("../../assets/timmer.png"),
        desc: "How long ago the crime was posted"
    },
    {
        image: require("../../assets/post.png"),
        desc: "Post the crime is happening"
    },
]


const Trending = ({navigation}) => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ justifyContent: "center", backgroundColor: "#17BBA9", alignItems: 'center', height: 50 }}>
                <View style={{ position: "absolute", left: 10 }}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Ionicons name="arrow-back" size={23} color="white"  />
                    </TouchableOpacity>
                </View>
                <View style={{ position: "absolute", right: 10 }}>
                    <TouchableOpacity onPress={() => navigation.navigate("Keys",{
                        keyData
                    })}>
                        {/* <Ionicons name="arrow-back" size={30} color="white" /> */}
                        <Image source={require("../../assets/info.png")} />
                    </TouchableOpacity>
                </View>
                <Text style={{
                    fontSize: 22,
                    color:"white"
                }}>Trending's</Text>
            </View>

            <View style={{ flex: 1 }}>
                {data.map((result, index) => {
                    return (
                        <View style={{ paddingVertical: 20, marginHorizontal: 10, borderRadius: 10, borderWidth: 1, marginTop: 10, borderColor: "#a3a3a3" }}>
                            <View style={{ flexDirection: "row", justifyContent: 'space-between', marginHorizontal: 20 }}>
                                <Text style={{
                                    color:"#6D6B6B",
                                    fontSize:18
                                }}>{result.type}</Text>
                                <Text style={{fontWeight:"bold"}}>{result.minutes}</Text>
                            </View>
                            <View style={{ flexDirection: "row", marginHorizontal: 13, marginTop: 20 }}>
                                <View style={{}}>
                                    <EvilIcons name="location" color="#17BBA9" size={24} />
                                </View>
                                <Text style={{
                                    color:'#6D6B6B'
                                }}>{result.location}</Text>
                                <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-around", borderRadius: 2, height: 25, marginLeft: vw * 0.13, backgroundColor: 'green', width: 50 }}>
                                    <FontAwesome name="long-arrow-up" color="white" />
                                    <Text style={{ color: "white" }}>{result.upvote}</Text>
                                </View>
                                <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-around", marginLeft: 10, borderRadius: 2, height: 25, backgroundColor: 'red', width: 50 }}>
                                    <FontAwesome name="long-arrow-down" color="white" />
                                    <Text style={{ color: "white" }}>{result.downvote}</Text>
                                </View>
                            </View>
                        </View>
                    )
                })}
            </View>

            <View style={{flex:1,justifyContent:"flex-end",alignItems:"center",marginBottom:10}}>
                <TouchableOpacity style={{width:337,backgroundColor:"#17BBA9",height:45,borderRadius:10,justifyContent:"center",alignItems:"center"}}>
                    <Text style={{
                        color:"white",
                        fontSize:18
                    }}>Report a Crime</Text>
                </TouchableOpacity>
            </View>


        </SafeAreaView>
    )
}

export default Trending