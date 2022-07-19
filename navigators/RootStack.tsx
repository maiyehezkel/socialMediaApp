import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

//screens
import SignIn from './../screens/SignIn';
import SignUp from './../screens/SignUp';
import Welcome from './../screens/Welcome'; 

export type RootStackParamList = {
    SignIn: undefined;
    SignUp: undefined;
    Welcome: undefined;
  };

const Stack = createStackNavigator<RootStackParamList>();

const RootStack = () =>{
    return(
        <NavigationContainer>
            <Stack.Navigator>
            <Stack.Screen name="SignUp" component={SignUp} options={{headerShown: false}} />
            <Stack.Screen name="SignIn" component={SignIn} options={{headerShown: false}}/>

            <Stack.Screen name="Welcome" component={Welcome} options={{headerShown: false}}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}
export default RootStack;