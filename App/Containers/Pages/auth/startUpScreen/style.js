/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable comma-dangle */
/* eslint-disable react/self-closing-comp */
/* eslint-disable quotes */
/* eslint-disable keyword-spacing */
/* eslint-disable eol-last */
/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
import { StyleSheet} from "react-native";

export const styles = StyleSheet.create({
    container: {
      width: "100%",
      height: "100%",
      flex : 1
    },
    headline1: {
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      position: "absolute",
      overflow: "hidden",
    },
    image: {
      // flex: 1,
    },
    image_imageStyle: {},
    // overlay: {
    //   backgroundColor: "rgba(30,26,26,0.4)",
    //   flex: 1,
    // },
    followers: {
      color: "rgba(255,255,255,1)",
      fontSize: 16,
      marginTop: 182,
      marginLeft: 123,
    },
    labelStyle : {
      position: 'absolute',
      left: 0,
      
      fontSize:  20 ,
      color:  '#aaa' ,
      width: 277,
      height: 42,
      marginTop: 70,
      marginLeft: 40
    },
    rect1: {
        width : "100%",
      position : "absolute",
      bottom : 0, 
    //   backgroundColor : "#ffffff", 
    //   width  : "100%", 
      paddingBottom : 25, 
      borderRadius : 30,
      alignItems : "center",
      justifyContent : "center"
    },
    signUp: {
      color: "#121212",
      fontWeight : "bold",
      fontSize: 27,
      fontFamily: "calibri-regular",
      marginTop: 20,
      marginLeft: 40,
    },
    materialIconTextbox: {
      width: "80%",
      height: 42,
      marginTop: 36,
      marginLeft: 40
    },
    materialIconTextbox1: {
      width: 277,
      height: 42,
      marginTop: 38,
      marginLeft: 38
    },
    materialIconTextbox2: {
      width: 277,
      height: 42,
      marginTop: 35,
      marginLeft: 38
    },
    materialButtonPrimary: {
      width: "80%",
      height: 54,
      
      borderRadius: 52,
      marginTop: 22,
    //   marginLeft: 40
    },
    remindMeLater: {
      fontWeight : "bold",
      color: "gray",
      borderBottomWidth : 1,
      borderBottomColor : "gray",
      fontSize: 13,
      fontFamily: "roboto-regular",
      
    },
    headline1Stack: {
      width: "100%",
      height: 770
    }
  });