import React, { useState } from 'react';
import { Alert, Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Card, IconButton, TextInput } from 'react-native-paper';

const Form = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const handleSubmit = () => {
    if (name && email && password) {
      console.log('Form Submitted', `Name: ${name}, Email: ${email}`);
      
    } else {
      Alert.alert('Error', 'Please fill all data');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Personal Form</Text>

      <TextInput
        style={styles.textarea}
        mode="outlined"
        outlineColor="lightgrey"
        label="Enter your Name"
        value={name}
        onChangeText={setName}
        textColor="black"
        activeOutlineColor="#97A97C"
      />

      <TextInput
        style={styles.textarea}
        mode="outlined"
        outlineColor="lightgrey"
        label="Enter your Email"
        value={email}
        onChangeText={setEmail}
        textColor="black"
        activeOutlineColor="#97A97C"
      />

      <View style={styles.passwordContainer}>
        <TextInput
          style={styles.textarea}
          mode="outlined"
          outlineColor="lightgrey"
          label="Enter your Password"
          value={password}
          onChangeText={setPassword}
          textColor="black"
          activeOutlineColor="#97A97C"
          secureTextEntry={!isPasswordVisible}
        />

        <IconButton
          icon={isPasswordVisible ? 'eye' : 'eye-off'}
          size={20}
          onPress={() => setIsPasswordVisible(!isPasswordVisible)}
        />
      </View>

      <Button title="Submit" onPress={handleSubmit} />

      <Text style={styles.text}>Form Details</Text>
      <Card style={styles.card}>
        <Text>Name: {name},</Text>
        <Text>Email-Id: {email}</Text>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'white',
  },
  text: {
    fontSize: 25,
    textAlign: 'center',
    color: 'black',
    fontWeight: 'bold',
    margin: 20,
  },
  textarea: {
    marginVertical: 12,
    backgroundColor: 'white',
    alignSelf: 'center',
    width: '100%',
    height: 48,
  },
  card: {
    marginTop: 10,
    padding: 20,
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between', // Ensures the icon is properly spaced
  },
});

export default Form;
