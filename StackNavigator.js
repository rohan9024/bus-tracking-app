import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useState, useMemo } from "react";
import { Text, View } from 'react-native';
import CollegeStation from './screens/CollegeStation';
import WorliDadar from './screens/WorliDadar';
import Home from "./screens/Home";
import LocationScreen from './screens/LocationScreen.js';
import Login from "./screens/Login";
import Role from './screens/Role';
import Role2 from './screens/Role2';
import Signup from './screens/Signup';
import Starter from './screens/Starter';
import DriverLogin from './screens/DriverLogin';
import UserLogin from './screens/UserLogin';
import DriverPanel from './screens/DriverPanel';
import { UserContext } from "./Contexts/UserContext.js"
import UserPanel from './screens/UserPanel';
import LiveLocation from './screens/LiveLocation';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
    const [DRIVER, SETDRIVER] = useState(null)
    const [USER, SETUSER] = useState(false)

    const providerValue = useMemo(() => ({ DRIVER, SETDRIVER, USER, SETUSER }))

    return (
        <UserContext.Provider value={providerValue}>
            <Stack.Navigator initialRouteName='Starter'>
                {USER && (
                    <>
                        <Stack.Screen name="UserPanel" component={UserPanel} options={{ headerShown: false }} />
                        <Stack.Screen name="WorliDadar" component={WorliDadar} options={{ headerShown: false }} />
                        <Stack.Screen name="CollegeStation" component={CollegeStation} options={{ headerShown: false }} />
                        <Stack.Screen name="LiveLocation" component={LiveLocation} options={{ headerShown: false }} />
                    </>
                )
                }
                {DRIVER && (
                    <>
                        <Stack.Screen name="DriverPanel" component={DriverPanel} options={{ headerShown: false }} />
                    </>
                )
                }
                {!USER && !DRIVER && (
                    <>
                        {/* <Stack.Screen name="Starter" component={Starter} options={{ headerShown: false }} /> */}
                        {/* <Stack.Screen name="Signup" component={Signup} options={{ headerShown: false }} /> */}
                        <Stack.Screen name="Role" component={Role} options={{ headerShown: false }} />
                        <Stack.Screen name="Role2" component={Role2} options={{ headerShown: false }} />
                        <Stack.Screen name="DriverLogin" component={DriverLogin} options={{ headerShown: false }} />
                        <Stack.Screen name="UserLogin" component={UserLogin} options={{ headerShown: false }} />
                    </>
                )
                }
            </Stack.Navigator>
        </UserContext.Provider>
    )
}

export default StackNavigator;