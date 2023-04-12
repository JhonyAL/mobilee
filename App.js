import { Home } from './components/Home'
import { Categorias } from './components/Categorias'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer, DarkTheme } from '@react-navigation/native';

import 'react-native-gesture-handler';

const Drawer = createDrawerNavigator();

// const MyTheme = {
//   dark: true,
//   colors: {
//     primary: '#bb04ff',
//     background: '#292929',
//     card: '#111',
//     text: '#fefefe',
//     notification: '#eee',
//   },
// };


export default function App() {
  return (
    <NavigationContainer>
        <Drawer.Navigator>
          <Drawer.Screen name="Home" component={Home} />
          <Drawer.Screen name="Categorias" component={Categorias} />
        </Drawer.Navigator> 
      </NavigationContainer>
  );
}