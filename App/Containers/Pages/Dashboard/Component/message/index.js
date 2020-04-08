import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import { Icon } from "native-base";
import {messageStyle} from "./style"
import { ScrollView } from "react-native-gesture-handler";
export default function Message(props){
    const newArray = [{
        "name": "Margie Jutten",
        "text": "Thanks for sharing",
        "unread": true,
        "image": require("../../../../../Images/download1.jpeg")
      },
      {
        "name": "Thomos alva",
        "text": "Ok",
        "unread": false,
        "image": require("../../../../../Images/demo-gallery-5.jpg")
      },
      {
        "name": "Derrieck brooks",
        "text": "Not Actually",
        "unread": false,
        "image": require("../../../../../Images/download.jpeg")
      },
      {
        "name": "Gunther ackner",
        "text": "Hey man",
        "unread": false,
        "image": require("../../../../../Images/images.jpeg")
      },
      {
        "name": "Marry boolen",
        "text": "Yes, i told",
        "unread": false,
        "image": require("../../../../../Images/images1.jpeg")
      },
      {
        "name": "Jhon Tender",
        "text": "i,don't think so",
        "unread": false,
        "image": require("../../../../../Images/Cute-Girl-Picture-for-Profile-18.png")
      }
      ]



    const Row = (props) => (
        <View style={messageStyle.container2}>
          <Image source={{ uri: props.picture.large}} style={messageStyle.photo} />
          <Text style={messageStyle.text}>
            {`${props.name.first} ${props.name.last}`}
          </Text>
        </View>
      );


    return(
        <View style={[messageStyle.container]}>
            <View style={[messageStyle.container]}>
            <View style={[messageStyle.searchBar]}>
                <View style={[messageStyle.searchBarChild]}>
                <View style={{ justifyContent: "center" }}>
                    <Icon
                    // onPress={() => props.props.navigation.toggleDrawer()}
                    name="chevron-thin-left"
                    type="Entypo"
                    style={{ color: "#1C43CF", fontSize: 25, marginLeft: 30 }}
                    />
                </View>
                <View style={[messageStyle.searchBarChildSearchBar]}>
                    <Text style={[messageStyle.searchBarText]}>MESSAGES</Text>
                </View>
                <View style={[messageStyle.searchBarChildSecondView]}>
                </View>
                </View>
            </View>
            <View style = {{paddingBottom : 180}}>
            <View style ={{padding : 15}} >
                <ScrollView>
                {
                    newArray.map((key,index) => (
                        <View style = {{marginTop : index === 0 ? 0 : 30}}>
                        {/* <View style = {{borderBottomWidth : 1}}> */}
                        <TouchableOpacity onPress = {() => props.props.navigation.push("chat",{name : key.name, image :key.image })}>
                        <View style = {{justifyContent : "space-between", flexDirection : "row"}}>
                        <View style={[messageStyle.container2]}>
                            <Image source={key.image} style={messageStyle.photo} />
                            <View style = {{marginLeft : 15, marginTop : -2}}>
                            <Text style={{fontSize : 17, fontWeight : "bold",}}>
                                {key.name}
                            </Text>
                            <Text style={{color : "#C6C6C6", fontSize : 16, paddingTop : 3}}>
                                {key.text}
                            </Text>
                            </View>
                            
                        {/* </View> */}
                        </View>
                        <View style>
                            <Text style = {{color : key.unread ? "red" : "#D1CFD0" , fontSize : 17, fontWeight : "bold"}}>3:03pm</Text>
                            {
                                key.unread && 
                                <View style = {{marginLeft: 30, backgroundColor : "red", borderRadius : 50, width : 20, justifyContent : "center", alignItems : "center", marginTop : 10}}>
                            <Text style = {{color : "#ffffff", fontWeight : "bold"}}>1</Text>

                            </View>
                            }
                            
                        </View>
                        </View>
                        </TouchableOpacity>
                        <View style = {{width : "100%" ,alignItems : "flex-end", marginTop : 10}}>
                        <Text style = {{borderBottomWidth : 1, width : "85%", borderBottomColor : "#E1E1E1"}}></Text>
                        </View>
                        </View>
                    ))
                }
                </ScrollView>
            </View>
            </View>
            </View>
        </View>
    );
}