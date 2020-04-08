/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable comma-dangle */
/* eslint-disable react/self-closing-comp */
/* eslint-disable quotes */
/* eslint-disable keyword-spacing */
/* eslint-disable eol-last */
/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
import React, {
  Component,
  useRef,
  useEffect,
  useState,
  KeyboardAvoidingView
} from "react";

import { styles } from "./style";
import {
  ScrollView,
  View,
  Image,
  ImageBackground,
  Text,
  TextInput,
  TouchableOpacity
} from "react-native";
import MaterialIconTextbox from "../../../../Components/Design/MaterialIconTextbox";
import MaterialButtonPrimary from "../../../../Components/Design/MaterialButtonPrimary";
import { AuthContext } from '../../../../Navigators/context';
import AsyncStorage from '@react-native-community/async-storage';

function SignIn(props, { navigation }) {

  const { home } = React.useContext(AuthContext)

  const [focusName, setIsTop] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userAuthenticate, setUserAuthenticate] = useState(false);

  useEffect(() => {
    if(userAuthenticate){
      home("app")
    }
  },[userAuthenticate])

  function textValue(name, value) {
    if (name === "name") {
      setName(value);
    }
    if (name === "email") {
      setEmail(value);
    }
    if (name === "password") {
      setPassword(value);
    }
  }

  async function submitData() {
    

    if(email === "" && password === ""){
      try {
        await AsyncStorage.setItem('isAuthenticate', "true")
        setUserAuthenticate(true)
      } catch (e) {
        console.log("e>>>>>",e);
        
        alert("something Went Wrong");
      }
    }
  }

  function doSomething(name) {
    setIsTop(name);
  }

  return (
    <View>
      <ImageBackground
        source={require("../../../../Images/Landing_Screen.png")}
        style={{ height: "100%", width: "100%" }}
      >
        <Image
          style={{ height: 100, width: 100 }}
          source={require("../../../../Images/logo2.png")}
        />
      </ImageBackground>
      <View style={styles.rect1}>
        <ScrollView>
          <Text style={styles.signUp}>Sign in</Text>
          <MaterialIconTextbox
            focusData={() => doSomething("email")}
            placeholder="Username/Email Address"
            isTop={focusName === "email" || email !== "" ? true : false}
            style={styles.materialIconTextbox}
            changeTextData={value => textValue("email", value)}
            iconName="email"
            iconType="Fontisto"
            value={email}
          ></MaterialIconTextbox>
          <MaterialIconTextbox
            focusData={() => doSomething("password")}
            placeholder="Password"
            isTop={focusName === "password" || password !== "" ? true : false}
            style={[styles.materialIconTextbox, { fontSize: 20 }]}
            changeTextData={value => textValue("password", value)}
            isSecure={true}
            iconName="key"
            iconType="FontAwesome5"
            value={password}
          ></MaterialIconTextbox>
          <TouchableOpacity
            onPress={() => props.navigation.navigate("ForgotPassword")}
          >
            <Text
              style={{
                marginLeft: 200,
                color: "#4d79ff",
                paddingTop: 5,
                fontWeight: "bold"
              }}
            >
              Forgot Password?
            </Text>
          </TouchableOpacity>
          <MaterialButtonPrimary
            style={styles.materialButtonPrimary}
            name="Sign in"
            textColor="#ffffff"
            onPress={() => submitData()}
          ></MaterialButtonPrimary>
          <MaterialButtonPrimary
            style={styles.materialButtonPrimary1}
            name="Sign up with google"
            textColor="#ffffff"
            onPress={() => submitData()}
            iconName="google"
            iconType="AntDesign"
          ></MaterialButtonPrimary>
           <MaterialButtonPrimary
            style={styles.materialButtonPrimary2}
            name="Sign up with google"
            textColor="#ffffff"
            onPress={() => submitData()}
            iconName="sc-facebook"
            iconType="EvilIcons"
          ></MaterialButtonPrimary>
          <View
            style={{
              marginTop: 17,
              alignItems: "center",
              justifyContent: "center"
            }}
          >
             
          <View
            style={{
              marginTop: 17,
              alignItems: "center",
              justifyContent: "center"
            }}
          ></View>
            <Text style={styles.remindMeLater}>Remind me later</Text>
          </View>
        </ScrollView>
      </View>
    </View>
  );
}

export default SignIn;
