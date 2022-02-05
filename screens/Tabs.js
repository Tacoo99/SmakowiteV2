import React from 'react';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import Icon from 'react-native-vector-icons/FontAwesome';

import { Home, Cart, Account } from "../screens";

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Strona Główna') {
            iconName = focused
              ? 'home'
              : 'home';
          } else if (route.name === 'Koszyk') {
            iconName = focused ? 'shopping-cart' : 'shopping-cart';
          }
          else if (route.name === 'Konto') {
            iconName = focused ? 'user' : 'user';
          }


          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <Tab.Screen name="Strona Główna" component={Home} />
      <Tab.Screen name="Koszyk" component={Cart} />
      <Tab.Screen name="Konto" component={Account} />
    </Tab.Navigator>
);
}

export default function App() {
  return (
      <MyTabs />
  );
}