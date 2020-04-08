import React,{useState} from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator,DrawerContentScrollView,
  DrawerItemList,
  DrawerItem, Route } from '@react-navigation/drawer';
  import {View, Text, Image} from 'react-native';
  import {styles} from './style'
import { NavigationContainer } from '@react-navigation/native';
import {SignUp, SignIn, ForgotPassword, StartUp, IntroScreen, Verification } from '../Containers/Pages/auth';
import AsyncStorage from '@react-native-community/async-storage';
import Dashboard from '../Containers/Pages/Dashboard';
import Message from '../Containers/Pages/Dashboard/Component/message/component/message'
import { ActivityIndicator } from 'react-native';
import {AuthContext} from './context';
import Boot from '../Containers/Pages/Root/boot';
import { Profile } from "../Containers/Pages/app";
import Animated from 'react-native-reanimated';
// import { Icon } from "native-base";
import { Avatar, ListItem, Icon } from 'react-native-elements';
import VehicleSearch, {  } from "../Containers/Pages/Dashboard/Component/vehicelSearch";
const Stack = createStackNavigator();
const AuthStack = createStackNavigator();
const AppStack = createStackNavigator();
const Drawer = createDrawerNavigator();
const AuthStackScreens = () => (
  <AuthStack.Navigator initialRouteName = "StartUp" headerMode = "none">
    <AuthStack.Screen name = "StartUp" component = {StartUp} />
    <AuthStack.Screen name = "SignIn" component = {SignIn} />
    <AuthStack.Screen name = "SignUp" component = {SignUp} />
    <AuthStack.Screen name = "ForgotPassword" component = {ForgotPassword} />
    <AuthStack.Screen name = "verify" component = {Verification} />
  </AuthStack.Navigator>
)

const DasbpardStack = () => (
  <AppStack.Navigator headerMode = "none">
    <AppStack.Screen name = "Dashboard" component = {Dashboard} />
    <AppStack.Screen name = "chat" component = {Message} />
    <AppStack.Screen name= "searchVehicle" component = {VehicleSearch} />
  </AppStack.Navigator>
)


function IconLogo() {
  return (
    <Icon
      style={{ margin: 0, padding: 0 }}
      name='user'
      type='antdesign'
      color='black'
    />
  )
}
function IconLogo2() {
  return (
    <Icon
      style={{ margin: 0, padding: 0 }}
      name='home'
      type='antdesign'
      color='black'
    />
  )
}


function CustomDrawerContent({ progress, ...rest }) {
  const translateX = Animated.interpolate(progress, {
    inputRange: [0, 1],
    outputRange: [-100, 0],
  });
  console.log('progress', rest)

  return (
    <DrawerContentScrollView {...rest}>
      <View style={styles.drawer}>
        <ListItem
          containerStyle={styles.drawerHeader}
          leftAvatar={{
            source: { uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg' },
          }}
          title="john doe"
          titleStyle={styles.titleStyle}
          subtitle="johndoe@gmail.com"
          rightIcon={
            <Icon name='edit'
              type='antdesign'
              color='lightgreen' />}
        />
      </View>
      <Animated.View style={{ transform: [{ translateX }] }}>
        {/* <DrawerItemList {...rest} /> */}
        <DrawerItem
          label="HOME"
          labelStyle={{ padding: 0, margin: 0, fontSize : 20 }}
          onPress={() =>rest.navigation.navigate("Dashboard") }

          icon={IconLogo2} />
        <DrawerItem
          label="My Profile"
          labelStyle={{ padding: 0, margin: 0, fontSize : 20 }}
          onPress={() =>rest.navigation.navigate("profile") }
          
          
          icon={IconLogo} />
      </Animated.View>
    </DrawerContentScrollView >
  );
}

export default function StackNavigation(props){

  const authContext = React.useMemo(() => {
    return {
      signIn : (value) => {
        setIsLoading(value)
      },
      intro : (value) => {
        setIsLoading(value)
      },
      home : (value) => {
        setIsLoading(value)
      },
      logout : () => {
        setIsLoading("auth")
      }
    }
  })

  const [isLoading, setIsLoading] = useState("");
  const [token, setToken] = useState(null);
  return (
    <AuthContext.Provider value = {authContext}>
    <NavigationContainer>
        {
          (isLoading === "")?
          <Stack.Navigator headerMode = "none">
          <Stack.Screen name = "Root" component = {Boot} />
          </Stack.Navigator>
          :(isLoading === "introScreen")?
          <Stack.Navigator headerMode = "none">
          <Stack.Screen name = "IntroScreen" component = {IntroScreen} />
          </Stack.Navigator>
          
           : (isLoading === "auth")? (
            <Stack.Navigator headerMode = "none">
            <Stack.Screen name = "Auth" component = {AuthStackScreens} />
            </Stack.Navigator>
            
          ):
          (
          <Drawer.Navigator drawerType={'front'} drawerContent={props => <CustomDrawerContent {...props} style={{ padding: 0 }} />}>
              <Drawer.Screen name = "Dashboard" component = {DasbpardStack} />
              <Drawer.Screen name = "profile" component = {Profile} />
            </Drawer.Navigator>
            
          )
        }
    </NavigationContainer>
    </AuthContext.Provider>
  );
}