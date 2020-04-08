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
    <View>
      <ImageBackground
        source={require("../../../../Images/Landing_Screen.png")}
        style = {{height : "100%", width : "100%"}}
      >
        <Image style = {{height : 100, width : 100}} source = {require("../../../../Images/logo2.png")} />
      </ImageBackground>
      <View style = {styles.rect1}>
      <ScrollView>
      <Text style={styles.signUp}>Forgot Password</Text>
          <MaterialIconTextbox
          focusData = {() => doSomething("email")}
          placeholder = "Email Address"
          isTop = {(focusName === "email" || email !== "") ? true : false}
            style={styles.materialIconTextbox}
            changeTextData = {(value) => textValue("email",value)}
            iconName = "email"
            iconType = "Fontisto"
          >
          </MaterialIconTextbox>
          <MaterialButtonPrimary
            style={styles.materialButtonPrimary}
            name = "Reset Pssword"
            textColor = "#ffffff"
          ></MaterialButtonPrimary>
          <View style = {{marginTop: 17, alignItems : "center", justifyContent : "center"}}>
            <Text style={styles.remindMeLater}>Sign In | Sign Up</Text>
          </View>
      </ScrollView>
      </View>
    </View>
  );
}



export default ForgotPassword;
