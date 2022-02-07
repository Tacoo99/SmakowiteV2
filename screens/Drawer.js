import * as React from 'react';
import {
    View,
    Text,
    TouchableOpacity
} from 'react-native';
import { colors } from "../constants";
import { createDrawerNavigator } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/FontAwesome';

import { Welcome, SignIn, SignUp, Home, Tabs, Cart, Account } from "../screens";

const Drawer = createDrawerNavigator();

export default function App() {
    return (
        <Drawer.Navigator initialRouteName="Account">
        <Drawer.Screen name="Koszyk" component={Cart} />
        <Drawer.Screen name="Strona główna" component={Home} />
        <Drawer.Screen name="Wyloguj się" component={SignIn} />

        </Drawer.Navigator>
    );
  }