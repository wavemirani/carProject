/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable comma-dangle */
/* eslint-disable react/self-closing-comp */
/* eslint-disable quotes */
/* eslint-disable keyword-spacing */
/* eslint-disable eol-last */
/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
import React,{useState, useEffect} from "react";
import { View, Text, ImageBackground, StyleSheet, Image, TouchableOpacity } from "react-native";
import {WelcomeStyles} from './style';
import RNTesseractOcr from 'react-native-tesseract-ocr';
import ImagePicker from 'react-native-image-picker';
import {Icon} from 'native-base';



function ScanCar(showVehicleDetail) {
console.log('showContent', showVehicleDetail.showVehicleDetail)
const [showHeaderTitle, setshowHeaderTitle] = useState("SEARCHVEHICLE" )

useEffect(() => {
  setshowHeaderTitle(showVehicleDetail.showVehicleDetail ? "VEHICLE SEARCH" : "SCAN MY CAR")
}, [showVehicleDetail.showVehicleDetail])

  function scanCarData(){

    const options = {
      title: 'Select Avatar',
      customButtons: [{ name: 'fb', title: 'Choose Photo from Facebook' }],
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };

    ImagePicker.showImagePicker(options, (response) => {
      console.log('Response = ', response);
    
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
      console.log(response);
        extractTextFromImage(response.path)
      }
    });


  }

  function extractTextFromImage(imgPath) {
    console.log(imgPath)
    const tessOptions = {
      whitelist: null, 
      blacklist: '1234567890\'!"#$%&/()={}[]+*-_:;<>'
    };
    RNTesseractOcr.recognize(imgPath, "LANG_ENGLISH", tessOptions)
      .then((result) => {
        this.setState({ ocrResult: result });
        console.log("OCR Result: ", result);
      })
      .catch((err) => {
        console.log("OCR Error: ", err);
      })
      .done();
  }
  
  return (
    <View style={[WelcomeStyles.container]}>
      <View style={[WelcomeStyles.container]}>
      <ImageBackground
        source = {(require("../../../../../Images/Landing_Screen.png"))}
        style = {{height : "100%", width : "100%"}}
      >
      </ImageBackground>
      </View>

    {/* +++++++++++++++++++search bar+++++++++++++++++++++++ */}
      <View style = {[WelcomeStyles.searchBar]}>
        <View
        style = {[WelcomeStyles.searchBarChild]}
          >
          <View style = {{justifyContent  : "center"}}>
          <Icon  name="chevron-thin-left" type = "Entypo" style={{color : "blue",fontSize: 25, marginLeft : 30}} />
            </View>
            <View style = {[WelcomeStyles.searchBarChildSearchBar]}>
            <Text  style = {[WelcomeStyles.searchBarText]}>{showHeaderTitle}</Text>
            </View>
            <View style = {[WelcomeStyles.searchBarChildSecondView]}>
            <Image
            source={require("../../../../../Images/demo-gallery-5.jpg")}
            style={[WelcomeStyles.searchBarChildSecondImage]}
          />
            </View>
          </View>
      </View>

      {/* +++++++++++++++++++Tab bar+++++++++++++++++++++++ */}
      <View style = {{position : "absolute",top :100, justifyContent : "center", alignItems : "center", width : "100%", height : "50%"}}>
        <TouchableOpacity onPress = {() => scanCarData() }>
        <Image
        source = {require("../../../../../Images/barcode.png")}
         style = {{height : 150, width : 150}}

         />
         </TouchableOpacity>
      </View>
    </View>
  );
}

export default ScanCar;