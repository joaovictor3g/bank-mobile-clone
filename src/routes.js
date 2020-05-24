import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const AppStack = createStackNavigator();

import MainScreen from './pages/MainScreen';

export default function Routes() {
    return (
        <NavigationContainer>
            <AppStack.Navigator screenOptions={{ headerShown: false }}>
                <AppStack.Screen name="Main-Screen" component={MainScreen} />
            </AppStack.Navigator>
        </NavigationContainer>
    )
}
