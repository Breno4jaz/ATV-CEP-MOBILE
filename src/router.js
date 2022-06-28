import * as React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Home from './Pages/Home';
import Notifications from './Pages/Notifications';
import { useFonts, Oswald_400Regular, Oswald_500Medium, Oswald_700Bold } from '@expo-google-fonts/oswald';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home"
        screenOptions={{
          headerTitle: 'Busca CEP',
          drawerStyle: {
            backgroundColor: '#4b0082',
            width: 300,
          },
          drawerLabelStyle: {
            fontFamily: 'Oswald_700Bold',
            color: '#FFF',
            fontSize: 18
          },
          drawerActiveBackgroundColor: '#8a2be2',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontFamily: 'Oswald_700Bold',
          },
          headerStyle: {
            backgroundColor: '#4b0082',
          },
          headerTintColor: '#FFF',
          headerBackgroundContainerStyle: {
            backgroundColor: '#000'
          }

        }
        }
      >
        <Drawer.Screen
          name="Home"
          component={Home}
          headerShown={false}
          options={{
            title: 'Página Inicial'
          }}
        />
        <Drawer.Screen
          name="Notifications"
          component={Notifications}
          options={{
            title: 'Notificações'
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}