import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';
import store from './src/redux/Store/Store';
import Stacknavigation from './src/components/stacknavigation';
import Homecomponent from './src/components/homecomponent';
import {PaperProvider} from 'react-native-paper';

const App = () => {
  return (
    <Provider store={store}>
      <PaperProvider>
        <NavigationContainer>
          <Stacknavigation />
        
        </NavigationContainer>
        
      </PaperProvider>
    </Provider>
  );
};

export default App;
