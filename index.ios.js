// Registers the component in ./main.js so that all changes to the top-level
// component can be made in that one file (instead of both indexes)

import React from 'react';
import { AppRegistry } from 'react-native';
import TicReactToe from './main.js';

AppRegistry.registerComponent('TicReactToe', () => TicReactToe);
