import React, { useEffect, useState, useReducer } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  FlatList,
  SafeAreaView,
  TextInput,
  TouchableOpacity
} from "react-native";
import H1 from "../../components/Text/H1";
import TextUI from "../../components/Text/TextUI";
import Tagline from "../../components/Text/Tagline";
import Colors from "../../constants/Colors";
import PostCard from "./PostCard";
import Axios from "axios";
import { API_URL } from "../../constants/API";
import { useDispatch, useSelector } from "react-redux";

const { width } = Dimensions.get("screen");

const styles = StyleSheet.create({});



const SearchBar = (props) => {
  const userSelector = useSelector((state) => state.user);
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
    <H1 bold>Halo, {userSelector.username}</H1>
   
    </View>
  );
};

export default ({ navigation }) => {
  const [postList, setPostList] = useState([]);

  const [username, setUsername] = useState("");
 

  useEffect(() => {
    Axios.get(`${API_URL}/restaurants`)
      .then((res) => {
        console.log(res.data);
        setPostList(res.data.result);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

 
  const renderPosts = ({ item }) => {
    return <PostCard navigation={navigation} data={item} />;
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: Colors.backgroundColor,
      }}
    >
      <SafeAreaView />
      <SearchBar navigation={navigation} />
      <FlatList
        ListHeaderComponentStyle={{ marginHorizontal: 15 }}
        contentContainerStyle={{ marginTop: 46 }}
        data={postList}
        renderItem={renderPosts}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};
