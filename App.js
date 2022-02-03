import React from 'react';

import {createStackNavigator} from "@react-navigation/stack";
import {NavigationContainer} from "@react-navigation/native";

const Stack = createStackNavigator();

import { Welcome } from './screens';

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

        </Stack.Navigator>

    </NavigationContainer>
)

}

export default App;