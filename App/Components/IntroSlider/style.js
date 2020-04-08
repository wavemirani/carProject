/* eslint-disable no-unused-vars */
/* eslint-disable comma-dangle */
/* eslint-disable no-trailing-spaces */
/* eslint-disable quotes */
/* eslint-disable prettier/prettier */
import react from 'react';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
    backgroundImage: {
        height : '100%',
        width : '100%'
    },
    mainView: {
        flex : 1,
        // justifyContent: "flex-end",
         marginBottom : 100
    }, 
    titleView: {
        alignItems : "center",
        paddingBottom : 10
    },
    titleText : {
        width : "75%",
        fontSize : 25, 
        textTransform : 'uppercase', 
        fontWeight : "bold", 
        textAlign : "center"
    },
    subTitleView : {
        alignItems : "center"
    },
    subTitleText : {
        textAlign : "center", 
        width : "90%"
    }
  });