import 'react-native-gesture-handler';
import {Ionicons} from '@expo/vector-icons';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator} from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { GlobalStyles } from './constants/Styles';

import PublicacionesContextProvider from './store/publicaciones-context';
import UsuariosContextProvider from './store/usuarios-context';
import IconButton from './components/ui/IconButton';
import Publicaciones from './screens/Publicaciones';
import PublicacionesMapa from './screens/PublicacionesMapa';
import PublicacionDetalles from './screens/PublicacionDetalles';
import NuevaPublicacion from './screens/NuevaPublicacion';
import UsuarioDetalles from './screens/UsuarioDetalles';

const Stack = createNativeStackNavigator();
const Tab = createMaterialTopTabNavigator();
const Drawer = createDrawerNavigator();

function MenuPrincipal(){
  return(
      <Drawer.Navigator 
        screenOptions={({navigation}) =>({
          headerStyle: { backgroundColor: GlobalStyles.colors.primary500},
          headerTintColor: GlobalStyles.colors.primary10,
          drawerActiveBackgroundColor: GlobalStyles.colors.primary50,
          drawerActiveTintColor: GlobalStyles.colors.primary700,
          drawerStyle: { backgroundColor: GlobalStyles.colors.primary500},
          headerRight: ({tintColor}) => <IconButton icon="add" size={24} color={tintColor} onPress={() => {navigation.navigate('NuevaPublicacion')}}/>
        })}
      >
        <Drawer.Screen name="HayPique" component={PublicacionesHome} options={{
          drawerLabel: 'Publicaciones',
          drawerIcon: ({color, size}) => <Ionicons name='home' color={color} size={size}/>
        }}/>
      </Drawer.Navigator>
  );
}


function PublicacionesHome(){
  return(
    <Tab.Navigator 
      screenOptions={({navigation}) =>({
        headerStyle: { backgroundColor: GlobalStyles.colors.primary700},
        headerTintColor: 'white', 
        tabBarStyle: { backgroundColor: GlobalStyles.colors.primary700 },
        tabBarActiveTintColor: GlobalStyles.colors.accent500,
      })}>
        <Tab.Screen name='Publicaciones' component={Publicaciones}/>
        <Tab.Screen name='Mapa' component={PublicacionesMapa} options={{
          tabBarLabel: 'Mapa'
        }}/>
      </Tab.Navigator>
  );
}

export default function App() {
  return (
    <UsuariosContextProvider>
      <PublicacionesContextProvider>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{
            headerStyle: { backgroundColor: GlobalStyles.colors.primary500},
            headerTintColor: 'white'
          }}>
            <Stack.Screen name='menu' component={MenuPrincipal} options={{headerShown: false}}/>
            <Stack.Screen name='PublicacionDetalles' component={PublicacionDetalles}/>
            <Stack.Screen name='NuevaPublicacion' component={NuevaPublicacion}/>
            <Stack.Screen name='UsuarioDetalles' component={UsuarioDetalles} options={{
              headerTitle: ''
            }}/>
          </Stack.Navigator>
        </NavigationContainer>
      </PublicacionesContextProvider>
    </UsuariosContextProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: GlobalStyles.colors.primary200,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
