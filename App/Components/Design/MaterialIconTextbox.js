/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable comma-dangle */
/* eslint-disable react/self-closing-comp */
/* eslint-disable quotes */
/* eslint-disable keyword-spacing */
/* eslint-disable eol-last */
/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
import React, { Component } from "react";
import { StyleSheet, View, TextInput, Text } from "react-native";
// import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import {Icon} from 'native-base';
function MaterialIconTextbox(props) {


  return (
    <View style = {props.style}>
    <Text style = {{color : "gray" ,top : props.isTop ? -25 : 0, marginLeft : 10, marginBottom : -30}}>{props.placeholder}</Text>
    <View style={[styles.container]}>
    { props.isTop &&
      <Icon style = {{marginLeft : 25}} name={props.iconName} type = {props.iconType} style={{fontSize: 20}} />
    }
      <TextInput onChangeText = {props.changeTextData} onFocus = {props.focusData} secureTextEntry={props.isSecure} style={styles.inputStyle}></TextInput>
    </View>
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "transparent",
    flexDirection: "row",
    alignItems: "center",
    borderColor: "#4747d1",
    borderWidth: 0,
    borderBottomWidth: 1
  },
  iconStyle: {
    color: "#616161",
    fontFamily: "Roboto",
    fontSize: 24,
    paddingLeft: 8
  },
  inputStyle: {
    flex: 1,
    color: "#000",
    alignSelf: "stretch",
    marginLeft: 16,
    paddingTop: 14,
    paddingRight: 5,
    paddingBottom: 8,
    fontSize: 16,
    fontFamily: "roboto-regular",
    lineHeight: 16
  }
});

export default MaterialIconTextbox;
