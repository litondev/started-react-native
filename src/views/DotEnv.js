import React from "react";
import {View,Text} from "react-native";
import {API_URL} from '@env'

export default class DotEnv extends React.Component {
	constructor(props){
		super(props);
		console.log("DotEnv");
		console.log(API_URL);
	}

	render(){
		return (
			<View>
				<Text style={{ color : 'black' }}>DotEnv</Text>
			</View>		
		)
	}
}