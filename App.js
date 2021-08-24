import React, { useState, useEffect } from "react"
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ToastAndroid } from "react-native"
import Entypo from "react-native-vector-icons/Entypo"
import Fontisto from "react-native-vector-icons/Fontisto"
import EvilIcons from "react-native-vector-icons/EvilIcons"
import Feather from "react-native-vector-icons/Feather"
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"

const SignIn = ({ navigation }) => {

  const [show, setShow] = useState(false)

  return (
    <>
      {!show ?
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
        :
        < View style={{ flex: 1, backgroundColor: "white" }}>
          <View style={{ marginTop: 10, alignItems: "center" }}>
            <Text style={{ color: "#17bba9", fontSize: 60, marginTop: 100 }}>Logo</Text>
          </View>
          <View style={{ marginTop: 30 }}>


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
            <View style={{ justifyContent: "flex-end", alignItems: "flex-end", marginRight: 20, marginTop: 5 }}>
              <Text style={{ color: "#17bba9", fontWeight: "bold" }}>Forget Password?</Text>
            </View>
            <View style={{ flexDirection: "row", alignItems: 'center', marginTop: 30 }}>
              <TouchableOpacity
                style={{
                  marginLeft: 30,
                  alignItems: "center",
                  backgroundColor: "#17bba9",
                  paddingVertical: 10,
                  borderRadius: 10,
                  width:"80%"
                  }}
              >
                <Text style={{ fontSize: 20, color: "white" }}>Login</Text>
              </TouchableOpacity>

              <View>
                <MaterialCommunityIcons name="fingerprint"  size={40} color="#17bba9" />
              </View>

            </View>

            <View style={{ justifyContent: "center", flexDirection: "row", alignItems: "center", marginTop: 50 }}>
              <Text style={{ color: "#17bba9", fontSize: 15 }}>Don't have an account? </Text>
              <TouchableOpacity onPress={() => setShow(true)}>
                <Text style={{ fontSize: 16, color: "#17bba9", fontWeight: "bold" }}>Sign Up</Text>
              </TouchableOpacity>
            </View>

          </View>
        </View>
      }
    </>
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

export default SignIn

// #17bba9
