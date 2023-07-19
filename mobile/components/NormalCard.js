import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import useSound from 'use-sound';
import React, { useEffect } from "react";

import Icon from "react-native-vector-icons/FontAwesome";
export default function NormalCard({ data }) {
  
  
  const currentID = "O-ds34";
  const [liked, setLiked] = React.useState(false);
  const [likeCount, setLikeCount] = React.useState(data.likes);

  useEffect(() => {
    if (data.likedID.includes(currentID)) {
      setLiked(true);
    }
  }, []);

  return (
    <View style={style.cardContainer}>
      <Image source={data.image} style={style.image} />
      <View style={{ height: 90 }}>
        <View style={{ alignSelf: "flex-end", marginRight: 20, marginTop: 10 }}>
          <View style={{ flexDirection: "row" }}>
            {liked ? (
              <TouchableOpacity onPress={() => {
                
                setLiked(false)
                setLikeCount(likeCount-1)
              }}>
              <Icon
                name="thumbs-up"
                size={25}
                color="#f0d3d1"
                style={{ paddingRight: 5 }}
              />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity onPress={() => {
                setLiked(true)
                setLikeCount(likeCount+1)
              }}>
              <Icon
                name="thumbs-up"
                size={25}
                color="black"
                style={{ paddingRight: 5 }}
              />
              </TouchableOpacity>
            )}

            <Text style={{ fontSize: 17, color: "white", fontWeight: "900" }}>
              {likeCount}
            </Text>
          </View>
        </View>
        <Text style={{ fontSize: 17, fontFamily: "fm-abbaya", color: "white" }}>
          {data.content}
        </Text>
      </View>
      <View style={{ flexDirection:'row'}}>
     
      <Text style={style.index}>
      <Icon
                name="eye"
                size={25}
                color="white"
                style={{ paddingRight: 20 }}
              /> 
          {" " + data.topic}
        </Text>
      </View>
      
    </View>
  );
}

const deviceWidth = Math.round(Dimensions.get("window").width);
const style = StyleSheet.create({
  cardContainer: {
    marginTop: 20,
    width: deviceWidth - 25,
    backgroundColor: "#464e6b",
    height: 200,
    borderRadius: 20,
    shadowColor: "black",
    shadowOffset: { width: 10, height: 10 },
    shadowOpacity: 1,
    elevation: 9,
    shadowRadius: 5,
  },
  image: {
    width: deviceWidth - 25,
    height: 150,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    opacity: 0.4,
    position: "absolute",
  },
  index: {
    fontFamily: "fm-malithi",
    fontSize: 30,
    color: "white",
    paddingTop: 70,
    paddingLeft: 10,
  },
});
