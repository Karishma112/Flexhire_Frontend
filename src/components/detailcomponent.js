import {View, Text, StyleSheet, Image, Button} from 'react-native';
import React from 'react';
import {Badge, Chip, Switch} from 'react-native-paper';



const DetailComponent = ({navigation, route}) => {
  const[isSwitchOn, setIsSwitchOn] = React.useState(false);

  const onToggleSwitch =() => setIsSwitchOn(!isSwitchOn);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Detail Screen</Text>
      <Text style={styles.profileText}>
        This is {route.params.name}'s profile
      </Text>
      <View style={styles.container1}>
        <Image
          source={require('../assets/user.png')} // Local image
          style={styles.profileImage}
        />
        <View style={styles.textcontainer}>
          <Text style={styles.name}>Karishma Patil</Text>
          <Text style={styles.email}>Swatsan@gmail.com</Text>
        </View>
      </View>
     

      <Badge>3</Badge>

      <Chip icon="all-inclusive-box" onPress={() => console.log('Pressed')}>
        Information
      </Chip>

      <Switch style={styles.switch} value={isSwitchOn} onValueChange={onToggleSwitch} />

      <View style={styles.buttoncontainer}>
        <Button
          title="Go to Service"
          onPress={() =>
            navigation.navigate('service', {name: 'some information'})
          }
        />
      </View>
      <View style={styles.buttoncontainer}>
        <Button title="Go Back" onPress={() => navigation.goBack()} />
      </View>
    </View>
  );
};

export default DetailComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  profileText: {
    fontSize: 18,
    marginVertical: 20,
    textAlign: 'center',
  },
  container1: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 30,
  },
  textcontainer: {
    flexDirection: 'column',
    alignItems: 'center',
    marginLeft: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  email: {
    fontSize: 14,
    color: '#666',
  },
  buttoncontainer: {
    marginVertical: 5,
  },
  
  
});
