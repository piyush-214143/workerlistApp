import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  Animated,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import {IMAGE} from '../utils/constants';

const WelcomeScreen = ({navigation}) => {
  const [fadeAnim] = useState(new Animated.Value(0));

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);

  return (
    <ImageBackground
      source={IMAGE.backgroundImage}
      style={styles.background}
      resizeMode="cover">
      <View style={styles.overlay}>
        <Animated.View style={{...styles.textContainer, opacity: fadeAnim}}>
          <Text style={styles.title}>Welcome to Your App</Text>
          <TouchableOpacity
            style={styles.exploreButton}
            onPress={() => navigation.navigate('Main')}>
            <Text style={styles.exploreButtonText}>Explore the App</Text>
          </TouchableOpacity>
        </Animated.View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textContainer: {
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 30,
    textAlign: 'center',
  },
  exploreButton: {
    backgroundColor: '#2980b9',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 30,
    borderWidth: 2,
    borderColor: '#3498db',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 8,
  },
  exploreButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default WelcomeScreen;
