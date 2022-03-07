import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { View, Text, ScrollView } from 'react-native'
import MovieBanner from '../components/MovieBanner';

import { COLORS, FONTS, SIZES, icons } from '../constants';
import Row from '../components/Row';

const HomeScreen = () => {

    return (
        <ScrollView style={{ flex: 1, backgroundColor: COLORS.black }} showsVerticalScrollIndicator={false}
            contentContainerStyle={{ paddingBottom: SIZES.padding2 }}
        >
            <StatusBar style='light' translucent={true} backgroundColor={COLORS.black} />
            <MovieBanner />
            <Row title={'Crime Movies'} image={'https://kbimages1-a.akamaihd.net/30a5afe6-e60f-4209-a415-a5016136f60a/353/569/90/False/pieces-of-her.jpg'} />
            <Row title={'Trending'} image={'https://kbimages1-a.akamaihd.net/30a5afe6-e60f-4209-a415-a5016136f60a/353/569/90/False/pieces-of-her.jpg'} />
        </ScrollView>
    )
}

export default HomeScreen