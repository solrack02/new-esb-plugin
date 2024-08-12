
            // file: index.tsx
            
        
// ---------- import React Packs
import React from 'react';
import * as RN from 'react-native';

// ---------- import Variables Pack
import { create } from 'zustand';

// ---------- import Local Tools

// ---------- set Caps Inputs
const currRoute = 'ab0login'

const screens = [
  
]

const initCt = () => ({
  true: "true"
});

const arrInitFuncs = [
  ()=>{}
];

// ---------- set Main Component
export default function Router() {

  return (
    <RN.Text>Ola OLD!</RN.Text>
  );
};

RN.AppRegistry.registerComponent("Router", () => Router);

RN.AppRegistry.runApplication("Router", {
rootTag: document.getElementById("root"),
});
, ""
        