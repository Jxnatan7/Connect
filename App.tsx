import 'expo-dev-client';

import React from 'react';

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from './src/pages/Home';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './src/pages/Login';
import Sobre from './src/pages/Sobre';
import BemVindo from './src/pages/BemVindo';
import QuadroDeHorarios from './src/pages/QuadroDeHorarios';
import Classes from './src/pages/QuadroDeHorarios/Classes';
import DetailClasses from './src/pages/QuadroDeHorarios/Detail';
import Cajui from './src/pages/Cajui';
import CalendarioEscolar from './src/pages/CalendarioEscolar';
import CalendarioEscolarDetail from './src/pages/CalendarioEscolar/Details';
import Cardapio from './src/pages/Cardapio';
import Cursos from './src/pages/Cursos';
import DetailCursos from './src/pages/Cursos/Detail';
import Editais from './src/pages/Editais';
import EditalWeb from './src/pages/Editais/Web';
import EditalDetail from './src/pages/Editais/EditalDetail';
import Informacoes from './src/pages/Informacoes';
import Transporte from './src/pages/Informacoes/Transporte';
import TransporteDetail from './src/pages/Informacoes/Transporte/Detail';
import Parceiros from './src/pages/Parceiros';
import CravoECanela from './src/pages/Parceiros/CravoECanela';
import Notifications from './src/pages/Notifications';
import Credits from './src/pages/Credits';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Home">
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="Login" component={Login}/>
        <Stack.Screen name="Sobre" component={Sobre}/>
        <Stack.Screen name="BemVindo" component={BemVindo}/>
        <Stack.Screen name="QuadroDeHorarios" component={QuadroDeHorarios}/>
        <Stack.Screen name="QuadroDeHorariosClasses" component={Classes}/>
        <Stack.Screen name="QuadroDeHorariosClassesDetail" component={DetailClasses}/>
        <Stack.Screen name="Cajui" component={Cajui}/>
        <Stack.Screen name="CalendarioEscolar" component={CalendarioEscolar}/>
        <Stack.Screen name="CalendarioEscolarDetail" component={CalendarioEscolarDetail}/>
        <Stack.Screen name="Cardapio" component={Cardapio}/>
        <Stack.Screen name="Cursos" component={Cursos}/>
        <Stack.Screen name="CursosDetail" component={DetailCursos}/>
        <Stack.Screen name="Editais" component={Editais}/>
        <Stack.Screen name="EditalWeb" component={EditalWeb}/>
        <Stack.Screen name="EditalDetail" component={EditalDetail}/>
        <Stack.Screen name="Informacoes" component={Informacoes}/>
        <Stack.Screen name="Transporte" component={Transporte}/>
        <Stack.Screen name="TransporteDetail" component={TransporteDetail}/>
        <Stack.Screen name="Parceiros" component={Parceiros}/>
        <Stack.Screen name="CravoECanela" component={CravoECanela}/>
        <Stack.Screen name="Notifications" component={Notifications}/>
        <Stack.Screen name="Credits" component={Credits}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
