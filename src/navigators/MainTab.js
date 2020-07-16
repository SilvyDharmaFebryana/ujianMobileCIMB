import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeStack from "./HomeStack";
import ProfileScreen from "../screens/ProfileScreen/ProfileScreen";
import Colors from "../constants/Colors"
import { Icon } from "native-base";



const Tab = createBottomTabNavigator();
export default () => {
  return (
    <Tab.Navigator tabBarOptions={{
        activeTintColor: Colors.primaryColor,
        style: {
            backgroundColor: "#20242F",
            borderTopWidth: 0,
            paddingTop: 5
        }
    }}>
        <Tab.Screen name="Home" component={HomeStack} options={{
            tabBarIcon: ({ color, size }) => (
                <Icon type="Entypo" name="home" style={{ color }} />
            )
        }} />
        <Tab.Screen name="Profile" component={ProfileScreen} options={{
            tabBarIcon: ({ color, size }) => (
                <Icon type="FontAwesome5" name="user" style={{ color }} />
            )
        }}
        />
    </Tab.Navigator>
  );
}; 
