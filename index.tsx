
            // file: index.tsx
            ""// ---------- import React Packs
import React from 'react';
import * as RN from 'react-native';

// ---------- import Internal Packs
import { testModule } from './root/src/index.ts';

// ---------- set Main Component
export default function Router() {
  testModule();

  return (<RN.Text>Basic React Component</RN.Text>);
};

RN.AppRegistry.registerComponent("Router", () => Router);

RN.AppRegistry.runApplication("Router", {
rootTag: document.getElementById("root"),
});""
        