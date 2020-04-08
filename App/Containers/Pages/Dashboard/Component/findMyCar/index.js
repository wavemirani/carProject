/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable comma-dangle */
/* eslint-disable react/self-closing-comp */
/* eslint-disable quotes */
/* eslint-disable keyword-spacing */
/* eslint-disable eol-last */
/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
import React,{useState} from "react";
import { View, Text, ImageBackground, StyleSheet, Image, TouchableOpacity } from "react-native";
import {FindMyCarStyle} from './style';
import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";
import {Icon} from 'native-base';

function FindMyCar() {
  const [showContent, setShowContent] = useState(false);
  const markers = {
    latitude: 37.78825,
    longitude: -122.4324,
    title: "home",
    subtitle: ""
  };




  return (
    <View style={[FindMyCarStyle.container]}>
      <View style={[FindMyCarStyle.container]}>
        <MapView
          provider={PROVIDER_GOOGLE} // remove if not using Google Maps
          style={FindMyCarStyle.mep}
          region={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121
          }}
        >
          <Marker.Animated
            key={"12"}
            identifier={"12"}
            coordinate={markers}
            title="my car"
          />
        </MapView>
      </View>

    {/* +++++++++++++++++++search bar+++++++++++++++++++++++ */}
      <View style = {[FindMyCarStyle.searchBar]}>
      <View style = {{ width : "95%" ,
        borderRadius : 30,
        backgroundColor : "#ffffff",}}>
        <View
        style = {[FindMyCarStyle.searchBarChild]}
          >
          <View style = {{justifyContent  : "center"}}>
          <Icon  name="chevron-thin-left" type = "Entypo" style={{color : "blue",fontSize: 25, marginLeft : 30}} />
            </View>
            <View style = {[FindMyCarStyle.searchBarChildSearchBar]}>
            <Text style = {[FindMyCarStyle.searchBarText]}>FIND MY CAR</Text>
            </View>
            <View style = {[FindMyCarStyle.searchBarChildSecondView]}>
            <Image
            source={require("../../../../../Images/demo-gallery-5.jpg")}
            style={[FindMyCarStyle.searchBarChildSecondImage]}
          />
            </View>
          </View>
          {/* <Text style = {{borderBottomColor : "gray", borderBottomWidth : 1}}></Text> */}
          <View style = {{borderBottomColor : "#d9d9d9", borderBottomWidth : 1, width : "100%"}}></View>
          <View style = {{paddingLeft : 50}}>
          <View>
              <View style = {{paddingTop : 25}}>
                <Text style = {{color : "gray", fontSize : 15, fontWeight : "bold"}}>Current Address</Text>
                <Text style = {{color : "gray", fontSize : 15, paddingTop : 5}}>77 Bohemia Rd,.United Kingdom</Text>
              </View>
          </View>
          <View>
              <View style = {{paddingTop : 20, paddingBottom : 25}}>
                <Text style = {{color : "gray", fontSize : 15, fontWeight : "bold"}}>Parking Address</Text>
                <Text style = {{color : "gray", fontSize : 15, paddingTop : 5}}>77 Bohemia Rd,.United Kingdom</Text>
              </View>
          </View>
          </View>
          </View>
      </View>

      {/* +++++++++++++++++++Tab bar+++++++++++++++++++++++ */}
    </View>
  );
}

export default FindMyCar;
