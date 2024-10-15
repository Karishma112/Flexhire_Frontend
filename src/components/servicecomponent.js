import {View, Text, StyleSheet, Button, Image, ScrollView} from 'react-native';
import React from 'react';

const ServiceComponent = ({navigation, route}) => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Service Screen</Text>
      {route.params?.name && (
        <Text style={styles.profileText}>Information about company</Text>
      )}
      <Text style={styles.name}>
        Our mission is to turn technology ideas to reality. We are young
        organization of experienced people.Our experience and expertise is in
        SAP ERP and applications space with multiple domains exposure.
      </Text>
      <Image style={styles.Image} source={require('../assets/img2.jpg')} />

      <View style={styles.buttoncontainer}>
        <Button
          style={{padding: 20}}
          title="Go to Home"
          onPress={() => navigation.navigate('Home')}
        />
      </View>
      <View style={styles.buttoncontainer}>
        <Button title="Go Back" onPress={() => navigation.goBack()} />
      </View>
    </ScrollView>
  );
};

export default ServiceComponent;

const styles = StyleSheet.create({
  container: {
    // flex: 1,

    padding: 16, // Add padding for better spacing
    margin: 20,
  },
  title: {
    color: 'black',
    fontSize: 26,
    textAlign: 'center', // Set font size explicitly
    fontWeight: 'bold', // Make the title bold for emphasis
    marginBottom: 10, // Add margin below the title
  },
  profileText: {
    fontSize: 22,
    marginVertical: 20,
    textAlign: 'center',
    color: 'black',
  },
  name: {
    textAlign: 'center',
    fontSize: 16,
    marginBottom: 20,
  },
  Image: {
    width: 'auto',
    height: 300,
    marginBottom: 30,
  },
  buttoncontainer: {
    marginVertical: 4,
  },

});
