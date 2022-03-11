import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from "react";
import { Text, View } from 'react-native';
import Home from "./screens/Home";
import Login from "./screens/Login";
import Role from './screens/Role';
import Role2 from './screens/Role2';
import Signup from './screens/Signup';
import Starter from './screens/Starter';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
    const user = true;
    return (
        <Stack.Navigator initialRouteName='Starter'>
            {user ? (
                <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
            )
                : (
                    <>
                        <Stack.Screen name="Starter" component={Starter} options={{ headerShown: false }} />
                        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
                        <Stack.Screen name="Signup" component={Signup} options={{ headerShown: false }} />
                        <Stack.Screen name="Role" component={Role} options={{ headerShown: false }} />
                        <Stack.Screen name="Role2" component={Role2} options={{ headerShown: false }} />
                    </>
                )
            }
        </Stack.Navigator>
    )
}

export default StackNavigator;