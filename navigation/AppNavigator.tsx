import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import MainScreen from '../screens/MainScreen';

export type RootStackParamList = {
  Main: undefined;
  // PrivyConnect: undefined; // 👈 temporairement désactivé
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Main">
        <Stack.Screen name="Main" component={MainScreen} />
        {/* <Stack.Screen name="PrivyConnect" component={PrivyConnectScreen} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
