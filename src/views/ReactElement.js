import React from "react";
import {View,Text} from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";

export default class ReactElement extends React.Component {
	constructor(props){
		super(props);
		console.log("ReactElement");
	}

	render(){
		return (
			<View>
				<Text>				
					<FontAwesome name={"glass"} size={30} color="#000000" />        
				</Text>
				<Text style={{ color : 'black' }}>ReactElement</Text>
			</View>		
		)
	}
}