import React from "react";
import { View } from "react-native";
import { Button } from "react-native-paper";

const BottomNavigation = () => {
    return(
        
     <Button>
        <Button icon="camera" mode="contained" onPress={() => console.log('Pressed')}>
       Press me
      </Button>
     </Button>
       
        )
    };
    
    export default BottomNavigation;