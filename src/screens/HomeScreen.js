import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { View, Text, ScrollView, Button } from 'react-native'
import MovieBanner from '../components/MovieBanner';
import dummyData from '../constants/dummyData';
import Modal from "react-native-modal";

import { COLORS, SIZES } from '../constants';
import Row from '../components/Row';

const HomeScreen = () => {

    const [isModalVisible, setModalVisible] = React.useState(false);

    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };


    return (
        <ScrollView style={{ flex: 1, backgroundColor: COLORS.black }} showsVerticalScrollIndicator={false}
            contentContainerStyle={{ paddingBottom: SIZES.padding2 }}
        >
            <StatusBar style='light' translucent={true} backgroundColor={COLORS.black} />
            <MovieBanner />
            <Row title={'Crime Movies'} data={dummyData.crimeMovies} />
            <Row title={'Trending'} data={dummyData.trendingMovies} />
            <Row title={'Action Movies'} data={dummyData.actionMovies} />
            <Button title="Show modalsss" onPress={toggleModal} />

            <Modal isVisible={isModalVisible}
                onSwipeComplete={() => setModalVisible(false)}
                swipeDirection="down"
            >
                <View style={{ flex: 1 }}>
                    <Text>Hello!</Text>

                    <Button title="Hide modal" onPress={toggleModal} />
                </View>
            </Modal>
        </ScrollView>
    )
}

export default HomeScreen