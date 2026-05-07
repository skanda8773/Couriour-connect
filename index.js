import 'react-native-gesture-handler';
// Import Tailwind global styles (processed by NativeWind)
import './global.css';

/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => App);
