import React, { useState } from "react"
import { View, Text, SafeAreaView, TouchableOpacity, Image ,StyleSheet,Picker} from 'react-native'
import Ionicons from "react-native-vector-icons/Ionicons"
import EvilIcons from "react-native-vector-icons/EvilIcons"
import FontAwesome from "react-native-vector-icons/FontAwesome"
import { vw } from "../../constants"
// import ModalDropdown from 'react-native-modal-dropdown';

const Report = () => {

    const [selectedValue, setSelectedValue] = useState("java");

    return (
        <SafeAreaView>
            <View style={{ justifyContent: "center", backgroundColor: "#17BBA9", alignItems: 'center', height: 50 }}>
                <View style={{ position: "absolute", left: 10 }}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Ionicons name="arrow-back" size={23} color="white" />
                    </TouchableOpacity>
                </View>
                <View style={{ position: "absolute", right: 10 }}>
                    <TouchableOpacity onPress={() => navigation.navigate("Keys", {
                        keyData
                    })}>
                        {/* <Ionicons name="arrow-back" size={30} color="white" /> */}
                        <Image source={require("../../assets/info.png")} />
                    </TouchableOpacity>
                </View>
                <Text style={{
                    fontSize: 22,
                    color: "white"
                }}>Report a Crime</Text>
            </View>
            <View style={{
                borderWidth: 1, marginHorizontal: 10, marginTop: 10, borderRadius: 10,
                borderColor: "#707070",
            }}>
      <Picker
        selectedValue={selectedValue}
        mode="dropdown"
        style={{ height: 50, width: 150 }}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
      >
        <Picker.Item label="Java" value="java" />
        <Picker.Item label="JavaScript" value="js" />
      </Picker>
            </View>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 40,
      alignItems: "center"
    }
  });

export default Report