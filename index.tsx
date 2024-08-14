

// ---------- import React Packs
import React from 'react';
import * as RN from 'react-native';

// ---------- import Internals
import { SRC } from './src';
 
// ---------- set Main Component
export default function Router() {
  const stl: RN.ViewStyle = {
    // backgroundColor: 'blue',
    backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  };

  return (
    <RN.View style={stl}>
      <RN.Text style={{ color: 'white' }}>{'1 - Olá MOCK 1!'}</RN.Text>
      <SRC />
    </RN.View>
  );
}
 RN.AppRegistry.registerComponent('Router', () => Router);

RN.AppRegistry.runApplication('Router', {
  rootTag: document.getElementById('root'),
});
