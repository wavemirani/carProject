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
import {WelcomeStyles} from './style';
import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";
import {Icon} from 'native-base';
function WelcomePage(props) {
  const [showContent, setShowContent] = useState(false);
  const markers = {
    latitude: 37.78825,
    longitude: -122.4324,
    title: "home",
    subtitle: ""
  };
  return (
    <View style={[WelcomeStyles.container]}>
      <View style={[WelcomeStyles.container]}>
        <MapView
          provider={PROVIDER_GOOGLE} // remove if not using Google Maps
          style={WelcomeStyles.mep}
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
      <View style = {[WelcomeStyles.searchBar]}>
        <View
        style = {[WelcomeStyles.searchBarChild]}
          >
          <View style = {{justifyContent : "center"}}>
          <Icon onPress = {() =>props.props.navigation.toggleDrawer()} name="menu" type = "Feather" style={{color : "blue",fontSize: 30, marginLeft : 30}} />
            </View>
            <View style = {[WelcomeStyles.searchBarChildSearchBar]}>
            <Text></Text>
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
    </View>
  );
}

export default WelcomePage;
