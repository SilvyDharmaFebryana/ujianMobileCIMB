import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
  TextInput,
  Keyboard,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
} from "react-native";
import Button from "../../components/Button/Button";
import LoginBG from "../../../assets/images/login_bg.png";
import DarkOverlay from "../../components/General/DarkOverlay";
import TextUI from "../../components/Text/TextUI";
import Axios from "axios";
import { API_URL } from "../../constants/API";
import { useDispatch, useSelector } from "react-redux";
import AsyncStorage from "@react-native-community/async-storage";
import { Icon } from "native-base";
import Colors from "../../constants/Colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  bgImage: {
    flex: 1,
    resizeMode: "cover",
    backgroundColor: "white",
  },
  contentContainer: {
    paddingHorizontal: 30,
  },
  welcomeText: {
    // fontFamily: "AvenirNextLTPro-Heavy",
    fontSize: 34,
    height: 40,
    fontWeight: "bold",
    color: Colors.primaryColor
  },
  loginText: {
    marginTop: 12,
    alignItems: "center",
    justifyContent: "center",
    color: Colors.primaryColor
  },
  icons: {
    fontSize: 100,
    alignItems: "center",
    justifyContent: "center",
    color: Colors.primaryColor
  }
});

export default (props) => {
  const [username, setUsername] = useState("");

  const dispatch = useDispatch();
  const userSelector = useSelector((state) => state.user);

  const loginBtnHandler = () => {
        AsyncStorage.setItem(
          "userData",
          JSON.stringify({
            username,
            id
          })
        )
          .then(() => {
            dispatch({
              type: "USER_LOGIN",
              payload: { username, id },
            });
          })
          .catch((err) => {
            console.log(err);
          });
  };

  return (
    <ImageBackground style={{ ...styles.bgImage }}>
      <DarkOverlay />
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <KeyboardAvoidingView
          behavior="padding"
          style={{ justifyContent: "center", flex: 1 }}
        >
          <View style={{ ...styles.contentContainer }}>
            <TextUI style={{ ...styles.welcomeText }}>
              TomatoApp
            </TextUI>
            <View>
              <Icon style={{ ...styles.icons }} type="MaterialCommunityIcons" name="food" />
            </View>
            <View
              style={{
                borderRadius: 22,
                paddingVertical: 11,
                paddingHorizontal: 20,
                justifyContent: "center",
                marginTop: 58,
              }}
            >
              <View
                style={{
                  backgroundColor: "white",
                  opacity: 0.2,
                  borderRadius: 22,
                  ...StyleSheet.absoluteFillObject,
                }}
              />
              <TextInput
                autoCapitalize="none"
                placeholderTextColor="lightgrey"
                style={{
                  fontSize: 17,
                  color: "white",
                  lineHeight: 19,
                }}
                placeholder="Username"
                value={username}
                onChangeText={(text) => setUsername(text)}
              />
            </View>
            <Button
              onPress={loginBtnHandler}
              containerStyle={{ marginTop: 20 }}
              size="lg"
            >
              LOGIN
            </Button>
          </View>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </ImageBackground>
  );
};
