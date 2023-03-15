import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from './components/Login';
import Register from './components/Register';
import Dashboard from './components/Dashboard';
import TrackingInfo from './components/TrackingInfo';
import UserManagement from './components/UserManagement';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Dashboard" component={Dashboard} />
        <Stack.Screen name="TrackingInfo" component={TrackingInfo} />
        <Stack.Screen name="UserManagement" component={UserManagement} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
