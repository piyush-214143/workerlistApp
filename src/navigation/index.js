import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text, Button, StyleSheet, Animated, Image } from 'react-native';
import WelcomeScreen from './src/screens/welcomeScreen';
import ProgressScreen from './src/screens/progressScreen';
import SettingsScreen from './src/screens/settingScreen';
import ProfileScreen from './src/screens/profileScreen';
import CategoriesScreen from './src/screens/categoriesScreen';
import { IMAGE } from './src/utils/constants';


const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

export default function NavigationContainer() {
    return (
        <NavigationContainer>
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Splash" component={SplashScreen} options={{ headerShown: false }} />
            <Stack.Screen name="Welcome" component={WelcomeScreen} options={{ headerShown: false }} />
            <Stack.Screen name="Main" component={MainTabs} options={{ headerShown: false }} />
          </Stack.Navigator>
        </NavigationContainer>
      );
}

const styles = StyleSheet.create({})