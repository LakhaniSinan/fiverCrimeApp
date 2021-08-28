import { View, Text, SafeAreaView, Image, TouchableOpacity, } from 'react-native';
import React from "react"
import Ionicons from "react-native-vector-icons/Ionicons"

const Keys = ({ route,navigation }) => {
    const { keyData } = route.params
    return (
        <SafeAreaView style={{flex:1,backgroundColor:"white"}}>
            <View style={{ justifyContent: "center", alignItems: 'center', height: 60 }}>
                <View style={{ position: "absolute", left: 10 }}>
                    <TouchableOpacity onPress={()=>navigation.goBack()}>
                    <Ionicons name="arrow-back" size={30} color="#17BBA9"/>
                    </TouchableOpacity>
                </View>
                <Text style={{
                    fontSize: 25,
                    color:"#17BBA9"
                }}>Keys</Text>
            </View>

            <View style={{flex:1}}>
                {keyData?.map((result, index) => {
                    return (
                        <View style={{flexDirection:"row",alignItems:"center",marginTop:10}}>
                            <View 
                            style={{ backgroundColor:"white",borderWidth:1,borderColor:"#707070",height:40,justifyContent:"center",alignItems:"center",width:40,borderRadius:50,marginLeft:10}}>
                                <Image source={result.image} style={{height:20,width:20}}
                                resizeMode="contain"
                                />
                            </View>
                            <View style={{flex:9}}>
                            <Text style={{marginLeft:10,marginRight:2,color:"#A1A1A1",fontSize:16}}>{result.desc}</Text>
                            </View>
                        </View>
                    )
                })}
            </View>

            <View style={{flex:1,justifyContent:"flex-end",alignItems:"center",marginBottom:50}}>
                <Image source={require("../assets/png-04.png")} 
                style={{height:160,width:200}}
                resizeMode="contain"
                />
                <Text style={{fontSize:22,fontWeight:"bold",color:"#17BBA9"}}>* Be your Brothers Keeper</Text>
            </View>
        </SafeAreaView>
    )
}

export default Keys