import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const AppStack = createStackNavigator();

import MainScreen from './pages/MainScreen';
import Camera from './pages/Camera';

export default function Routes() {
    return (
        <NavigationContainer>
            <AppStack.Navigator screenOptions={{ headerShown: false }}>
                <AppStack.Screen name="Main-Screen" component={MainScreen} />
                <AppStack.Screen name="camera" component={Camera} />
            </AppStack.Navigator>
        </NavigationContainer>
    )
}
