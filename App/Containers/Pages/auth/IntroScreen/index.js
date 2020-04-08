/* eslint-disable semi */
/* eslint-disable quotes */
/* eslint-disable keyword-spacing */
/* eslint-disable eol-last */
/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
import React from 'react';
import IntroSlider from '../../../../Components/IntroSlider';
import AsyncStorage from '@react-native-community/async-storage';
import { AuthContext } from '../../../../Navigators/context';
function IntroScreen(props){

  const { signIn } = React.useContext(AuthContext);

    async function goToSignUp(){
        try {
            await AsyncStorage.setItem('showIntroScreen', "false")
            signIn("auth");

          } catch (e) {
            alert("something Went Wrong");
          }
        
    }
    
    const slider = [
        { uri: require("../../../../Images/banner.png"), title : "welcome to best parking app", subTitle : "it is long established fact that a reader will be distracted by the readable content." },
        { uri: require("../../../../Images/banner.png") , title : "easily find your car using gps tracking", subTitle : "it is long established fact that a reader will be distracted by the readable content." },
        {uri : require("../../../../Images/banner.png"), title : "Online booking for car services", subTitle : "it is long established fact that a reader will be distracted by the readable content."}
      ];
    return(
        <IntroSlider slider = {slider} onDoneFun = {() => goToSignUp()} />
    );
}
export default IntroScreen;