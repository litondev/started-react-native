import React from 'react';
import {Text} from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Routes from "./src/Routes";
import Toast from 'react-native-toast-message';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Stack = createNativeStackNavigator();

export default class App extends React.Component{  
  async componentDidMount(){
    await AsyncStorage.setItem('@storage_Key','STORAGE!!!')
  }

  render(){
    return (
      <NavigationContainer>
        <React.Suspense fallback={<Text>Loading . . .</Text>}>      
          <Stack.Navigator>
            {
              Routes.map((item,index) => 
                <Stack.Screen 
                  name={item.name} 
                  key={index}>
                  {props => <item.component {...props} {...this.props} /> }
                </Stack.Screen>
              )
            }        
          </Stack.Navigator>
        </React.Suspense>
      
        <Toast ref={(ref) => Toast.setRef(ref)}/>
      </NavigationContainer>
    );
  }
}