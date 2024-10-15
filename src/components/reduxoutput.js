// App.js

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment } from '../redux/Action/Action';
import { Button, StyleSheet, Text ,View} from 'react-native';



const Reduxoutput = () => {
  const count = useSelector((state) => state.count); // Access the count from the Redux store
  const dispatch = useDispatch(); // Get the dispatch function

  return (

    <View style={styles.container}>
      <Text style={styles.name}>Counter Application</Text>
    
      <Text style={styles.text}>Count:{count}</Text>
      
      <View style={styles.button}>
      <Button title= 'Increment' onPress={() => dispatch(increment())}>Increment</Button>
      </View>
     
      <View style={styles.button}>
      <Button title= 'Decrement' onPress={() => dispatch(decrement())}>Decrement</Button>
      </View>
      </View>
  );
};

export default Reduxoutput;

const styles = StyleSheet.create({
 
  container: {
    flex:1,
   justifyContent:'center',
   margin:30,
   backgroundColor:'skyblue',
  
  },
  name:{
    fontSize:20,
    textAlign:'center',
    margin:10,
    fontWeight:'bold',
    
  },
  text:{
    fontSize:20,
    textAlign:'center',
    margin:10,
  },
  button:{
    marginVertical:5,
  }
  
});
