/* eslint-disable react/self-closing-comp */
/* eslint-disable no-return-assign */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable comma-dangle */
/* eslint-disable semi */
/* eslint-disable quotes */
/* eslint-disable eol-last */
/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
import React from "react";
import { View, Text, ImageBackground, Image } from "react-native";
import AppIntroSlider from "react-native-app-intro-slider";
import {styles} from './style';

function IntroSlider(props) {
  
  function renderItem(item) {
    return (
        <View style = {{flex : 7, backgroundColor : "#ffffff"}}>
        <View style = {{flex : 1}}>
        <Image style = {{height : 100, width : 100}} source = {require("../../Images/logo.png")} />
        </View>
        <View style = {{flex : 5}}>
        <ImageBackground style = {styles.backgroundImage} source = {item.item.uri}>
        </ImageBackground>
        </View>
            <View style = {styles.mainView}>
            <View style = {styles.titleView}>
              <Text style = {styles.titleText}>
                    {item.item.title}
              </Text>
            </View>
            <View style = {styles.subTitleView}>
              <Text style = {styles.subTitleText}>
                {item.item.subTitle}
              </Text>
            </View>
            </View>
        </View>
    )
  }
  return (
        <AppIntroSlider slides={props.slider} renderItem={renderItem} bottomButton = {false} prevLabel = "BACK" nextLabel = "NEXT" doneLabel = "START NOW" skipLabel = "SKIP"	showSkipButton = {true} showPrevButton = {true} activeDotStyle = {{backgroundColor : "blue", paddingLeft : 25 }}buttonTextStyle = {{color:'gray'}} onDone = {props.onDoneFun} onSkip = {props.onDoneFun} />
  );
}
export default IntroSlider;
