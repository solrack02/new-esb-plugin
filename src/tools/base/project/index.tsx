
// ---------- import React Packs
import React from 'react';
import * as RN from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, Platform, View } from 'react-native';

// ---------- import Variables Pack

// ---------- import Local Tools
export { getStlValues } from './src/tools/base/project/getStlValues';
export { getVarValue } from './src/tools/base/project/getVarValue';
export { setArgsVars } from './src/tools/base/project/setArgsVars';
export { mapElements } from './src/tools/base/project/mapElements';
export { getCtData } from './src/tools/base/project/getCtData';
export { pathSel } from './src/tools/base/project/pathSel';
export { setData } from './src/tools/base/project/setData';
export { argSel } from './src/tools/base/project/argSel';
export { goTo } from './src/tools/base/project/goTo';

// ---------- set Caps Inputs
const currRoute = '!#!initial screen!#!';

let args: any = [];

type Tprops = {
  configData: {
    screens: any[];
    initCt: Record<string, any>;
    arrInitFuncs: (() => void)[];
  };
};

// ---------- set Main Component
export const Project = ({ configData }: Tprops) => {
  // ---------- set Data
  const { screens, arrInitFuncs } = configData;

  // ---------- call Functions (If Exists)
  React.useEffect(() => {
    const callFn = async () => {
      for (const currFunc of arrInitFuncs) await currFunc();
    };

    callFn().catch(err => console.log('Project Start Functions', { err }));
  }, []);

  return (
    <RN.View style={{ flexDirection: 'column', width: '100%' }}>
      <SafeAreaView
        style={{ width: '100%', height: '100%', overflow: 'hidden' }}
      >
        {Platform.OS !== 'web' && (
          <View style={{ height: 30, backgroundColor: '#450b2c' }} />
        )}
        {mapElements(screens)}
        <StatusBar style="light" />
      </SafeAreaView>
    </RN.View>
  );
};
