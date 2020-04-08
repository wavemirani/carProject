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

export const profileStyles = StyleSheet.create({
    container: {
        height: "100%",
        width: "100%",
        flex: 1,
        // justifyContent : "center",
        // alignItems : "center",
      },
    map: {
    ...StyleSheet.absoluteFillObject
    },
    searchBar : {
        // position: "absolute",
        top : 20,
        width : "100%",
        height : 70,
        marginBottom : 20,
        alignItems: "center",
        justifyContent: "center",
    },
    searchBarText : {
        fontSize : 18,
        fontWeight : "bold",
        color : "#1C43CF"
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
        width : "50%",
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
    },
    materialIconTextbox: {
        width: "80%",
        height: 42,
        marginTop: 36,
        marginLeft: 40
      },
      materialButtonPrimary: {
        width: "60%",
        height: 54,
        backgroundColor: "blue",
        borderRadius: 52,
        marginTop: 22,
        // marginLeft: 40
      },
  });