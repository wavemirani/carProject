import React, { useState } from "react";
import { View, Text, Image, Modal, Switch } from "react-native";
import { myVehicleStyle } from "./style";
import { Icon } from "native-base";
import MaterialButtonPrimary from "../../../../../Components/Design/MaterialButtonPrimary";
import MaterialIconTextbox from "../../../../../Components/Design/MaterialIconTextbox";
import { ScrollView } from "react-native-gesture-handler";
import VehicleCard from './Component/card'
export default function MyVehicle() {
  const [modalVisible, setModalVisible] = useState(false);
  const [nickName, setNickName] = useState("");
  const [focusName, setFocusName] = useState("");
  const [switchValue, setSwitch] = useState(false);
  const [vehicleArray, setVehicleArray] = useState([{name : "sadsa"}, {name : "dssa"}, {name : "fgxfd"}, {name : "fgxfd"}]);
  function doSomething(name) {
    setFocusName(name);
  }

  return (
    <View style={[myVehicleStyle.container]}>
      <Modal
        animationType="slide"
        transparent={false}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(false);
          //    Alert.alert("Modal has been closed.");
        }}
      >
        <View>
          <ScrollView>
            <View style={{ backgroundColor: "#F4F9FF" }}>
              <View style={[myVehicleStyle.searchBar]}>
                <View style={[myVehicleStyle.searchBarChild]}>
                  <View style={{ justifyContent: "center" }}>
                    <Icon
                      onPress={() => setModalVisible(false)}
                      name="chevron-thin-left"
                      type="Entypo"
                      style={{ color: "blue", fontSize: 25, marginLeft: 30 }}
                    />
                  </View>
                  <View style={[myVehicleStyle.searchBarChildSearchBar]}>
                    <Text style={[myVehicleStyle.searchBarText]}>
                      ADD VEHICLE
                    </Text>
                  </View>
                  <View style={[myVehicleStyle.searchBarChildSecondView]}>
                  <Icon
                      onPress={() => setModalVisible(false)}
                      name="close"
                      type="AntDesign"
                      style={{ color: "blue", fontSize: 30, paddingRight: 20 }}
                    />
                  </View>
                </View>
              </View>
              <View
                style={{
                  marginTop: 150,
                  backgroundColor: "#ffffff",
                  borderTopLeftRadius: 30,
                  borderTopRightRadius: 30,
                }}
              >
                <View>
                  <View style={{ padding: 20 }}>
                    <Text
                      style={{
                        fontSize: 20,
                        color: "#1C43CF",
                        fontWeight: "bold",
                      }}
                    >
                      Overview
                    </Text>
                    <View style={{ paddingTop: 15 }}>
                      <View
                        style={{
                          width: "100%",
                          backgroundColor: "#F6F6F6",
                          justifyContent: "center",
                          alignItems: "center",
                          padding: 20,
                          borderRadius: 20,
                        }}
                      >
                        <Icon
                          onPress={() => props.props.navigation.toggleDrawer()}
                          name="camera"
                          type="EvilIcons"
                          style={{ color: "#a6a6a6", fontSize: 60 }}
                        />
                        <Text style={{ fontSize: 20, color: "#a6a6a6" }}>
                          Add Photo
                        </Text>
                      </View>
                    </View>
                  </View>
                  <View style={{ padding: 20 }}>
                    <Text
                      style={{
                        fontSize: 20,
                        color: "#1C43CF",
                        fontWeight: "bold",
                      }}
                    >
                      Nickname
                    </Text>
                    <View style = {{marginTop : 20}}>
                    <MaterialIconTextbox
                        focusData={() => doSomething("nickName")}
                        isTop={
                          focusName === "nickName" || nickName !== ""
                            ? true
                            : false
                        }
                        style={{
                          width: "100%",
                          height: 42,
                          marginTop: 20,
                        }}
                       
                      ></MaterialIconTextbox>
                    </View>
                  </View>
                  {/* <View> */}
                    <View
                      style={{
                        padding: 20,
                        flexDirection: "row",
                        justifyContent: "space-between",
                      }}
                    >
                      <View>
                        <Text
                          style={{
                            fontSize: 20,
                            color: "#282828",
                            fontWeight: "bold",
                            marginTop: 10,
                          }}
                        >
                          Purchase Details
                        </Text>
                      </View>
                      <View
                        style={{
                          backgroundColor: switchValue ? "#EBF2FC" : "#DDDDDD",
                          height: 50,
                          width: "30%",
                          borderRadius: 50,
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <Switch
                          trackColor={{ false: "#DDDDDD", true: "#EBF2FC" }}
                          thumbColor={switchValue ? "#1C43CF" : "#FFFFFF"}
                          ios_backgroundColor="#DDDDDD"
                          onValueChange={() => {
                            setSwitch(!switchValue);
                          }}
                          value={switchValue}
                        />
                      </View>
                    </View>
                  {/* </View> */}
                  <View>
                    <View
                      style={{
                        padding: 20,
                        flexDirection: "row",
                        justifyContent: "space-between",
                      }}
                    >
                      <View>
                        <Text
                          style={{
                            fontSize: 20,
                            color: "#282828",
                            fontWeight: "bold",
                            marginTop: 10,
                          }}
                        >
                          Sold Details
                        </Text>
                      </View>
                      <View
                        style={{
                          backgroundColor: switchValue ? "#EBF2FC" : "#DDDDDD",
                          height: 50,
                          width: "30%",
                          borderRadius: 50,
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <Switch
                          trackColor={{ false: "#DDDDDD", true: "#EBF2FC" }}
                          thumbColor={switchValue ? "#1C43CF" : "#FFFFFF"}
                          ios_backgroundColor="#DDDDDD"
                          onValueChange={() => {
                            setSwitch(!switchValue);
                          }}
                          value={switchValue}
                        />
                      </View>
                    </View>
                  </View>
                  <View style={{ padding: 20 }}>
                    <Text
                      style={{
                        fontSize: 20,
                        color: "#1C43CF",
                        fontWeight: "bold",
                      }}
                    >
                      Reminders
                    </Text>
                    <View style={{ width: "100%", paddingTop: 10 }}>
                      <Text style={{ fontSize: 14.5, color: "#A7A7A7" }}>
                        Set reminders to receive automativ notification 30-days
                        ,14days and 7- daysbefore the due date
                      </Text>
                    </View>
                    <View>
                      <View
                        style={{
                          backgroundColor: switchValue ? "#EBF2FC" : "#DDDDDD",
                          height: 50,
                          width: "30%",
                          borderRadius: 50,
                          alignItems: "center",
                          justifyContent: "center",
                          marginTop: 20,
                        }}
                      >
                        <Switch
                          trackColor={{ false: "#DDDDDD", true: "#EBF2FC" }}
                          thumbColor={switchValue ? "#1C43CF" : "#FFFFFF"}
                          ios_backgroundColor="#DDDDDD"
                          onValueChange={() => {
                            setSwitch(!switchValue);
                          }}
                          value={switchValue}
                        />
                      </View>
                      <View
                        style={{
                          backgroundColor: switchValue ? "#EBF2FC" : "#DDDDDD",
                          height: 50,
                          width: "30%",
                          borderRadius: 50,
                          alignItems: "center",
                          justifyContent: "center",
                          marginTop: 20,
                        }}
                      >
                        <Switch
                          trackColor={{ false: "#DDDDDD", true: "#EBF2FC" }}
                          thumbColor={switchValue ? "#1C43CF" : "#FFFFFF"}
                          ios_backgroundColor="#DDDDDD"
                          onValueChange={() => {
                            setSwitch(!switchValue);
                          }}
                          value={switchValue}
                        />
                      </View>
                      <View
                        style={{
                          backgroundColor: switchValue ? "#EBF2FC" : "#DDDDDD",
                          height: 50,
                          width: "30%",
                          borderRadius: 50,
                          alignItems: "center",
                          justifyContent: "center",
                          marginTop: 20,
                        }}
                      >
                        <Switch
                          trackColor={{ false: "#DDDDDD", true: "#EBF2FC" }}
                          thumbColor={switchValue ? "#1C43CF" : "#FFFFFF"}
                          ios_backgroundColor="#DDDDDD"
                          onValueChange={() => {
                            setSwitch(!switchValue);
                          }}
                          value={switchValue}
                        />
                      </View>
                      <View
                        style={{
                          backgroundColor: switchValue ? "#EBF2FC" : "#DDDDDD",
                          height: 50,
                          width: "30%",
                          borderRadius: 50,
                          alignItems: "center",
                          justifyContent: "center",
                          marginTop: 20,
                        }}
                      >
                        <Switch
                          trackColor={{ false: "#DDDDDD", true: "#EBF2FC" }}
                          thumbColor={switchValue ? "#1C43CF" : "#FFFFFF"}
                          ios_backgroundColor="#DDDDDD"
                          onValueChange={() => {
                            setSwitch(!switchValue);
                          }}
                          value={switchValue}
                        />
                      </View>
                    </View>
                    <View style = {{marginTop : 20}}>
                    <MaterialIconTextbox
                        focusData={() => doSomething("nickName")}
                        isTop={
                          focusName === "nickName" || nickName !== ""
                            ? true
                            : false
                        }
                        style={{
                          width: "100%",
                          height: 42,
                          marginTop: 20,
                        }}
                       
                      ></MaterialIconTextbox>
                    </View>
                    
                    <Text style = {{fontSize : 17, color : "#868686"}}>Only avalable with vehicle Smart Premium</Text>
                  </View>
                  <View style = {{padding : 20}}>
                  <View style = {{width : "100%", alignItems : "center"}}>
                    <MaterialButtonPrimary
                      style={{
                        width: "70%",
                        height: 54,
                        backgroundColor: "#1C43CF",
                        borderRadius: 52,
                      }}
                      content={{
                        fontSize: 17,
                      }}
                      name="View Permium Details"
                      textColor="#ffffff"
                      onPress={() => setModalVisible(true)}
                    ></MaterialButtonPrimary>
                    </View>
                  </View>
                  <View style = {{marginTop : 10}}>
                  <View style={{ padding: 20 }}>
                    <Text
                      style={{
                        fontSize: 20,
                        color: "#1C43CF",
                        fontWeight: "bold",
                      }}
                    >
                      Insurance Policy
                    </Text>
                    <View style = {{marginTop : 20}}>
                      <Text style = {{fontSize : 15,color : "#989898", paddingLeft : 20}}>Policy No.</Text>
                    <MaterialIconTextbox
                        focusData={() => doSomething("nickName")}
                        isTop={
                          focusName === "nickName" || nickName !== ""
                            ? true
                            : false
                        }
                        style={{
                          width: "100%",
                          height: 42,
                          marginTop: 10,
                        }}
                       
                      ></MaterialIconTextbox>
                    </View>
                    <View style = {{marginTop : 20}}>
                      <Text style = {{fontSize : 15,color : "#989898", paddingLeft : 20}}>Cost.</Text>
                    <MaterialIconTextbox
                        focusData={() => doSomething("nickName")}
                        isTop={
                          focusName === "nickName" || nickName !== ""
                            ? true
                            : false
                        }
                        style={{
                          width: "100%",
                          height: 42,
                          marginTop: 10,
                        }}
                       
                      ></MaterialIconTextbox>
                    </View>
                    <View style = {{marginTop : 20}}>
                      <Text style = {{fontSize : 15,color : "#989898", paddingLeft : 20}}>Contact No</Text>
                    <MaterialIconTextbox
                        focusData={() => doSomething("nickName")}
                        isTop={
                          focusName === "nickName" || nickName !== ""
                            ? true
                            : false
                        }
                        style={{
                          width: "100%",
                          height: 42,
                          marginTop: 10,
                        }}
                       
                      ></MaterialIconTextbox>
                    </View>
                    <View style = {{marginTop : 20}}>
                      <Text style = {{fontSize : 15,color : "#989898", paddingLeft : 20}}>provider</Text>
                    <MaterialIconTextbox
                        focusData={() => doSomething("nickName")}
                        isTop={
                          focusName === "nickName" || nickName !== ""
                            ? true
                            : false
                        }
                        style={{
                          width: "100%",
                          height: 42,
                          marginTop: 10,
                        }}
                       
                      ></MaterialIconTextbox>
                    </View>
                  </View>
                  </View>
                  <View style = {{marginTop : 10}}>


                  <View style={{ padding: 20 }}>
                    <Text
                      style={{
                        fontSize: 20,
                        color: "#1C43CF",
                        fontWeight: "bold",
                      }}
                    >
                      Breakdown Cover
                    </Text>
                    <View style = {{marginTop : 20}}>
                      <Text style = {{fontSize : 15,color : "#989898", paddingLeft : 20}}>Policy No.</Text>
                    <MaterialIconTextbox
                        focusData={() => doSomething("nickName")}
                        isTop={
                          focusName === "nickName" || nickName !== ""
                            ? true
                            : false
                        }
                        style={{
                          width: "100%",
                          height: 42,
                          marginTop: 10,
                        }}
                       
                      ></MaterialIconTextbox>
                    </View>
                    <View style = {{marginTop : 20}}>
                      <Text style = {{fontSize : 15,color : "#989898", paddingLeft : 20}}>Cost.</Text>
                    <MaterialIconTextbox
                        focusData={() => doSomething("nickName")}
                        isTop={
                          focusName === "nickName" || nickName !== ""
                            ? true
                            : false
                        }
                        style={{
                          width: "100%",
                          height: 42,
                          marginTop: 10,
                        }}
                       
                      ></MaterialIconTextbox>
                    </View>
                    <View style = {{marginTop : 20}}>
                      <Text style = {{fontSize : 15,color : "#989898", paddingLeft : 20}}>Contact No</Text>
                    <MaterialIconTextbox
                        focusData={() => doSomething("nickName")}
                        isTop={
                          focusName === "nickName" || nickName !== ""
                            ? true
                            : false
                        }
                        style={{
                          width: "100%",
                          height: 42,
                          marginTop: 10,
                        }}
                       
                      ></MaterialIconTextbox>
                    </View>
                    <View style = {{marginTop : 20}}>
                      <Text style = {{fontSize : 15,color : "#989898", paddingLeft : 20}}>provider</Text>
                    <MaterialIconTextbox
                        focusData={() => doSomething("nickName")}
                        isTop={
                          focusName === "nickName" || nickName !== ""
                            ? true
                            : false
                        }
                        style={{
                          width: "100%",
                          height: 42,
                          marginTop: 10,
                        }}
                       
                      ></MaterialIconTextbox>
                    </View>
                  </View>
                  </View>
                  <View style = {{marginTop : 10}}>
                  <View style={{ padding: 20 }}>
                    <Text
                      style={{
                        fontSize: 20,
                        color: "#1C43CF",
                        fontWeight: "bold",
                      }}
                    >
                      Services Details
                    </Text>
                    <View style = {{paddingTop : 10}}>
                    <Text style = {{fontSize : 14.5, color : "#868686"}}>Add Details of work required at thae next searvises invervalv as a useful remember</Text>

                    </View>
                    <View style = {{marginTop : 20}}>
                    <MaterialIconTextbox
                        focusData={() => doSomething("nickName")}
                        isTop={
                          focusName === "nickName" || nickName !== ""
                            ? true
                            : false
                        }
                        style={{
                          width: "100%",
                          height: 42,
                          marginTop: 10,
                        }}
                       
                      ></MaterialIconTextbox>
                    </View>
                    <View style = {{marginTop : 20}}>
                    <MaterialIconTextbox
                        focusData={() => doSomething("nickName")}
                        isTop={
                          focusName === "nickName" || nickName !== ""
                            ? true
                            : false
                        }
                        style={{
                          width: "100%",
                          height: 42,
                          marginTop: 10,
                        }}
                       
                      ></MaterialIconTextbox>
                    </View>
                    <View style = {{marginTop : 20}}>
                    <MaterialIconTextbox
                        focusData={() => doSomething("nickName")}
                        isTop={
                          focusName === "nickName" || nickName !== ""
                            ? true
                            : false
                        }
                        style={{
                          width: "100%",
                          height: 42,
                          marginTop: 10,
                        }}
                       
                      ></MaterialIconTextbox>
                    </View>
                    
                  </View>
                  
                  
                  </View>
                  <View style = {{marginTop : 10}}>
                  <View style={{ padding: 20 }}>
                    <Text
                      style={{
                        fontSize: 20,
                        color: "#1C43CF",
                        fontWeight: "bold",
                      }}
                    >
                      Vehicle Notes
                    </Text>
                    <View style = {{paddingTop : 10}}>
                    <Text style = {{fontSize : 14.5, color : "#868686"}}>Add Details of work required at thae next searvises invervalv as a useful remember</Text>
                    </View>
                  </View>
                  </View>
                  

                  <View style = {{marginTop : 10}}>


                  <View style={{ padding: 20 }}>
                    <Text
                      style={{
                        fontSize: 20,
                        color: "#1C43CF",
                        fontWeight: "bold",
                      }}
                    >
                      Fluids
                    </Text>
                    {/* <View> */}
                      <Text style = {{marginTop : 10, fontSize : 20}}>Oil</Text>
                    {/* </View> */}
                    <View style = {{marginTop : 20}}>
                      <Text style = {{fontSize : 15,color : "#989898", paddingLeft : 20}}>Type</Text>
                    <MaterialIconTextbox
                        focusData={() => doSomething("nickName")}
                        isTop={
                          focusName === "nickName" || nickName !== ""
                            ? true
                            : false
                        }
                        style={{
                          width: "100%",
                          height: 42,
                          marginTop: 10,
                        }}
                       
                      ></MaterialIconTextbox>
                    </View>
                    <View style = {{marginTop : 20}}>
                      <Text style = {{fontSize : 15,color : "#989898", paddingLeft : 20}}>Brand</Text>
                    <MaterialIconTextbox
                        focusData={() => doSomething("nickName")}
                        isTop={
                          focusName === "nickName" || nickName !== ""
                            ? true
                            : false
                        }
                        style={{
                          width: "100%",
                          height: 42,
                          marginTop: 10,
                        }}
                       
                      ></MaterialIconTextbox>
                    </View>
                    <View style = {{marginTop : 20}}>
                      <Text style = {{fontSize : 15,color : "#989898", paddingLeft : 20}}>Capacity</Text>
                    <MaterialIconTextbox
                        focusData={() => doSomething("nickName")}
                        isTop={
                          focusName === "nickName" || nickName !== ""
                            ? true
                            : false
                        }
                        style={{
                          width: "100%",
                          height: 42,
                          marginTop: 10,
                        }}
                       
                      ></MaterialIconTextbox>
                    </View>
                    <Text style = {{marginTop : 30, fontSize : 20}}>Coolent</Text>
                    {/* </View> */}
                    <View style = {{marginTop : 20}}>
                      <Text style = {{fontSize : 15,color : "#989898", paddingLeft : 20}}>Type</Text>
                    <MaterialIconTextbox
                        focusData={() => doSomething("nickName")}
                        isTop={
                          focusName === "nickName" || nickName !== ""
                            ? true
                            : false
                        }
                        style={{
                          width: "100%",
                          height: 42,
                          marginTop: 10,
                        }}
                       
                      ></MaterialIconTextbox>
                    </View>
                    <View style = {{marginTop : 20}}>
                      <Text style = {{fontSize : 15,color : "#989898", paddingLeft : 20}}>Brand</Text>
                    <MaterialIconTextbox
                        focusData={() => doSomething("nickName")}
                        isTop={
                          focusName === "nickName" || nickName !== ""
                            ? true
                            : false
                        }
                        style={{
                          width: "100%",
                          height: 42,
                          marginTop: 10,
                        }}
                       
                      ></MaterialIconTextbox>
                    </View>
                    <View style = {{marginTop : 20}}>
                      <Text style = {{fontSize : 15,color : "#989898", paddingLeft : 20}}>Capacity</Text>
                    <MaterialIconTextbox
                        focusData={() => doSomething("nickName")}
                        isTop={
                          focusName === "nickName" || nickName !== ""
                            ? true
                            : false
                        }
                        style={{
                          width: "100%",
                          height: 42,
                          marginTop: 10,
                        }}
                       
                      ></MaterialIconTextbox>
                    </View>
                  </View>
                  </View>

                  <View style = {{marginTop : 10}}>


                  <View style={{ padding: 20 }}>
                    <Text
                      style={{
                        fontSize: 20,
                        color: "#1C43CF",
                        fontWeight: "bold",
                      }}
                    >
                      Tyres
                    </Text>
                    {/* <View> */}
                      <Text style = {{marginTop : 10, fontSize : 20}}>Size</Text>
                    {/* </View> */}
                    <View style = {{marginTop : 20}}>
                      <Text style = {{fontSize : 15,color : "#989898", paddingLeft : 20}}>Front</Text>
                    <MaterialIconTextbox
                        focusData={() => doSomething("nickName")}
                        isTop={
                          focusName === "nickName" || nickName !== ""
                            ? true
                            : false
                        }
                        style={{
                          width: "100%",
                          height: 42,
                          marginTop: 10,
                        }}
                       
                      ></MaterialIconTextbox>
                    </View>
                    <View style = {{marginTop : 20}}>
                      <Text style = {{fontSize : 15,color : "#989898", paddingLeft : 20}}>Rear</Text>
                    <MaterialIconTextbox
                        focusData={() => doSomething("nickName")}
                        isTop={
                          focusName === "nickName" || nickName !== ""
                            ? true
                            : false
                        }
                        style={{
                          width: "100%",
                          height: 42,
                          marginTop: 10,
                        }}
                       
                      ></MaterialIconTextbox>
                    </View>
                   
                    <Text style = {{marginTop : 30, fontSize : 20}}>Pressure</Text>
                    {/* </View> */}
                    <View style = {{marginTop : 20}}>
                      <Text style = {{fontSize : 15,color : "#989898", paddingLeft : 20}}>Front</Text>
                    <MaterialIconTextbox
                        focusData={() => doSomething("nickName")}
                        isTop={
                          focusName === "nickName" || nickName !== ""
                            ? true
                            : false
                        }
                        style={{
                          width: "100%",
                          height: 42,
                          marginTop: 10,
                        }}
                       
                      ></MaterialIconTextbox>
                    </View>
                    <View style = {{marginTop : 20}}>
                      <Text style = {{fontSize : 15,color : "#989898", paddingLeft : 20}}>Rear</Text>
                    <MaterialIconTextbox
                        focusData={() => doSomething("nickName")}
                        isTop={
                          focusName === "nickName" || nickName !== ""
                            ? true
                            : false
                        }
                        style={{
                          width: "100%",
                          height: 42,
                          marginTop: 10,
                        }}
                       
                      ></MaterialIconTextbox>
                    </View>
                  </View>
                  </View>


                  <View style = {{marginTop : 10}}>


                  <View style={{ padding: 20 }}>
                    <Text
                      style={{
                        fontSize: 20,
                        color: "#1C43CF",
                        fontWeight: "bold",
                      }}
                    >
                      Lightbulbs
                    </Text>
                    {/* <View> */}
                      <Text style = {{marginTop : 10, fontSize : 20}}>SIZE</Text>
                    {/* </View> */}
                    <View style = {{marginTop : 20}}>
                      <Text style = {{fontSize : 15,color : "#989898", paddingLeft : 20}}>Fog</Text>
                    <MaterialIconTextbox
                        focusData={() => doSomething("nickName")}
                        isTop={
                          focusName === "nickName" || nickName !== ""
                            ? true
                            : false
                        }
                        style={{
                          width: "100%",
                          height: 42,
                          marginTop: 10,
                        }}
                       
                      ></MaterialIconTextbox>
                    </View>
                    <View style = {{marginTop : 20}}>
                      <Text style = {{fontSize : 15,color : "#989898", paddingLeft : 20}}>DRL</Text>
                    <MaterialIconTextbox
                        focusData={() => doSomething("nickName")}
                        isTop={
                          focusName === "nickName" || nickName !== ""
                            ? true
                            : false
                        }
                        style={{
                          width: "100%",
                          height: 42,
                          marginTop: 10,
                        }}
                       
                      ></MaterialIconTextbox>
                    </View>

                    <View style = {{marginTop : 20}}>
                      <Text style = {{fontSize : 15,color : "#989898", paddingLeft : 20}}>DRL</Text>
                    <MaterialIconTextbox
                        focusData={() => doSomething("nickName")}
                        isTop={
                          focusName === "nickName" || nickName !== ""
                            ? true
                            : false
                        }
                        style={{
                          width: "100%",
                          height: 42,
                          marginTop: 10,
                        }}
                       
                      ></MaterialIconTextbox>
                    </View>

                    <View style = {{marginTop : 20}}>
                      <Text style = {{fontSize : 15,color : "#989898", paddingLeft : 20}}>indicator</Text>
                    <MaterialIconTextbox
                        focusData={() => doSomething("nickName")}
                        isTop={
                          focusName === "nickName" || nickName !== ""
                            ? true
                            : false
                        }
                        style={{
                          width: "100%",
                          height: 42,
                          marginTop: 10,
                        }}
                       
                      ></MaterialIconTextbox>
                    </View>

                    <View style = {{marginTop : 20}}>
                      <Text style = {{fontSize : 15,color : "#989898", paddingLeft : 20}}>Side light</Text>
                    <MaterialIconTextbox
                        focusData={() => doSomething("nickName")}
                        isTop={
                          focusName === "nickName" || nickName !== ""
                            ? true
                            : false
                        }
                        style={{
                          width: "100%",
                          height: 42,
                          marginTop: 10,
                        }}
                       
                      ></MaterialIconTextbox>
                    </View>

                    <View style = {{marginTop : 20}}>
                      <Text style = {{fontSize : 15,color : "#989898", paddingLeft : 20}}>High Beam</Text>
                    <MaterialIconTextbox
                        focusData={() => doSomething("nickName")}
                        isTop={
                          focusName === "nickName" || nickName !== ""
                            ? true
                            : false
                        }
                        style={{
                          width: "100%",
                          height: 42,
                          marginTop: 10,
                        }}
                       
                      ></MaterialIconTextbox>
                    </View>
                   
                    <Text style = {{marginTop : 30, fontSize : 20}}>Side</Text>
                    {/* </View> */}
                    <View style = {{marginTop : 20}}>
                      <Text style = {{fontSize : 15,color : "#989898", paddingLeft : 20}}>indicator</Text>
                    <MaterialIconTextbox
                        focusData={() => doSomething("nickName")}
                        isTop={
                          focusName === "nickName" || nickName !== ""
                            ? true
                            : false
                        }
                        style={{
                          width: "100%",
                          height: 42,
                          marginTop: 10,
                        }}
                       
                      ></MaterialIconTextbox>
                    </View>
                    <Text style = {{marginTop : 30, fontSize : 20}}>Rear</Text>
                    {/* </View> */}
                    <View style = {{marginTop : 20}}>
                      <Text style = {{fontSize : 15,color : "#989898", paddingLeft : 20}}>Fog</Text>
                    <MaterialIconTextbox
                        focusData={() => doSomething("nickName")}
                        isTop={
                          focusName === "nickName" || nickName !== ""
                            ? true
                            : false
                        }
                        style={{
                          width: "100%",
                          height: 42,
                          marginTop: 10,
                        }}
                       
                      ></MaterialIconTextbox>
                    </View>

                    <View style = {{marginTop : 20}}>
                      <Text style = {{fontSize : 15,color : "#989898", paddingLeft : 20}}>VIN</Text>
                    <MaterialIconTextbox
                        focusData={() => doSomething("nickName")}
                        isTop={
                          focusName === "nickName" || nickName !== ""
                            ? true
                            : false
                        }
                        style={{
                          width: "100%",
                          height: 42,
                          marginTop: 10,
                        }}
                       
                      ></MaterialIconTextbox>
                    </View>

                    <View style = {{marginTop : 20}}>
                      <Text style = {{fontSize : 15,color : "#989898", paddingLeft : 20}}>Engine</Text>
                    <MaterialIconTextbox
                        focusData={() => doSomething("nickName")}
                        isTop={
                          focusName === "nickName" || nickName !== ""
                            ? true
                            : false
                        }
                        style={{
                          width: "100%",
                          height: 42,
                          marginTop: 10,
                        }}
                       
                      ></MaterialIconTextbox>
                    </View>

                    <View style = {{marginTop : 20}}>
                      <Text style = {{fontSize : 15,color : "#989898", paddingLeft : 20}}>Gearbox</Text>
                    <MaterialIconTextbox
                        focusData={() => doSomething("nickName")}
                        isTop={
                          focusName === "nickName" || nickName !== ""
                            ? true
                            : false
                        }
                        style={{
                          width: "100%",
                          height: 42,
                          marginTop: 10,
                        }}
                       
                      ></MaterialIconTextbox>
                    </View>
                    
                  </View>
                  </View>
                
                  <View style={{ padding: 20 }}>
                    <Text
                      style={{
                        fontSize: 20,
                        color: "#1C43CF",
                        fontWeight: "bold",
                      }}
                    >
                      Notes
                    </Text>
                    <View style = {{marginTop : 70}}>
                    <MaterialIconTextbox
                        focusData={() => doSomething("nickName")}
                        isTop={
                          focusName === "nickName" || nickName !== ""
                            ? true
                            : false
                        }
                        style={{
                          width: "100%",
                          height: 42,
                          marginTop: 20,
                        }}
                       
                      ></MaterialIconTextbox>
                    </View>
                  </View>

                  <View style = {{padding : 20}}>
                  <View style = {{width : "100%", alignItems : "center"}}>
                    <MaterialButtonPrimary
                      style={{
                        width: "100%",
                        height: 60,
                        backgroundColor: "#1C43CF",
                        borderRadius: 52,
                      }}
                      content={{
                        fontSize: 17,
                      }}
                      name="Add Vehicle"
                      textColor="#ffffff"
                      onPress={() => setModalVisible(false)}
                    ></MaterialButtonPrimary>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </ScrollView>
        </View>
      </Modal>
      <View style={[myVehicleStyle.container]}>
      
      <View style={[myVehicleStyle.searchBar]}>
        <View style={[myVehicleStyle.searchBarChild]}>
          <View style={{ justifyContent: "center" }}>
            <Icon
              // onPress={() => props.props.navigation.toggleDrawer()}
              name="chevron-thin-left"
              type="Entypo"
              style={{ color: "#1C43CF", fontSize: 25, marginLeft: 30 }}
            />
          </View>
          <View style={[myVehicleStyle.searchBarChildSearchBar]}>
            <Text style={[myVehicleStyle.searchBarText]}>My GARAGE</Text>
          </View>
          <View style={[myVehicleStyle.searchBarChildSecondView]}>
            <Image
              source={require("../../../../../Images/demo-gallery-5.jpg")}
              style={[myVehicleStyle.searchBarChildSecondImage]}
            />
          </View>
        </View>
      </View>


      {(vehicleArray.length > 0)?
      <View>
      <ScrollView>
        <View style = {{paddingBottom : 230}}>
        {vehicleArray.map((key)=>(
        <VehicleCard />
        ))}
        <View style = {{justifyContent : "center", alignItems : "center", padding : 20}}>
        <MaterialButtonPrimary
                      style={{
                        width: "60%",
                        height: 60,
                        backgroundColor: "#1C43CF",
                        borderRadius: 52,
                      }}
                      content={{
                        fontSize: 17,
                      }}
                      name="Add a Vehicle"
                      textColor="#ffffff"
                      onPress={() => setModalVisible(true)}
                    ></MaterialButtonPrimary>
        </View>
        </View>
        </ScrollView>
      
      </View> :
        <View
        style={{
          position: "absolute",
          top: "23%",
          alignItems: "center",
          width: "100%",
        }}
      >
        <View
          style={{
            backgroundColor: "#ffffff",
            paddingTop: 20,
            paddingBottom: 20,
            width: "70%",
            borderRadius: 50,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <View>
            <Icon
              onPress={() => props.props.navigation.toggleDrawer()}
              name="warning"
              type="AntDesign"
              style={{ color: "red", fontSize: 50 }}
            />
          </View>
          <View style={{ paddingTop: 20 }}>
            <Text style={{ fontSize: 20, fontWeight: "bold" }}>
              Garage Empty
            </Text>
          </View>
          <View style={{ width: "65%", paddingTop: 10 }}>
            <Text
              style={{ fontSize: 15, color: "#cccccc", fontWeight: "bold" }}
            >
              {" "}
              Add Vehicle aftr a search by tapping the vehicle reg
            </Text>
          </View>
          <View style={{ width: "80%", paddingTop: 30 }}>
            <MaterialButtonPrimary
              style={{
                width: "100%",
                height: 54,
                backgroundColor: "#1C43CF",
                borderRadius: 52,
              }}
              content={{
                fontSize: 17,
              }}
              name="Add a Vehicle"
              textColor="#ffffff"
              onPress={() => setModalVisible(true)}
            ></MaterialButtonPrimary>
          </View>
        </View>
      </View>  }
      </View>

      {/* +++++++++++++++++++search bar+++++++++++++++++++++++ */}
      <View style={[myVehicleStyle.searchBar]}>
        <View style={[myVehicleStyle.searchBarChild]}>
          <View style={{ justifyContent: "center" }}>
            <Icon
              onPress={() => props.props.navigation.toggleDrawer()}
              name="chevron-thin-left"
              type="Entypo"
              style={{ color: "#1C43CF", fontSize: 25, marginLeft: 30 }}
            />
          </View>
          <View style={[myVehicleStyle.searchBarChildSearchBar]}>
            <Text style={[myVehicleStyle.searchBarText]}>My GARAGE</Text>
          </View>
          <View style={[myVehicleStyle.searchBarChildSecondView]}>
            <Image
              source={require("../../../../../Images/demo-gallery-5.jpg")}
              style={[myVehicleStyle.searchBarChildSecondImage]}
            />
          </View>
        </View>
      </View>
      

      {/* +++++++++++++++++++Tab bar+++++++++++++++++++++++ */}
      
    </View>
  );
}
