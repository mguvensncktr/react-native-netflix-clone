import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from '../screens/HomeScreen';
import ModalDetail from '../components/ModalDetail';


const Stack = createNativeStackNavigator();


const Navigation = () => {
    return (
        <Stack.Navigator>
            <Stack.Group screenOptions={{ headerShown: false }} >
                <Stack.Screen name="Home" component={HomeScreen} />
            </Stack.Group>
            <Stack.Group
                screenOptions={{
                    presentation: 'modal',
                    headerShown: false
                }}
            >
                <Stack.Screen name="Modal" component={ModalDetail} />
            </Stack.Group>
        </Stack.Navigator>
    )
}

export default Navigation;