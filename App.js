import BookMarksScreen from './src/screens/bookMarksScreen';
import { DrawerContent } from './src/screens/drawerContent';
import MainTabScreen from './src/screens/navigation/MainTabScreen';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import RootStackScreen from './src/screens/navigation/rootStackScreen';
import SettingsScreen from './src/screens/settingsScreen';
import SupportScreen from './src/screens/supportScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <RootStackScreen />
      {/* <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}>
        <Drawer.Screen name="HomeDrawe" component={MainTabScreen} />
        <Drawer.Screen name="Support" component={SupportScreen} />
        <Drawer.Screen name="Settings" component={SettingsScreen} />
        <Drawer.Screen name="BookMarks" component={BookMarksScreen} />
      </Drawer.Navigator> */}
    </NavigationContainer>
  );
}

export default App;