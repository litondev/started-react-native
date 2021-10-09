import React, {Component}  from 'react';
import {View, Text, TextInput, TouchableHighlight} from 'react-native';
import ValidationComponent from 'react-native-form-validator';

export default class Validation extends ValidationComponent {

  constructor(props) {
    super(props);
    this.state = {
    	name : "My name", 
    	email: "tibtib@gmail.com", 
    	number:"56", 
    	date: "2017-03-01", 
    	newPassword : "", 
   	};

		this._onPressButton = this._onPressButton.bind(this)
  }

  _onPressButton() {
    // Call ValidationComponent validate method
    this.validate({
      name: {
      	minlength:3,
      	maxlength:7, 
      	required: true
      },
      email: {
      	email: true
      },
      number: {
      	numbers: true
      },
      date: {
      	date: 'YYYY-MM-DD'
      },
    });
  }

  render() {
      return (
        <View style={{color : 'black'}}>
          <TextInput ref="name" onChangeText={(name) => this.setState({name})} value={this.state.name} 
          	style={{color : 'black'}}/>
          <TextInput ref="email" onChangeText={(email) => this.setState({email})} value={this.state.email} 
          	style={{color : 'black'}}/>
          <TextInput ref="number" onChangeText={(number) => this.setState({number})} value={this.state.number} 
          	style={{color : 'black'}}/>
          <TextInput ref="date" onChangeText={(date) => this.setState({date})} value={this.state.date} 
          	style={{color : 'black'}}/>

          {this.isFieldInError('date') && this.getErrorsInField('date').map(errorMessage => <Text style={{color : 'red'}}>{errorMessage}</Text>) }

        
          <TouchableHighlight onPress={this._onPressButton}
          	style={{color : 'black'}}>
            <Text style={{color : 'black'}}>Submit</Text>
          </TouchableHighlight>

          <Text style={{color : 'black'}}>
            {this.getErrorMessages()}
          </Text>
        </View>
      );
  }

}