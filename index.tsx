
            // file: index.tsx
            ""// ---------- import React Packs
import React from 'react';
import * as RN from 'react-native';

// ---------- set Main Component
export default function Router() {

  return (<RN.Text>Ola OLD!</RN.Text>);
};

RN.AppRegistry.registerComponent("Router", () => Router);

RN.AppRegistry.runApplication("Router", {
rootTag: document.getElementById("root"),
});""
        