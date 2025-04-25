import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import DetailScreen from './screens/DetailScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator >
          <Stack.Screen name="News" component={HomeScreen} />
            <Stack.Screen name="Details" component={DetailScreen} />
        </Stack.Navigator>
      </NavigationContainer>
  );
}
 // API key 80b4260ad24c4781b5a984ec3cc3a423