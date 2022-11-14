import React from 'react';
import HomeScreen from './HomeScreen';
import BrowserScreen from './BrowserScreen';
import {NavigationContainer} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

export default function App(){
return(
  <NavigationContainer>
    <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'HomeScreen') {
              iconName = focused
                ? 'ios-information-circle'
                : 'ios-information-circle-outline';
            } else if (route.name === 'BrowserScreen') {
              iconName = focused ? 'add-circle-outline' : 'add-circle';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        })}
        >
        <Tab.Screen name="HomeScreen" component={HomeScreen} />
        <Tab.Screen name="BrowserScreen" component={BrowserScreen} />
    </Tab.Navigator>
  </NavigationContainer>
)
}

