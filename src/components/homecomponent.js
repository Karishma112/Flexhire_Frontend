import {StyleSheet, Text, View, Button, Image, ScrollView} from 'react-native';
import React from 'react';
import Reduxoutput from './reduxoutput';
import Swiper from 'react-native-swiper';
// import Carousel from 'react-native-snap-carousel'
import {
  Appbar,
  BottomNavigation,
  Icon,
  IconButton,
  MD3Colors,
  Searchbar,
  TextInput,
} from 'react-native-paper';

// import Servicecomponent from './servicecomponent'
const imageData = [
  require('../assets/img4.jpg'),
  require('../assets/img5.jpg'),
  require('../assets/img6.jpg'),
  require('../assets/imge3.jpg'),
];

const Homecomponent = ({navigation}) => {
  const [searchQuery, setSearchQuery] = React.useState('');
  const [text, setText] = React.useState(' ');

  return (
    <ScrollView style={styles.container}>
      <Searchbar
        placeholder="Search"
        onChangeText={setSearchQuery}
        value={searchQuery}
      />
      <Text style={styles.text}>Home Screen</Text>

      <View style={styles.button}>
        <Button
          title="Go to Details"
          onPress={() =>
            navigation.navigate('Detail', {name: 'Karishma Patil'})
          }
        />
      </View>
       
       <View style={styles.button}>
        <Button 
            title="Go to Form Page"
            onPress={() => 
              navigation.navigate('Form')
            }
        />

       </View>


      <Swiper
        style={styles.wrapper}
        showsButtons={true} // Optional: show navigation buttons
        autoplay={true} // Optional: enable autoplay
      >
        {imageData.map((item, index) => (
          <View key={index} style={styles.slide}>
            <Image source={item} style={styles.image} />
          </View>
        ))}
      </Swiper>

      <Reduxoutput />

      <TextInput
        label="Give Your Feedback Here:"
        value={text}
        onChangeText={text => setText(text)}
        right={<TextInput.Icon icon="eye" />}
      />

      <View style={styles.iconContainer}>
        <IconButton icon="account" color={'#333'} size={30} />
        <IconButton icon="home" size={30} />
        <IconButton icon="magnify" size={30} />
      </View>
      <Appbar />
      {/* <BottomNavigation/> */}
    </ScrollView>
  );
};

export default Homecomponent;

const styles = StyleSheet.create({
  container: {
    fontSize: 24,
    flex: 1,
    backgroundColor: 'white',
    marginVertical: 18,
  },
  text: {
    color: 'black',
    padding: 20,
    fontSize: 24,
    textAlign: 'center',
  },

  button: {
    alignItems: 'center',
    marginVertical: 5,
    padding: 5,
  },
  wrapper: {
    height: 300, // Set the height for the swiper
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover', // Adjust the image to cover the container
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 20,
  },
});
