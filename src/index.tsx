

console.log("AQUI X");

// ---------- import React Packs
import React from 'react';
import { Text, View } from 'react-native';
import { tools } from './tools';

export const Router = () => {
  tools();

  return (
    <View style={{ width: '100%', height: '100%', backgroundColor: 'indigo' }}>
      <Text style={{ color: 'white' }}>{'Hi from:'}</Text>
      <View style={{ height: 10 }} />
      <Text style={{ color: 'white' }}>{'The Router 1!'}</Text>
    </View>
  );
};
