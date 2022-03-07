import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { ScrollView } from 'react-native'
import MovieBanner from '../components/MovieBanner';
import dummyData from '../constants/dummyData';

import { COLORS, SIZES } from '../constants';
import Row from '../components/Row';

const HomeScreen = () => {

    return (
        <ScrollView style={{ flex: 1, backgroundColor: COLORS.black }} showsVerticalScrollIndicator={false}
            contentContainerStyle={{ paddingBottom: SIZES.padding2 }}
        >
            <StatusBar style='light' translucent={true} backgroundColor={COLORS.black} />
            <MovieBanner />
            <Row title={'Crime Movies'} data={dummyData.crimeMovies} />
            <Row title={'Trending'} data={dummyData.trendingMovies} />
            <Row title={'Action Movies'} data={dummyData.actionMovies} />
        </ScrollView>
    )
}

export default HomeScreen