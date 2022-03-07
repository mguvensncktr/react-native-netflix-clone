import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { View, Text } from 'react-native'
import MovieBanner from '../components/MovieBanner';

import { COLORS, FONTS, SIZES, icons } from '../constants';

const HomeScreen = () => {

    return (
        <View style={{ flex: 1, backgroundColor: COLORS.black }}>
            <StatusBar style='light' translucent={true} backgroundColor={COLORS.black} />
            <MovieBanner />
            <Text style={{ color: COLORS.white, ...FONTS.h2, marginTop: SIZES.padding }}>Dolandırıcılık Filmleri</Text>
        </View>
    )
}

export default HomeScreen