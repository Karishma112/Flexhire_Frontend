import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { StyleSheet } from 'react-native';
import Homecomponent from './homecomponent';
import DetailComponent from './detailcomponent';
import ServiceComponent from './servicecomponent';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Form from './forms';


const Stacknavigation = () => {

const stack = createNativeStackNavigator();
return(
    <stack.Navigator initialRouteName='Home' screenOptions={{
        headerStyle: {
          backgroundColor: 'skyblue',
          // textAlign: 'center',
    
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
    
        },
      }}>
      <stack.Screen name ='Home' component={Homecomponent} />
      <stack.Screen name='Detail' component={DetailComponent}/>
      <stack.Screen name='service' component={ServiceComponent}/>
      
      <stack.Screen name='Form' component={Form}/>
      </stack.Navigator>
   
    )
};

export default Stacknavigation;

const style = StyleSheet.create({

});