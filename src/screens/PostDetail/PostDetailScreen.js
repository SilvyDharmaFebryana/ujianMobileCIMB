import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  FlatList,
  TextInput,
  TouchableOpacity,
  Dimensions,
  ScrollView,
  KeyboardAvoidingView,
} from "react-native";
import H1 from "../../components/Text/H1";
import TextUI from "../../components/Text/TextUI";
import Tagline from "../../components/Text/Tagline";
import Colors from "../../constants/Colors";
import { Icon } from "native-base";
import Header from "../../components/General/Header";
import Image from "react-native-scalable-image";
import PlaceholderImg from "../../../assets/images/login_bg.png";
import HomeScreen from "../Home/HomeScreen";


const { width } = Dimensions.get("screen");
const styles = StyleSheet.create({
  header: {
    height: 50,
    flexDirection: "row",
    paddingHorizontal: 18,
    alignItems: "center",
  },
  commentContainer: {
    paddingHorizontal: 30,
    marginTop: 12,
  },
  backBtn: {
    fontSize: 22,
    color: "white",
    marginRight: 50
  },
  text: {
    fontSize: 20
  }
});

const SearchBar = (props, {navigation}) => {
  // const {postDetailData} = props.route.params
  return (
    <View
      style={{
        paddingHorizontal: 15,
        flexDirection: "row",
        alignItems: "center",
        paddingVertical: 6,
        paddingTop: 12,
      }}
    >
      {/* <Icon style={{ ...styles.backBtn }} type="FontAwesome5" name="backward"/> */}
      {/* <H1>{props.route.restaurantName}</H1> */}
    </View>
  );
};

export default (props, navigation) => {
  const {postDetailData} = props.route.params
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: Colors.backgroundColor,
      }}
    >
      <SafeAreaView />
      
        <Header 
          {...props}
          style={{ fontSize: 40 }} 
          title={postDetailData.restaurantName} 
          onPress={() =>  navigation.goBack()}
        >
          {/* <TouchableOpacity
             onPress={() => goBack(HomeScreen)}>
          </TouchableOpacity> */}
        </Header>
      
      <ScrollView style={{ flex: 1 }}>
        <Image
          style={{ maxHeight: 540 }}
          width={width}
          source={{uri:postDetailData.image}}
        />
        <View style={{ ...styles.commentContainer }}>
          <TextUI size="sm" style={{ height: null, ...styles.text }}>
          Address : {postDetailData.address}
          </TextUI>
        </View>
        <View style={{ ...styles.commentContainer }}>
          <TextUI size="sm" style={{ height: null, ...styles.text }}>
          Rating : {postDetailData.rating}
          </TextUI>
        </View>
        <View style={{ ...styles.commentContainer }}>
          <TextUI size="sm" style={{ height: null, ...styles.text }}>
          Cuisine : {postDetailData.cuisine}
          </TextUI>
        </View>
        <View style={{ ...styles.commentContainer }}>
          <TextUI size="sm" style={{ height: null, ...styles.text }}>
          Open : {postDetailData.openTime} AM until {postDetailData.closeTime} PM
          </TextUI>
        </View>
        <View style={{ ...styles.commentContainer }}>
          <TextUI size="sm" style={{ height: null, ...styles.text }}>
          Cost For 2 : TL {postDetailData.costForTwo}
          </TextUI>
        </View>
      </ScrollView>

      <SafeAreaView />
    </View>
  );
};