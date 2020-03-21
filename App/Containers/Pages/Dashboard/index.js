/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable comma-dangle */
/* eslint-disable react/self-closing-comp */
/* eslint-disable quotes */
/* eslint-disable keyword-spacing */
/* eslint-disable eol-last */
/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
import React from "react";
import { View, Text, ImageBackground, StyleSheet, Image } from "react-native";
import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";
function Dashboard() {
  const markers = {
    latitude: 37.78825,
    longitude: -122.4324,
    title: "home",
    subtitle: ""
  };
  return (
    <View style={styles.container}>
      
      <View style={{ height: "100%", width: "100%" }}>
        <MapView
          provider={PROVIDER_GOOGLE} // remove if not using Google Maps
          style={styles.map}
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
      <View style = {{position: "absolute",
          top : 20,
          width : "100%",
          height : 70,
          justifyContent : "center",
          alignItems :"center"}}>
        <View style = {{width : "95%" , height : 70,borderRadius : 50,
          backgroundColor : "#ffffff", flexDirection : "row"}}>
          <View style = {{width : "20%", padding : 0}}>
            <Image
            source={require("../../../Images/logo.png")}
            style={{height : "100%",
    width : "100%", borderRadius : 50}}
          />
            </View>
            <View style = {{width : "60%"}}>
            <Text></Text>
            </View>
            <View style = {{width : "20%", padding : 10}}>
            <Image
            source={require("../../../Images/Landing_Screen.png")}
            style={{height : "100%",
    width : "100%", borderRadius : 50}}
          />
            </View>
          </View>
      </View>

      {/* +++++++++++++++++++Tab bar+++++++++++++++++++++++ */}
      <View
        style={{
          position: "absolute",
          bottom : 20,
          width : "100%",
          justifyContent : "center",
          alignItems :"center"
          // paddingLeft : 10,
          // paddingRight : 10  
        }}
      >
      <View style = {{width : "95%",alignItems: "center",
    justifyContent: "center",}}>
      <View style = {{width : "100%", height : 70, flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",}}>
        <View
          style={[styles.bottomTabBarView, {borderTopLeftRadius : 50, borderBottomLeftRadius : 50}]}
        >
          <Image
            source={require("../../../Images/address.png")}
            style={styles.bottomTabBarImage}
          />
        </View>

        <View
          style={styles.bottomTabBarView}
        >
          <Image
            source={require("../../../Images/find.png")}
            style={styles.bottomTabBarImage}
          />
        </View>
        <View
         style={styles.bottomTabBarView}
        >
          <Image
            source={require("../../../Images/barcode.png")}
            style={styles.bottomTabBarImage}
          />
        </View>
        <View
         style={styles.bottomTabBarView}
        >
          <Image
            source={require("../../../Images/home.png")}
            style={styles.bottomTabBarImage}
          />
        </View>
        <View
         style = {[styles.bottomTabBarView, {borderTopRightRadius : 50, borderBottomRightRadius : 50} ]}
        >
          <Image
            source={require("../../../Images/message.png")}
            style={styles.bottomTabBarImage}
          />
        </View>
      </View>
      </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    height: "100%",
    flex: 1,
    width: "100%",

    alignItems: "center"
  },
  bottomTabBarView : {
    width: "20%",
    backgroundColor: "#0042CF",
    padding : 0,
    height : 70,
    alignItems: "center",
    justifyContent : "center"
  },
  bottomTabBarImage : {
    height : 25,
    width : 25,
  },
  map: {
    ...StyleSheet.absoluteFillObject
  }
});
export default Dashboard;
