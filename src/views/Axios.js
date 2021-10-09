import React from "react";
import {View,Text} from "react-native";
import SendAxios from "axios";

export default class Axios extends React.Component {
	constructor(props){
		super(props);
		console.log("Axios");
	}

	componentDidMount(){
		SendAxios.get("https://jsonplaceholder.typicode.com/todos/1s")
		.then(res => {
			console.log(res.data);
			console.log(res.status);
		})	
		.catch(res => {			
			console.log(res.message);
			console.log(res)
		})
	}
	
	render(){
		return (
			<View>
				<Text style={{ color : 'black' }}>Axios</Text>
			</View>		
		)
	}
}