import { NavigationContainer } from "@react-navigation/native"
import React from "react"
import { View, Text } from "react-native"
import BottomNavigation from "./Bottom"

const Navigation = () => {
    return (
        <NavigationContainer>
        <BottomNavigation/>
        </NavigationContainer>
    )
}

export default Navigation