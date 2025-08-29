
import React from 'react';
import { Text, View } from 'react-native';
import ThreeScene from '../../components/threeScene/ThreeScene';

export default function Synode() {
  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <ThreeScene />
      </View>
      <View style={{ position: 'absolute', top: 50, left: 20, zIndex: 1 }}>
        <Text style={{ color: 'white', fontSize: 20 }}>Model 3D Tesla</Text>
      </View>
    </View>
  );
}
