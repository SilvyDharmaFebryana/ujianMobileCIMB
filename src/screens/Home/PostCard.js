import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  TouchableOpacity,
} from "react-native";
import H1 from "../../components/Text/H1";
import TextUI from "../../components/Text/TextUI";
import Tagline from "../../components/Text/Tagline";
import Colors from "../../constants/Colors";
import ImageScale from "react-native-scalable-image";
import { Icon } from "native-base";
import PlaceholderProfPic from "../../../assets/images/signup_bg.png";
const { width } = Dimensions.get("screen");
const styles = StyleSheet.create({
  likeBtn: {
    fontSize: 22,
    color: "yellow",
  },
  moreBtn: {
    fontSize: 22,
    color: "white",
  },
});
export default ({ navigation, data }) => {
  return (
    <View
      style={{
        backgroundColor: Colors.backgroundColor,
        width: width - 30,
        marginHorizontal: 15,
        borderRadius: 6,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 3,
        },
        shadowOpacity: 0.5,
        shadowRadius: 8,
        elevation: 6,
        marginVertical: 10,
      }}
    >
      <TouchableOpacity
        onPress={() => navigation.navigate("HomePostDetail", { postDetailData: data })}
        style={{
          flexDirection: "row",
          alignItems: "center",
          
        }}
      >
        <ImageScale
          source={{
            uri: data.image,
          }}
          style={{
            borderTopLeftRadius: 6,
            borderTopRightRadius: 6,
          }}
          width={width - 30}
        />
      </TouchableOpacity>
      <View style={{ paddingHorizontal: 13 }}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginTop: 11,
          }}
        >
          <View style={{ marginLeft: 10 }}>
            <TextUI style={{ marginBottom: 10, fontSize: 18   }} bold>
              {data.restaurantName}
            </TextUI>
            <Tagline>{data.address}</Tagline>
          </View>
        </View>
        <TextUI size="sm" style={{ marginTop: 11, height: null }}>
          {data.caption}
        </TextUI>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginTop: 5,
            marginHorizontal: 15,
            paddingBottom: 75,
            justifyContent: "space-between",
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Icon style={{ ...styles.likeBtn }} type="AntDesign" name="star" />
            <TextUI
              size="sm"
              style={{
                marginLeft: 8,
                textAlignVertical: "bottom",
              }}
            >
              {data.rating }
            </TextUI>
          </View>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
          <TouchableOpacity
              onPress={() => navigation.navigate("HomePostDetail", {postDetailData: data})}
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginLeft: 22,
              }}
            >
            <Icon
              style={{ ...styles.moreBtn, marginLeft: 22 }}
              type="Feather"
              name="more-horizontal"
            />
            <TextUI
              size="sm"
              style={{
                marginLeft: 8,
                textAlignVertical: "bottom",
              }}
            >
              See Details
            </TextUI>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};