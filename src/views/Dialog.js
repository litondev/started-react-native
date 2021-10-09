import React from "react";
import {View,Text} from "react-native";
import Dialog from "react-native-dialog";

export default class Dialogs extends React.Component {
	constructor(props){
		super(props);
		console.log("Dialog");
	}

	render(){
		return (
			<View>
				{ /* visible={true} */ }
				<Dialog.Container >
	      			<Dialog.Title>Account delete</Dialog.Title>
      				<Dialog.Description>
		        		Do you want to delete this account? You cannot undo this action.
      				</Dialog.Description>
      				<Dialog.Button label="Cancel" />
      				<Dialog.Button label="Delete" />
    			</Dialog.Container>
			</View>		
		)
	}
}