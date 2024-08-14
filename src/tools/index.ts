

import React from 'react';
import { Text, View } from 'react-native';
 
export const tools = () => {
  console.log('Welcome to the tools!');

  const returnObj = {
    elements,
  };

  return returnObj;
};
 
const elements = {
    DynView
};
 export const DynView = () => {
  
  return (
    <>
      <View style={{ height: 10 }} />
      <Text style={{ color: 'white' }}>{'DynView'}</Text>
    </>
  );
};

