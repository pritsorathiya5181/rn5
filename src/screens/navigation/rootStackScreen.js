import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import SignInScreen from '../signInScreen';
import SignUpScreen from '../signUpScreen';
import SplashScreen from '../splashScreen';
import { createStackNavigator } from '@react-navigation/stack';

const RootStack = createStackNavigator();

const RootStackScreen = () => {
    return (
        <RootStack.Navigator headerMode='none'>
            <RootStack.Screen name="Spalsh" component={SplashScreen} />
            <RootStack.Screen name="SingIn" component={SignInScreen} />
            <RootStack.Screen name="SingUp" component={SignUpScreen} />
        </RootStack.Navigator>
    )
}

export default RootStackScreen;