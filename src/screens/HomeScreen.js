import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { ScrollView } from 'react-native'
import MovieBanner from '../components/MovieBanner';
import requests from '../utils/requests';

import { COLORS, SIZES } from '../constants';
import Row from '../components/Row';

const HomeScreen = () => {

    return (
        <ScrollView style={{ flex: 1, backgroundColor: COLORS.black }} showsVerticalScrollIndicator={false}
            contentContainerStyle={{ paddingBottom: SIZES.padding2 }}
        >
            <StatusBar style='light' translucent={true} backgroundColor={COLORS.black} />
            <MovieBanner />
            <Row title={'Top Rated'} fetchURL={requests.fetchTopRated} />
            <Row title={'Trending'} fetchURL={requests.fetchTrending} />
            <Row title={'Action Movies'} fetchURL={requests.fetchActionMovies} />
            <Row title={'Netflix Originals'} fetchURL={requests.fetchNetflixOriginals} />
            <Row title={'Comedy Movies'} fetchURL={requests.fetchComedyMovies} />
            <Row title={'Horror Movies'} fetchURL={requests.fetchHorrorMovies} />
            <Row title={'Romance Movies'} fetchURL={requests.fetchRomanceMovies} />
            <Row title={'Documantaries'} fetchURL={requests.fetchDocumentaries} />
        </ScrollView>
    )
}

export default HomeScreen