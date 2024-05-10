import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Timer from './Timer';
import Alarm from './Alarm';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="TimerScreen">
        <Stack.Screen name="TimerScreen" component={Timer} />
        <Stack.Screen name="Alarm" component={Alarm} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
