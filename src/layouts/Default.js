import React from "react";
import {View,Text,Button} from "react-native";

export default class Default extends React.Component {
	render(){
		return (				
			<View>						
				<Button 
					title="Axios"        			
					onPress={() => this.props.navigation.navigate('Axios')}/>    	

				<Button 
					title="DotEnv"        			
					onPress={() => this.props.navigation.navigate('DotEnv')}/>  

				<Button 
					title="Loading"        			
					onPress={() => this.props.navigation.navigate('Loading')}/> 

				<Button 
					title="ReactElement"        			
					onPress={() => this.props.navigation.navigate('ReactElement')}/> 

				<Button 
					title="Storage"        			
					onPress={() => this.props.navigation.navigate('Storage')}/> 

				<Button 
					title="Dialog"        			
					onPress={() => this.props.navigation.navigate('Dialog')}/> 

				<Button 
					title="Toaste"        			
					onPress={() => this.props.navigation.navigate('Toaste')}/> 

				<Button 
					title="Validation"        			
					onPress={() => this.props.navigation.navigate('Validation')}/> 

				<Button
					title="Select"
					onPress={() => this.props.navigation.navigate('Select')}/>
					
				{this.props.children}
			</View>		
		);
	}
}