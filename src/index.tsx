
// ---------- import React Packs
import React from 'react';
import { Text, View } from 'react-native';
import { tools } from './tools';

export const SRC = () => {
  
  tools()

  return (
    <>
      <View style={{ height: 10 }} />
      <Text style={{ color: 'white' }}>{'Hi from:'}</Text>
      <Text style={{ color: 'white' }}>{'The SRC Module 1!'}</Text>
    </>
  );
};

