import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ComingSoonScreen from '../screens/ComingSoonScreen';
import HomeScreen from '../screens/HomeScreen';
import SearchScreen from '../screens/SearchScreen';
import { COLORS } from '../constants';

import { Foundation, MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';
import DownloadScreen from '../screens/DownloadScreen';

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: COLORS.white,
                tabBarInactiveTintColor: COLORS.gray,
                tabBarStyle: {
                    backgroundColor: COLORS.black,
                    borderTopColor: COLORS.black,
                    borderTopWidth: 0,
                },
            }}
        >
            <Tab.Screen name="Root" component={HomeScreen}
                options={{
                    tabBarIcon: ({ color }) => {
                        return (
                            <Foundation name="home" size={24} color={color} />
                        )
                    },
                    tabBarLabel: 'Home',
                    tabBarLabelStyle: {
                        marginBottom: 5
                    }
                }}
            />
            <Tab.Screen name="ComingSoon" component={ComingSoonScreen}
                options={{
                    tabBarIcon: ({ color }) => {
                        return (
                            <MaterialCommunityIcons name="play-box-multiple-outline" size={24} color={color} />
                        )
                    },
                    tabBarLabel: 'New and Popular',
                    tabBarLabelStyle: {
                        marginBottom: 5
                    }
                }}
            />
            <Tab.Screen name="Search" component={SearchScreen}
                options={{
                    tabBarIcon: ({ color }) => {
                        return (
                            <Ionicons name="search-outline" size={24} color={color} />
                        )
                    },
                    tabBarLabel: 'Search',
                    tabBarLabelStyle: {
                        marginBottom: 5
                    }
                }}
            />
            <Tab.Screen name="Downloads" component={DownloadScreen}
                options={{
                    tabBarIcon: ({ color }) => {
                        return (
                            <MaterialCommunityIcons name="download-circle-outline" size={24} color={color} />
                        )
                    },
                    tabBarLabel: 'Downloads',
                    tabBarLabelStyle: {
                        marginBottom: 5
                    }
                }}
            />
        </Tab.Navigator>
    )
}

export default BottomTabs;