
            // file: index.tsx
            
// ---------- import React Packs
import React from 'react';
import * as RN from 'react-native';

// ---------- import Variables Pack
import { create } from 'zustand';

// ---------- import Local Tools
import {mapElements} from './tools/base/project/mapElements';
import * as functions from './tools/base/functions';
import * as Elements from './tools/base/Elements';
import { Project } from './tools/base/project/';
import * as jsvals from './tools/base/jsvals';
import { props } from './tools/base/props';
import * as customs from './tools/customs';
import * as stls from './tools/base/stls';
import { tools } from './tools';

// ---------- set Caps Inputs
const currRoute = 'ab0login'

let args = [];

const screens = [
  
]

const initCt = () => ({
  true: "true"
});
const initObj = initCt();
// console.log(initObj);

const arrInitFuncs = [
  ()=>{}
];

export const useRoutes = create(() => ({ currRoute }));

// ---------- set Main Component
export default function Router() {

  return (
    <Project
      configData={{
        screens,
        initCt,
        arrInitFuncs,
      }}
    />
  );
};

RN.AppRegistry.registerComponent("Router", () => Router);

RN.AppRegistry.runApplication("Router", {
rootTag: document.getElementById("root"),
});

        