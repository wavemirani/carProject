import React, {useState, useEffect} from "react"
import { ActivityIndicator, View } from 'react-native';
import { AuthContext } from '../../../Navigators/context';
import AsyncStorage from '@react-native-community/async-storage';

export default function Boot(props){
    const { signIn, intro, home, logout } = React.useContext(AuthContext);
    const [currentstatus, setCurrentstatus] = useState("");

    useEffect(() => {
        console.log("currentstatus>>",currentstatus);
        if(currentstatus === "introScreen"){
            intro(currentstatus);
        }else if(currentstatus === "auth"){
            signIn(currentstatus)
        }else{
            home(currentstatus)
        }

    },[currentstatus])


    async function checkValue(){
        let data = "";
        try {
          const value = await AsyncStorage.getItem('showIntroScreen')
          if(value === null)
          {
            data = "introScreen";
          }
          else if(value === "false"){
            const authValue = await AsyncStorage.getItem('isAuthenticate');
            if(authValue === null || authValue === "false"){
              data = "auth";
            }else{
              data = "app";
            }
          }
          
        } catch(e) {
          console.log("error");
          
        }
        setCurrentstatus(data)
      }

      checkValue()
    return(
        <View style = {{justifyContent : "center", alignItems : "center"}}>
            <ActivityIndicator />
        </View>
    )
}