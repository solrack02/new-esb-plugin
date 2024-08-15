

console.log("AQUI X");
 
 // ---------- import React Packs
 import React from 'react';
 import * as RN from 'react-native';

 // ---------- import Variables Pack
 import { create } from 'zustand';

 // ---------- import Local Tools
 // import {mapElements} from './tools/base/project/mapElements';
 // import * as functions from './tools/base/functions';
 // import * as Elements from './tools/base/Elements';
 import { Project } from './tools/base/project';
 // import * as jsvals from './tools/base/jsvals';
 // import { props } from './tools/base/props';
 // import * as customs from './tools/customs';
 // import * as stls from './tools/base/stls';
 // import { tools } from "./tools";

 // ---------- set Caps Inputs
 const currRoute = 'home'

 let args:any = []

 const screens = [
 (...args: any) => <RN.View style={{width: '100%',height: '100%',justifyContent: 'center', alignItems: 'center',backgroundColor: '#202'}}><RN.Text style={{color: 'white'}}>Add a Screen to Start</RN.Text></RN.View>
 ]

 const initCt = () => ({
 true: "true"
 });
 const initObj = initCt();

 const arrInitFuncs = [
 ()=>{}
 ];

 export const useRoutes = create(() => ({ currRoute }));
 export const useData = create(() => initObj);

 // ---------- set Main Component
 export const Router = () => {
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
