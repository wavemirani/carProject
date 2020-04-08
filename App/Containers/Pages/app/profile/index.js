import React, { useState } from "react";
import { Icon } from "native-base";
import { View, Text, Image, ScrollView, KeyboardAvoidingView } from "react-native";
import { profileStyles } from "./style";
// import { ScrollView } from "react-native-gesture-handler";
import MaterialButtonPrimary from "../../../../Components/Design/MaterialButtonPrimary";
import MaterialIconTextbox from "../../../../Components/Design/MaterialIconTextbox";
export default function Profile() {
	const [focusName, setFocusName] = useState("");
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [contactNumber, setContactNumber] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("")

	function doSomething(name) {
		setFocusName(name);
	}
	return (
		<View style={[profileStyles.container]}>
            <View style = {{flex: 1,}}>
			<View style={[profileStyles.searchBar]}>
				<View style={[profileStyles.searchBarChild]}>
					<View style={{ justifyContent: "center" }}>
						<Icon
							// onPress={() => props.props.navigation.toggleDrawer()}
							name="chevron-thin-left"
							type="Entypo"
							style={{ color: "#1C43CF", fontSize: 25, marginLeft: 30 }}
						/>
					</View>
					<View
						style={[
							profileStyles.searchBarChildSearchBar,
							{ justifyContent: "center" },
						]}
					>
						<Text style={[profileStyles.searchBarText]}>USER PROFILE</Text>
					</View>
					<View style={[profileStyles.searchBarChildSecondView]}>
						<Icon
							//   onPress={() => setModalVisible(false)}
							name="close"
							type="AntDesign"
							style={{ color: "blue", fontSize: 30, paddingRight: 20 }}
						/>
					</View>
				</View>
			</View>
			<View
				style={{
					justifyContent: "center",
					alignItems: "center",
					marginTop: 30,
					width: "100%",
				}}
			>
				<Image
					source={require("../../../../Images/demo-gallery-5.jpg")}
					style={{ height: 100, width: 100, borderRadius: 100 }}
				/>
                <Text style = {{fontSize : 18,
        fontWeight : "bold",
        color : "#1C43CF"}}>ANNY DEO</Text>
			</View>
            </View>
			<View style={{ backgroundColor: "#ffffff", paddingBottom: 30 ,marginTop : 50, height : "100%", flex: 1.5}}>
				<ScrollView>
                    <KeyboardAvoidingView>
					<View style={{ marginTop: 10 }}>
						<MaterialIconTextbox
							focusData={() => doSomething("firstName")}
							placeholder="First Name"
							isTop={
								focusName === "firstName" || firstName !== "" ? true : false
							}
							fontSize={17}
							style={profileStyles.materialIconTextbox}
							changeTextData={(value) => setFirstName(value)}
							value={firstName}
							marginLeft={0}
						></MaterialIconTextbox>
					</View>

					<View style={{ marginTop: 10 }}>
						<MaterialIconTextbox
							focusData={() => doSomething("lastName")}
							placeholder="Last Name"
							isTop={
								focusName === "lastName" || lastName !== "" ? true : false
							}
							fontSize={17}
							style={profileStyles.materialIconTextbox}
							changeTextData={(value) => setLastName(value)}
							value={lastName}
							marginLeft={0}
						></MaterialIconTextbox>
					</View>

					<View style={{ marginTop: 10 }}>
						<MaterialIconTextbox
							focusData={() => doSomething("contactNumber")}
							placeholder="Contact Number"
							isTop={
								focusName === "contactNumber" || contactNumber !== "" ? true : false
							}
							fontSize={17}
							style={profileStyles.materialIconTextbox}
							changeTextData={(value) => setContactNumber(value)}
							value={contactNumber}
							marginLeft={0}
						></MaterialIconTextbox>
					</View>

					<View style={{ marginTop: 10 }}>
						<MaterialIconTextbox
							focusData={() => doSomething("email")}
							placeholder="Email"
							isTop={
								focusName === "email" || email !== "" ? true : false
							}
							fontSize={17}
							style={profileStyles.materialIconTextbox}
							changeTextData={(value) => setEmail(value)}
							value={email}
							marginLeft={0}
						></MaterialIconTextbox>
					</View>

					<View style={{ marginTop: 10 }}>
						<MaterialIconTextbox
							focusData={() => doSomething("address")}
							placeholder="Address"
							isTop={
								focusName === "address" || address !== "" ? true : false
							}
							fontSize={17}
							style={profileStyles.materialIconTextbox}
							changeTextData={(value) => setAddress(value)}
							value={address}
							marginLeft={0}
						></MaterialIconTextbox>
                        <View style = {{alignItems : "center"}}>
                        <MaterialButtonPrimary
            style={profileStyles.materialButtonPrimary}
            name="Update Profile"
            textColor="#ffffff"
            // onPress={}   
          ></MaterialButtonPrimary>
              
                        </View>
					</View>
                    </KeyboardAvoidingView>
				</ScrollView>
			</View>
		</View>
	);
}
