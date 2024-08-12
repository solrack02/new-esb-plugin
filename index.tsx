
            // file: index.tsx
            "import React from 'react';
import * as RN from 'react-native';

import { create } from 'zustand';

const currRoute = '!#!initial screen!#!'

const screens = [
  !#!Lista de Telas!#!
]

const initCt = () => ({
  !#!Lista de Variáveis!#!
});

const arrInitFuncs = [
  !#!Start Functions!#!
];

export default function Router() {

  return 
    <RN.Text>Ola OLD!</RN.Text>
  );
};

RN.AppRegistry.registerComponent("Router", () => Router);

RN.AppRegistry.runApplication("Router", {
rootTag: document.getElementById("root"),
});("
        