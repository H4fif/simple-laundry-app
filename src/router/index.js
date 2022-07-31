import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Akun, Home, Pesanan, Splash } from '../pages';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const MainApp = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Pesanan" component={Pesanan} />
      <Tab.Screen name="Akun" component={Akun} />
    </Tab.Navigator>
  );
};

const Router = () => {
  return (
    // Default Screen is the first declared if INITIAL ROUTE NAME IS EMPTY, OTHERWISE OVERRIED BY INITIAL ROUTE NAME
    <Stack.Navigator initialRouteName="Splash">
      <Stack.Screen
        name="Splash"
        component={Splash}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="MainApp"
        component={MainApp}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default Router;

const styles = StyleSheet.create({});
