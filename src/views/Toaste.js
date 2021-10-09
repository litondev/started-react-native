import React from "react";
import {View,Text,Button} from "react-native";
import Toast from 'react-native-toast-message';

export default class Toaste extends React.Component {
	constructor(props){
		super(props);
		console.log("Toaste");
	}

	showToaste(){
		Toast.show({
      		type: 'success',
	      	text1: 'Hello',
      		text2: 'This is some something 👋'
    	});	
	}

	render(){
		return (
			<View>
				<Text style={{ color : 'black' }}>Toaste</Text>

				<Button 
					title="Show Toaste"
					onPress={() => this.showToaste()}/>
			</View>		
		)
	}
}