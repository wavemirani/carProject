import React,{useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Alert,
  ScrollView,
  TextInput,
  FlatList,
  Button,
  ImageBackground
} from 'react-native';
import { Icon } from "native-base";

import { chatMessageStyle } from './style'

export default function Message(props) {
  console.log("props",props);
  

    const [data, setData] = useState([{id:1, date:"9:50 am", type:'in',  message: "Lorem ipsum dolor sit amet"},
    {id:2, date:"9:50 am", type:'out', message: "Lorem ipsum dolor sit amet"} ,
    {id:3, date:"9:50 am", type:'in',  message: "Lorem ipsum dolor sit a met"}, 
    {id:4, date:"9:50 am", type:'in',  message: "Lorem ipsum dolor sit a met"}, 
    {id:5, date:"9:50 am", type:'out', message: "Lorem ipsum dolor sit a met"}, 
    {id:2, date:"9:50 am", type:'out', message: "Lorem ipsum dolor sit amet"} ,
    {id:3, date:"9:50 am", type:'in',  message: "Lorem ipsum dolor sit a met"}, 
    {id:4, date:"9:50 am", type:'in',  message: "Lorem ipsum dolor sit a met"}, 
    {id:5, date:"9:50 am", type:'out', message: "Lorem ipsum dolor sit a met"}, 
    ])



    return (
      <View style={styles.container}>
          <ImageBackground style = {{height : "100%", width : "100%"}} source = {require('../../../../../../../Images/Landing_Screen.png')}>
        <View style={[chatMessageStyle.searchBar]}>
            <View style={[chatMessageStyle.searchBarChild]}>
            <View style={{ justifyContent: "center" }}>
                <Icon
                onPress={() => props.navigation.goBack()}
                name="chevron-thin-left"
                type="Entypo"
                style={{ color: "#1C43CF", fontSize: 25, marginLeft: 30 }}
                />
            </View>
            <View style = {[chatMessageStyle.searchBarChildSecondView]}>
            <Image
            source={props.route.params.image}
            style={[chatMessageStyle.searchBarChildSecondImage]}
          />
            </View>
            <View style={[chatMessageStyle.searchBarChildSearchBar]}>
                <Text style={[chatMessageStyle.searchBarText]}>{props.route.params.name}</Text>
                <Text></Text>
            </View>
            <View style={[chatMessageStyle.searchBarChildSecondView]}>
            </View>
            </View>
        </View>
        <View style = {{width : "100%", height : "85%", backgroundColor : "#ffffff", marginTop : 10}}>
        <View style = {{height : "85%"}}>
        <FlatList style={styles.list}
          data={data}
          keyExtractor= {(item) => {
            return item.id;
          }}
          renderItem={(message) => {
            console.log(item);
            const item = message.item;
            let inMessage = item.type === 'in';
            let itemStyle = inMessage ? styles.itemIn : styles.itemOut;
            return (
              <View style={[styles.item, itemStyle]}>
                <View style={[styles.balloon]}>
                  <Text>{item.message}</Text>
                </View>
              </View>
            )
          }}/>
        </View>
        <View style = {{position : "absolute", width  : "100%", bottom : 10, height : 80}}>
          <View style = {{backgroundColor : "#F2F2F2", borderRadius : 50, margin : 10, padding : 5, flexDirection : "row", justifyContent : "space-between"}}>

          <TextInput style = {{width : "83%", marginLeft : 10}}/>
          <View style = {{width : 50, backgroundColor : "#69E346", justifyContent : "center", alignItems : "center", borderRadius : 50,}}>
          <Icon
                // onPress={() => props.props.navigation.toggleDrawer()}
                name="send"
                type="Feather"
                style={{ color: "#ffffff", fontSize: 23 }}
                />
          </View>
          </View>
                </View>
                </View>
        </ImageBackground>
      </View>
    );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    height : "100%"
  },
  list:{
    paddingHorizontal: 17,
  },
  footer:{
    flexDirection: 'row',
    height:60,
    backgroundColor: '#eeeeee',
    paddingHorizontal:10,
    padding:5,
  },
  btnSend:{
    backgroundColor:"#00BFFF",
    width:40,
    height:40,
    borderRadius:360,
    alignItems:'center',
    justifyContent:'center',
  },
  iconSend:{
    width:30,
    height:30,
    alignSelf:'center',
  },
  inputContainer: {
    borderBottomColor: '#F5FCFF',
    backgroundColor: '#FFFFFF',
    borderRadius:30,
    borderBottomWidth: 1,
    height:40,
    flexDirection: 'row',
    alignItems:'center',
    flex:1,
    marginRight:10,
  },
  inputs:{
    height:40,
    marginLeft:16,
    borderBottomColor: '#FFFFFF',
    flex:1,
  },
  balloon: {
    maxWidth: 250,
    padding: 15,
    borderRadius: 20,
  },
  itemIn: {
    alignSelf: 'flex-start',
    backgroundColor : "#EEEEEE",

  },
  itemOut: {
    alignSelf: 'flex-end',
    backgroundColor : "#FCEFE8",

  },
  time: {
    alignSelf: 'flex-end',
    margin: 15,
    fontSize:12,
    color:"#808080",
  },
  item: {
    marginVertical: 14,
    flex: 1,
    flexDirection: 'row',
    backgroundColor:"#eeeeee",
    borderRadius:300,
    padding:5,
  },
});  