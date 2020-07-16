import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Dimensions,
} from "react-native";
import H1 from "../../components/Text/H1";
import Colors from "../../constants/Colors"
import { useSelector, useDispatch } from "react-redux";
import TextUI from "../../components/Text/TextUI";
import Axios from "axios";
import { API_URL } from "../../constants/API";
import Button from "../../components/Button/Button";
import AsyncStorage from "@react-native-community/async-storage"


const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        justifyContent: "center",
        flex: 1,
        backgroundColor: Colors.backgroundColor,
        paddingHorizontal: 50
    }
});

export default ({ navigation }) => {

    const [postCount, setPostCount] = useState(0)
    const userSelector = useSelector(state => state.user)
    const dispatch = useDispatch();

    // useEffect(() => {
    //     Axios.get(`${API_URL}/posts`, {
    //         params: {
    //             UserId: userSelector.id
    //         }
    //     })
    //     .then((res) => {
    //         setPostCount(res.data.result.length);
    //     })
    //     .catch((err) => {
    //         console.log(err);
            
    //     })
    // }, [])
    

    const logoutHandler = () => {
        AsyncStorage.removeItem("userData")
        .then((res) => {
            dispatch({
                type: "USER_LOGOUT"
            })
            console.log("LOGOUT!")
        })
        .catch((err) => {
            console.log(err);
            
        })
    }

    return (
        <View style={{ ...styles.container }}> 
        <H1>User Profile</H1>
            <TextUI size="lg" style={{ fontSize: 15}} accent bold>
                {userSelector.username}
            </TextUI>
            <Button onPress={logoutHandler} type="secondary" size="md">
                LOGOUT
            </Button>
        </View>
    );
};
