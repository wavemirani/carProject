/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable comma-dangle */
/* eslint-disable react/self-closing-comp */
/* eslint-disable quotes */
/* eslint-disable keyword-spacing */
/* eslint-disable eol-last */
/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";
import WelcomePage from "./Component/welcomePage";
import { WelcomeStyles } from "./Component/welcomePage/style";
import FindMyCar from "./Component/findMyCar";
import ScanCar from "./Component/scanCar";
import MyVehicle from "./Component/myVehicle";
import Message from "./Component/message";
import { ScrollView } from "react-native-gesture-handler";
function Dashboard(props) {
  const [showContent, setShowContent] = useState(false);
  const [currentPage, setCurrentPage] = useState("location");
  const [showVehicleDetail, setShowVehicleDetail]= useState(false)
  const markers = {
    latitude: 37.78825,
    longitude: -122.4324,
    title: "home",
    subtitle: "",
  };
  return (
    <View style={styles.container}>
      {/* <View style = {{height : "z"}}> */}
      {currentPage === "location" && <WelcomePage props={props} />}
      {currentPage === "findMyCar" && <FindMyCar />}
      {currentPage === "scanCar" && <ScanCar showVehicleDetail = {showVehicleDetail}/>}
      {currentPage === "myVehicle" && <MyVehicle />}
      {currentPage === "message" && <Message  props={props} />}
      {/* </View> */}
      <View style={[WelcomeStyles.bottomView,{backgroundColor : currentPage === "message" ? "#F2F2F2" : "#ffffff"}]}>
        <View style={[WelcomeStyles.bottomSliderButtonView]}>
          <TouchableOpacity onPress={() => setShowContent(!showContent)}>
            <Text style={[WelcomeStyles.bottomSliderButtonBorder, { borderTopWidth : currentPage === "message" ? 0 : 2}]}></Text>
          </TouchableOpacity>
        </View>
        {showContent && currentPage === "location" && (
          <View style={[WelcomeStyles.bottomSliderContentView]}>
            <TouchableOpacity onPress={() => props.navigation.toggleDrawer()}>
              <Text style={[WelcomeStyles.bottomSliderContentText1]}>
                Welcome Anny
              </Text>
            </TouchableOpacity>
            <Text style={[WelcomeStyles.bottomSliderContentText2]}>
              Lorem ipsum dolor sit amet, consectetur sed do eiusmod tempor
              incididunt ut labore
            </Text>
          </View>
        )}
        {showContent && currentPage === "scanCar" && (
          <View>
            {(showVehicleDetail)? 
            <View style={{height : 330}}>
              <ScrollView>
                <View style={{padding : 20}}>
                  <Text style={{fontSize : 30, fontWeight : "bold"}}>Audi A3</Text>
                  <Image source = {require('../../../Images/audi.png')} style={{height : 200 , width : 400}} />
                </View>
              <View style={{flexDirection: 'row',justifyContent : "space-between", padding : 20}}> 
              <View>
                <Text style={{color : "#cccccc", fontSize : 18}}>VEHICLE NUMBER</Text>
                <Text style={{fontSize : 22}}>ABC12#D</Text>
              </View>
              <View>
                <Text  style={{color : "#cccccc",textAlign : "right", fontSize : 18}}>Model</Text>
                <Text style={{fontSize : 22, textAlign : "right"}}>2018-2019</Text>
              </View>
              </View>

              <View style={{flexDirection: 'row',justifyContent : "space-between", padding : 20}}> 
              <View>
                <Text style={{color : "#cccccc", fontSize : 18}}>BODY TYPE</Text>
                <Text style={{fontSize : 22}}>Sedan</Text>
              </View>
              <View>
                <Text  style={{color : "#cccccc",textAlign : "right", fontSize : 18}}>ENGINE CAPACITY</Text>
                <Text style={{fontSize : 22, textAlign : "right"}}>1498</Text>
              </View>
              </View>

              <View style={{flexDirection: 'row',justifyContent : "space-between", padding : 20}}> 
              <View>
                <Text style={{color : "#cccccc", fontSize : 18}}>FUEL CONSUMPTION</Text>
                <Text style={{fontSize : 22}}>5.1</Text>
              </View>
              <View>
                <Text  style={{color : "#cccccc",textAlign : "right", fontSize : 18}}>CARBON EMISSION</Text>
                <Text style={{fontSize : 22, textAlign : "right"}}>115</Text>
              </View>
              </View>
              

              
              </ScrollView>
            </View> 
             :
            <View style={[WelcomeStyles.bottomSliderContentView]}>
              <Text style={[WelcomeStyles.bottomSliderContentText1]}>
                John Doe | BA 64 CFU
              </Text>
              <TouchableOpacity>

              <Text style={[WelcomeStyles.bottomSliderContentText2]}>
                Audi D3
              </Text>
              </TouchableOpacity>
            </View>
        }
            <View
              style={{ flexDirection: "row", width: "100%", paddingBottom: 20 }}
            >
              <TouchableOpacity onPress = {
                () =>props.navigation.navigate("searchVehicle")}
                style={{ width: "50%", paddingRight: 10, paddingLeft: 20 }}
              >
                <View
                  style={{
                    backgroundColor: "#40E34C",
                    height: 40,
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: 30,
                  }}
                >
                  <Image
                    style={{ height: 20, width: 20, paddingRight: 20 }}
                    source={require("../../../Images/message.png")}
                  />
                  <Text style={{ paddingLeft: 10, color: "#ffffff" }}>
                    Call Now
                  </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
              onPress = {() => setShowVehicleDetail(!showVehicleDetail)}
                style={{ width: "50%", paddingRight: 20, paddingLeft: 10 }}
              >
                <View
                  style={{
                    backgroundColor: "#0042CF",
                    height: 40,
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: 30,
                  }}
                >
                  <Image
                    style={{ height: 20, width: 20 }}
                    source={require("../../../Images/message.png")}
                  />
                  <Text style={{ paddingLeft: 10, color: "#ffffff" }}>
                    Message
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        )}
        <View style={[WelcomeStyles.bottomTabBarParentView]}>
          <View style={[WelcomeStyles.bottomTabBarChildView]}>
            <View style={[WelcomeStyles.innerTabBarView]}>
              <View></View>
              <TouchableOpacity onPress={() => setCurrentPage("location")}>
                <View
                  style={[
                    WelcomeStyles.bottomTabBarView,
                    {
                      borderBottomWidth: currentPage === "location" ? 5 : 0,
                      borderBottomColor: "#40E34C",
                    },
                  ]}
                >
                  <Image
                    source={require("../../../Images/address.png")}
                    style={WelcomeStyles.bottomTabBarImage}
                  />
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => setCurrentPage("findMyCar")}>
                <View
                  style={[
                    WelcomeStyles.bottomTabBarView,
                    {
                      borderBottomWidth: currentPage === "findMyCar" ? 5 : 0,
                      borderBottomColor: "#40E34C",
                    },
                  ]}
                >
                  <Image
                    source={require("../../../Images/find.png")}
                    style={WelcomeStyles.bottomTabBarImage}
                  />
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => setCurrentPage("scanCar")}>
                <View
                  style={[
                    WelcomeStyles.bottomTabBarView,
                    {
                      borderBottomWidth: currentPage === "scanCar" ? 5 : 0,
                      borderBottomColor: "#40E34C",
                    },
                  ]}
                >
                  <Image
                    source={require("../../../Images/barcode.png")}
                    style={WelcomeStyles.bottomTabBarImage}
                  />
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => setCurrentPage("myVehicle")}>
              <View style={[WelcomeStyles.bottomTabBarView,{
                      borderBottomWidth: currentPage === "myVehicle" ? 5 : 0,
                      borderBottomColor: "#40E34C",
                    },]}>
                <Image
                  source={require("../../../Images/home.png")}
                  style={WelcomeStyles.bottomTabBarImage}
                />
              </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => setCurrentPage("message")}>
              <View style={[WelcomeStyles.bottomTabBarView,{
                      borderBottomWidth: currentPage === "message" ? 5 : 0,
                      borderBottomColor: "#40E34C",
                    },]}>
                <Image
                  source={require("../../../Images/message.png")}
                  style={WelcomeStyles.bottomTabBarImage}
                />
              </View>
              </TouchableOpacity>
              <View></View>
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

    alignItems: "center",
  },
  bottomTabBarView: {
    padding: 0,
    height: 70,
    alignItems: "center",
    justifyContent: "center",
  },
  bottomTabBarImage: {
    height: 25,
    width: 25,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});
export default Dashboard;
