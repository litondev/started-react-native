import React from "react";
import {View,Text} from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';

export default class Storage extends React.Component {
	constructor(props){
		super(props);
		console.log("Storage");
	}
	
  	async componentDidMount(){
  		const value = await AsyncStorage.getItem('@storage_Key')
		console.log(value);
	}

	render(){
		return (
			<View>
				<Text style={{ color : 'black' }}>Storage</Text>
			</View>		
		)
	}
}