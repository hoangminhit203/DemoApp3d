
import { router } from 'expo-router';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ThreeScene from '../../components/threeScene/ThreeScene';
import Header from '../../components/ui/Header';

export default function Synode() {
  return (
    <View style={styles.container}>
      <Header showBackButton={true} onBackPress={() => router.back()} />
      <View style={styles.sceneContainer}>
        <ThreeScene />
      </View>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Model 3D Tesla</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  sceneContainer: {
    flex: 1,
  },
  titleContainer: {
    position: 'absolute',
    top: 50,
    left: 80, // Left space for back button
    zIndex: 1,
  },
  title: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
