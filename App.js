import React from 'react';

import {createStackNavigator} from "@react-navigation/stack";
import {NavigationContainer} from "@react-navigation/native";

const Stack = createStackNavigator();

import { Welcome, SignIn, SignUp, Home, Tabs, Cart, Account, Drawer } from './screens';

const App = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            
            }}
            initialRouteName={"Welcome"}
        >
            <Stack.Screen name="Welcome" component={Welcome} />
            <Stack.Screen name="SignIn" component={SignIn} />
            <Stack.Screen name="SignUp" component={SignUp} />
            <Stack.Screen name="Home" component={Tabs} />
            <Stack.Screen name="Cart" component={Drawer} />
            <Stack.Screen name="Account" component={Account} />

        </Stack.Navigator>

    </NavigationContainer>
)

}

export default App;