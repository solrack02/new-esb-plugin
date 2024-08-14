

import React from 'react';
import { Text, View } from 'react-native';
import { DynView } from './src/tools/DynView.tsx';
 
const elements = {
    DynView
};
 export const tools = () => {
  console.log('Welcome to the tools!');

  const returnObj = {
    elements,
  };

  return returnObj;
};
