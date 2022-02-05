import React from 'react';

import {createStackNavigator} from "@react-navigation/stack";
import {NavigationContainer} from "@react-navigation/native";

const Stack = createStackNavigator();

import { Welcome, SignIn, SignUp, Home, Tabs, Cart, Account } from './screens';

const App = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            
            }}
            initialRouteName={"Tabs"}
        >
            <Stack.Screen name="Welcome" component={Tabs} />
            <Stack.Screen name="SignIn" component={SignIn} />
            <Stack.Screen name="SignUp" component={SignUp} />
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Cart" component={Cart} />
            <Stack.Screen name="Account" component={Account} />

        </Stack.Navigator>

    </NavigationContainer>
)

}

export default App;