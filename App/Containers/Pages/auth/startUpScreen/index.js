/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable comma-dangle */
/* eslint-disable react/self-closing-comp */
/* eslint-disable quotes */
/* eslint-disable keyword-spacing */
/* eslint-disable eol-last */
/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
import React, { Component, useRef, useEffect, useState, KeyboardAvoidingView,  } from "react";


import {styles} from './style'
import {ScrollView, View, Image, ImageBackground, Text, TextInput ,TouchableOpacity} from "react-native";
import MaterialIconTextbox from "../../../../Components/Design/MaterialIconTextbox";
import MaterialButtonPrimary from "../../../../Components/Design/MaterialButtonPrimary";
import { set } from "react-native-reanimated";

function StartUp(props, {navigation}) {
  const [focusName, setIsTop] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function textValue(name, value){
    if(name === "name"){
      setName(value);
    }
    if(name === "email"){
      setEmail(value);
    }
    if(name === "password"){
      setPassword(value);
    }


  }


function doSomething(name){
  setIsTop(name);
}

  return (
    <View>
      <ImageBackground
        source={require("../../../../Images/Landing_Screen.png")}
        style = {{height : "100%", width : "100%"}}
      >
        <Image style = {{height : 100, width : 100}} source = {require("../../../../Images/logo2.png")} />
      </ImageBackground>
      <View style = {styles.rect1}>
          <MaterialButtonPrimary
            style={[styles.materialButtonPrimary,{backgroundColor: "blue",}]}
            name = "Sign up"
            textColor = "#ffffff"
            onPress = {() => props.navigation.navigate("SignUp")}
          ></MaterialButtonPrimary>
          <MaterialButtonPrimary
            style={[styles.materialButtonPrimary,{backgroundColor : "#ffffff"}]}
            textColor = "blue"
            name = "Sign In"
            onPress = {() => props.navigation.navigate("SignIn")}
          ></MaterialButtonPrimary>
          <MaterialButtonPrimary
            style={[styles.materialButtonPrimary,{backgroundColor : "#ffffff"}]}
            textColor = "blue"
            name = "verification code"
            onPress = {() => props.navigation.navigate("verify")}
          ></MaterialButtonPrimary>
          <View style = {{marginTop: 17, alignItems : "center", justifyContent : "center"}}>
            <Text style={styles.remindMeLater}>Remind me later</Text>
          </View>
      </View>
    </View>
  );
}



export default StartUp;
