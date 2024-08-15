// App.js
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text, StyleSheet, Image, ImageBackground, Animated } from 'react-native';
import WelcomeScreen from './src/screens/welcomeScreen';
import ProgressScreen from './src/screens/progressScreen';
import SettingsScreen from './src/screens/settingScreen';
import ProfileScreen from './src/screens/profileScreen';
import CategoriesScreen from './src/screens/categoriesScreen';
import { IMAGE } from './src/utils/constants';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const SplashScreen = ({ navigation }) => {
  const [fadeAnim] = React.useState(new Animated.Value(0));

  React.useEffect(() => {
    Animated.timing(fadeAnim, { 
      toValue: 1,
      duration: 2000,
      useNativeDriver: true,
    }).start(() => {
      setTimeout(() => {
        navigation.navigate('Welcome');
      }, 2000); // Show splash screen for 2 seconds
    });
  }, [fadeAnim, navigation]);

  return (
    <ImageBackground
      source={IMAGE.backgroundImage}
      style={styles.splashBackground}
      resizeMode="cover"
    >
      <View style={styles.overlay}>
        <Animated.View style={{ ...styles.splashTextContainer, opacity: fadeAnim }}>
          <Text style={styles.splashTitle}>🚀 Welcome to Your Adventure! 🌟</Text>
          <Text style={styles.splashSubtitle}>Experience the Best with Us! ✨</Text>
        </Animated.View>
      </View>
    </ImageBackground>
  );
};

export default function App() {
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

function MainTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          let iconName;
          if (route.name === 'CategoriesScreen') {
            iconName = focused ? IMAGE.chatIcon : IMAGE.chatIcon;
          } else if (route.name === 'Progress') {
            iconName = focused ? IMAGE.telephoneIcon : IMAGE.telephoneIcon;
          } else if (route.name === 'Settings') {
            iconName = focused ? IMAGE.barCodeIcon : IMAGE.barCodeIcon;
          } else if (route.name === 'Profile') {
            iconName = focused ? IMAGE.wishListIcon : IMAGE.wishListIcon;
          }

          // Return the custom image for each tab
          return <Image source={iconName} style={{ width: 25, height: 25 }} resizeMode="contain" />;
        },
        tabBarLabel: route.name,
        tabBarActiveTintColor: '#0077B5',
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <Tab.Screen name="CategoriesScreen" component={CategoriesScreen} options={{ headerShown: false }} />
      <Tab.Screen name="Progress" component={ProgressScreen} options={{ headerShown: false }} />
      <Tab.Screen name="Settings" component={SettingsScreen} options={{ headerShown: false }} />
      <Tab.Screen name="Profile" component={ProfileScreen} options={{ headerShown: false }} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  splashBackground: {
    flex: 1,
    justifyContent: 'center',
    // alignItems: 'center',
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent overlay for better text visibility
    justifyContent: 'center',
    alignItems: 'center',
  },
  splashTextContainer: {
    alignItems: 'center',
    padding: 20,
  },
  splashTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 15,
  },
  splashSubtitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#f1c40f',
    textAlign: 'center',
  },
});

