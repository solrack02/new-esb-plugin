
            // file: index.tsx
            ""// ---------- import React Packs
import React from 'react';
import * as RN from 'react-native';

// ---------- import Internal Packs
import { testModule } from './src/index.ts';

// ---------- set Main Component
export default function Router() {
  testModule();

  return (<RN.Text>Ola OLD!</RN.Text>);
};

RN.AppRegistry.registerComponent("Router", () => Router);

RN.AppRegistry.runApplication("Router", {
rootTag: document.getElementById("root"),
});""
        