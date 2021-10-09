import React from "react";
import {View,Text} from "react-native";
import DefaultLayout from "../layouts/Default";

export default class Home extends React.Component {
	render(){
		return (
			<DefaultLayout {...this.props}>							
				<Text style={{ color : 'black' }}>Home</Text>	
			</DefaultLayout>
		)
	}
}