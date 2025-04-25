import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {View, Text, StyleSheet} from 'react-native';
import MainScreen from '../screens/MainScreen';
import {useAuthorization} from '../../src/components/providers/AuthorizationProvider';

// Simple placeholder screen
function InfoScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Information Screen</Text>
    </View>
  );
}

// Create a stack navigator
const Stack = createNativeStackNavigator();

// Main navigator component
function AppNavigator() {
  const {selectedAccount} = useAuthorization();
  const isConnected = !!selectedAccount;

  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      {isConnected ? (
        <Stack.Screen name="Info" component={InfoScreen} />
      ) : (
        <Stack.Screen name="Connect" component={MainScreen} />
      )}
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default AppNavigator;
