import React from 'react';
import { View, Text, Image } from 'react-native';

export default function VehicleCard(){
    return(
        <View style = {{paddingTop:20}}>
            <View style = {{backgroundColor : "#ffffff", justifyContent : "center", alignItems : "center"}}>
                <View style = {{padding : 10}}>
                <Image style = {{width : 300, height : 150}} source = {require("../../../../../../Images/listVehicle.png")} />
                </View>
                
            <Text style = {{fontSize : 25, fontWeight : "bold"}}>Example Vehicle</Text>
            <Text style = {{fontSize : 15, padding : 10}}>R3G P1AT3</Text>
            </View>
        </View>
    );
}