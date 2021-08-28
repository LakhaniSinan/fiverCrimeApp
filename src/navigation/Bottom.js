import * as React from 'react';
import { Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Dashboard from '../containers/app/Dashoard';
import Trending from '../containers/app/Trending';
import Report from '../containers/app/Report';
import Settings from '../containers/app/Settings';
import Privacy from '../containers/app/Privacy';
import Keys from "../components/keys"
import CustomBottom from './CustomBottom';
import { createStackNavigator } from '@react-navigation/stack';


const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function DashoardStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Dashboard" component={Dashboard} options={{
                headerShown:false
            }} />
            <Stack.Screen name="Keys" component={Keys} options={{
                headerShown:false
            }} />
        </Stack.Navigator>
    );
}
function TrendingStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Dashboard" component={Trending} options={{
                headerShown:false
            }} />
            <Stack.Screen name="Keys" component={Keys} options={{
                headerShown:false
            }} />
        </Stack.Navigator>
    );
}


export default function BottomNavigation() {
    return (
        <Tab.Navigator
        screenOptions={{
        }}
            tabBar={(props) => <CustomBottom {...props} />}
        >
            <Tab.Screen name="Dashboard" component={DashoardStack} />
            <Tab.Screen name="Trending" component={TrendingStack} />
            <Tab.Screen name="Report" component={Report} />
            <Tab.Screen name="Settings" component={Settings} />
            <Tab.Screen name="Privacy" component={Privacy} />
        </Tab.Navigator>
    );
}