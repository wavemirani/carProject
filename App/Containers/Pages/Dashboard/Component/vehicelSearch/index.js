/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable comma-dangle */
/* eslint-disable react/self-closing-comp */
/* eslint-disable quotes */
/* eslint-disable keyword-spacing */
/* eslint-disable eol-last */
/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
import React, {useState,} from "react";


import {styles} from './style'
import {ScrollView, View, Image, ImageBackground, Text, TextInput ,TouchableOpacity} from "react-native";
import MaterialIconTextbox from "../../../../../Components/Design/MaterialIconTextbox";
import MaterialButtonPrimary from "../../../../../Components/Design/MaterialButtonPrimary";
import { set } from "react-native-reanimated";
import { Icon } from "native-base";

function VehicleSearch(props) {
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
        source={require("../../../../../Images/Landing_Screen.png")}
        style = {{height : "100%", width : "100%"}}
      >
      <View style={[styles.searchBar]}>
				<View style={[styles.searchBarChild]}>
					<View style={{ justifyContent: "center" }}>
						<Icon
							// onPress={() => props.props.navigation.toggleDrawer()}
							name="chevron-thin-left"
							type="Entypo"
							style={{ color: "#1C43CF", fontSize: 25, marginLeft: 30 }}
						/>
					</View>
					<View
						style={[
							styles.searchBarChildSearchBar,
							{ justifyContent: "center" },
						]}
					>
						<Text style={[styles.searchBarText]}>VEHICLE SEARCH</Text>
					</View>
					<View style={[styles.searchBarChildSecondView]}>
						<Icon
							//   onPress={() => setModalVisible(false)}
							name="close"
							type="AntDesign"
							style={{ color: "blue", fontSize: 30, paddingRight: 20 }}
						/>
					</View>
				</View>
			</View>
      
        {/* <Image style = {{height : 100, width : 100}} source = {require("../../../../../Images/logo2.png")} /> */}
      </ImageBackground>
      <View style = {styles.rect1}>
      <ScrollView>
      <Text style={styles.signUp}>Vehicle Search</Text>
      <View style={{flexDirection: 'row', justifyContent : "space-between"}}>
      <MaterialIconTextbox
          focusData = {() => doSomething("email")}
          placeholder = "Search Car number"
          isTop = {(focusName === "email" || email !== "") ? true : false}
            style={styles.materialIconTextbox}
            changeTextData = {(value) => textValue("email",value)}
            iconName = "search1"
            iconType = "AntDesign"
          >
            </MaterialIconTextbox>
            <View style={{ height : 60, width : 60,backgroundColor : "#CCCCCC", marginRight : 20, marginTop : 10, justifyContent : "center", alignItems : "center"}}>
            <Icon
							//   onPress={() => setModalVisible(false)}
							name="camera"
							type="EvilIcons"
							style={{ fontSize: 40 }}
						/>
            </View>
      </View>
         
          
          <MaterialButtonPrimary
            style={styles.materialButtonPrimary}
            name = "Search Your Vehicle"
            textColor = "#ffffff"
          ></MaterialButtonPrimary>
          <View style = {{marginTop: 17, alignItems : "center", justifyContent : "center"}}>
            {/* <Text style={styles.remindMeLater}>Sign In | Sign Up</Text> */}
          </View>
      </ScrollView>
      </View>
    </View>
  );
}



export default VehicleSearch;
