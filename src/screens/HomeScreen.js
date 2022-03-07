import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { View, Text } from 'react-native'
import Header from '../components/Header';

import { COLORS, FONTS, SIZES, icons } from '../constants';

const HomeScreen = () => {

    return (
        <View style={{ flex: 1, backgroundColor: COLORS.black }}>
            <StatusBar style='light' translucent={true} backgroundColor={COLORS.black} />
            <Header />
        </View>
    )
}

export default HomeScreen