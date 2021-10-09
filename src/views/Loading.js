import React from "react";
import {View,Text} from "react-native";
import Spinner from 'react-native-loading-spinner-overlay';

export default class Loading extends React.Component {
	constructor(props){
		super(props);
		console.log("Loading");

		this.state = {
			spinner :  true,
		}
	}

	componentDidMount() {
    	setInterval(() => {
      		this.setState({
	        	spinner: !this.state.spinner
      		});
   		}, 3000);
	}

	render(){
		return (
			<View>

				<Spinner
          			visible={this.state.spinner}
          			textContent={'Loading...'}/>

				<Text style={{ color : 'black' }}>Loading</Text>
			</View>		
		)
	}
}