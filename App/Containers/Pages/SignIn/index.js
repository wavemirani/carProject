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
import { StyleSheet, View, Image, ImageBackground, Text, TextInput ,TouchableOpacity} from "react-native";
import MaterialIconTextbox from "../../../Components/Design/MaterialIconTextbox";
import MaterialButtonPrimary from "../../../Components/Design/MaterialButtonPrimary";
import { set } from "react-native-reanimated";

function SignIn(props) {
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
            // imageStyle={styles.image_imageStyle}
          >
          <Image style = {{height : 50, width : 50, margin : 15}} source = {require("../../../Images/logo.png")} />
            <View style={styles.overlay}>
              <Text style={styles.followers}></Text>
            </View>
          </ImageBackground>
        </View>
        <View style={styles.rect1}>
          <Text style={styles.signUp}>Sign in</Text>
          {/* <Text style={[styles.labelStyle,{top: isTop === "name" ? 0 : 20 ,}]}> */}
          {/* name
        </Text> */}
          <MaterialIconTextbox 
          focusData = {() => doSomething("name")} 
          placeholder = "Username"
          isTop = {(focusName === "name" || name !== "") ? true : false}
            style={styles.materialIconTextbox}
            changeTextData = {(value) => textValue("name",value)}
            iconName = "email"
            iconType = "Fontisto"
          >
          </MaterialIconTextbox>
          <MaterialIconTextbox
          focusData = {() => doSomething("email")} 
          placeholder = "Email Address"
          isTop = {(focusName === "email" || email !== "") ? true : false}
            style={[styles.materialIconTextbox, {fontSize : 20}]}
            changeTextData = {(value) => textValue("email",value)}
            isSecure= {true}
            iconName = "key"
            iconType = "FontAwesome5"
            
          >
          </MaterialIconTextbox>
          <TouchableOpacity onPress = {() => props.navigation.navigate("forgotPassword")} >
          <Text style = {{marginLeft : 200, color : "#4d79ff"}}>Forgot Password?</Text>
          </TouchableOpacity>
          <MaterialButtonPrimary
            style={styles.materialButtonPrimary}
            name = "Sign in"
            onPress = {() => props.navigation.navigate("Dashboard")}
          ></MaterialButtonPrimary>
          <Text style={styles.remindMeLater}>Remind me later</Text>
        </View>
      </View>
    </View>
  );
}



export default SignIn;
