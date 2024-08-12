
            // file: index.tsx
            ""import React from 'react';
import * as RN from 'react-native';
import { testModule } from './src/index.ts';

export default function Router() {
  testModule();

  return (<RN.Text>Ola OLD!</RN.Text>);
};

RN.AppRegistry.registerComponent("Router", () => Router);

RN.AppRegistry.runApplication("Router", {
rootTag: document.getElementById("root"),
});""
        