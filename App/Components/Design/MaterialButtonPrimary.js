/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, { Component } from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";
import {Icon} from 'native-base';

function MaterialButtonPrimary(props) {
  return (
    <TouchableOpacity style={[styles.container, props.style, {flexDirection : "row"}]} onPress = {props.onPress}>
{props.iconName &&
       <Icon style = {{marginLeft : 25}} name={props.iconName} type = {props.iconType} style={{fontSize: 30, marginRight : 10, color : "#ffffff"}} />
      }
      <Text style={[styles.caption,props.content,{color : props.textColor}]}>{props.name}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#2196F3",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingRight: 16,
    paddingLeft: 16,
    elevation: 2,
    minWidth: 88,
    borderRadius: 2,
    shadowOffset: {
      height: 1,
      width: 0
    },
    shadowColor: "#000",
    shadowOpacity: 0.35,
    shadowRadius: 5
  },
  caption: {
    color: "#fff",
    fontWeight : "bold",
    fontSize: 20,
    fontFamily: "roboto-regular"
  }
});

export default MaterialButtonPrimary;
