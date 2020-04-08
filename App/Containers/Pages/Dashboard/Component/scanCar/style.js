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

export const WelcomeStyles = StyleSheet.create({
    container: {
        height: "100%",
        width: "100%",
      },
    map: {
    ...StyleSheet.absoluteFillObject
    },
    searchBar : {
        position: "absolute",
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
        width : "50%",
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
    },
    bottomView : {
        position: "absolute",
        bottom : 0,
        width : "100%",
        backgroundColor : "#ffffff"
    },
    bottomSliderButtonView : {
        paddingTop : 10,
        justifyContent : "center",
        alignItems : "center"
    },
    bottomSliderButtonBorder : {
        width : 50,
        borderTopColor : "gray",
        borderTopWidth : 2
    },
    bottomSliderContentView : {
        paddingBottom : 20,
    },
    bottomSliderContentText1 : {
        paddingLeft : 20,
        fontSize : 25,
        fontWeight : "bold",
    },
    bottomSliderContentText2 : {
        paddingLeft : 20,
        paddingRight : 20,
        paddingTop : 10,
        color : "gray",
    },
    bottomTabBarParentView : {
        justifyContent : "center",
        alignItems : "center",
        paddingBottom : 20,
    },
    bottomTabBarChildView : {
        width : "95%",
        alignItems: "center",
        justifyContent: "flex-end"
    },
    innerTabBarView : {
        width : "100%",
        height : 70,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "#0042CF",
        borderTopLeftRadius : 50,
        borderBottomLeftRadius : 50,
        borderTopRightRadius : 50,
        borderBottomRightRadius : 50,
    },
    bottomTabBarView : {
        padding : 0,
        height : 70,
        alignItems: "center",
        justifyContent : "center"
      },
      bottomTabBarImage : {
        height : 25,
        width : 25,
      },
      mep: {
        ...StyleSheet.absoluteFillObject
      },
      searchBarText : {
        fontSize : 18,
        fontWeight : "bold",
        color : "blue"
    }


  });