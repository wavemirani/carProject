/* eslint-disable no-trailing-spaces */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable comma-dangle */
/* eslint-disable react/self-closing-comp */
/* eslint-disable quotes */
/* eslint-disable keyword-spacing */
/* eslint-disable eol-last */
/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
import React, { Component, useRef, useEffect, useState } from "react";


import {styles} from './style'
import { StyleSheet, View, Image, ImageBackground, Text, TextInput } from "react-native";
import MaterialIconTextbox from "../../../Components/Design/MaterialIconTextbox";
import MaterialButtonPrimary from "../../../Components/Design/MaterialButtonPrimary";
import { set } from "react-native-reanimated";

function ForgotPassword(props) {
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
    <View style={styles.container}>
      <View style={styles.headline1Stack}>
        <View style={styles.headline1}>
          <ImageBackground
            source={require("../../../Images/Landing_Screen.png")}
            resizeMode="cover"
            style={styles.image}
            imageStyle={styles.image_imageStyle}
            
          >
          <Image style = {{height : 50, width : 50, margin : 15}} source = {require("../../../Images/logo.png")} />
            <View style={styles.overlay}>
              <Text style={styles.followers}></Text>
            </View>
          </ImageBackground>
        </View>
        <View style={styles.rect1}>
          <Text style={styles.signUp}>Forgot Password</Text>
          {/* <Text style={[styles.labelStyle,{top: isTop === "name" ? 0 : 20 ,}]}> */}
          {/* name
        </Text> */}
          
          <MaterialIconTextbox
          focusData = {() => doSomething("email")} 
          placeholder = "Email Address"
          isTop = {(focusName === "email" || email !== "") ? true : false}
            style={styles.materialIconTextbox}
            changeTextData = {(value) => textValue("email",value)}
            iconName = "Email Address"
            iconType = "Fontisto"
          >
          </MaterialIconTextbox>

          {/* <MaterialIconTextbox
          isSecure= {true}
          focusData = {() => doSomething("password")} 
          placeholder = "Password"
          isTop = {(focusName === "password" || password !== "") ? true : false}
            style={styles.materialIconTextbox}
            changeTextData = {(value) => textValue("password",value)}
            iconName = "key"
            iconType = "FontAwesome5"
          ></MaterialIconTextbox> */}

          <MaterialButtonPrimary
            style={styles.materialButtonPrimary}
            name = "Reset Pssword"
            // onPress = {() => props.navigation.navigate("SignIn")}
          ></MaterialButtonPrimary>
          {/* <Text style={styles.remindMeLater}>Remind me later</Text> */}
        </View>
      </View>
    </View>
  );
}



export default ForgotPassword;
