// src/components/WorkerProfiles.js
import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { IMAGE } from '../utils/constants';

const WorkerProfiles = ({ workers }) => {
  return (
    <View style={styles.grid}>
      {workers.map((item) => (
        <View key={item.id} style={styles.profileContainer}>
          <Image source={IMAGE[item.profileImage]} style={styles.profileImage} />
          <Text style={styles.workerName}>{item.name}</Text>
          <Image source={IMAGE[item.country]} style={styles.countryFlag} />
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between', // Ensures even spacing between items
    paddingHorizontal: 10,
  },
  profileContainer: {
    width: '22%', // Adjust based on the number of columns; 22% works well for 4 columns
    alignItems: 'center',
    marginBottom: 20,
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  workerName: {
    marginTop: 8,
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  countryFlag: {
    position: 'absolute',
    right: -2,
    top: -2,
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#fff',
  },
});

export default WorkerProfiles;
