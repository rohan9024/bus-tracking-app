import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Starter from './screens/Starter';
import Login from './screens/Login';
import Signup from './screens/Signup';
import StackNavigator from './StackNavigator';
import { AuthProvider } from "./hooks/useAuth"

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <AuthProvider>
        <StackNavigator />
      </AuthProvider>
    </NavigationContainer>
  );
}

