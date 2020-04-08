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

export const chatMessageStyle = StyleSheet.create({
    
    searchBar : {
        marginBottom : 30,
        // position: "absolute",
        top : 20,
        width : "100%",
        height : 70,
        alignItems: "center",
        justifyContent: "center",
    },
    searchBarChild : {
        width : "95%" ,
        height : 70,
        borderRadius : 50,
        backgroundColor : "#ffffff",
        flexDirection : "row",
        justifyContent : "space-between",
    },
    searchBarChildFirstImage : {
        height : 80,
        width : 80,
        borderRadius : 50,
    },
    searchBarChildSearchBar : {
        width : "60%",
        justifyContent : "center"
    },
    searchBarChildSecondView : {
        justifyContent : "center",
        padding : 10
    },
    searchBarChildSecondImage : {
        height : 50,
        width : 50,
        borderRadius : 50,
        padding : 10
    },searchBarText : {
        fontSize : 18,
        // fontWeight : "bold",
        color : "#1C43CF"
    },
    
  });