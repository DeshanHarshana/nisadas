import { View, Text, Image, TouchableOpacity,ToastAndroid } from "react-native";
import React from "react";
import { Button, TextInput } from "react-native-paper";
import { CommonMethod } from "../data/common";

export default function SignUpForm({setLikedCreated}) {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [username, setUsername] = React.useState("");
    const [emailIcon, setEmailIcon] = React.useState("close-outline");

  const checkMail = (email) => {
    if (CommonMethod.validEmail(email)) {
      setEmailIcon("check-outline");
    } else {
      setEmailIcon("close-outline");
    }
  };
  return (
    <View>
      <View style={{ alignItems: "center" }}>
        <Image
          source={require("../assets/icon/signup_icon.png")}
          style={{ width: 100, height: 100 }}
        />
      </View>
      <View>
        <TextInput
          left={<TextInput.Icon icon="face-man-profile" />}
          mode="outlined"
          placeholder="Username"
          style={{
            borderBottomWidth: 0,
            borderBottomColor: "black",
            margin: 10,
            marginBottom: 20,
          }}
        />
        <TextInput
          left={<TextInput.Icon icon="email-outline" />}
          mode="outlined"
          placeholder="Email"
          onChangeText={(text) => {
            setEmail(text)
            checkMail(text)
        }}
          right={<TextInput.Icon icon={emailIcon} />}
          style={{
            borderBottomWidth: 0,
            borderBottomColor: "black",
            margin: 10,
            marginBottom: 20,
          }}
        />
        <TextInput
          left={<TextInput.Icon icon="key-outline" />}
          mode="outlined"
          secureTextEntry={true}
          placeholder="Password"
          style={{
            borderBottomWidth: 0,
            borderBottomColor: "black",
            margin: 10,
            marginBottom: 20,
          }}
        />
      </View>
      <View style={{ alignItems: "center" }}>
        <TouchableOpacity onPress={()=>{
            if(email==="" && password==="" && username===""){
                ToastAndroid.show("Please fill all the fields",ToastAndroid.SHORT)
            }else{
                if(CommonMethod.validEmail(email)){
                    ToastAndroid.show("Account Created",ToastAndroid.SHORT)
                    setLikedCreated(false)
                }else{
                    ToastAndroid.show("Please enter a valid email",ToastAndroid.SHORT)
                }
            }
        }}>
        <Button
          mode="contained"
          style={{ width: 200, backgroundColor: "#ffcc99", borderRadius: 20 }}
          
        >
          Sign Up
        </Button>
        </TouchableOpacity>
      </View>
    </View>
  );
}
